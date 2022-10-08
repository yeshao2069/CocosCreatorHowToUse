import { _decorator, Component, Node, Enum, PhysicsSystem } from "cc";
const { ccclass, property, menu } = _decorator;

enum SupportPhysics {
    BUILTIN,
    CANNON,
    AMMO,
    BUILTIN_CANNON,
    BUILTIN_AMMO,
    CANNON_AMMO
}
Enum(SupportPhysics);

@ccclass("SupportPhyiscs")
export class SupportPhyiscs extends Component {

    @property({ type: SupportPhysics })
    support: SupportPhysics = SupportPhysics.AMMO;

    start () {
        // Your initialization goes here.
        switch (this.support) {
            case SupportPhysics.BUILTIN:
                if (PhysicsSystem.PHYSICS_BUILTIN)
                    return;

                this.node.active = false;
                break;
            case SupportPhysics.CANNON:
                if (PhysicsSystem.PHYSICS_CANNON)
                    return;

                this.node.active = false;
                break;
            case SupportPhysics.AMMO:
                if (PhysicsSystem.PHYSICS_AMMO)
                    return;

                this.node.active = false;
                break;
            case SupportPhysics.BUILTIN_CANNON:
                if (PhysicsSystem.PHYSICS_BUILTIN || PhysicsSystem.PHYSICS_CANNON)
                    return;

                this.node.active = false;
                break;
            case SupportPhysics.BUILTIN_AMMO:
                if (PhysicsSystem.PHYSICS_BUILTIN || PhysicsSystem.PHYSICS_AMMO)
                    return;

                this.node.active = false;
                break;
            case SupportPhysics.CANNON_AMMO:
                if (PhysicsSystem.PHYSICS_CANNON || PhysicsSystem.PHYSICS_AMMO)
                    return;

                this.node.active = false;
                break;
        }
    }
}
