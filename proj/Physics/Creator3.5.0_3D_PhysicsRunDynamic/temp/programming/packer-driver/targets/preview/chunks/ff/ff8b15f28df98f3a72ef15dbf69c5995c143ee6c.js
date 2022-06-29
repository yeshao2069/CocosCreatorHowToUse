System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, RigidBody, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, requireComponent, DynamicTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f8a5bTmK2JK9bZwwUh05mx1", "DynamicTest", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("DynamicTest", DynamicTest = (_dec = ccclass("DynamicTest"), _dec2 = requireComponent(RigidBody), _dec3 = property({
        visible: function visible() {
          return this.USE_IMPULSE;
        }
      }), _dec4 = property({
        visible: function visible() {
          return this.USE_FORCE;
        }
      }), _dec5 = property({
        visible: function visible() {
          return this.USE_TORQUE;
        }
      }), _dec(_class = _dec2(_class = (_class2 = class DynamicTest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "USE_LOCAL", _descriptor, this);

          _initializerDefineProperty(this, "pointOfAction", _descriptor2, this);

          _initializerDefineProperty(this, "USE_IMPULSE", _descriptor3, this);

          _initializerDefineProperty(this, "impulse", _descriptor4, this);

          _initializerDefineProperty(this, "USE_FORCE", _descriptor5, this);

          _initializerDefineProperty(this, "force", _descriptor6, this);

          _initializerDefineProperty(this, "USE_TORQUE", _descriptor7, this);

          _initializerDefineProperty(this, "torque", _descriptor8, this);
        }

        applyImpulse() {
          if (!this.USE_IMPULSE) return;
          var rigidbody = this.getComponent(RigidBody);

          if (rigidbody) {
            if (this.USE_LOCAL) {
              rigidbody.applyLocalImpulse(this.impulse, this.pointOfAction);
            } else {
              rigidbody.applyImpulse(this.impulse, this.pointOfAction);
            }
          }
        }

        applyFoce() {
          if (!this.USE_FORCE) return;
          var rigidbody = this.getComponent(RigidBody);

          if (rigidbody) {
            if (this.USE_LOCAL) {
              rigidbody.applyLocalForce(this.force, this.pointOfAction);
            } else {
              rigidbody.applyForce(this.force, this.pointOfAction);
            }
          }
        }

        applyTorque() {
          if (!this.USE_TORQUE) return;
          var rigidbody = this.getComponent(RigidBody);

          if (rigidbody) {
            if (this.USE_LOCAL) {
              rigidbody.applyLocalTorque(this.torque);
            } else {
              rigidbody.applyTorque(this.torque);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "USE_LOCAL", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pointOfAction", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "USE_IMPULSE", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "impulse", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "USE_FORCE", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "force", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "USE_TORQUE", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "torque", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff8b15f28df98f3a72ef15dbf69c5995c143ee6c.js.map