
import { _decorator, Component, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Rotate')
export class Rotate extends Component {

    total : number = 0;

    start () {
        this.total = 0;
    }

    update (dt: number) {
        this.total += dt * 50;
        this.node.eulerAngles = new Vec3(0, this.total, 0);
    }
}

