## Promise
定义：promise表示一个异步操作，promise的状态代表异步操作的状态
特点：
- 对象的状态不受外界影响：Promise有三种状态，pending、fulfilled和rejected。
- 状态一旦改变，就不会再变。

- Promise rejected()的错误并没有抛到执行同步代码的线程里，而是通过浏览器异步消息队列来处理的。因此，try/catch并不能捕获该错误。

then方法：
- Promise.prototype.then()方法返回一个新的promise实例：
如果没有提供resolve处理程序，则返回Promise.resolve()包装上一个promise解决之后的值（没有就是undefined） <br/>
如果resolve处理程序有显式的返回值，则返回 包装这个值的Promise.resolve() <br/>
  
- 抛出异常会返回rejected的promise。返回一个错误对象不会触发reject方法，而会把错误对象包装在resolved的promise中。<br/>
Promise.rejected()调用then()时不传处理程序则原样向后传。
  
- promise.finally()被设计为一个状态无关的方法，所以在大多数情况下它将表现为父promise的传递


### Map
Map和Object: 
 - map的键可以是任意属性，object只能是string和symbol 
 - map可以进行迭代；
 - map在频繁增删键值对的场景下表现更好。

### title3-01

## small title
content...
