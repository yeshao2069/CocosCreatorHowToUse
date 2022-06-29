System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ArcProgressBar, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, Case_ArcProgressBar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfArcProgressBar(extras) {
    _reporterNs.report("ArcProgressBar", "./ArcProgressBar", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      ArcProgressBar = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d580e1zHGBG/LvB8jB1+Ch7", "Case_ArcProgressBar", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Case_ArcProgressBar = (_dec = ccclass('CaseArcProgressBar'), _dec2 = property(_crd && ArcProgressBar === void 0 ? (_reportPossibleCrUseOfArcProgressBar({
        error: Error()
      }), ArcProgressBar) : ArcProgressBar), _dec3 = property(_crd && ArcProgressBar === void 0 ? (_reportPossibleCrUseOfArcProgressBar({
        error: Error()
      }), ArcProgressBar) : ArcProgressBar), _dec4 = property(_crd && ArcProgressBar === void 0 ? (_reportPossibleCrUseOfArcProgressBar({
        error: Error()
      }), ArcProgressBar) : ArcProgressBar), _dec5 = property(_crd && ArcProgressBar === void 0 ? (_reportPossibleCrUseOfArcProgressBar({
        error: Error()
      }), ArcProgressBar) : ArcProgressBar), _dec6 = property(_crd && ArcProgressBar === void 0 ? (_reportPossibleCrUseOfArcProgressBar({
        error: Error()
      }), ArcProgressBar) : ArcProgressBar), _dec(_class = (_class2 = class Case_ArcProgressBar extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "progressBar1", _descriptor, this);

          _initializerDefineProperty(this, "progressBar2", _descriptor2, this);

          _initializerDefineProperty(this, "progressBar3", _descriptor3, this);

          _initializerDefineProperty(this, "progressBar4", _descriptor4, this);

          _initializerDefineProperty(this, "progressBar5", _descriptor5, this);
        }

        onLoad() {
          this.play(this.progressBar1);
          this.play(this.progressBar2);
          this.play(this.progressBar3);
          this.play(this.progressBar4);
          this.play(this.progressBar5);
        }

        async play(progressBar) {
          while (1) {
            progressBar.progress = 0;
            await progressBar.to(2.5, 1);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressBar2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progressBar3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "progressBar4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "progressBar5", [_dec6], {
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
//# sourceMappingURL=a21841268eff450998db7e9ae1a70316d44a0884.js.map