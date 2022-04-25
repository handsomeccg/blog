## call实现

```javascript
Function.prototype.myCall = function(context) {
    const fn = Symbol('fn')
    context[fn] = this
    const args = [...arguments].slice(1)
    const result = context[fn](...args)
    delete context[fn]
    return result
}
```

## apply实现

```javascript
Function.prototype.myApply = function(context) {
    const fn = Symbol('fn')
    context[fn] = this
    const args = arguments[1]
    let result
    if (Array.isArray(args)) {
        result = context[fn](...args)
    } else {
        result = context[fn]()
    }
    delete context[fn]
    return result
}
```

## bind实现

```javascript
Function.prototype.myBind = function(context) {
    const args1 = [...arguments].slice(1)
    const that = this
    return function () {
        return that.apply(context, args1.concat([...arguments]))
    }
}
```

## 防抖实现

```javascript
let time = null
function debounce (fn, t) {
    return function() {
        clearTimeout(time)
        time = setTimeout(() => {
          fn.apply(this, arguments)
        }, t)   
    }
}
```

## 节流实现

```javascript
let tag = false
function throttle(fn, t) {
    return function() {
        if (tag) { return }
        tag = true
        setTimeout(() => {
            fn.apply(this, arguments)
            tag = false
        }, t)   
    }
}
```

## new实现
```javascript
function myNew(fn, args) {
    const obj = Object.create(fn.prototype)
    const result = fn.apply(obj, args)
    return Object.prototype.toString().call(result) === '[object Object]' ? result : obj
}
```

## 深拷贝


```javascript
function deepClone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        const cloneTarget = Array.isArray(target) ? [] : {}
        if (map.has(target)) {
            return map.get(target)
        } else {
            map.set(target, cloneTarget)
        }
        Object.keys(target).forEach(key => {
            cloneTarget[key] = deepClone(target[key], map)
        })
        return cloneTarget
    } else {
        return target
    }
}
```

```javascript
function tree2List(tree, list, pId) {
    list.push({id: tree.id, parentId: pId})
    if (tree.children) {
        for (let node of tree.children) {
            tree2List(node, list, tree.id)
        }
    }
    return list
}

function list2Tree(list) {
    const map = new Map()
    for (let node of list) {
        map.set(node.id, node)
    }
    for (let node of list) {
        const parentNode = map.get(node.parent)
        if (parentNode) {
            parentNode.children = parentNode.children ? [...parentNode.children, node] : [node]
        }
    }
    return map.get(0)
}
```

## 数组去重

```javascript
function deRepeat(arr) {
    const set = new Set(arr)
    return [...set]
}
```

## 函数柯里化

柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术

```javascript
function sub_curry(fn) {
    const args = [...arguments].slice(1)
    return function () {
        return fn.apply(this, args.concat([...arguments]))
    }
}

function curry(fn, length2) {
    const length = length2 || fn.length
    return function () {
        if (arguments.length < length) {
            const args = [fn].concat([...arguments])
            return curry(sub_curry(fn, args), length-arguments.length)
        } else {
            return fn.apply(this, [...arguments])
        }
    }
}
```

##事件

```javascript
class EventBuss {
    constructor() {
        this.cache = {}
    }
    
    on(name, fn) {
        this.cache[name] ? this.cache[name].push(fn) : this.cache[name] = [fn]
    }
    
    off(name, fn) {
        if (this.cache[name]) {
            const index = this.cache[name].findIndex(k=> k === fn)
            if (index > -1) {
                this.cache[name].splice(index,1)
            }
        }
    }
    
    emit(name, once = false, ...args) {
        if (this.cache[name]) {
            for (let fn of this.cache[name]) {
                fn(...args)
            }
        }
        if (once) {
            
        }
    }
}
```

