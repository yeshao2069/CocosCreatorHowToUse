
import { _decorator, Component, Node, SystemEvent, EventTouch, tween, Vec2, Vec3, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AdaptiveRotation2D')
export class AdaptiveRotation2D extends Component {

    @property(Node)
    tank !: Node;

    onLoad () {
        this.node.on(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
    }

    onMouseDown (evt: EventTouch) {
        let tmpVec3 = new Vec3(evt.getUILocation().x, evt.getUILocation().y, 0);
        let pos1 = this.node.getComponent(UITransform)!.convertToNodeSpaceAR(tmpVec3);
        let angle = this.getAngle(this.tank.position, pos1);

        console.log( this.tank.angle, angle);
        let tmpAngle = angle;
        if (this.tank.angle >= 90 && angle <= -90) {
            tmpAngle = angle;
            angle = angle + 360;
        }
        if (this.tank.angle <= -90 && angle >= 90) {
            tmpAngle = angle;
            angle = angle - 360;
        }

        tween(this.tank)
            .sequence(
                tween(this.tank).to(0.5, {angle: angle}),
                tween(this.tank).call(()=>{
                    // 做矫正
                    this.tank.angle = tmpAngle;
                }),
            )
            .start()
    }

    getAngle (oldPos: Vec3, nowPos: Vec3) {
        let dir = new Vec2(nowPos.x - oldPos.x, nowPos.y - oldPos.y)
        let angle = dir.signAngle(new Vec2(0, 1))
        angle = angle * 180 / Math.PI;
        angle = (angle>0 ? -angle : Math.abs(angle))
        return angle
    }
}

