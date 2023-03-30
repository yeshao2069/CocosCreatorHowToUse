import { _decorator, Component, Node, Material, systemEvent, 
    SystemEventType, EventTouch, Camera, geometry, Touch, 
    PhysicsSystem, MeshRenderer, Toggle, Label, EditBox } from "cc";
const { ccclass, property, menu } = _decorator;

enum ERaycastType {
    ALL,
    CLOSEST
}

@ccclass("RaycastTest")
export class RaycastTest extends Component {

    @property({ type: Material })
    readonly defaultMaterial: Material = null as any;

    @property({ type: Material })
    readonly rayMaterial: Material = null as any;

    @property({ type: Camera })
    readonly camera: Camera = null as any;

    @property({ type: Label })
    readonly label: Label = null as any;

    @property({ type: PhysicsSystem.PhysicsGroup })
    ingnoreLayer: number = 0;

    private _raycastType: ERaycastType = ERaycastType.ALL;
    private _ray: geometry.Ray = new geometry.Ray();
    private _maxDistance: number = 100;
    private _mask: number = 0xffffffff;

    public set maxDistance (v: number) {
        this._maxDistance = v;
        this.label.string = '当前检测距离：' + this._maxDistance.toString();
    }

    start () {
        this.maxDistance = this._maxDistance;
        this._mask &= ~this.ingnoreLayer;
    }

    onEnable () {
        systemEvent.on(SystemEventType.TOUCH_START, this.onTouchStart, this);
    }

    onDisable () {
        systemEvent.off(SystemEventType.TOUCH_START, this.onTouchStart, this);
    }

    onTouchStart (touch: Touch, event: EventTouch) {
        this.resetAll();

        this.camera.screenPointToRay(touch.getLocationX(), touch.getLocationY(), this._ray);
        switch (this._raycastType) {
            case ERaycastType.ALL:
                if (PhysicsSystem.instance.raycast(this._ray, this._mask, this._maxDistance)) {
                    const r = PhysicsSystem.instance.raycastResults;
                    for (let i = 0; i < r.length; i++) {
                        const item = r[i];
                        const modelCom = item.collider.node.getComponent(MeshRenderer)!;
                        modelCom.material = this.rayMaterial;
                    }
                }
                break;
            case ERaycastType.CLOSEST:
                if (PhysicsSystem.instance.raycastClosest(this._ray, this._mask, this._maxDistance)) {
                    const r = PhysicsSystem.instance.raycastClosestResult;
                    const modelCom = r.collider.node.getComponent(MeshRenderer)!;
                    modelCom.material = this.rayMaterial;
                }
                break;
        }
    }

    resetAll () {
        for (let i = 0; i < this.node.children.length; i++) {
            let modelCom = this.node.children[i].getComponent(MeshRenderer)!;
            modelCom.material = this.defaultMaterial;
        }
    }

    onToggle (toggleCom: Toggle) {
        if (toggleCom.node.name == 'Toggle1') {
            this._raycastType = ERaycastType.ALL;
        } else if (toggleCom.node.name == 'Toggle2') {
            this._raycastType = ERaycastType.CLOSEST;
        }
    }

    onEditFinish (editBox: EditBox) {
        const v = parseFloat(editBox.string);
        if (!isNaN(v)) {
            this.maxDistance = v;
        }
    }

    onMaskBtn (event: EventTouch) {
        const lb = (event.target as Node).getComponentInChildren(Label)!;
        if (this._mask != 0) {
            this._mask = 0;
            lb.string = "检测状态：off";
        } else {
            this._mask = 0xffffffff & ~this.ingnoreLayer;
            lb.string = "检测状态：on";
        }
    }

}
