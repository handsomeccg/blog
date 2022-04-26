## BFC
BFC里面的布局不对外面产生影响
作用：
1.清除外部浮动
2.撑开浮动塌陷（浮动元素的高度会被计算进来）
2.清除外边距重叠

如何创建BFC：
- 根元素（html）
- 浮动元素
- 行内块元素
- 表格单元格
- overflow不为visible
- flex布局
- display: flow-root

### 盒模型
标准盒模型： width + padding + borderWidth  <br/>
IE盒模型：  width (内容区根据计算获得具体大小)  <br/>

### css选择器权重

!important > 内联样式 > id选择器 > 类选择器、属性选择器 > 通配符 > 继承样式


## 回流与重绘
获取offsetTop之类的行为会触发重绘，取值时可以将值缓存起来，避免重复获取造成性能问题。 <br/>
避免逐条改变样式，使用类名来合并样式

只有 transform opacity filter 可以触发GPU硬件加速

## small title
content...
