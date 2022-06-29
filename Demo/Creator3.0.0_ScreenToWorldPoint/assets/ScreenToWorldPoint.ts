
import { _decorator, Component, Node, Label, find, EventTouch, Vec2, Vec3, Camera, UITransform, Slider, view } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScreenToWorldPoint')
export class ScreenToWorldPoint extends Component {
    
    @property(Node)
    box !: Node;
    @property(Label)
    distanceLabel !: Label;
    @property(Camera)
    Camera3D !: Camera;

    _distance = 0;

    start () {
        var canvas = find('Canvas')!;
        canvas.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

        this._distance = 0.5;
    }

    onTouchStart(evt: EventTouch) {
        this.moveBox(evt.getLocation());
    }

    onTouchMove(evt: EventTouch) {
        this.moveBox(evt.getLocation());
    }

    moveBox (touchPos: Vec2) {
        let pos = this.Camera3D.screenToWorld(new Vec3(touchPos.x, touchPos.y, this._distance));
        this.box.position = this.box.parent!.getComponent(UITransform)!.convertToNodeSpaceAR(pos);
    }

    onDistanceChanged(slider: Slider) {
        this._distance = parseFloat(slider.progress.toFixed(2));
        this.distanceLabel.string = 'distance : ' + this._distance;
    }
}
