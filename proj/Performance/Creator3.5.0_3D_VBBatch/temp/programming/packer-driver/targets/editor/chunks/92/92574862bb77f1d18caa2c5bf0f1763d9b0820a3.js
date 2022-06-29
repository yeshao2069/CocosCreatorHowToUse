System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, LabelComponent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, confirmBox;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      LabelComponent = _cc.LabelComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "424b9SWaJNBLJEqkHEqrnzo", "confirmBox", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("confirmBox", confirmBox = (_dec = ccclass('confirmBox'), _dec2 = property(LabelComponent), _dec(_class = (_class2 = class confirmBox extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbTips", _descriptor, this);

          this.confirmCb = void 0;
          this.cancelCb = void 0;
        }

        start() {// Your initialization goes here.
        }

        show(tips, confirmCb, cancelCb) {
          this.lbTips.string = tips;
          this.confirmCb = confirmCb;
          this.cancelCb = cancelCb;
        }

        onBtnOKClick() {
          if (this.confirmCb) {
            this.confirmCb();
          }

          this.hide();
        }

        onBtnCancelClick() {
          if (this.cancelCb) {
            this.cancelCb();
          }

          this.hide();
        }

        hide() {
          this.node.active = false;
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbTips", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92574862bb77f1d18caa2c5bf0f1763d9b0820a3.js.map