import { _decorator, Component, Node, SpriteRenderer, Label, systemEvent, SystemEvent, EventKeyboard, KeyCode } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {

    @property(SpriteRenderer)
    nameSR !: SpriteRenderer;
    @property(Label)
    nameLabel !: Label;
    @property(Node)
    playerNode !: Node;

    start() {
        this.scheduleOnce(()=>{
            let spr = this.nameLabel.ttfSpriteFrame;
            this.nameSR.spriteFrame = spr;
        }, 0.2)

        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyDown(event: EventKeyboard) {
        let pos = this.playerNode.getPosition();
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                pos.x -= 1;
                break;
            case KeyCode.KEY_D:
                pos.x += 1;
                break;
            case KeyCode.KEY_W:
                pos.z -= 1;
                break;
            case KeyCode.KEY_S:
                pos.z += 1;
                break;
        }

        this.playerNode.setPosition(pos);
    }

    onKeyUp(event: EventKeyboard) {

    }
}
