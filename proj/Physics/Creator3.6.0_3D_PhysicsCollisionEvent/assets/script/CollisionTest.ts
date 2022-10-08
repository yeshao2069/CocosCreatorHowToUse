import { _decorator, Component, ITriggerEvent,
    Collider, Label, ICollisionEvent, Color, 
    UITransform, Size, VerticalTextAlignment } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CollisionTest")
export class CollisionTest extends Component {

    private static _idCounter = 0;
    public readonly id: number;

    private alreadyStay: boolean = false;
    private messageAmount = 0;

    @property({ type: Label })
    public label: Label = null as any;

    constructor () {
        super();
        this.id = CollisionTest._idCounter++;
    }

    start () {
        // Your initialization goes here.
        let collider = this.getComponent(Collider);
        if (collider) {
            collider.on('onCollisionEnter', this.onCollision, this);
            collider.on('onCollisionStay', this.onCollision, this);
            collider.on('onCollisionExit', this.onCollision, this);
        }
    }

    onCollision (event: ICollisionEvent) {
        const collider = this.getComponent(Collider);
        if (collider != event.selfCollider) {
            this.label.string = "[错误]：self不等于自己，请提交 issue";
            this.label.fontSize = 40;
            this.label.lineHeight = 40;
            this.label.verticalAlign =VerticalTextAlignment.CENTER;
            this.label.getComponent(UITransform)!.contentSize = new Size(400, 400);
            this.label.color = Color.RED;
            this.enabled = false;
            return;
        }
        if (event.type == 'onCollisionStay') {
            if (!this.alreadyStay) {
                this.alreadyStay = true;
            } else {
                return;
            }
        } else if (event.type == 'onCollisionExit') {
            this.alreadyStay = false;
        }

        if (this.label) {
            if (this.messageAmount > 10) { this.label.string = ""; this.messageAmount = 0; }
            this.messageAmount++
            this.label.string += event.selfCollider.node.name + '一' + event.type + '一' + event.otherCollider.node.name + '\n';
        }
    }

}
