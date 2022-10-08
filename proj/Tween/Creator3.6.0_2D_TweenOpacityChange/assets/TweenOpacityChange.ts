
import { _decorator, Component, Node, tween, UITransform, Sprite, Color, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TweenOpacityChange')
export class TweenOpacityChange extends Component {
    @property(Node)
    SpriteA !: Node;

    @property(Node)
    SpriteB !: Node;

    start () {
        this.onClickReset();
    }

    onClickReset () {
        // 方式1
        let spA = this.SpriteA.getComponent(Sprite)!;
        tween(spA.color).to(3, { a: 50}).to(5, {a: 255}).start();

        // 方式2
        let spB = this.SpriteB.getComponent(UIOpacity);
        if (!spB) {
            this.SpriteB.addComponent(UIOpacity);
            spB = this.SpriteB.getComponent(UIOpacity);
        }
        tween(spB).to(3, { opacity: 50 }).to(5, { opacity: 255}).start();
    }
}
