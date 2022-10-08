
import { _decorator, Component, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TweenRotateChange')
export class TweenRotateChange extends Component {

    @property(Node)
    capsuleNode !: Node;
    @property(Node)
    torusNode !: Node;
    @property(Node)
    cylinderNode !: Node;


    Click () {
        const that = this;

        /** 方式1 */
        // 循环8次，每次30°
        tween(this.capsuleNode).repeat(8,
            tween(this.capsuleNode).by(1, { angle : 30 } )
        ).start();

        // 无限循环
        // tween(this.capsuleNode).repeatForever(
        //     tween(this.capsuleNode).by(1, { angle : 30 } )
        // ).start();

        /** 方式2 */
        // 循环10次，每次15°
        tween(this.torusNode).repeat(10,
            tween(this.torusNode).by(1, { eulerAngles : new Vec3(15, 0, 0) } )
        ).start();

        /** 方式3 */
        let _rotate1 = new Vec3(); // 角度值 x,y,z
        tween(_rotate1).by(5, new Vec3(50, 50, 0),
            { 'onUpdate' : () => {
                that.cylinderNode.setRotationFromEuler(_rotate1);
            }
        }).start();
    }
}