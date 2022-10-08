
import { _decorator, Component, Node, EventKeyboard, Vec3, tween, Quat, KeyCode, input, Input } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ObjectAlwaysFollow')
export class ObjectAlwaysFollow extends Component {
    @property(Node)
    soldier !: Node;

    @property(Node)
    follower !: Node;

    soldierRotate = new Vec3();
    tempQuat = new Quat();

    start () {
        input.on(Input.EventType.KEY_UP, this.onKeyUPEvent, this);
    }

    onKeyUPEvent (evt: EventKeyboard) {
        let quat = this.soldier.getRotation();
        quat.getEulerAngles(this.soldierRotate);

        switch(evt.keyCode) {
            case KeyCode.ARROW_LEFT :
                this.soldierRotate.y += 10;
                /* 这边需要特殊处理的情况是
                 * 四元素从 rotateY:180-190, 做旋转的时候会出现问题。这边做了规避操作。
                 * 同理， rotateY: -180~-190, 做旋转的时候也会出现问题，此处规避。
                 */
                if (this.soldierRotate.y > 180 ) {
                    this.soldierRotate.y -= 360;

                    Quat.fromEuler(quat, this.soldierRotate.x, this.soldierRotate.y, this.soldierRotate.z);
                    Quat.fromEuler(this.tempQuat, this.soldierRotate.x, -180, this.soldierRotate.z);
                    tween(this.soldier).stop();
                    tween(this.soldier).call(()=>{
                        this.soldier.setRotation(this.tempQuat);
                    })
                    .to(0.15, { rotation: quat })
                    .call(()=>{
                        this.rotateAroundNode(this.follower, this.soldier.position, Vec3.UP, 10);
                    }).start();
                } else {
                    Quat.fromEuler(quat, this.soldierRotate.x, this.soldierRotate.y, this.soldierRotate.z);
                    tween(this.soldier).stop();
                    tween(this.soldier).to(0.15, { rotation: quat })
                    .call(()=>{
                        this.rotateAroundNode(this.follower, this.soldier.position, Vec3.UP, 10);
                    }).start();
                }
                
                break;
            case KeyCode.ARROW_RIGHT :
                this.soldierRotate.y -= 10;
                console.log(this.soldierRotate);

                if (this.soldierRotate.y < -180) {
                    this.soldierRotate.y += 360;

                    Quat.fromEuler(quat, this.soldierRotate.x, this.soldierRotate.y, this.soldierRotate.z);
                    Quat.fromEuler(this.tempQuat, this.soldierRotate.x, 180, this.soldierRotate.z);
                    tween(this.soldier).stop();
                    tween(this.soldier).call(()=>{
                        this.soldier.setRotation(this.tempQuat);
                    })
                    .to(0.15, { rotation: quat })
                    .call(()=>{
                        this.rotateAroundNode(this.follower, this.soldier.position, Vec3.UP, -10);
                    }).start();
                } else {
                    Quat.fromEuler(quat, this.soldierRotate.x, this.soldierRotate.y, this.soldierRotate.z);
                    tween(this.soldier).stop();
                    tween(this.soldier).to(0.15, { rotation: quat })
                    .call(()=>{
                        this.rotateAroundNode(this.follower, this.soldier.position, Vec3.UP, -10);
                    }).start();
                }
                
                break;
        }
    }

    rotateAroundNode(self: Node, targetPos: Vec3, axis: Vec3, angle: number) : Quat {
        let _quat = new Quat();
        const v1 = new Vec3();
        const v2 = new Vec3();
        let pos2 : Vec3 = self.position;
        let rad = angle / 180 * Math.PI;

        //根据旋转轴和旋转弧度计算四元数
        Quat.fromAxisAngle(_quat, axis, rad);
        //相减，目标点与相机点之间的向量
        Vec3.subtract(v1, pos2, targetPos);
        //把向量dir根据计算到的四元数旋转，然后计算出旋转后的距离
        Vec3.transformQuat(v2, v1, _quat);
        Vec3.add(v2, targetPos, v2);
        self.setPosition(v2);
        //根据轴和弧度绕世界空间下指定轴旋转四元数
        Quat.rotateAround(_quat, self.rotation, axis, rad);
        return _quat;
    }
} 