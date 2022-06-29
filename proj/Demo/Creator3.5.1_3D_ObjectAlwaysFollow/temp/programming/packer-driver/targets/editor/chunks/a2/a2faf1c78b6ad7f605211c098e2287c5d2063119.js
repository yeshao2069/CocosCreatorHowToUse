System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, tween, Quat, KeyCode, input, Input, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ObjectAlwaysFollow;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      Quat = _cc.Quat;
      KeyCode = _cc.KeyCode;
      input = _cc.input;
      Input = _cc.Input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0adf4wqsmJIFbob8Z2LI7gg", "ObjectAlwaysFollow", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ObjectAlwaysFollow", ObjectAlwaysFollow = (_dec = ccclass('ObjectAlwaysFollow'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class ObjectAlwaysFollow extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "soldier", _descriptor, this);

          _initializerDefineProperty(this, "follower", _descriptor2, this);

          this.soldierRotate = new Vec3();
          this.tempQuat = new Quat();
        }

        start() {
          input.on(Input.EventType.KEY_UP, this.onKeyUPEvent, this);
        }

        onKeyUPEvent(evt) {
          let quat = this.soldier.getRotation();
          quat.getEulerAngles(this.soldierRotate);

          switch (evt.keyCode) {
            case KeyCode.ARROW_LEFT:
              this.soldierRotate.y += 10;
              /* 这边需要特殊处理的情况是
               * 四元素从 rotateY:180-190, 做旋转的时候会出现问题。这边做了规避操作。
               * 同理， rotateY: -180~-190, 做旋转的时候也会出现问题，此处规避。
               */

              if (this.soldierRotate.y > 180) {
                this.soldierRotate.y -= 360;
                Quat.fromEuler(quat, this.soldierRotate.x, this.soldierRotate.y, this.soldierRotate.z);
                Quat.fromEuler(this.tempQuat, this.soldierRotate.x, -180, this.soldierRotate.z);
                tween(this.soldier).stop();
                tween(this.soldier).call(() => {
                  this.soldier.setRotation(this.tempQuat);
                }).to(0.15, {
                  rotation: quat
                }).call(() => {
                  this.rotateAroundNode(this.follower, this.soldier.position, Vec3.UP, 10);
                }).start();
              } else {
                Quat.fromEuler(quat, this.soldierRotate.x, this.soldierRotate.y, this.soldierRotate.z);
                tween(this.soldier).stop();
                tween(this.soldier).to(0.15, {
                  rotation: quat
                }).call(() => {
                  this.rotateAroundNode(this.follower, this.soldier.position, Vec3.UP, 10);
                }).start();
              }

              break;

            case KeyCode.ARROW_RIGHT:
              this.soldierRotate.y -= 10;
              console.log(this.soldierRotate);

              if (this.soldierRotate.y < -180) {
                this.soldierRotate.y += 360;
                Quat.fromEuler(quat, this.soldierRotate.x, this.soldierRotate.y, this.soldierRotate.z);
                Quat.fromEuler(this.tempQuat, this.soldierRotate.x, 180, this.soldierRotate.z);
                tween(this.soldier).stop();
                tween(this.soldier).call(() => {
                  this.soldier.setRotation(this.tempQuat);
                }).to(0.15, {
                  rotation: quat
                }).call(() => {
                  this.rotateAroundNode(this.follower, this.soldier.position, Vec3.UP, -10);
                }).start();
              } else {
                Quat.fromEuler(quat, this.soldierRotate.x, this.soldierRotate.y, this.soldierRotate.z);
                tween(this.soldier).stop();
                tween(this.soldier).to(0.15, {
                  rotation: quat
                }).call(() => {
                  this.rotateAroundNode(this.follower, this.soldier.position, Vec3.UP, -10);
                }).start();
              }

              break;
          }
        }

        rotateAroundNode(self, targetPos, axis, angle) {
          let _quat = new Quat();

          const v1 = new Vec3();
          const v2 = new Vec3();
          let pos2 = self.position;
          let rad = angle / 180 * Math.PI; //根据旋转轴和旋转弧度计算四元数

          Quat.fromAxisAngle(_quat, axis, rad); //相减，目标点与相机点之间的向量

          Vec3.subtract(v1, pos2, targetPos); //把向量dir根据计算到的四元数旋转，然后计算出旋转后的距离

          Vec3.transformQuat(v2, v1, _quat);
          Vec3.add(v2, targetPos, v2);
          self.setPosition(v2); //根据轴和弧度绕世界空间下指定轴旋转四元数

          Quat.rotateAround(_quat, self.rotation, axis, rad);
          return _quat;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "soldier", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "follower", [_dec3], {
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
//# sourceMappingURL=a2faf1c78b6ad7f605211c098e2287c5d2063119.js.map