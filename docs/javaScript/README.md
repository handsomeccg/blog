
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

## 闭包

定义： 闭包指函数可以访问初始化时能够访问到的变量，它会保留对外部变量的引用

优点： 私有变量
缺点： 容易造成 没有用到的变量未能及时回收，占用内存
应用： 节流防抖函数，bind方法，函数柯里化，回调函数等

### 模块化

AMD与CMD<br/>
AMD：提前引入包
CMD: 执行时才引入包<br/>

CommonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用。<br/>
ES6的模块不是对象，import命令会被JavaScript引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载。<br/>
CommonJs是运行时加载，即在输入时先加载整个模块，生成一个对象，然后再从这个对象上读取方法。 

CommonJS的一个模块，就是一个脚本文件。require 命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象。  
以后即使再次执行require命令，也不会再次执行该模块，而是到缓存中取值。

#### 模块循环引用处理  
- CommonJs：  
    为了预防产生无限循环，会导出一个未完成的拷贝（如a引用b，b也引用了a，那么b引用的是a引用b之前的那部分拷贝）；只输出已经执行的部分，还未执行的部分不会输出。
  
- EsModule:  
    esModule不会关心是否发生了循环引用，只是生成一个指向被加载模块的引用。 若操作不当，则会发生循环引用，可通过webpack检查循环引用的plugin来预防无限循环引用的发生。


#### CommonJs的require

当Node遇到require(X)时，按下面的顺序处理：
1. 如果X是内置模块( 如require('http') )
    1. 返回该模块
    2. 不再继续执行
    
2. 如果X以 './' 或 '/' 或 '../' 开头
    1. 以引用X的目录，确定X的绝对路径。
    2. 将X当成文件，依次查找以下文件，只要其中有一个存在，就返回该文件，不再继续执行。
        - X
        - X.js
        - X.json
        - X.node
    3. 将X当成目录，依次查找下面的文件，只要其中有一个存在，就返回该文件，不再继续执行。
    - X/package.json
    - X/index.js
    - X/index.json
    - X/index.node
    
3. 如果X不带路径
    1. 根据引用X的目录，确定X可能的安装目录。
    2. 依次在每个目录中，将X当成文件名或目录名加载。
    
4. 抛出 'not found'
    



## css选择器
!important > 行内样式 > ID选择器 > 类、伪类、属性 > 元素、伪元素 > 继承 > 通配符

### WeakMap
WeakMap保持对键名引用对象的弱引用，当设置key为null时，垃圾回收机制执行时，该引用对象就会被回收掉。<br/>
也就是说，一旦不再需要，WekMap里面的键名对象和所对应的键值对就会自动消失，不需要手动删除引用。<br/>
正是因为这样的特性，WeakMap内部有多少成员，取决于垃圾回收机制有没有运行，而垃圾回收机制是不可预测的，因此ES6规定WeakMap不可遍历。


