
import { _decorator, Component, Node, Graphics } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GraphicsRect')
export class GraphicsRect extends Component {

    start () {
        const g = this.node.getComponent(Graphics)!;

        g.lineWidth = 10;
        g.fillColor.fromHEX('#FF0000');
        
        // rect
        g.rect(-250,0, 200,100);

        // round rect
        g.roundRect(50,0, 200,100, 20);

        g.stroke();
        g.fill();
    }
}
