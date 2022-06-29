System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, tween, Sprite, UIOpacity, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, TweenOpacityChange;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43a1atgQAVPwJtisgOcrs/3", "TweenOpacityChange", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TweenOpacityChange", TweenOpacityChange = (_dec = ccclass('TweenOpacityChange'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class TweenOpacityChange extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "SpriteA", _descriptor, this);

          _initializerDefineProperty(this, "SpriteB", _descriptor2, this);
        }

        start() {
          this.onClickReset();
        }

        onClickReset() {
          // 方式1
          let spA = this.SpriteA.getComponent(Sprite);
          tween(spA.color).to(3, {
            a: 50
          }).to(5, {
            a: 255
          }).start(); // 方式2

          let spB = this.SpriteB.getComponent(UIOpacity);

          if (!spB) {
            this.SpriteB.addComponent(UIOpacity);
            spB = this.SpriteB.getComponent(UIOpacity);
          }

          tween(spB).to(3, {
            opacity: 50
          }).to(5, {
            opacity: 255
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "SpriteA", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "SpriteB", [_dec3], {
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
//# sourceMappingURL=93bdbeb023fd348375a5081e01c5262a3e50905b.js.map