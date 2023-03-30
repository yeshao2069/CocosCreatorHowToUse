
import { _decorator, Component, AnimationComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SheepAnimationCtrl')
export class SheepAnimationCtrl extends Component {

    @property(AnimationComponent)
    sheepAnim !: AnimationComponent;

    _playAnimCallBack : any;
    _time : number = 3;

    onLoad () {
        var anim = this.sheepAnim;
        this._playAnimCallBack = function(){
            anim.play('sheep_jump');
        };
        this.scheduleOnce(this._playAnimCallBack, this._time);
    }


    reset () {
        this.sheepAnim.play('sheep_run');
        this.scheduleOnce(this._playAnimCallBack, this._time);
    }
}

