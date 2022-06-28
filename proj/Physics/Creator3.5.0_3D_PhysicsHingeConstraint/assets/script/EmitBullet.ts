import { _decorator, Component, Node, systemEvent, SystemEventType, Touch, EventTouch, Camera, 
    Vec3, SphereCollider, RigidBody, instantiate,  MeshRenderer, Material, BoxCollider, Primitive, 
    CapsuleCollider, CylinderCollider, ConeCollider, Vec4, Color, PhysicsSystem, gfx } from 'cc';
const { ccclass, property, requireComponent } = _decorator;

@ccclass('EmitBullet')
@requireComponent(Camera)
export class EmitBullet extends Component {

    @property({ type: Primitive.PrimitiveType })
    primitiveMesh = Primitive.PrimitiveType.BOX;

    @property
    strength = 10000;

    private _mesh: Primitive = null!;
    private _material: Material = null!;
    private _container: Node = null!;
    private _bullet: Node = null!;

    onLoad () {
        this._container = new Node('__EMIT_BULLET__');
        this._container.setParent(this.node.scene as any);

        this._material = new Material();
        this._material.reset({
            'effectName': 'builtin-standard',
            // 'technique': 1, // Only pre-generated resources can be used
            'states': {
                'blendState': {
                    'targets': [
                        {
                            'blend': true,

                            // 'blendSrc': GFXBlendFactor.SRC_COLOR,
                            // 'blendDst': GFXBlendFactor.DST_COLOR,
                            // // 'blendEq': GFXBlendOp.ADD,

                            'blendSrc': gfx.BlendFactor.SRC_ALPHA,
                            'blendDst': gfx.BlendFactor.ONE_MINUS_SRC_ALPHA,
                            'blendSrcAlpha': gfx.BlendFactor.SRC_ALPHA,
                            'blendDstAlpha': gfx.BlendFactor.ONE_MINUS_SRC_ALPHA,
                            // 'blendAlphaEq': GFXBlendOp.ADD,
                        }
                    ]
                }
            }
        })
        this._material.setProperty('mainColor', new Color(255, 255, 255, 128));

        this._mesh = new Primitive(this.primitiveMesh);
        this._mesh.onLoaded();

        this._bullet = new Node('bullet');
        const modelCom = this._bullet.addComponent(MeshRenderer);
        modelCom.mesh = this._mesh;
        modelCom.material = this._material;

        this._bullet.setWorldScale(0.25, 0.25, 0.25);
        this._bullet.addComponent(RigidBody);
        switch (this.primitiveMesh) {
            case Primitive.PrimitiveType.BOX:
                this._bullet.addComponent(BoxCollider);
                break;
            case Primitive.PrimitiveType.SPHERE:
                this._bullet.addComponent(SphereCollider);
                break;
            case Primitive.PrimitiveType.CAPSULE:
                if (PhysicsSystem.PHYSICS_CANNON) {
                    this._bullet.addComponent(CylinderCollider);
                    const s1 = this._bullet.addComponent(SphereCollider);
                    s1.center = new Vec3(0, 0.5, 0);
                    const s2 = this._bullet.addComponent(SphereCollider);
                    s2.center = new Vec3(0, -0.5, 0);
                } else {
                    this._bullet.addComponent(CapsuleCollider);
                }
                break;
            case Primitive.PrimitiveType.CYLINDER:
                this._bullet.addComponent(CylinderCollider);
                break;
            case Primitive.PrimitiveType.CONE:
                this._bullet.addComponent(ConeCollider);
                break;
            default:
                console.error("Unsupported collider type:", Primitive.PrimitiveType[this.primitiveMesh]);
                break;
        }
    }

    onEnable () {
        systemEvent.on(SystemEventType.TOUCH_START, this.onTouchStart, this);
    }

    onDisable () {
        systemEvent.off(SystemEventType.TOUCH_START, this.onTouchStart, this);
    }

    onTouchStart (touch: Touch, event: EventTouch) {
        const cameraCom = this.getComponent(Camera)!;
        const sp = touch.getLocation();
        const pos = new Vec3(sp.x, sp.y, 1);

        const target = cameraCom.screenToWorld(pos);
        const dir = Vec3.subtract(new Vec3(), target, this.node.worldPosition).normalize();
        dir.multiplyScalar(this.strength);
        const bullet = instantiate(this._bullet) as Node;
        bullet.setParent(this._container);
        bullet.setWorldPosition(this.node.worldPosition);
        bullet.getComponent(RigidBody)!.applyForce(dir);
    }

}
