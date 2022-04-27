## Vue key
content...

## spa，ssr， mpa
- spa相比多页面应用切换页面更快，不用重新获取html
- 可以实现转场动画
- mpa是多个完整页面构成，spa是一个外壳页面和多个页面片段构成

## vue3相对于vue2的优化
- ts支持
- 响应式，vue3使用proxy，可以更全面地监听对象与数组
- vue3的静态提升，将不会更新的节点提升，避免重复创建，减少垃圾回收的频率
- vue3会将可能会更新的属性标记出来，从而避免全量检查
- 优化源代码，支持更好地tree-shaking，减小一半的打包体积至10k

## slot插槽

插槽作为子组件为父组件提供的预留位置。 <br/>
具名插槽：可能需要多个插槽，用```<slot name="te"/> <template v-slot:te/>```  <br/>
作用域插槽：父组件可以通过插槽访问子组件的数据 ```<slot name="te" :user="jack"/> <template v-slot:te="{user}">{{user}}</>```

### Vue keep-alive
- keep-alive包裹的组件失活时会被缓存下来，主要用于保留组件状态。  
- 当组件在keep-alive内被切换，会执行activated和deactivated这两个生命周期钩子函数。
- 使用include和exclude props进行有条件的缓存，使用max设置最多可以缓存多少组件实例，超过之后最久没有被访问的会被销毁。

### nextTick

被监听的数据发生变化后，会通知vue去做dom更新，dom更新这一步骤是异步执行的。
如果同一个watcher被多次触发，只会被推入到操作队列中一次，以避免不必要的计算和dom改动

调用优先级 promise -> MutationObserve -> setImmediate -> setTimeout

### 自定义指令

定义： vue中，代码复用和抽象的形式主要是组件，有的情况下需要直接操作dom元素，就会用到自定义指令

- bind: 首次绑定时调用 
- inserted: 插入父节点时调用 
- update: 当前元素vnode更新时调用
- componentUpdate: 组件所在vnode及其子vnode全部更新后调用
- unbind：解绑时调用

### mutation为什么同步

这样每个mutation执行完成后都可以对应到一个新状态 ，devtool就可以打个snapchat追踪状态
将不受控的代码放到action，mutation只做状态改变

## small title
content...
