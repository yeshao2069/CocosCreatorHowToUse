System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, VideoPlayer, Label, sys, log, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, VideoPlayerCtl;

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
      sys = _cc.sys;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89ed8KOwXdAjIXh5ikh52I8", "VideoPlayer", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("VideoPlayerCtl", VideoPlayerCtl = (_dec = ccclass('VideoPlayerCtl'), _dec2 = property(VideoPlayer), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec(_class = (_class2 = class VideoPlayerCtl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "videoPlayer", _descriptor, this);

          _initializerDefineProperty(this, "statusLabel", _descriptor2, this);

          _initializerDefineProperty(this, "currentTime", _descriptor3, this);

          _initializerDefineProperty(this, "resSwitchBtnLabel", _descriptor4, this);

          _initializerDefineProperty(this, "controlButtons", _descriptor5, this);

          _initializerDefineProperty(this, "keep_Ratio_Switch", _descriptor6, this);

          _initializerDefineProperty(this, "playVideoArea", _descriptor7, this);

          _initializerDefineProperty(this, "visibility", _descriptor8, this);
        }

        start() {
          // this.controlButtons.active = false;
          this.keep_Ratio_Switch.active = !(sys.isBrowser || sys.platform === sys.WECHAT_GAME);
          this.playVideoArea.on(Node.EventType.TOUCH_END, () => {
            this.videoPlayer.play();
          });
        }

        getStatus(event) {
          switch (event) {
            case VideoPlayer.EventType.PLAYING:
              return 'PLAYING';

            case VideoPlayer.EventType.PAUSED:
              return 'PAUSED';

            case VideoPlayer.EventType.STOPPED:
              return 'STOPPED';

            case VideoPlayer.EventType.COMPLETED:
              return 'COMPLETED';

            case VideoPlayer.EventType.META_LOADED:
              return 'META_LOADED';

            case VideoPlayer.EventType.CLICKED:
              return 'CLICKED';

            case VideoPlayer.EventType.READY_TO_PLAY:
              return 'READY_TO_PLAY';

            default:
              return 'NONE';
          }
        }

        onVideoPlayerEvent(sender, event) {
          this.statusLabel.string = 'Status: ' + this.getStatus(event);

          if (event === VideoPlayer.EventType.CLICKED) {
            if (this.videoPlayer.isPlaying) {
              this.videoPlayer.pause();
            } else {
              this.videoPlayer.play();
            }
          } else if (event === VideoPlayer.EventType.READY_TO_PLAY || event === VideoPlayer.EventType.META_LOADED) {
            this.controlButtons.active = true;
            this.playVideoArea.active = true;
          } else if (event === VideoPlayer.EventType.PLAYING) {
            this.playVideoArea.active = false;
          }
        }

        toggleFullscreen() {
          if (sys.isBrowser && sys.browserType === sys.BROWSER_TYPE_MOBILE_QQ && sys.browserVersion <= 7.2 && /Nexus 6/.test(navigator.userAgent)) {
            return log('May be crash, so prohibit full screen');
          }

          this.videoPlayer.fullScreenOnAwake = true;
        }

        toggleVisibility(event) {
          this.videoPlayer.node.active = !this.videoPlayer.node.active;
          this.playVideoArea.active = this.videoPlayer.node.active;
          this.visibility.string = 'Visibility: ' + this.videoPlayer.node.active;
        }

        keepRatioSwitch() {
          this.videoPlayer.keepAspectRatio = !this.videoPlayer.keepAspectRatio;
        }

        switchOnlineVideo() {
          this.videoPlayer.remoteURL = 'https://www.w3school.com.cn/i/movie.mp4';
          this.videoPlayer.resourceType = VideoPlayer.ResourceType.REMOTE;
          this.playVideoArea.active = true;
        }

        switchLoaclVide() {
          this.videoPlayer.resourceType = VideoPlayer.ResourceType.LOCAL;
          this.playVideoArea.active = true;
        }

        play() {
          this.videoPlayer.play();
          this.playVideoArea.active = false;
        }

        pause() {
          this.videoPlayer.pause();
        }

        stop() {
          this.videoPlayer.stop();
        }

        update() {
          if (this.currentTime && this.videoPlayer.currentTime >= 0) {
            this.currentTime.string = this.videoPlayer.currentTime.toFixed(2) + ' / ' + this.videoPlayer.duration.toFixed(2);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "videoPlayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "statusLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "resSwitchBtnLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "controlButtons", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "keep_Ratio_Switch", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "playVideoArea", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "visibility", [_dec9], {
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
//# sourceMappingURL=835c1234f39f721a9a58e30647556e6f0372c64d.js.map