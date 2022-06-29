System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, profiler, Label, SpriteFrame, Sprite, EditBox, playerManager, confirmBox, constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _crd, ccclass, property, mainUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfplayerManager(extras) {
    _reporterNs.report("playerManager", "../../fight/playerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfirmBox(extras) {
    _reporterNs.report("confirmBox", "./confirmBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../framework/util/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      profiler = _cc.profiler;
      Label = _cc.Label;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      playerManager = _unresolved_2.playerManager;
    }, function (_unresolved_3) {
      confirmBox = _unresolved_3.confirmBox;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b58f4RcmHBBFILOG5qxAEvD", "mainUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mainUI", mainUI = (_dec = ccclass('mainUI'), _dec2 = property(_crd && playerManager === void 0 ? (_reportPossibleCrUseOfplayerManager({
        error: Error()
      }), playerManager) : playerManager), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec14 = property(Sprite), _dec15 = property(Sprite), _dec16 = property(Sprite), _dec17 = property(Node), _dec18 = property(Label), _dec19 = property(EditBox), _dec(_class = (_class2 = class mainUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "manager", _descriptor, this);

          _initializerDefineProperty(this, "lbFps", _descriptor2, this);

          _initializerDefineProperty(this, "lbDrawcall", _descriptor3, this);

          _initializerDefineProperty(this, "lbInstancing", _descriptor4, this);

          _initializerDefineProperty(this, "lbTriangle", _descriptor5, this);

          _initializerDefineProperty(this, "lbGFXMem", _descriptor6, this);

          _initializerDefineProperty(this, "lbGameLogic", _descriptor7, this);

          _initializerDefineProperty(this, "lbArtTriangle", _descriptor8, this);

          _initializerDefineProperty(this, "lbVertex", _descriptor9, this);

          _initializerDefineProperty(this, "lbPeople", _descriptor10, this);

          _initializerDefineProperty(this, "imgOn", _descriptor11, this);

          _initializerDefineProperty(this, "imgOff", _descriptor12, this);

          _initializerDefineProperty(this, "spInstacing", _descriptor13, this);

          _initializerDefineProperty(this, "spShadow", _descriptor14, this);

          _initializerDefineProperty(this, "spAliasing", _descriptor15, this);

          _initializerDefineProperty(this, "nodeConfirmBox", _descriptor16, this);

          _initializerDefineProperty(this, "lbVersion", _descriptor17, this);

          _initializerDefineProperty(this, "numberInput", _descriptor18, this);

          this.count = 0;
          this.curClickLogoTimes = 0;
          this.maxClickLogoTimes = 3;
        }

        set enableInstancing(value) {
          this.manager.enableInstancing = value;
          this.spInstacing.spriteFrame = value ? this.imgOn : this.imgOff;
        }

        get enableInstancing() {
          return this.manager.enableInstancing;
        }

        set enableShadow(value) {
          this.manager.enableShadow = value;
          this.spShadow.spriteFrame = value ? this.imgOn : this.imgOff;
        }

        get enableShadow() {
          return this.manager.enableShadow;
        }

        shareGame(title, imageUrl) {
          // @ts-ignore
          if (!window.wx) {
            return;
          } // @ts-ignore


          window.wx.showShareMenu({
            withShareTicket: true,
            complete: () => {}
          }); // @ts-ignore

          window.wx.onShareAppMessage(function () {
            // 用户点击了“转发”按钮
            return {
              title: title,
              imageUrl: imageUrl
            };
          }); // @ts-ignore

          var updateManager = window['wx'].getUpdateManager();
          updateManager.onUpdateReady(() => {
            // @ts-ignore
            window['wx'].showModal({
              title: '温馨提示',
              content: '新的版本已经准备好, 请重新启动',
              success: res => {
                if (res.confirm) {
                  updateManager.applyUpdate();
                }
              }
            });
          });
        }

        start() {
          // @ts-ignore
          if (window.cocosAnalytics) {
            // @ts-ignore
            window.cocosAnalytics.init({
              appID: "697959573",
              // 游戏ID
              version: (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).VERSION,
              // 游戏/应用版本号
              storeID: "wechat",
              // 分发渠道
              engine: "cocos" // 游戏引擎

            });
          } // Your initialization goes here.


          this.shareGame("更多精彩游戏等你来发现！", "https://res.592you.com/game-shares/cake/imgs/40.jpg");

          if (!profiler._stats) {
            console.log('showStats');
            profiler.showStats();
          } //@ts-ignore
          // if (profiler._rootNode) {
          //     //@ts-ignore
          //     profiler._rootNode.active = false;
          // }


          this.lbVersion.string = 'Version: ' + (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).VERSION;
          this.updateSwitch();

          if (this.manager) {
            this.manager.onPeopleNumChanged = this.onPeopleNumberChanged.bind(this);
          }
        }

        updateSwitch() {
          this.spShadow.spriteFrame = this.enableShadow ? this.imgOn : this.imgOff;
          this.spInstacing.spriteFrame = this.enableInstancing ? this.imgOn : this.imgOff;
          this.spAliasing.spriteFrame = this.manager.enableAntiAliasing ? this.imgOn : this.imgOff;
        }

        onBtnAddClick() {
          this.manager.addPlayerGroup();
        }

        onBtnResetClick() {
          this.manager.resetPlayer();
          this.curClickLogoTimes = 0;
        }

        onBtnReduceClick() {
          //减人
          this.manager.reducePlayer();
        }

        onLogoClick() {
          this.curClickLogoTimes += 1;

          if (this.curClickLogoTimes === this.maxClickLogoTimes) {
            this.manager.addDancer();
          }
        }

        switchInstancing() {
          // this.spInstacing.spriteFrame
          this.enableInstancing = !this.enableInstancing;
        }

        switchAliasing() {
          //跳出提示框
          let str = this.manager.enableAntiAliasing ? '关闭' : '开启';
          this.nodeConfirmBox.getComponent(_crd && confirmBox === void 0 ? (_reportPossibleCrUseOfconfirmBox({
            error: Error()
          }), confirmBox) : confirmBox).show(`${str}抗锯齿需要重启游戏`, () => {
            this.manager.enableAntiAliasing = !this.manager.enableAntiAliasing;
          }, () => {});
          this.nodeConfirmBox.active = true;
        }

        switchShadow() {
          this.enableShadow = !this.enableShadow;
        }

        onNumberInputEnd() {
          const num = Number.parseInt(this.numberInput.string);
          this.manager.updatePlayerNumber(num);
        }

        onNumberClick(evt, data) {
          const num = Number.parseInt(data);
          this.manager.updatePlayerNumber(num);
        }

        onPeopleNumberChanged(num) {
          if (this.numberInput) {
            this.numberInput.string = num.toString();
          }
        }

        update(deltaTime) {
          // Your update function goes here.
          this.count++;

          if (this.count > 10 && profiler._stats) {
            this.count = 0; //fps

            this.lbFps.string = Math.round(profiler._stats.fps.counter.value).toString(); //drawcall

            this.lbDrawcall.string = profiler._stats.draws.counter.value.toString();
            this.lbInstancing.string = profiler._stats.instances.counter.value.toString();
            this.lbTriangle.string = profiler._stats.tricount.counter.value.toString();
            this.lbGFXMem.string = profiler._stats.textureMemory.counter.value.toFixed(1).toString();
            this.lbGameLogic.string = profiler._stats.logic.counter.value.toFixed(2).toString();
            this.lbArtTriangle.string = this.manager.artTriangle.toString();
            this.lbVertex.string = this.manager.artVertex.toString();
            this.lbPeople.string = this.manager.people.toString();
          } //

        }

        onDestroy() {
          // @ts-ignore
          if (profiler._rootNode) {
            // @ts-ignore
            profiler._rootNode.active = true;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "manager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbFps", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbDrawcall", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbInstancing", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbTriangle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbGFXMem", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbGameLogic", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbArtTriangle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbVertex", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbPeople", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "imgOn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "imgOff", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "spInstacing", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "spShadow", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "spAliasing", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "nodeConfirmBox", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "lbVersion", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "numberInput", [_dec19], {
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
//# sourceMappingURL=7e65c8ca8696889832faeab2599e20111e53c63f.js.map