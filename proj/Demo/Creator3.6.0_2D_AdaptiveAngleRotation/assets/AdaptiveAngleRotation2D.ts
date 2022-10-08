
import { _decorator, Component, Node, tween, Label, Tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AdaptiveAngleRotation2D')
export class AdaptiveAngleRotation2D extends Component {

    @property(Node)
    testNode !: Node;
    @property(Label)
    showLabel !: Label;

    // 顺时针旋转90
    onPositive() {
        Tween.stopAllByTarget(this.testNode);
        tween(this.testNode)
            .by(0.2, { angle: -90 })
            .delay(0.2)
            .call(()=>{
                this.fitAngle();
                this.showLabel.string = "angle : " + this.testNode.angle;
            })
            .start();
    }
    
    // 逆时针旋转90
    onReverse() {
        Tween.stopAllByTarget(this.testNode);
        tween(this.testNode)
            .by(0.2, { angle: 90 })
            .delay(0.2)
            .call(()=>{
                this.fitAngle();
                this.showLabel.string = "angle : " + this.testNode.angle;
            })
            .start();
    }

    // 角度数值处理
    fitAngle () {
        if (this.testNode.angle >= 360) {
            this.testNode.angle -= 360;
        }
        if (this.testNode.angle <= -360) {
            this.testNode.angle += 360;
        }
    }

    // 自适应旋转
    onFit() {
        let r = Math.round(Math.random() * 360 - 180);
        console.log("随机获取旋转后的角度Angle(-180~180):", r);

        let currentAngle = this.testNode.angle;
        console.log("旋转前的节点的角度Angle:", currentAngle);

        let diffAngle = r - currentAngle;
        console.log("需要旋转的角度Angle:", diffAngle);

        if (diffAngle >= 360) {
            diffAngle -= 360;
        }
        if (diffAngle <= -360) {
            diffAngle += 360;
        }

        tween(this.testNode)
            .by(0.2, { angle: diffAngle })
            .delay(0.2)
            .call(()=>{
                console.log("旋转后的节点的角度Angle:", this.testNode.angle);
                this.showLabel.string = "angle : " + this.testNode.angle;
            })
            .start();
    }
}

