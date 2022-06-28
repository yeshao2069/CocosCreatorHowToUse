## Cocos Creator How To Use

### 简介

基于 CocosCreator 3.5.0 版本创建的 **圆形进度条** 工程

### 效果预览
![image](../../../gif/202203/2022030563.gif)

### 实现思路
1. 在progressBar组件下，挂载圆形进度条，然后通过设置进度条的progress控制进度
2. 使用Animation动画的方式控制进度
3. 在Node节点下，挂载圆形进度条，然后通过Sprite的fillRange控制进度