
import { _decorator, Component, Node, AnimationComponent, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MoveAnimationCtrl')
export class MoveAnimationCtrl extends Component {

    @property(AnimationComponent)
    target !: AnimationComponent;
    @property([Node])
    nodes : Node[] = [];

    onLoad () {
        this.onRegisteredEvent();
    }

    onRegisteredEvent() {
        for (var i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].on(Node.EventType.TOUCH_END, this.onPlayAnimation, this);
        }
    }

    onPlayAnimation(event: EventTouch) {
        this.target.stop();
        switch ((event.target! as Node).name) {
            case 'Linear':
                this.target.play('linear');
                break;
            case 'CaseIn_Expo':
                this.target.play('caseIn-expo');
                break;
            case 'CaseOut_Expo':
                this.target.play('caseOut-expo');
                break;
            case 'CaseInOut_Expo':
                this.target.play('caseInOut-expo');
                break;
            case 'Back_Forward':
                this.target.play('back-forward');
                break;
        }
    }
}

