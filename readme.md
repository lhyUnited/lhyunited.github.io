# lhyunited.github.io

## 介绍
**环境介绍**

项目主页采用了vue.js + canvas + sass进行构建，在手机端和pc端有不同的表现

### pc端
采用canvas进行绘制，黑色矩形会跟随鼠标一起移动，我们假设鼠标的`event`事件为`e`，矩形的宽高分别就是`e.clientX`, `e.clientY`，也就是鼠标距离视窗左上角的距离。当黑色矩形穿过`h1`title标题时，文字就透过黑色显示了出来。

我们使用`getBoundingClientRect()`来获取首页`h1`标题的宽高以及方位，并将之赋值为`titleConfig`. 当鼠标位置与标题的位置在一定误差范围内时，这时候清除`canvas`并将其style设置成`display: none`，具体代码如下：

```js
if ((e.clientX < titleConfig.x + 25 && e.clientX > titleConfig.x - 25) &&
(e.clientY < titleConfig.y + 25 && e.clientY > titleConfig.y - 25)) {
// do something
}
```

### 手机端
手机端我粗暴的将`canvas`进行了隐藏，直接不显示。

## 开始

### 准备
你需要有：
1. 一台现代浏览器，如`chrome`, `firefox`, `edge`...
2. 基于ruby的sass工具，安装请移步：[https://www.sass.hk/install/](https://www.sass.hk/install/)

有关sass我多说一句，你可以进入根目录，直接对整个目录进行watch，命令为：
```shell
sass --watch ./ --style compressed --sourcemap=none
```

### 开发
**本项目不基于node.js**，也就是说你可以直接在浏览器打开本地文件，或者使用vscode中的[live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)插件进行访问
