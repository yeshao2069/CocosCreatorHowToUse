
import { _decorator, Component, Node, Graphics } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GraphicsEllipse')
export class GraphicsEllipse extends Component {

    start () {
        const g = this.getComponent(Graphics)!;

        g.lineWidth = 10;
        g.fillColor.fromHEX('#ff0000');

        g.circle(150,0, 100);
        
        g.ellipse(-150,0, 100,70);

        g.stroke();
        g.fill();
    }
}