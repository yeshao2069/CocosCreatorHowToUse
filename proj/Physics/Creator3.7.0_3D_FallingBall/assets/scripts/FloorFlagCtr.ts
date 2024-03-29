import { _decorator, Component, Node, Label, Quat, randomRange, Collider, Prefab, RigidBody, Vec3 } from "cc";
import { v3_t, quat_t } from "./TempConst";
import { PrefabPoolUtil } from "./PrefabPoolUtil";
const { ccclass, property, menu } = _decorator;

@ccclass("FloorFlagCtr")
export class FloorFlagCtr extends Component {

    @property({ type: Node })
    targetNode: Node = null;

    @property({ type: Node })
    floorRoot: Node = null;

    @property({ type: Node })
    floorFlag0: Node = null;

    @property({ type: Node })
    floorFlag1: Node = null;

    @property({ type: Label })
    scoreLabel: Label = null;

    @property({ type: Prefab })
    cubePrefab: Prefab = null;

    @property({ type: Prefab })
    cubeRedPrefab: Prefab = null;

    @property({ type: Node })
    cubeRoot: Node = null;

    private _flag = 0;

    update () {

        if (this.floorFlag0.worldPosition.y > this.targetNode.worldPosition.y) {
            v3_t.set(this.floorFlag0.worldPosition);
            v3_t.y -= 8;
            this.floorFlag0.worldPosition = v3_t;

            const len = this.floorRoot.children.length;
            const floorNode = this.floorRoot.children[this._flag % len];
            const colliders = floorNode.getComponentsInChildren(Collider);
            for (let i = 0; i < colliders.length; i++) {
                let clone: Node;
                if (colliders[i].node.name == "Cube") {
                    clone = PrefabPoolUtil.getItemByPoolName("FALLING-BALL.Cube", this.cubePrefab, 5);
                } else {
                    clone = PrefabPoolUtil.getItemByPoolName("FALLING-BALL.CubeRed", this.cubeRedPrefab, 5);
                }
                clone.parent = null;
                this.cubeRoot.addChild(clone);

                clone.worldPosition = colliders[i].node.worldPosition;
                clone.worldRotation = colliders[i].node.worldRotation;

                const cBody = clone.getComponent(RigidBody);
                cBody.sleep();
                cBody.wakeUp();

                v3_t.set(0, 0, 10000);
                Vec3.transformQuat(v3_t, v3_t, clone.worldRotation);
                cBody.applyForce(v3_t);
            }

            v3_t.set(0, -(this._flag + len) * 8, 0);
            floorNode.worldPosition = v3_t;
            Quat.fromEuler(quat_t, 0, randomRange(-180, 180), 0);
            floorNode.worldRotation = quat_t;

            this._flag++;
            this.scoreLabel.string = this._flag.toString();
        }

        if (this.floorFlag1.worldPosition.y > this.targetNode.worldPosition.y) {
            v3_t.set(this.floorFlag1.worldPosition);
            v3_t.y -= 8;
            this.floorFlag1.worldPosition = v3_t;
        }
    }

    reset () {
        this._flag = 0;
        v3_t.set(0, -1, 0);
        this.floorFlag0.worldPosition = v3_t;
        v3_t.set(0, -3, 0);
        this.floorFlag1.worldPosition = v3_t;
    }

    onDestroy () {
        PrefabPoolUtil.clear("FALLING-BALL.Cube");
        PrefabPoolUtil.clear("FALLING-BALL.CubeRed");
    }
}
