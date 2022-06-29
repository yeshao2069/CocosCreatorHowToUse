## Cocos Creator How To Use

### 简介

基于 CocosCreator 3.0.0 版本创建的 **物体是否在摄像机范围内** 工程

### 效果预览
![image](../../gif/202203/2022030551.gif)
![image](../../gif/202203/2022030552.gif)

### 实现思路
- 使用 view.getViewportRect 接口，获取当前视窗的大小
- 使用 Vec3.normalize、Vec3.dot、Camera.forward 等接口，计算物体是否在摄像机前方