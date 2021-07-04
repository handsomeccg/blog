
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
