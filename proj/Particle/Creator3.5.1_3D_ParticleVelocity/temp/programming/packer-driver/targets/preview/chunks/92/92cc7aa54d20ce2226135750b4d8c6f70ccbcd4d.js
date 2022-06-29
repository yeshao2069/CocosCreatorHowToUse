System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, math, Vec3, Quat, _dec, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, CameraController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      math = _cc.math;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a0d26ISgqhJiZNsx0tOfe6D", "CameraController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CameraController", CameraController = (_dec = ccclass("CameraController"), _dec(_class = (_class2 = class CameraController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "translateDelta", _descriptor, this);

          _initializerDefineProperty(this, "rotateDelta", _descriptor2, this);

          this._rotateDelta = 0;
          this._temp_vec3 = new Vec3();
          this._temp_quat = new Quat();
        }

        start() {
          // Your initialization goes here.
          this._rotateDelta = math.toRadian(this.rotateDelta);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


        translate(leftRight, backForth, dt) {
          Vec3.set(this._temp_vec3, leftRight * this.translateDelta * dt, 0, backForth * this.translateDelta * dt);
          this.node.translate(this._temp_vec3);
        }

        rotate(longitudinal, perpendicular, dt) {
          Quat.fromEuler(this._temp_quat, perpendicular * this.rotateDelta * dt, longitudinal * this.rotateDelta * dt, 0);
          this.node.rotate(this._temp_quat);
        }

        onPushJoystick(dt, customEventData) {
          switch (customEventData) {
            case 'F':
              this.translate(0, -1, dt);
              break;

            case 'B':
              this.translate(0, 1, dt);
              break;

            case 'L':
              this.translate(-1, 0, dt);
              break;

            case 'R':
              this.translate(1, 0, dt);
              break;

            case 'U':
              this.rotate(0, 1, dt);
              break;

            case 'D':
              this.rotate(0, -1, dt);
              break;

            case 'RL':
              this.rotate(1, 0, dt);
              break;

            case 'RR':
              this.rotate(-1, 0, dt);
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "translateDelta", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rotateDelta", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 15;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92cc7aa54d20ce2226135750b4d8c6f70ccbcd4d.js.map