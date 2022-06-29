System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, AutoItem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AutoClick;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAutoItem(extras) {
    _reporterNs.report("AutoItem", "./AutoItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      AutoItem = _unresolved_2.AutoItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c22bqj9j9E/Zia+SyA7h/Z", "AutoClick", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoClick", AutoClick = (_dec = ccclass('AutoClick'), _dec2 = property([_crd && AutoItem === void 0 ? (_reportPossibleCrUseOfAutoItem({
        error: Error()
      }), AutoItem) : AutoItem]), _dec(_class = (_class2 = class AutoClick extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "buttons", _descriptor, this);
        }

        start() {
          this.autoClick();
        }

        autoClick() {
          var dt = 0;
          this.buttons.forEach(button => {
            dt += button.delay;
            this.scheduleOnce(() => {
              button.button && button.click();
            }, dt);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttons", [_dec2], {
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
//# sourceMappingURL=d1bbde5eeaa9c427878c42ada1cf5c4f64bcf106.js.map