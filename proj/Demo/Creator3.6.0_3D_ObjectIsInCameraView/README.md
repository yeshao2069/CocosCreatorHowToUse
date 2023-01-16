### Introduction

project created based on CocosCreator version 3.6.0 **物体是否在摄像机范围内** 

### Preview
![image](../../../gif/202203/2022030551.gif)
![image](../../../gif/202203/2022030552.gif)

### 实现思路
- 使用view.getViewportRect接口，获取当前视窗的大小
- 使用Vec3.normalize、Vec3.dot、Camera.forward等接口，计算物体是否在摄像机前方