## CSRF
- CSRF通常发生在第三方域名
- CSRF攻击者不能获取到Cookie信息，只是使用

防护策略：
- 同源检测
- Samesite Cookie
- 使用token
- 使用复杂请求，触发cors预检
- 重要请求用post方法

### cookie
- cookie用于服务器标识客户端的身份，通过set-Cookie来设置。  
- 同时它也被用于广告追踪（第三方cookie） 网站嵌入第三方广告平台的代码，用户每次访问页面会将记录连带cookie传到第三方广告平台。  
- 通过设置cookie上的sameSite属性可以对第三方cookie进行限制，有效的杜绝csrf攻击和广告追踪。

### session
- session由服务端维护，key-value方式存储，key一般生成后通过setCookie存储在客户端cookie中。
- 用户较多时，可能造成服务器压力
- 多服务器下session的共享与同步问题

### token
- 服务端无状态化，可扩展性好
- 服务端不用存储token数据，用解析token的计算时间换取存储session的存储空间，在一定程度上减少查询数据库，减小服务器压力。
- token相较于cookie不用考虑同源；也可以避免csrf攻击
- 移动端对cookie的支持不佳，使用token更好
- token本身包含了认证信息，泄露后任何人可以获得该token的权限，为了减少盗用，token的有效期应设置得比较短，重要操作需对用户做二次认证。

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

