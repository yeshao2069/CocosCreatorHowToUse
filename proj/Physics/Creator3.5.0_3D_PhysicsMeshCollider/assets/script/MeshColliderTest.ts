import { _decorator, Component, Node, Vec3, RigidBody } from "cc";
const { ccclass, property, menu } = _decorator;

@ccclass("MeshColliderTest")
export class MeshColliderTest extends Component {

    startPos: Vec3[] = [];

    start () {
        // Your initialization goes here.
        for (let i = 0; i < this.node.children.length; i++) {
            this.startPos.push(this.node.children[i].worldPosition.clone());
        }
    }

    update (deltaTime: number) {
        // Your update function goes here.
        for (let i = 0; i < this.node.children.length; i++) {
            if (this.node.children[i].worldPosition.y < -10) {
                this.node.children[i].worldPosition = this.startPos[i];
                this.node.children[i].getComponent(RigidBody)!.setLinearVelocity(Vec3.ZERO);
            }
        }
    }
}
