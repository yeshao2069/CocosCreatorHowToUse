### 简介

基于 CocosCreator 3.4.2 版本创建的 **物体是否在摄像机范围内** 工程

### 效果预览
![image](../../gif/202203/2022030551.gif)
![image](../../gif/202203/2022030552.gif)

### 实现思路
- 使用view.getViewportRect接口，获取当前视窗的大小
- 使用Vec3.normalize、Vec3.dot、Camera.forward等接口，计算物体是否在摄像机前方