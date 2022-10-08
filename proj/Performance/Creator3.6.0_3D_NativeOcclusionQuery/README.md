### 简介

基于 CocosCreator 3.6.0 版本创建的 **遮挡查询剔除(原生平台)** 工程

### 效果预览
![image](../../../gif/202205/2022051701.gif)

### 相关链接
[Github](https://github.com/cocos/cocos-example-projects/tree/v3.4/occlusion-query)

### 原理
遮挡查询剔除 默认关闭，如果开启，则 GFX 后端会通过图形 API 进行遮挡查询，若物体被遮挡，则只使用简化的包围盒及材质来渲染该物体，以提升性能。

### 注意
GLES 2.0 不支持遮挡查询剔除，某些 GLES 3.0 设备如果没有 GL_EXT_occlusion_query_boolean 扩展也不支持。

### 建议
- 如果场景中大部分物体都可见，建议不要开启**遮挡查询剔除**。

- 不同设备可能表现略有差异，可通过性能测试对比后，决定是否开启相应的剔除功能。