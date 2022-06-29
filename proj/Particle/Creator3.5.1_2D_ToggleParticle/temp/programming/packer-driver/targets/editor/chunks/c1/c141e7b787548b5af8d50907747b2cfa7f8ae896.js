System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ParticleSystem2D, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ParticleCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ParticleSystem2D = _cc.ParticleSystem2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4537b8fKftKAb3GhRNB7j+m", "ParticleCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ParticleCtrl", ParticleCtrl = (_dec = ccclass('ParticleCtrl'), _dec2 = property(ParticleSystem2D), _dec(_class = (_class2 = class ParticleCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "particle", _descriptor, this);
        }

        toggleParticlePlay() {
          var myParticle = this.particle;

          if (myParticle.particleCount > 0) {
            myParticle.stopSystem();
          } else {
            myParticle.resetSystem();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "particle", [_dec2], {
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
//# sourceMappingURL=c141e7b787548b5af8d50907747b2cfa7f8ae896.js.map