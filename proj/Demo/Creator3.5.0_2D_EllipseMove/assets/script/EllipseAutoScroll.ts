
import { _decorator, Component, Node, Vec3, CCInteger } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EllipseAutoScroll')
export class EllipseAutoScroll extends Component {
    
    @property([Node])
    nodes : Node[] = [];
    // 长轴长
    @property(CCInteger)
    longLine : number = 200;
    // 短轴长
    @property(CCInteger)
    shortLine : number = 80;
    @property(Vec3)
    center : Vec3 = new Vec3(0, 0, 0);
    @property(CCInteger)
    speed : number = 2;
    
    angle : number = 0;
    tempPos : Vec3 = new Vec3();

    start () {
        this.angle = 0;
        this.initAngle()
    }

    initAngle () {
        for (var i = 0; i < this.nodes.length; i++) {
            var child = this.nodes[i]
            var angle = (270-360/this.nodes.length*i+360)%360;
            (child as any)['_a'] = this.longLine;
            (child as any)['_b'] = this.shortLine;
            (child as any)['_angle'] = angle;
        }
    }

    update (dt : number){
        this.angle = (this.angle+this.speed)%360

        for (var i = 0; i < this.nodes.length; i++) {
            var child = this.nodes[i];
            this.tempPos = child.getPosition();
            let angle = ((child as any)['_angle'] + this.angle+360)%360;

            var a = angle*Math.PI/180
            var x = (child as any)['_a']*Math.cos(a)+this.center.x;
            var y = (child as any)['_b']*Math.sin(a)+this.center.y;
            this.tempPos.x = x;
            this.tempPos.y = y;
            child.setPosition(this.tempPos);
            let rotate = 360 - this.getRotation(child.position, new Vec3(x, y, 0))*180/ Math.PI;
            child.setRotationFromEuler(0, rotate, 0);
        }
    }

    getRotation (p1: Vec3, p2: Vec3) {
        if (p1.strictEquals(p2)) {
            return 0;
        }
        if (p1.x == p2.x) {
            return p2.y > p1.y ? Math.PI/2 : Math.PI
        }
        var a = Math.abs(Math.atan((p2.y-p1.y)/(p2.x-p1.x)))
        if (p2.x < p1.x) {
            if(p2.y >p1.y){
                a = Math.PI - a;
            } else {
                a = Math.PI + a;
            }
        } else if(p2.y < p1.y) {
            a = Math.PI*2 - a
        }
        return a;
    }
}
