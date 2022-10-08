
import { _decorator, Component, Node, ProgressBar, tween, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CircularProgressBar')
export class CircularProgressBar extends Component {


    start () {

        // 使用ProgressBar方式
        for (let i=1; i <5; i++) {
            let node = this.node.getChildByName('pbNode'+i);
            if (node) {
                let pb = node.getComponent(ProgressBar)!;
                let time = Math.floor(Math.random() * 10) + 1;
                tween(pb).repeatForever(
                    tween(pb).to(time, { progress: 1}).call(()=>{
                        pb.progress = 0;
                    })
                ).start();
            }
        }

        // 使用动画 Animation 方式


        // 使用ProgressBar方式
        for (let i=1; i <5; i++) {
            let node = this.node.getChildByName('spNode'+i);
            if (node) {
                let sp = node.getChildByName('progress')!.getComponent(Sprite)!;
                let time = Math.floor(Math.random() * 10) + 1;
                tween(sp).repeatForever(
                    tween(sp).to(time, { fillRange: -1}).call(()=>{
                        sp.fillRange = 0;
                    })
                ).start();
            }
        }
    }
}
