
### 判断是否是对象
1. 日常实现
```
function isPlainObject (obj) {
    return typeof obj === 'object' && obj !== null
}
```
2. vue中的实现 
```
function isPlainObject (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
```

### 模块化

AMD与CMD<br/>
AMD：提前引入包
CMD: 执行时才引入包<br/>

CommonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用。<br/>
ES6的模块不是对象，import命令会被JavaScript引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载。<br/>
CommonJs是运行时加载，即在输入时先加载整个模块，生成一个对象，然后再从这个对象上读取方法。

## css选择器
!important > 行内样式 > ID选择器 > 类、伪类、属性 > 元素、伪元素 > 继承 > 通配符

### WeakMap
WeakMap保持对键名引用对象的弱引用，当设置key为null时，垃圾回收机制执行时，该引用对象就会被回收掉。<br/>
也就是说，一旦不再需要，WekMap里面的键名对象和所对应的键值对就会自动消失，不需要手动删除引用。<br/>
正是因为这样的特性，WeakMap内部有多少成员，取决于垃圾回收机制有没有运行，而垃圾回收机制是不可预测的，因此ES6规定WeakMap不可遍历。
