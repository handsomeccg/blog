
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

### title3-01

## small title
content...
