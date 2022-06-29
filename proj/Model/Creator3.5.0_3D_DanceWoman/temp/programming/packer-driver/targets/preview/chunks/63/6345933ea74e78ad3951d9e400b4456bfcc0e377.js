System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AnimationComponent, _dec, _class, _class2, _descriptor, _crd, ccclass, property, Model3D;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AnimationComponent = _cc.AnimationComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "245b1om+RZNsImDpKAUTA2P", "Model3D", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Model3D", Model3D = (_dec = ccclass('Model3D'), _dec(_class = (_class2 = class Model3D extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "playingIndex", _descriptor, this);
        }

        start() {
          this.playNextAnimation();
        }

        playNextAnimation() {
          var animation = this.getComponent(AnimationComponent);
          var clips = animation.clips;

          if (!clips[this.playingIndex]) {
            this.playingIndex = 0;
          }

          animation.play(clips[this.playingIndex].name);
          this.playingIndex++;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playingIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6345933ea74e78ad3951d9e400b4456bfcc0e377.js.map