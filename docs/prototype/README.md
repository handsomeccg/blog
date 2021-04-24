## 定义
Javascript中的对象有一个内置属性，是一个对象的引用，被称为它的原型对象。<br/>
原型对象也是对象，也会有它对应的原型对象，这就构成了一条原型链。<br/>

我们对一个对象进行取值操作（get），第一步是检查对象本身是否有这个属性，如果没有，会从它的原型对象上继续寻找，直到找到完整条原型链(Object.prototype.__proto__ === null)，则返回undefined

## 继承

js的继承主要是依靠原型链来实现的。它的基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。
1.借用构造函数继承：<br/>
子类借用父类的构造函数来生成实例。<br/>
特点：向父类传递参数，继承父类的属性与方法。<br/>
缺点：无法继承父类原型上的属性与方法<br/>


2.原型链继承：<br/>
将父类实例赋给子类原型
缺点：无法继承父类实例上的方法属性

3.组合继承：<br/>
借用构造函数继承 + 原型链继承<br/>
优点：结合以上两种继承的方式<br/>
缺点：调用了两次父类构造函数（可能会产生副作用2）
``` js
function Super(name) {
    this.name = name
    this.age = 23
}
function Sub(name) {
    Super.call(this, name)
}
Sub.prototype = new Super () // 可能会产生副作用（如写日志，修改状态，给this添加属性等）
Sub.prototype.constructor = Sub
const sub = new Sub('ccg Eric')
console.log(sub.name)
console.log(sub.age)
```

4.寄生组合继承

``` js
function Super(name) {
    this.name = name
    this.age = 23
}
function Sub(name) {
    Super.call(this, name)
}
Sub.prototype = Object.create(Sub.prototype)
Sub.prototype.constructor = Sub
const sub = new Sub('ccg Eric')
console.log(sub.name)
console.log(sub.age)
```

### title3-01

## small title
content...
