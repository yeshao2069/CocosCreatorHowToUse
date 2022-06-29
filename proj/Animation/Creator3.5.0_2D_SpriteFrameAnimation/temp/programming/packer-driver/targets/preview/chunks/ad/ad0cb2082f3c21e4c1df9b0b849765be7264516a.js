System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AnimationComponent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SheepAnimationCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AnimationComponent = _cc.AnimationComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "42181yZSMVCHbH8KsSMa7hY", "SheepAnimationCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SheepAnimationCtrl", SheepAnimationCtrl = (_dec = ccclass('SheepAnimationCtrl'), _dec2 = property(AnimationComponent), _dec(_class = (_class2 = class SheepAnimationCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sheepAnim", _descriptor, this);

          this._playAnimCallBack = void 0;
          this._time = 3;
        }

        onLoad() {
          var anim = this.sheepAnim;

          this._playAnimCallBack = function () {
            anim.play('sheep_jump');
          };

          this.scheduleOnce(this._playAnimCallBack, this._time);
        }

        reset() {
          this.sheepAnim.play('sheep_run');
          this.scheduleOnce(this._playAnimCallBack, this._time);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sheepAnim", [_dec2], {
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
//# sourceMappingURL=ad0cb2082f3c21e4c1df9b0b849765be7264516a.js.map