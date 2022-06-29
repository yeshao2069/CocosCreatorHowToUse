System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, VideoPlayer, Label, macro, Prefab, Button, find, instantiate, AnimationComponent, Color, Animation, view, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, TIPS, VideoStayOnBottom;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      VideoPlayer = _cc.VideoPlayer;
      Label = _cc.Label;
      macro = _cc.macro;
      Prefab = _cc.Prefab;
      Button = _cc.Button;
      find = _cc.find;
      instantiate = _cc.instantiate;
      AnimationComponent = _cc.AnimationComponent;
      Color = _cc.Color;
      Animation = _cc.Animation;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "04feeaheSlJdop7OvMVbrEs", "VideoStayOnBottom", undefined);

      ({
        ccclass,
        property
      } = _decorator); // 开启 Canvas 背景支持 alpha 通道

      macro.ENABLE_TRANSPARENT_CANVAS = true;
      TIPS = ['这个是一个范例，该范例是让用户知道如何把 UI 渲染到 VideoPlayer 上', 'UI 渲染到 VideoPlayer 上只需三个步骤：1。创建代码开启 cc.macro.ENABLE_TRANSPARENT_CANVAS 2。设置摄像机的背景颜色的透明度为零 3。勾选 VideoPlayer 组件上的 stayOnBottom 属性 -- 就 OK 了', 'UI 居然可以显示在 VidePlayer 上面了，👍👍👍👍👍', '哇，可以做弹幕功能了... 💐💐💐💐💐', '哇，可以做约会游戏了... 💐💐💐💐💐', '注意：该功能只支持 web 平台', '注意：该功能的效果在各个浏览器的限制下不能保持效果一致', '我是打酱油的...', 'Cococs Creator 是最棒的，不接收反驳...', '前面的说的对...', '其实我也不知道要说什么，反正只是为了充数用而已'];

      _export("VideoStayOnBottom", VideoStayOnBottom = (_dec = ccclass('VideoStayOnBottom'), _dec2 = property(Prefab), _dec3 = property(VideoPlayer), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = class VideoStayOnBottom extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tempBarrage", _descriptor, this);

          _initializerDefineProperty(this, "videoPlayer", _descriptor2, this);

          _initializerDefineProperty(this, "barrageRoot", _descriptor3, this);

          _initializerDefineProperty(this, "tips", _descriptor4, this);

          this.__id = 0;
          this._animList = [];
          this._intervalID = 0;
        }

        start() {
          this.__id = 0;
          this._animList = [];
          var node = find('Canvas/Play');
          this.btnPlay = node.getComponent(Button);
          this.btnPlay.interactable = true;
          node = find('Canvas/Pause');
          this.btnPause = node.getComponent(Button);
          this.btnPause.interactable = false;
          node = find('Canvas/Stop');
          this.btnStop = node.getComponent(Button);
          this.btnStop.interactable = false;
        } // 创建弹幕


        onCreateBarrage() {
          var node = instantiate(this.tempBarrage);
          ++this.__id; // @ts-ignore

          node.___id = this.__id;
          var pos = node.getPosition();
          pos.x = 0;
          pos.y = this.randomNum(300, -120) - view.getFrameSize().height / 2;
          node.setPosition(pos);
          node.parent = this.node;
          var r = this.randomNum(0, 255);
          var g = this.randomNum(0, 255);
          var b = this.randomNum(0, 255);
          var newNode = node.getChildByName('node');
          var label = newNode.getComponent(Label);
          label.color = new Color(r, g, b);
          var idx = Math.floor(this.randomNum(0, TIPS.length - 1));
          label.string = TIPS[idx];
          var animComp = newNode.getComponent(AnimationComponent);
          animComp.on(Animation.EventType.STOP, () => {
            // @ts-ignore
            delete this._animList[node.___id];
            node.destroy();
          });
          this._animList[this.__id] = animComp;
        } // 清空弹幕


        onClearBarrages() {
          this._intervalID && clearInterval(this._intervalID);
          var keys = Object.keys(this._animList);

          for (var i = 0, len = keys.length; i < len; ++i) {
            var key = keys[i];
            var anim = this._animList[key];
            anim.node.destroy();
          }

          this._animList.length = 0;
        } // 开启弹幕


        onOpenBarrages() {
          this._intervalID = setInterval(() => {
            this.onCreateBarrage();
          }, 1000);
          this.onPlayAnim();
        } // 关闭弹幕


        onCloseBarrages() {
          this._intervalID && clearInterval(this._intervalID);
          this.onPauseAnim();
        } // 播放弹幕动画


        onPlayAnim() {
          var keys = Object.keys(this._animList);

          for (var i = 0, len = keys.length; i < len; ++i) {
            var key = keys[i];
            var anim = this._animList[key];

            if (anim.getAnimationState('barrage-animClip').isPaused) {
              anim.resume();
            } else {
              anim.play();
            }
          }
        } // 暂停弹幕动画


        onPauseAnim() {
          for (var key in this._animList) {
            var anim = this._animList[key];
            anim.pause();
          }
        } // 播放视频


        play() {
          this.tips.active = false;
          this.btnPlay.interactable = false;
          this.btnPause.interactable = true;
          this.btnStop.interactable = true;
          this.videoPlayer.play();
          this.onOpenBarrages();
        } // 暂停视频


        pause() {
          this.btnPlay.interactable = true;
          this.btnPause.interactable = false;
          this.btnStop.interactable = true;
          this.videoPlayer.pause();
          this.onCloseBarrages();
        } // 停止视频


        stop() {
          this.tips.active = true;
          this.btnPlay.interactable = true;
          this.btnPause.interactable = false;
          this.btnStop.interactable = false;
          this.videoPlayer.stop();
          this.onClearBarrages();
        }

        randomNum(min, max) {
          return Math.random() * (max - min + 1) + min;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tempBarrage", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "videoPlayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "barrageRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tips", [_dec5], {
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
//# sourceMappingURL=9e090e30304373948292079439f64d5c018eb75b.js.map