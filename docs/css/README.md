## BFC
BFC里面的布局不对外面产生影响
作用：
1. 清除外部浮动
2. 撑开浮动塌陷（浮动元素的高度会被计算进来）
3. 清除外边距重叠

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

### transform 和 普通的left区别

使用left属性设置动画会一直触发浏览器重绘，
而css3的transform会采用GPU硬件加速，不触发重绘，性能更好。

transform创建了一个新的复合图层。
video、canvas也会创建独立的复合图层

opacity/transform/filter 这三个属性会默认开启gpu硬件加速（新建一个图层，样式计算交给gpu）
gpu渲染会更流畅，但会增加内存占用，需要慎重使用。

### css选择器权重

!important > 内联样式 > id选择器 > 类选择器、属性选择器 > 通配符 > 继承样式


## 回流与重绘
- 回流一定会触发重绘，重绘不一定触发回流
- 获取offsetTop之类的行为会触发重绘，取值时可以将值缓存起来，避免重复获取造成性能问题。 <br/>
- 避免逐条改变样式，使用类名来合并样式。
- 避免频繁更改dom元素，考虑使用documentFragment，一次性更新到dom上。



只有 transform opacity filter 可以触发GPU硬件加速

## small title
content...
