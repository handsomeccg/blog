## Vue key
content...

### Vue keep-alive
- keep-alive包裹的组件失活时会被缓存下来，主要用于保留组件状态。  
- 当组件在keep-alive内被切换，会执行activated和deactivated这两个生命周期钩子函数。
- 使用include和exclude props进行有条件的缓存，使用max设置最多可以缓存多少组件实例，超过之后最久没有被访问的会被销毁。

### nextTick

被监听的数据发生变化后，会通知vue去做dom更新，dom更新这一步骤是异步执行的。
如果同一个watcher被多次触发，只会被推入到操作队列中一次，以避免不必要的计算和dom改动

nextTick使用优先级 promise -> MutationObserve -> setImmediate -> setTimeout

### 自定义指令

定义： vue中，代码复用和抽象的形式主要是组件，有的情况下需要直接操作dom元素，就会用到自定义指令

- bind: 首次绑定时调用 
- inserted: 插入父节点时调用 
- update: 当前元素vnode更新时调用
- componentUpdate: 组件所在vnode及其子vnode全部更新后调用
- unbind：解绑时调用

## small title
content...
