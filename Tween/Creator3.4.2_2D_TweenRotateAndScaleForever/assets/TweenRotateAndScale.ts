
import { _decorator, Component, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TweenRotateAndScale')
export class TweenRotateAndScale extends Component {

    start () {
        let bg = this.node.getChildByName('SpNode')!;

        tween(bg).repeatForever(
            tween().parallel(
                tween(bg).to(0.3, { scale: new Vec3(1.1, 1.1, 1.1)})
                    .to(0.3, { scale: new Vec3(0.9, 0.9, 0.9)}),
                tween(bg).by(0.3, { angle: 90 })
            )
        ).start();
    }
}

