## Cocos Creator How To Use

### 简介

基于 CocosCreator 3.5.0 版本创建的 **自适应最小角度旋转** 工程

### 效果预览
![image](../../../gif/202203/2022032202.gif)

### 实现思路
1. 假如我们已知一个旋转后的角度angle, 取值范围可能是(-180, 180)，我们通过获取需要旋转的角度diffAngle，旋转角度
2. 假如当前的角度currentAngle为-100，需要旋转后的角度r为-160，我们通过diffAngle = r - currentAngle, 可以获得diffAngle为-60,则逆时针从当前的角度(-100)逆时针旋转60度 -> -160