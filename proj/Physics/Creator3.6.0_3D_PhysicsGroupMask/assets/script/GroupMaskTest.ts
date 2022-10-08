import { _decorator, Component, Node, Enum, Collider, EventTouch, RigidBody, PhysicsSystem } from 'cc';
const { ccclass, property, menu } = _decorator;

export enum EPHY_MASK {
    M_NONE = 0,
    M_ALL = 0xffffffff
};

Enum(EPHY_MASK);

@ccclass('GroupMaskTestItem')
class GroupMaskTestItem {
    @property({ type: Node })
    target: Node = null as any;

    @property({ type: PhysicsSystem.PhysicsGroup })
    group = PhysicsSystem.PhysicsGroup.DEFAULT;

    @property({ type: EPHY_MASK })
    mask = EPHY_MASK.M_ALL;
}

@ccclass('GroupMaskTest')
export class GroupMaskTest extends Component {

    @property({ type: [GroupMaskTestItem] })
    items: GroupMaskTestItem[] = []

    @property({ type: RigidBody })
    testBody: RigidBody = null as any;

    start () {
        this.items.forEach((i: GroupMaskTestItem) => {
            if (i.target) {
                let c = i.target.getComponent(Collider)!;
                c.setGroup(i.group);
                c.setMask(i.mask);
            }
        });

        this.testBody.setMask(0);
    }

    setItemMaskToNone (event: EventTouch, index: string) {
        const int = parseInt(index);
        let c = this.items[int].target.getComponent(Collider)!;
        c.setMask(EPHY_MASK.M_NONE);

        this.items.forEach((i: GroupMaskTestItem) => {
            if (i.target) {
                let c = i.target.getComponent(RigidBody);
                if (c) c.wakeUp();
            }
        });
    }

}
