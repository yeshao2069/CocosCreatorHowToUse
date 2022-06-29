System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, sp, Size, _dec, _dec2, _class2, _class3, _descriptor, _crd, ccclass, property, _class;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sp = _cc.sp;
      Size = _cc.Size;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5650ehn6LJFBZU2fPq4+mQE", "SpineMeshEffect", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", _class = (_dec = ccclass('SpineMeshEffect'), _dec2 = property({
        type: sp.Skeleton
      }), _dec(_class2 = (_class3 = class _class3 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "skeleton", _descriptor, this);

          this._swirlTime = 0;
          this._maxEffect = 0;
          this._index = 0;
          this._bound = void 0;
          this._swirlEffect = void 0;
          this._jitterEffect = void 0;
        }

        start() {
          this._swirlTime = 0;
          this._maxEffect = 3;
          this._index = 0;
          const skeletonNodeUIProps = this.skeleton.node._uiProps.uiTransformComp;
          this._bound = new Size(skeletonNodeUIProps.width, skeletonNodeUIProps.height);
          this._swirlEffect = new sp.VertexEffectDelegate();

          this._swirlEffect.initSwirlWithPowOut(0, 2);

          this._jitterEffect = new sp.VertexEffectDelegate();

          this._jitterEffect.initJitter(20, 20);
        }

        switchEffect() {
          this._index++;

          if (this._index >= this._maxEffect) {
            this._index = 0;
          }

          switch (this._index) {
            case 0:
              this.skeleton.setVertexEffectDelegate(null);
              break;

            case 1:
              this.skeleton.setVertexEffectDelegate(this._jitterEffect);
              break;

            case 2:
              this.skeleton.setVertexEffectDelegate(this._swirlEffect);
              break;
          }
        }

        update(dt) {
          if (this._index == 2) {
            this._swirlTime += dt;
            let percent = this._swirlTime % 2;
            if (percent > 1) percent = 1 - (percent - 1);
            let bound = this._bound;

            let swirlEffect = this._swirlEffect.getSwirlVertexEffect();

            swirlEffect.angle = 360 * percent;
            swirlEffect.centerX = bound.width * 0.5;
            swirlEffect.centerY = bound.height * 0.5;
            swirlEffect.radius = percent * Math.sqrt(bound.width * bound.width + bound.height * bound.height);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "skeleton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fcd75f5543445ddf3135177914d9e23d6a472f73.js.map