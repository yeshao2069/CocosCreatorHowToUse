import { _decorator, Component, RigidBody, Node, Vec3, EventTouch } from "cc";
const { ccclass, property } = _decorator;

@ccclass('VelocityTestItem')
class VelocityTestItem {
    @property({ type: Node })
    target: Node = null as any;

    @property
    USE_LINEAR = false;

    @property({ visible: function (this: VelocityTestItem) { return this.USE_LINEAR } })
    linearVelocity = new Vec3();

    @property
    USE_ANGULAR = false;

    @property({ visible: function (this: VelocityTestItem) { return this.USE_ANGULAR } })
    angularVelocity = new Vec3();
}


@ccclass("VelocityTest")
export class VelocityTest extends Component {

    @property({ type: [VelocityTestItem] })
    items: VelocityTestItem[] = []

    // start () {
    //     this.items.forEach((i: VelocityTestItem) => {
    //         if (i.target) {
    //             let r = i.target.getComponent(RigidBody);
    //             i.USE_LINEAR && r.setLinearVelocity(i.linearVelocity);
    //             i.USE_ANGULAR && r.setAngularVelocity(i.angularVelocity);
    //         }
    //     });
    // }

    setItemVelocity (event: EventTouch, index: string) {
        const int = parseInt(index);
        const i = this.items[int];
        let r = i.target.getComponent(RigidBody)!;
        i.USE_LINEAR && r.setLinearVelocity(i.linearVelocity);
        i.USE_ANGULAR && r.setAngularVelocity(i.angularVelocity);
    }
}
