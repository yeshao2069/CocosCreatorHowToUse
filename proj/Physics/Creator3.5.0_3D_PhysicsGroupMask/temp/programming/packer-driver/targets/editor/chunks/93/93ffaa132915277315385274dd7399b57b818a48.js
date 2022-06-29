System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Enum, Collider, RigidBody, PhysicsSystem, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _dec7, _class4, _class5, _descriptor4, _descriptor5, _crd, ccclass, property, menu, EPHY_MASK, GroupMaskTestItem, GroupMaskTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export("EPHY_MASK", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Enum = _cc.Enum;
      Collider = _cc.Collider;
      RigidBody = _cc.RigidBody;
      PhysicsSystem = _cc.PhysicsSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6d6a3Qn/VPp4PYpBjxhd9d", "GroupMaskTest", undefined);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      (function (EPHY_MASK) {
        EPHY_MASK[EPHY_MASK["M_NONE"] = 0] = "M_NONE";
        EPHY_MASK[EPHY_MASK["M_ALL"] = 4294967295] = "M_ALL";
      })(EPHY_MASK || _export("EPHY_MASK", EPHY_MASK = {}));

      ;
      Enum(EPHY_MASK);
      GroupMaskTestItem = (_dec = ccclass('GroupMaskTestItem'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: PhysicsSystem.PhysicsGroup
      }), _dec4 = property({
        type: EPHY_MASK
      }), _dec(_class = (_class2 = class GroupMaskTestItem {
        constructor() {
          _initializerDefineProperty(this, "target", _descriptor, this);

          _initializerDefineProperty(this, "group", _descriptor2, this);

          _initializerDefineProperty(this, "mask", _descriptor3, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "group", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return PhysicsSystem.PhysicsGroup.DEFAULT;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return EPHY_MASK.M_ALL;
        }
      })), _class2)) || _class);

      _export("GroupMaskTest", GroupMaskTest = (_dec5 = ccclass('GroupMaskTest'), _dec6 = property({
        type: [GroupMaskTestItem]
      }), _dec7 = property({
        type: RigidBody
      }), _dec5(_class4 = (_class5 = class GroupMaskTest extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "items", _descriptor4, this);

          _initializerDefineProperty(this, "testBody", _descriptor5, this);
        }

        start() {
          this.items.forEach(i => {
            if (i.target) {
              let c = i.target.getComponent(Collider);
              c.setGroup(i.group);
              c.setMask(i.mask);
            }
          });
          this.testBody.setMask(0);
        }

        setItemMaskToNone(event, index) {
          const int = parseInt(index);
          let c = this.items[int].target.getComponent(Collider);
          c.setMask(EPHY_MASK.M_NONE);
          this.items.forEach(i => {
            if (i.target) {
              let c = i.target.getComponent(RigidBody);
              if (c) c.wakeUp();
            }
          });
        }

      }, (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "items", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "testBody", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=93ffaa132915277315385274dd7399b57b818a48.js.map