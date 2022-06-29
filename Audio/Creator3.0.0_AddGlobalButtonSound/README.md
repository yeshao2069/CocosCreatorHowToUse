## Cocos Creator How To Use
#### Write by yeshao2069.
#### Cocos Creator How To Use is to simplify the use of some functions that users understand the API.
#### Cocos Creator V3.0.0+
&nbsp;

## 添加全局按钮的音效  AddGlobalButtonSound
#### 添加全局按钮的音效实现方式有很多种，本示例采用 方案二

#### 方案1： 编写一个 MyButton类 继承Button类，然后 重写 MyButton类中的触摸监听 touchEnd事件。然后所有使用Button组件的地方改为添加MyButton类。
```ts
import { _decorator, Component, Node, AudioClip, Button, EventTouch, EventHandler } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('MyButton')
export default class MyButton extends Button {
    @property(AudioClip)
    audio: AudioClip | null = null;

    _onTouchEnded = (event: EventTouch) => {
        this.audio!.play();

        let self = (event.target as Node)!.getComponent(Button)!;
        if (!self.interactable || !self.enabledInHierarchy) return;

        if ((self as any)._pressed) {
            EventHandler.emitEvents(self.clickEvents, event);
            this.node.emit('click', this);
        }
        (self as any)._pressed = false;
        (self as any)._updateState();
        if (event) {
            event.propagationStopped = true;
        }
    }
}
```

#### 方案2 直接在用户的脚本中，去修改Button组件的prototype。
```ts
import { _decorator, Component, Node, AudioClip, Button, EventTouch, EventHandler } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('AddGlobalButtonSound')
export default class AddGlobalButtonSound extends Component {
    @property(AudioClip)
    audio: AudioClip | null = null;

    onLoad () {

        // @ts-ignore
        Button.prototype._onTouchEnded = (event: EventTouch) => {
            this.audio!.play();

            let self = (event.target as Node)!.getComponent(Button)!;
            if (!self.interactable || !self.enabledInHierarchy) return;

            if ((self as any)._pressed) {
                EventHandler.emitEvents(self.clickEvents, event);
                this.node.emit('click', this);
            }
            (self as any)._pressed = false;
            (self as any)._updateState();
            if (event) {
                event.propagationStopped = true;
            }
        }
    }
}
```

#### 方案3 把按钮加上音效后制作成预制体Prefab，然后在需要的地方加载预制体或者拖动预制体