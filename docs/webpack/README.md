## webpack5

1. 通过持久化硬盘缓存能力来提升构建性能。
2. 通过更好的tree-shaking能力（识别深层嵌套）和代码生产逻辑来优化产物的大小。
3. 内置prepack部分能力。在对于任何输入，函数都能得到一个固定输出时，prepack就能在编译时，将结果帮我们计算出来。
  既能减小包体积，又能加快运行速度。
4. 更好的长期缓存支持，chunkid不按顺序生成；如果只修改了注释或变量名，不会导致contentHash变化。
5. assetModules代替url-loader.

个人做了什么优化：(可以从提高打包速度和减小打包体积两个方向来说)
- 提升打包速度
  1. loader使用include缩小范围。
  2. cache-loader缓存性能开销大的loader，hard-source-webpack-plugin为模块提供一些中间缓存。webpack5则自带缓存能力，能够缓存打包后的module、chunk，缓存放在node_modules/.cache
  3. thread-loader，loader的并行处理，放置在这个loader之后的loader会在一个单独的work池中运行，每个worker是一个单独的nodejs进程
  4. TerserPlugin的配置开启并行压缩。
  5. 将url-loader替换为assetModules，减少包的引入，提高效率。
- 减小打包体积 
  1. 将commonJs改为esModule，从而更好地tree-shaking。
  2. MiniCssExtractPlugin,提取css并压缩。
  3. TerserPlugin,并行压缩js文件。
  4. splitChunks：提取公共代码，移除重复的依赖模块，减小打包体积。
  
Webpack 的运行流程是一个串行的过程,从启动到结束会依次执行以下流程 :

初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。
开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。
确定入口：根据配置中的 entry 找出所有的入口文件。
编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
输出资源：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这步是可以修改输出内容的最后机会。
输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统。

在以上过程中,Webpack 会在特定的时间点广播出特定的事件,插件在监听到感兴趣的事件后会执行特定的逻辑,并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

依赖分析，以此创建相应的module，然后对module应用相应的loader做转换。
根据入口引用和动态引入的关系将module转换为chunk，构建时根据optimize配置对chunk做一些改变，最后以bundle的形式输出。

#### HMR模块热更新
web-dev-server与客户端建立了websocket连接，代码发生改变后，server通知客户端重新拉取。
热更新原理：
1. webpack-dev-middleware调用webpack的api对文件系统watch（轮询的方式）
2. 有文件改动后，webpack重新打包构建，将内容存在内存中
3. webpack-dev-server通过websocket长链接将编译打包后的新模块hash值发送到浏览器端
4. 客户端接收到type为hash的信息后会将hash暂存起来，当接收到type为ok的消息后对应用执行reload操作（通过配置判断调用热更新或者直接刷新浏览器）
5. webpack/hot/dev-server 监听 浏览器端发送的webpackHotUpdate消息。
6. 接收到后调用hmr runtime中的check方法，其中一个方法向服务端拉取是否有更新的文件，另一个方法请求更新的新模块代码（根据第4步拿到的hash值去请求）
7. hmr runtime 依据返回的内容做热更新处理或刷新浏览器
   - 找出过期的模块和依赖
   - 删除过期的模块依赖
   - 将新的模块添加到modules中，等下次拉取模块，就获取到新的代码了（vue会触发vue组件的render方法，重新render组件）
   - 中间如果发生错误，则回退到刷新浏览器
8. 调用HMR的accept方法，添加模块更新后的处理函数，将返回值插入到页面中

### vite
- vite以esModule的形式，跳过打包步骤，在浏览器请求相应资源时再进行转换。
- vite将代码分为依赖和源码两块，依赖一般为静态js，如比较大的组件库依赖。vite用esBuild预构建依赖
- 源码一般不是直接的js文件，如vue文件，jsx等，需要转换且时常会被编辑，同时不是所有的代码需要被加载（页面懒加载）
- vue以esModule的形式提供源码，实际上是让浏览器接管了打包的工作，vite需要在浏览器请求源码时转换源码并且按需提供源码
- vite的HMR更快，不会因为应用规模的增长而显著下降
- 利用http头来加速整个页面的重新加载，对依赖部分使用强制缓存，源码部分使用协商缓存
- 生产打包还是用webpack为佳，treeshaking，懒加载，chunk分割（以获得更好的缓存）

### title3-01

## small title
content...
