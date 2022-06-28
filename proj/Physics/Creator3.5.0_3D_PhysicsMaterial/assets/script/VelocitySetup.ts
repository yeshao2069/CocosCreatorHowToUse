import { _decorator, Component, Node, Vec3, RigidBody } from 'cc';
const { ccclass, property, menu } = _decorator;

@ccclass("VelocitySetup")
export class VelocitySetup extends Component {

    @property
    lv = new Vec3();

    start () {
        this.node.getComponent(RigidBody)!.setLinearVelocity(this.lv);
    }
}
