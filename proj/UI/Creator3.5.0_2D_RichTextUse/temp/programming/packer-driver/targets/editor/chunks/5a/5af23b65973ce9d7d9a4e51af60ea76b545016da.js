System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Label, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, RichTextCtl;

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

      _cclegacy._RF.push({}, "c4572Xpzn5KhpJ7iqYGZRaj", "RichTextCtl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RichTextCtl", RichTextCtl = (_dec = ccclass('RichTextCtl'), _dec2 = property(Label), _dec(_class = (_class2 = class RichTextCtl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "positionMessage", _descriptor, this);
        }

        clickme(event) {
          var clickPosition = event.touch.getUILocation();
          this.positionMessage.string = 'Clicked at: x = ' + parseInt(parseFloat(clickPosition.x) + '') + ', y = ' + parseInt(parseFloat(clickPosition.y) + '');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "positionMessage", [_dec2], {
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
//# sourceMappingURL=5af23b65973ce9d7d9a4e51af60ea76b545016da.js.map