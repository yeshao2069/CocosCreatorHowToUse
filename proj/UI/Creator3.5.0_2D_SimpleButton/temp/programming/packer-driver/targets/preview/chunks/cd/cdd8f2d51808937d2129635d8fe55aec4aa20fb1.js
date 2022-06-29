System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Label, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SimpleButton;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28837Lz1NJCQapY8PUe7s99", "SimpleButton", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SimpleButton", SimpleButton = (_dec = ccclass('SimpleButton'), _dec2 = property(Label), _dec(_class = (_class2 = class SimpleButton extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "displayLabel", _descriptor, this);
        }

        onBtnLeftClicked() {
          console.log('Left button clicked!');
          this.displayLabel.string = "左边的按钮被点击!";
        }

        onBtnRightClicked() {
          console.log('Right button clicked!');
          this.displayLabel.string = "右边的按钮被点击!";
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "displayLabel", [_dec2], {
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
//# sourceMappingURL=cdd8f2d51808937d2129635d8fe55aec4aa20fb1.js.map