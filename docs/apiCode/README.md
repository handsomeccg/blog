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
function deepClone(obj) {
    // 判断是否为对象，否则直接return
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    // 对象浅拷贝
    const newObj = Array.isArray(obj) ? [...obj] : {...obj}
    // 递归深拷贝
    Reflect.ownKeys(obj).forEach((item) => {
        newObj[item] = deepClone(obj[item])
    })
    return newObj
}
```

## 数组去重

```javascript
function deRepeat(arr) {
    const set = new Set(arr)
    return [...set]
}
```

