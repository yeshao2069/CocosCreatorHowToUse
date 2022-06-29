System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Camera, Sprite, Node, Slider, RenderTexture, tween, GFXColorAttachment, GFXDepthStencilAttachment, UITransform, SpriteFrame, Label, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, CameraSample;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Camera = _cc.Camera;
      Sprite = _cc.Sprite;
      Node = _cc.Node;
      Slider = _cc.Slider;
      RenderTexture = _cc.RenderTexture;
      tween = _cc.tween;
      GFXColorAttachment = _cc.GFXColorAttachment;
      GFXDepthStencilAttachment = _cc.GFXDepthStencilAttachment;
      UITransform = _cc.UITransform;
      SpriteFrame = _cc.SpriteFrame;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e1b90/rohdEk4SdmmEZANaD", "CameraSample", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CameraSample = (_dec = ccclass('CameraSample'), _dec2 = property(Camera), _dec3 = property(Sprite), _dec4 = property(Node), _dec5 = property(Slider), _dec6 = property(Slider), _dec7 = property(Slider), _dec(_class = (_class2 = class CameraSample extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "camera", _descriptor, this);

          _initializerDefineProperty(this, "sp_camera", _descriptor2, this);

          _initializerDefineProperty(this, "node_icon", _descriptor3, this);

          _initializerDefineProperty(this, "sl_scale", _descriptor4, this);

          _initializerDefineProperty(this, "sl_h", _descriptor5, this);

          _initializerDefineProperty(this, "sl_v", _descriptor6, this);
        }

        onLoad() {
          const _colorAttachment = new GFXColorAttachment();

          const _depthStencilAttachment = new GFXDepthStencilAttachment();

          let renderTex = new RenderTexture();
          let spCameraUITrans = this.sp_camera.node.getComponent(UITransform);
          renderTex.reset({
            width: spCameraUITrans.width,
            height: spCameraUITrans.height,
            passInfo: {
              colorAttachments: [_colorAttachment],
              depthStencilAttachment: _depthStencilAttachment,
              subPasses: []
            }
          });
          let spriteframe = this.sp_camera.spriteFrame;
          let sp = new SpriteFrame();
          sp.reset({
            originalSize: spriteframe.originalSize,
            rect: spriteframe.rect,
            offset: spriteframe.offset,
            isRotate: spriteframe.rotated,
            borderTop: spriteframe.insetTop,
            borderLeft: spriteframe.insetLeft,
            borderBottom: spriteframe.insetBottom,
            borderRight: spriteframe.insetRight
          });
          this.camera.targetTexture = renderTex;
          sp.texture = renderTex;
          this.sp_camera.spriteFrame = sp; // 无限旋转

          tween(this.node_icon).repeatForever(tween(this.node_icon).by(1, {
            angle: -90
          })).start();
          this.onSliderChange(this.sl_scale);
          this.onSliderChange(this.sl_h);
          this.onSliderChange(this.sl_v);
        }

        onSliderChange(slider) {
          switch (slider) {
            case this.sl_scale:
              {
                const zoomRatio = this.sl_scale.progress * 2;
                this.camera.orthoHeight = 320 * zoomRatio; // 320是试验数据
                // this.sp_camera.node.scale = new Vec3(zoomRatio, zoomRatio, 1);

                break;
              }

            case this.sl_h:
              {
                let newCameraPos = this.camera.node.getPosition();
                newCameraPos.x = (this.sl_h.progress - 0.5) * this.node.getComponent(UITransform).width;
                this.camera.node.setPosition(newCameraPos);
                break;
              }

            case this.sl_v:
              {
                let newCameraPos = this.camera.node.getPosition();
                newCameraPos.y = (this.sl_v.progress - 0.5) * this.node.getComponent(UITransform).height;
                this.camera.node.setPosition(newCameraPos);
                break;
              }
          }
        }

        updateSliderLabel(slider) {
          let label = slider.node.getChildByName('label').getComponent(Label);

          switch (slider) {
            case this.sl_scale:
              {
                label.string = 'Scale (' + Math.round(slider.progress * 100).toString() + "%)";
                break;
              }

            case this.sl_h:
              {
                label.string = 'x (' + Math.round(slider.progress * 100).toString() + "%)";
                break;
              }

            case this.sl_v:
              {
                label.string = 'y (' + Math.round(slider.progress * 100).toString() + "%)";
                break;
              }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sp_camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_icon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sl_scale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sl_h", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sl_v", [_dec7], {
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
//# sourceMappingURL=3934dc53d5346f974f3ec9fe05f2f7b753b29dc3.js.map