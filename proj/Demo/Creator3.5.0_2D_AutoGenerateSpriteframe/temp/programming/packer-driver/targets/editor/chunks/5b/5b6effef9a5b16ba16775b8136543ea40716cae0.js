System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, UITransform, Layers, Texture2D, ImageAsset, SpriteFrame, Sprite, Color, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AutoGenerateSpriteframe;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Layers = _cc.Layers;
      Texture2D = _cc.Texture2D;
      ImageAsset = _cc.ImageAsset;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a644cyBuU9Br5mFieu5Fp+c", "AutoGenerateSpriteframe", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoGenerateSpriteframe", AutoGenerateSpriteframe = (_dec = ccclass('AutoGenerateSpriteframe'), _dec2 = property(Node), _dec(_class = (_class2 = class AutoGenerateSpriteframe extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "uiNode", _descriptor, this);
        }

        start() {
          let aNode = new Node();
          aNode.name = 'new A';
          let a = aNode.addComponent(UITransform);
          a.setContentSize(100, 100);
          aNode.layer = Layers.Enum.UI_2D;
          this.uiNode.addChild(aNode);
          let sprite = aNode.addComponent(Sprite);
          sprite.spriteFrame = this.genSpriteFrame(100, 100, new Color(255, 0, 0, 255));
        }
        /**
         * 生成精灵帧
         * @param width 宽
         * @param height 高
         * @param color 颜色
         * @returns sprite frame
         */


        genSpriteFrame(width, height, color = new Color(255, 255, 255, 255)) {
          const data = new Uint8Array(width * height * 4);

          for (let i = 0; i < data.byteLength / 4; i++) {
            //R
            data[i * 4 + 0] = color.r; //G

            data[i * 4 + 1] = color.g; //B

            data[i * 4 + 2] = color.b; //A

            data[i * 4 + 3] = color.a;
          }

          const image = new ImageAsset();
          image.reset({
            _data: data,
            _compressed: false,
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888
          });
          const texture = new Texture2D();
          texture.image = image;
          const spf = new SpriteFrame();
          spf.texture = texture; // 动态生成的纹理，不能参与动态图集

          spf.packable = false;
          return spf;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiNode", [_dec2], {
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
//# sourceMappingURL=5b6effef9a5b16ba16775b8136543ea40716cae0.js.map