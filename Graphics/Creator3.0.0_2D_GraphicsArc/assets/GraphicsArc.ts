
import { _decorator, Component, Node, Graphics } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GraphicsArc')
export class GraphicsArc extends Component {

    start () {
        const g = this.node.getComponent(Graphics)!;
        
        g.lineWidth = 5;
        g.fillColor.fromHEX('#FF0000');

        g.arc(0, 0, 100, Math.PI/2, Math.PI, false);
        g.lineTo(0, 0);
        g.close();

        g.stroke();
        g.fill();

        g.fillColor.fromHEX('#00FF00');

        g.arc(-10, 10, 100, Math.PI/2, Math.PI, true);
        g.lineTo(-10, 10);
        g.close();

        g.stroke();
        g.fill();
    }
}
