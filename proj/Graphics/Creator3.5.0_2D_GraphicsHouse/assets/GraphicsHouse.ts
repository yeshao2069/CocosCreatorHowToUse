
import { _decorator, Component, Node, Graphics } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GraphicsHouse')
export class GraphicsHouse extends Component {

    start () {
        const g = this.node.getComponent(Graphics)!;

        // wall
        g.lineWidth = 10;
        g.rect(-75, -140, 150, 110);
        g.fillColor.fromHEX('#666666');
        g.fill();
        g.stroke();

        // door
        g.lineWidth = 10;
        g.rect(-20, -135, 40, 50);
        g.fillColor.fromHEX('#BBBBBB');
        g.fill();

        g.lineWidth = 6;
        g.moveTo(-20, -140);
        g.lineTo(-20, -85);
        g.lineTo(20, -85);
        g.lineTo(20, -140);
        g.stroke();
        

        // roof
        g.lineWidth = 10;
        g.moveTo(-100, -30);
        g.lineTo(0, 60);
        g.lineTo(100, -30);
        g.lineTo(-100, -30);
        g.fillColor.fromHEX('#DD1010');
        g.fill();
        g.stroke();
    }
}
