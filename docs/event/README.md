## DOM事件流

    DOM2 Events规范规定事件流分为3个阶段：事件捕获、到达目标和事件冒泡。事件捕获最先发生，为提前拦截事件提供了可能。
    大多数支持DOM事件流的浏览器实现了一个小小的拓展。虽然DOM2 Events规范明确捕获阶段不命中事件目标，但现代浏览器都会在捕获阶段在事件目标上触发事件。
    最终结果是在事件目标上有两个机会来处理事件。

### DOM0事件处理程序

```javascript
let btn  = document.getElementById('myBtn')
btn.onclick = () => {
    console.log('this.id')  // 'myBtn'
}
```
像这样使用DOM0 方式为事件处理程序赋值时，所赋函数被视为元素的方法。因此，事件处理程序会在元素的作用域中运行，即this等于元素。

通过将事件处理程序的值设置为null，可以移除通过DOM0方式添加的事件处理程序

### DOM2事件处理程序

```javascript
let btn  = document.getElementById('myBtn')
btn.addEventListener('click', ()=> {
    console.log('this.id')  // 'myBtn'
}, false)
```
使用DOM2事件的主要优势是可以为同一个事件添加多个事件处理程序。
多个事件处理程序以添加顺序来触发

### DOM事件对象

在事件处理程序内部，this对象始终等于currentTarget的值，它是注册事件处理程序的元素，
而target只包含事件的实际目标。

preventDefault()方法用于阻止特定事件的默认动作。比如，链接的默认行为就是在被单击时导航到href属性所指定的URL。
stopPropagation()方法用于立即阻止事件流在DOM结构中传播，取消后续的事件捕获或冒泡。
eventPhase 属性可用于确定事件流当前所处的阶段。 1捕获 2目标 3冒泡


### 关于事件的内存与性能

页面中的事件处理程序的数量与页面整体性能直接相关。
每个函数都是对象，都占用内存，对象越多，性能越差

#### 事件委托

例如，click事件冒泡到document。这意味着可以为整个页面指定一个onclick事件处理程序，而不用为每个可点击元素分别指定事件处理程序。

#### 删除事件处理程序
应及时删除不用的事件处理程序，很多web应用性能不佳都是由于无用的事件处理程序常驻内存导致的。

### 模拟事件 /  自定义事件
content...
