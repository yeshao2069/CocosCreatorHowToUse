System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, tween, Label, Tween, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, AdaptiveAngleRotation2D;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      Label = _cc.Label;
      Tween = _cc.Tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7dc39zcylPo5KSNf796B19", "AdaptiveAngleRotation2D", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AdaptiveAngleRotation2D", AdaptiveAngleRotation2D = (_dec = ccclass('AdaptiveAngleRotation2D'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = class AdaptiveAngleRotation2D extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "testNode", _descriptor, this);

          _initializerDefineProperty(this, "showLabel", _descriptor2, this);
        }

        // 顺时针旋转90
        onPositive() {
          Tween.stopAllByTarget(this.testNode);
          tween(this.testNode).by(0.2, {
            angle: -90
          }).delay(0.2).call(() => {
            this.fitAngle();
            this.showLabel.string = "angle : " + this.testNode.angle;
          }).start();
        } // 逆时针旋转90


        onReverse() {
          Tween.stopAllByTarget(this.testNode);
          tween(this.testNode).by(0.2, {
            angle: 90
          }).delay(0.2).call(() => {
            this.fitAngle();
            this.showLabel.string = "angle : " + this.testNode.angle;
          }).start();
        } // 角度数值处理


        fitAngle() {
          if (this.testNode.angle >= 360) {
            this.testNode.angle -= 360;
          }

          if (this.testNode.angle <= -360) {
            this.testNode.angle += 360;
          }
        } // 自适应旋转


        onFit() {
          var r = Math.round(Math.random() * 360 - 180);
          console.log("随机获取旋转后的角度Angle(-180~180):", r);
          var currentAngle = this.testNode.angle;
          console.log("旋转前的节点的角度Angle:", currentAngle);
          var diffAngle = r - currentAngle;
          console.log("需要旋转的角度Angle:", diffAngle);

          if (diffAngle >= 360) {
            diffAngle -= 360;
          }

          if (diffAngle <= -360) {
            diffAngle += 360;
          }

          tween(this.testNode).by(0.2, {
            angle: diffAngle
          }).delay(0.2).call(() => {
            console.log("旋转后的节点的角度Angle:", this.testNode.angle);
            this.showLabel.string = "angle : " + this.testNode.angle;
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "testNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "showLabel", [_dec3], {
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
//# sourceMappingURL=ca67b05f1586be95d9b99a2a19cb8312e63ec0da.js.map