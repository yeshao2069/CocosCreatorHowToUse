System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, dragonBones, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, DragonBonesReplaceSlot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      dragonBones = _cc.dragonBones;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96d80MJfKhDpaaVEY/0+PHW", "DragonBonesReplaceSlot", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonBonesReplaceSlot", DragonBonesReplaceSlot = (_dec = ccclass('DragonBonesReplaceSlot'), _dec2 = property(dragonBones.ArmatureDisplay), _dec3 = property(dragonBones.ArmatureDisplay), _dec(_class = (_class2 = class DragonBonesReplaceSlot extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "armatureDisplay", _descriptor, this);

          _initializerDefineProperty(this, "replaceArmatureDisplay", _descriptor2, this);

          this._leftWeaponIndex = 0;
          this._rightDisplayIndex = 0;
          this._rightDisplayNames = [];
          this._rightDisplayOffset = [];
        }

        start() {
          this.replaceArmatureDisplay.node.active = false;
          this._leftWeaponIndex = 0;
          this._rightDisplayIndex = 0;
          this._rightDisplayNames = ["weapon_1004_r", "weapon_1004d_r"];
          this._rightDisplayOffset = [{
            x: 0,
            y: 0
          }, {
            x: -60,
            y: 100
          }];
        }

        onClickLeft() {
          let armature = this.armatureDisplay.armature();
          let slot = armature.getSlot("weapon_hand_l");
          slot.displayIndex = slot.displayIndex == 0 ? 4 : 0;
        }

        onClickRight() {
          this._rightDisplayIndex++;
          this._rightDisplayIndex %= this._rightDisplayNames.length;
          let armature = this.armatureDisplay.armature();
          let slot = armature.getSlot("weapon_hand_r");
          const displayName = this._rightDisplayNames[this._rightDisplayIndex];
          let factory = dragonBones.CCFactory.getInstance();
          factory.replaceSlotDisplay(this.replaceArmatureDisplay.getArmatureKey(), "weapon", "weapon_r", displayName, slot);
          let offset = this._rightDisplayOffset[this._rightDisplayIndex];
          slot.parent.offset.x = offset.x;
          slot.parent.offset.y = offset.y;
          armature.invalidUpdate();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "armatureDisplay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "replaceArmatureDisplay", [_dec3], {
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
//# sourceMappingURL=7cd3719a20f3d8d6e7290cc11dc0b8b522fb6b0b.js.map