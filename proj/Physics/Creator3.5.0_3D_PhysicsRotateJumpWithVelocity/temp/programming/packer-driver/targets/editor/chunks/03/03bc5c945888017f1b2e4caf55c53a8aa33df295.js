System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, RigidBody, Node, Vec3, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _dec5, _dec6, _class4, _class5, _descriptor6, _crd, ccclass, property, VelocityTestItem, VelocityTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RigidBody = _cc.RigidBody;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d9d7wQQppB76JSCs0InRmS", "VelocityTest", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      VelocityTestItem = (_dec = ccclass('VelocityTestItem'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        visible: function () {
          return this.USE_LINEAR;
        }
      }), _dec4 = property({
        visible: function () {
          return this.USE_ANGULAR;
        }
      }), _dec(_class = (_class2 = class VelocityTestItem {
        constructor() {
          _initializerDefineProperty(this, "target", _descriptor, this);

          _initializerDefineProperty(this, "USE_LINEAR", _descriptor2, this);

          _initializerDefineProperty(this, "linearVelocity", _descriptor3, this);

          _initializerDefineProperty(this, "USE_ANGULAR", _descriptor4, this);

          _initializerDefineProperty(this, "angularVelocity", _descriptor5, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "USE_LINEAR", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "linearVelocity", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "USE_ANGULAR", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "angularVelocity", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3();
        }
      })), _class2)) || _class);

      _export("VelocityTest", VelocityTest = (_dec5 = ccclass("VelocityTest"), _dec6 = property({
        type: [VelocityTestItem]
      }), _dec5(_class4 = (_class5 = class VelocityTest extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "items", _descriptor6, this);
        }

        // start () {
        //     this.items.forEach((i: VelocityTestItem) => {
        //         if (i.target) {
        //             let r = i.target.getComponent(RigidBody);
        //             i.USE_LINEAR && r.setLinearVelocity(i.linearVelocity);
        //             i.USE_ANGULAR && r.setAngularVelocity(i.angularVelocity);
        //         }
        //     });
        // }
        setItemVelocity(event, index) {
          const int = parseInt(index);
          const i = this.items[int];
          let r = i.target.getComponent(RigidBody);
          i.USE_LINEAR && r.setLinearVelocity(i.linearVelocity);
          i.USE_ANGULAR && r.setAngularVelocity(i.angularVelocity);
        }

      }, (_descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "items", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=03bc5c945888017f1b2e4caf55c53a8aa33df295.js.map