
import { _decorator, Component, AnimationComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Model3D')
export class Model3D extends Component {

    @property
    playingIndex : number = 0;

    start () {
        this.playNextAnimation();
    }

    playNextAnimation () {
        let animation = this.getComponent(AnimationComponent)!;
        let clips = animation.clips;
        if (!clips[this.playingIndex]) {
            this.playingIndex = 0;
        }

        animation.play(clips[this.playingIndex]!.name);
        this.playingIndex++;
    }

}

