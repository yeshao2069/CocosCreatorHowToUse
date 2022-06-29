System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, SystemEvent, tween, Vec2, Vec3, UITransform, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AdaptiveRotation2D;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      SystemEvent = _cc.SystemEvent;
      tween = _cc.tween;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e4demQbnFO0Z+LjpFLQdXy", "AdaptiveRotation2D", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AdaptiveRotation2D", AdaptiveRotation2D = (_dec = ccclass('AdaptiveRotation2D'), _dec2 = property(Node), _dec(_class = (_class2 = class AdaptiveRotation2D extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tank", _descriptor, this);
        }

        onLoad() {
          this.node.on(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
        }

        onMouseDown(evt) {
          var tmpVec3 = new Vec3(evt.getUILocation().x, evt.getUILocation().y, 0);
          var pos1 = this.node.getComponent(UITransform).convertToNodeSpaceAR(tmpVec3);
          var angle = this.getAngle(this.tank.position, pos1);
          console.log(this.tank.angle, angle);
          var tmpAngle = angle;

          if (this.tank.angle >= 90 && angle <= -90) {
            tmpAngle = angle;
            angle = angle + 360;
          }

          if (this.tank.angle <= -90 && angle >= 90) {
            tmpAngle = angle;
            angle = angle - 360;
          }

          tween(this.tank).sequence(tween(this.tank).to(0.5, {
            angle: angle
          }), tween(this.tank).call(() => {
            // 做矫正
            this.tank.angle = tmpAngle;
          })).start();
        }

        getAngle(oldPos, nowPos) {
          var dir = new Vec2(nowPos.x - oldPos.x, nowPos.y - oldPos.y);
          var angle = dir.signAngle(new Vec2(0, 1));
          angle = angle * 180 / Math.PI;
          angle = angle > 0 ? -angle : Math.abs(angle);
          return angle;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tank", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7e82004646cef7955ab2a6009f92f7729a6d5f1f.js.map