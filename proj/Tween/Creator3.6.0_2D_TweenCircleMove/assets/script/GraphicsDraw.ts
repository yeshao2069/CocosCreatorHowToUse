
import { _decorator, Component, Node, Graphics } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {

    start () {

        const g = this.node.getComponent(Graphics)!;
        g.lineWidth = 2;
        g.strokeColor.fromHEX('#FFFFFF');

        g.ellipse(0,0,200,200)
        g.stroke();
    }
}
