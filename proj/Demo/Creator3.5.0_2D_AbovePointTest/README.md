## Cocos Creator How To Use

### 简介

基于 CocosCreator 3.5.0 版本创建的 **旋转后矩形是否包含点** 工程

### 效果预览
![image](../../../image/202203/2022030541.png)

### 实现思路
1. 判断一个矩形Rect是否包含一个点Point，常规的方法是根据矩形的边界值去判断点Point的(x,y)坐标是否在矩形内。也可以使用 引擎内置的Rect.contains接口来判断
2. 但是，如果矩形旋转了，那么边界值判断就不正确了。所以思路是：将点逆时针旋转，然后根据边界值去判断即可。可以理解为，点Point1在旋转后的Rect1中，相当于Point在未旋转的Rect中。这样子简化为，我们只需要计算出点Point1旋转前的坐标Point即可，那么点Point旋转N角度后变成点Point1，那么我们将Point1旋转-N角度得到Point。