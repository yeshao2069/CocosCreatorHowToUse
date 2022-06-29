System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, game, Mask, Slider, Label, Game, JSB, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, MaskCtl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      Mask = _cc.Mask;
      Slider = _cc.Slider;
      Label = _cc.Label;
      Game = _cc.Game;
    }, function (_ccEnv) {
      JSB = _ccEnv.JSB;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffe8caddyRF8qMnrQpC/khJ", "MaskCtl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MaskCtl", MaskCtl = (_dec = ccclass('MaskCtl'), _dec2 = property(Mask), _dec3 = property(Slider), _dec4 = property(Label), _dec(_class = (_class2 = class MaskCtl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mask", _descriptor, this);

          _initializerDefineProperty(this, "slider", _descriptor2, this);

          _initializerDefineProperty(this, "label", _descriptor3, this);
        }

        onLoad() {
          this.slider.progress = this.mask.alphaThreshold;
        }

        update(deltaTime) {
          if (game.renderType !== Game.RENDER_TYPE_WEBGL && !JSB) {
            return;
          }

          this.mask.alphaThreshold = this.slider.progress;
          this.label.string = this.slider.progress.toFixed(1);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "slider", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec4], {
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
//# sourceMappingURL=c219b92f47e9ed2925ad6fb433749e388f1a1882.js.map