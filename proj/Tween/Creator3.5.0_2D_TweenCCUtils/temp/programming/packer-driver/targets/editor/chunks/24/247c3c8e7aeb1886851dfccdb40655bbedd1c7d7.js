System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, CCUtils, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Test;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCCUtils(extras) {
    _reporterNs.report("CCUtils", "./ccUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      CCUtils = _unresolved_2.CCUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "492828ivQdCjbIt9diLFv/b", "Test", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Test", Test = (_dec = ccclass('Test'), _dec2 = property(Node), _dec(_class = (_class2 = class Test extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "testNode", _descriptor, this);
        }

        start() {// Example
          // CCUtils.fadeOut(this.testNode, 2);
          // this.scheduleOnce(()=>{
          //     CCUtils.fadeIn(this.testNode, 2);
          // }, 2);
          // CCUtils.hide(this.testNode, 1);
          // CCUtils.show(this.testNode, 4);
        }

        onClick() {
          (_crd && CCUtils === void 0 ? (_reportPossibleCrUseOfCCUtils({
            error: Error()
          }), CCUtils) : CCUtils).toggleVisibility(this.testNode, 1);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "testNode", [_dec2], {
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
//# sourceMappingURL=247c3c8e7aeb1886851dfccdb40655bbedd1c7d7.js.map