import { _decorator, Component, Node, Button, AudioSource, AudioClip } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('audioPlay')
export class audioPlay extends Component {

    @property(Button)
    playButton : Button | null = null;

    @property(AudioClip)
    sound : AudioClip | null = null;

    start () {
        // Your initialization goes here.
        const that = this;
        this.playButton!.node.on(Node.EventType.TOUCH_END, function(){
            that.sound!.playOneShot(1);
        }, this);
    }
}
