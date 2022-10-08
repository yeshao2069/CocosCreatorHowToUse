
import { _decorator, Component, Node, Vec3, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EllipseAutoScroll')
export class EllipseAutoScroll extends Component {
    
    @property([Node])
    nodes : Node[] = [];

    start () {
        this.init();
    }

    init () {

        for (var i = 0; i < this.nodes.length; i++) {
            var child = this.nodes[i];

            let dstartAngle = 0;  // 开始的角度
            let dendAngle = 2*Math.PI;  // 结束的角度
            let radius = 200;  // 半径
            let center = new Vec3();   // 转动的时候的中心点位置
            let time = 5;  // 决定转动的速度
            let rotate1 = 0;
            let rotate2 = 2*Math.PI;
            tween(child).repeatForever(
                tween(rotate1 as any).by(time + i * 5, (rotate2 as any), {
                    'onUpdate' : (t, r=0) => {
                        var a = (dendAngle - dstartAngle) * (r) + dstartAngle
                        dstartAngle = r * rotate1;
            
                        var x = center.x + radius * Math.sin(a);
                        var y = center.y + radius * Math.cos(a);
                        (t as Node).setPosition(x, y, 0);
                    }
                }).start()
            ).start();
        }
    }
}
