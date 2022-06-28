
import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UseAnimationFrameEvents')
export class UseAnimationFrameEvents extends Component {

    _loopTime : number = 1;

    finishAnim (progress: number) {
        
        if(progress === 100) {
            this._loopTime += 1;
        }

        console.log('第'+this._loopTime+'圈,'+progress+'%');
    }
}

