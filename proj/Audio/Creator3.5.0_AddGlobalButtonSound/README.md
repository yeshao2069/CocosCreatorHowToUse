## Cocos Creator How To Use

### 简介

基于 CocosCreator 3.5.0 版本创建的 **添加全局按钮音效** 工程

### 实现思路
1. 方案1：编写一个 MyButton 类继承 Button 类，然后重写 MyButton 类中的触摸监听 touchEnd 事件。然后所有使用 Button 组件的地方改为添加 MyButton 类
2. 方案2：直接在用户的脚本中，去修改 Button 组件的 prototype
3. 方案3：把按钮加上音效后制作成预制体 Prefab，然后在需要的地方加载预制体或者拖动预制体