System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Camera, RenderTexture, sys, UITransform, gfx, director, ImageAsset, Texture2D, SpriteFrame, Sprite, view, tween, Vec3, isValid, PREVIEW, Canvas2Image, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ScreenShot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCanvas2Image(extras) {
    _reporterNs.report("Canvas2Image", "./Canvas2Image", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Camera = _cc.Camera;
      RenderTexture = _cc.RenderTexture;
      sys = _cc.sys;
      UITransform = _cc.UITransform;
      gfx = _cc.gfx;
      director = _cc.director;
      ImageAsset = _cc.ImageAsset;
      Texture2D = _cc.Texture2D;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      view = _cc.view;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      isValid = _cc.isValid;
    }, function (_ccEnv) {
      PREVIEW = _ccEnv.PREVIEW;
    }, function (_unresolved_2) {
      Canvas2Image = _unresolved_2.Canvas2Image;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53fb3qYe7dAsLh2USCc07WQ", "ScreenShot", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScreenShot", ScreenShot = (_dec = ccclass('ScreenShot'), _dec2 = property(Camera), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = class ScreenShot extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "copyCamera", _descriptor, this);

          _initializerDefineProperty(this, "copyNode", _descriptor2, this);

          _initializerDefineProperty(this, "targetNode", _descriptor3, this);

          _initializerDefineProperty(this, "arrivedNode", _descriptor4, this);

          this.renderTex = null;
          this._canvas = null;
          this._buffer = null;
          this.canvas2Image = null;
          this.tempPos = new Vec3();
        }

        start() {
          this.canvas2Image = (_crd && Canvas2Image === void 0 ? (_reportPossibleCrUseOfCanvas2Image({
            error: Error()
          }), Canvas2Image) : Canvas2Image).getInstance();

          if (PREVIEW && sys.isNative) {
            console.log("暂时不支持模拟器，请构建并测试!");
            return;
          }

          this.renderTex = new RenderTexture();
          this.renderTex.reset({
            width: view.getVisibleSize().width,
            height: view.getVisibleSize().height
          });
          this.copyCamera.targetTexture = this.renderTex;
          this.tempPos = this.copyNode.getPosition();
        }

        onBtnSave() {
          this.capture(); // 定时任务

          this.scheduleOnce(() => {
            if (this && this.copyNode && isValid(this.copyNode)) {
              this.copyNode.setPosition(this.tempPos);
              this.copyNode.getComponent(Sprite).spriteFrame = null;
              this.copyNode.setScale(new Vec3(1, 1, 1));
            }
          }, 5);
          var width = this.targetNode.getComponent(UITransform).width;
          var height = this.targetNode.getComponent(UITransform).height;
          this.saveAsImage(width, height, this._buffer);
        } // 截图


        capture() {
          var width = this.targetNode.getComponent(UITransform).width;
          var height = this.targetNode.getComponent(UITransform).height;
          var worldPos = this.targetNode.getWorldPosition();
          var rt = this.renderTex;
          var texBuffers = [];
          texBuffers[0] = new Uint8Array(width * height * 4);
          var region = new gfx.BufferTextureCopy();
          region.texOffset.x = Math.round(worldPos.x);
          region.texOffset.y = Math.round(worldPos.y);
          region.texExtent.width = width;
          region.texExtent.height = height; // @ts-ignore

          director.root.device.copyTextureToBuffers(rt.getGFXTexture(), texBuffers, [region]);
          this._buffer = texBuffers[0];
          this.showImage(width, height);
        }

        showImage(width, height) {
          var img = new ImageAsset();
          img.reset({
            _data: this._buffer,
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888,
            _compressed: false
          });
          var texture = new Texture2D();
          texture.image = img;
          var sf = new SpriteFrame();
          sf.texture = texture;
          sf.packable = false;
          this.copyNode.getComponent(Sprite).spriteFrame = sf;
          this.copyNode.getComponent(Sprite).spriteFrame.flipUVY = true;
          this.copyNode.getComponent(UITransform).setContentSize(width, height);
          this.doCaptureAnim();
        } // 做截图动画


        doCaptureAnim() {
          if (this.copyNode) {
            var scale_fator = 0.95;
            var arrived_fator = 0.3;
            var pos = this.arrivedNode.getPosition();
            tween(this.copyNode).to(0.2, {
              scale: new Vec3(scale_fator, scale_fator, 1)
            }).to(0.3, {
              scale: new Vec3(1, 1, 1)
            }).parallel(tween(this.copyNode).to(0.5, {
              scale: new Vec3(arrived_fator, arrived_fator, 1)
            }), tween(this.copyNode).to(0.5, {
              position: pos
            })).start();
          }
        }

        saveAsImage(width, height, arrayBuffer) {
          if (sys.isBrowser) {
            if (!this._canvas) {
              this._canvas = document.createElement('canvas');
              this._canvas.width = width;
              this._canvas.height = height;
            } else {
              this.clearCanvas();
            }

            var _ctx = this._canvas.getContext('2d');

            var _rowBytes = width * 4;

            for (var row = 0; row < height; row++) {
              var sRow = height - 1 - row;

              var imageData = _ctx.createImageData(width, 1);

              var start = sRow * width * 4;

              for (var i = 0; i < _rowBytes; i++) {
                imageData.data[i] = arrayBuffer[start + i];
              }

              _ctx.putImageData(imageData, 0, row);
            } // @ts-ignore


            this.canvas2Image.saveAsPNG(this._canvas, width, height);
          } else if (sys.isNative) {
            console.log("原生平台暂不支持图片下载");
            return;
          } else if (sys.platform == sys.Platform.WECHAT_GAME) {
            if (!this._canvas) {
              // @ts-ignore
              this._canvas = wx.createCanvas();
              this._canvas.width = width;
              this._canvas.height = height;
            } else {
              this.clearCanvas();
            }

            var ctx = this._canvas.getContext('2d');

            var rowBytes = width * 4;

            for (var _row = 0; _row < height; _row++) {
              var _sRow = height - 1 - _row;

              var _imageData = ctx.createImageData(width, 1);

              var _start = _sRow * width * 4;

              for (var _i = 0; _i < rowBytes; _i++) {
                _imageData.data[_i] = arrayBuffer[_start + _i];
              }

              ctx.putImageData(_imageData, 0, _row);
            } // @ts-ignore


            this._canvas.toTempFilePath({
              x: 0,
              y: 0,
              width: this._canvas.width,
              height: this._canvas.height,
              destWidth: this._canvas.width,
              destHeight: this._canvas.height,
              fileType: "png",
              success: function success(res) {
                // @ts-ignore
                wx.showToast({
                  title: "截图成功"
                }); // @ts-ignore

                wx.saveImageToPhotoaAlbum({
                  filePath: res.tempFilePath,
                  success: function success(res) {
                    // @ts-ignore
                    wx.showToast({
                      title: "成功保存到设备相册"
                    });
                  }
                });
              }
            });
          }
        }

        clearCanvas() {
          var ctx = this._canvas.getContext('2d');

          ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "copyCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "copyNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "arrivedNode", [_dec5], {
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
//# sourceMappingURL=6cbf68be6f13634c38668c1ebd38e3923228e113.js.map