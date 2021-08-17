## CSRF
- CSRF通常发生在第三方域名
- CSRF攻击者不能获取到Cookie信息，只是使用

防护策略：
- 同源检测
- Samesite Cookie
- token

### cookie
cookie用于服务器标识客户端的身份，通过set-Cookie来设置。  
同时它也被用于广告追踪（第三方cookie）。  
通过设置cookie上的sameSite属性可以对第三方cookie进行限制，有效的杜绝csrf攻击和广告追踪。

### webpack
- 持久化缓存
- 根据内容生成chunkhash，相对以往不会因为空格的改动使得缓存失效
- moduleId不自增，不会因为添加或删除新的module导致缓存失效
- prepack
- 更好的treeshaking


Webpack 的运行流程是一个串行的过程,从启动到结束会依次执行以下流程 :

初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。
开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。
确定入口：根据配置中的 entry 找出所有的入口文件。
编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。
输出资源：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这步是可以修改输出内容的最后机会。
输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统。

在以上过程中,Webpack 会在特定的时间点广播出特定的事件,插件在监听到感兴趣的事件后会执行特定的逻辑,并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。


### title3-01

## small title
content...



cookie
json.parse
promise all return
catch z执行顺序
echarts 事件


协作

