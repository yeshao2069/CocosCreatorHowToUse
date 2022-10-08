
import { _decorator, Component, Node, Vec2, Graphics, find, EventTouch, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DrawLine')
export class DrawLine extends Component {

    _touches : Vec2[] = [];
    _graphics !: Graphics;

    start () {
        var canvas = find('Canvas')!;

        canvas.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);

        this._graphics = this.getComponent(Graphics)!;
        this._graphics.moveTo(0, 0);
        this._graphics.lineTo(0.1, 0);
        this._graphics.lineTo(-0.11, 0);
        this._graphics.stroke();
    }

    onTouchStart (event: EventTouch) {
        this._touches.length = 0;
        this._touches = [];
        let pos = event!.touch!.getUILocation();
        this._touches.push(pos);
    }

    onTouchMove (event: EventTouch) {
        let touches = this._touches;
        let pos = event!.touch!.getUILocation();
        touches.push(pos);

        const MIN_POINT_DISTANCE = 2;
        
        let worldPos = this.node.getComponent(UITransform)!.convertToWorldSpaceAR(new Vec3());
        this._graphics.moveTo(touches[0].x - worldPos.x, touches[0].y - worldPos.y);
        let lastIndex = 0;
        for (let i = 1, l = touches.length; i < l; i++) {
            if (touches[i].clone().subtract(touches[lastIndex]).length() < MIN_POINT_DISTANCE) {
                continue;
            }
            lastIndex = i;
            this._graphics.lineTo(touches[i].x - worldPos.x, touches[i].y - worldPos.y);
        }
        this._graphics.stroke();
    }

    onTouchEnd (event: EventTouch) {
    }

    onClearClick () {
        this._graphics.clear();
    }
}

