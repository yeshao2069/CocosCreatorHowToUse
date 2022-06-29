System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Enum, PhysicsSystem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, menu, SupportPhysics, SupportPhyiscs;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Enum = _cc.Enum;
      PhysicsSystem = _cc.PhysicsSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5832cWlHE5BxZcD32D089So", "SupportPhyiscs", undefined);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      (function (SupportPhysics) {
        SupportPhysics[SupportPhysics["BUILTIN"] = 0] = "BUILTIN";
        SupportPhysics[SupportPhysics["CANNON"] = 1] = "CANNON";
        SupportPhysics[SupportPhysics["AMMO"] = 2] = "AMMO";
        SupportPhysics[SupportPhysics["BUILTIN_CANNON"] = 3] = "BUILTIN_CANNON";
        SupportPhysics[SupportPhysics["BUILTIN_AMMO"] = 4] = "BUILTIN_AMMO";
        SupportPhysics[SupportPhysics["CANNON_AMMO"] = 5] = "CANNON_AMMO";
      })(SupportPhysics || (SupportPhysics = {}));

      Enum(SupportPhysics);

      _export("SupportPhyiscs", SupportPhyiscs = (_dec = ccclass("SupportPhyiscs"), _dec2 = property({
        type: SupportPhysics
      }), _dec(_class = (_class2 = class SupportPhyiscs extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "support", _descriptor, this);
        }

        start() {
          // Your initialization goes here.
          switch (this.support) {
            case SupportPhysics.BUILTIN:
              if (PhysicsSystem.PHYSICS_BUILTIN) return;
              this.node.active = false;
              break;

            case SupportPhysics.CANNON:
              if (PhysicsSystem.PHYSICS_CANNON) return;
              this.node.active = false;
              break;

            case SupportPhysics.AMMO:
              if (PhysicsSystem.PHYSICS_AMMO) return;
              this.node.active = false;
              break;

            case SupportPhysics.BUILTIN_CANNON:
              if (PhysicsSystem.PHYSICS_BUILTIN || PhysicsSystem.PHYSICS_CANNON) return;
              this.node.active = false;
              break;

            case SupportPhysics.BUILTIN_AMMO:
              if (PhysicsSystem.PHYSICS_BUILTIN || PhysicsSystem.PHYSICS_AMMO) return;
              this.node.active = false;
              break;

            case SupportPhysics.CANNON_AMMO:
              if (PhysicsSystem.PHYSICS_CANNON || PhysicsSystem.PHYSICS_AMMO) return;
              this.node.active = false;
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "support", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return SupportPhysics.AMMO;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0a8e7d2183e18519077532522e79e4dd1fd969e7.js.map