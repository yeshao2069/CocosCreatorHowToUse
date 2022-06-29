System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Graphics, find, UITransform, Vec3, _dec, _class, _crd, ccclass, property, DrawLine;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Graphics = _cc.Graphics;
      find = _cc.find;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "63f5fOEWlZJgb3mVPLEIsn9", "DrawLine", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DrawLine", DrawLine = (_dec = ccclass('DrawLine'), _dec(_class = class DrawLine extends Component {
        constructor() {
          super(...arguments);
          this._touches = [];
        }

        start() {
          var canvas = find('Canvas');
          canvas.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          canvas.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          canvas.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this._graphics = this.getComponent(Graphics);

          this._graphics.moveTo(0, 0);

          this._graphics.lineTo(0.1, 0);

          this._graphics.lineTo(-0.11, 0);

          this._graphics.stroke();
        }

        onTouchStart(event) {
          this._touches.length = 0;
          this._touches = [];
          var pos = event.touch.getUILocation();

          this._touches.push(pos);
        }

        onTouchMove(event) {
          var touches = this._touches;
          var pos = event.touch.getUILocation();
          touches.push(pos);
          var MIN_POINT_DISTANCE = 2;
          var worldPos = this.node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3());

          this._graphics.moveTo(touches[0].x - worldPos.x, touches[0].y - worldPos.y);

          var lastIndex = 0;

          for (var i = 1, l = touches.length; i < l; i++) {
            if (touches[i].clone().subtract(touches[lastIndex]).length() < MIN_POINT_DISTANCE) {
              continue;
            }

            lastIndex = i;

            this._graphics.lineTo(touches[i].x - worldPos.x, touches[i].y - worldPos.y);
          }

          this._graphics.stroke();
        }

        onTouchEnd(event) {}

        onClearClick() {
          this._graphics.clear();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=88de317b010639fb321cb075cc08c3e691241e00.js.map