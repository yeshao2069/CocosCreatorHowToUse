System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, sp, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SpineSkin;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sp = _cc.sp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f8f8ZufXxAPqvABIQ9wZx7", "SpineSkin", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpineSkin", SpineSkin = (_dec = ccclass('SpineSkin'), _dec2 = property({
        type: sp.Skeleton
      }), _dec(_class = (_class2 = class SpineSkin extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spine", _descriptor, this);

          this.skinId = 0;
        }

        // 皮肤ID
        change() {
          var skins = ['girl', 'boy', 'girl-blue-cape', 'girl-spring-dress'].map(x => "full-skins/" + x);
          this.skinId = (this.skinId + 1) % skins.length;
          this.spine.setSkin(skins[this.skinId]);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec2], {
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
//# sourceMappingURL=5c4c22cfd7664ee157a5c31d5983498fdaa54e93.js.map