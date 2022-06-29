System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Label, MeshRenderer, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, UseLabelTexture;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      MeshRenderer = _cc.MeshRenderer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e748LYxHRLOr0eqMXQBCVg", "useLabelTexture", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UseLabelTexture", UseLabelTexture = (_dec = ccclass('UseLabelTexture'), _dec2 = property(Label), _dec(_class = (_class2 = class UseLabelTexture extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "label", _descriptor, this);
        }

        start() {}

        update(deltaTime) {
          // Your update function goes here.
          this.label.string = (parseInt(this.label.string) - 1).toString();
          this.label.node.active = true;
          this.label.updateRenderData(true);
          this.label.node.active = false;
          var mat = this.node.getComponent(MeshRenderer).getMaterial(0);
          mat.setProperty('mainTexture', this.label.spriteFrame.getGFXTexture());
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aba868dcd658e0062c207c47f9a2d39ece07fceb.js.map