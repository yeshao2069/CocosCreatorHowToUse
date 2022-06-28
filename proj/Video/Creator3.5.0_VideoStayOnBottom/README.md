## Cocos Creator How To Use

### 简介

基于 CocosCreator 3.5.0 版本创建的 **视频置于UI之下** 示例工程

### 效果预览
![image](../../../image/202203/2022030208.jpg)

### 相关链接
[Gitee](https://gitee.com/mirrors_cocos-creator/example-cases/tree/v2.4.3/assets/cases/02_ui/09_videoplayer) | [Github](https://github.com/cocos-creator/example-cases/tree/v2.4.3/assets/cases/02_ui/09_videoplayer)

### 说明
CocosCreator 3.0.0--3.3.2 版本，使用 stayOnBottom 功能是可以正常使用的，CocosCreator 3.4.x 版本，stayOnBottom 功能异常。

- 解决方案(临时)：在构建 web-mobile 后，手动修改 style.css，添加以下代码
```
position: absolute;
z-index: 1;
```