System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, CameraComponent, Tween, Vec3, CCString, profiler, player, ResManager, StorageManager, gameLogic, constants, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, CAMERA_MOVE_PER_PERSON, ANTI_KEY, playerManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfplayer(extras) {
    _reporterNs.report("player", "./player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResManager(extras) {
    _reporterNs.report("ResManager", "../framework/util/resManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "../framework/config/storageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameLogic(extras) {
    _reporterNs.report("gameLogic", "../framework/util/gameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../framework/util/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      CameraComponent = _cc.CameraComponent;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
      CCString = _cc.CCString;
      profiler = _cc.profiler;
    }, function (_unresolved_2) {
      player = _unresolved_2.player;
    }, function (_unresolved_3) {
      ResManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      StorageManager = _unresolved_4.StorageManager;
    }, function (_unresolved_5) {
      gameLogic = _unresolved_5.gameLogic;
    }, function (_unresolved_6) {
      constants = _unresolved_6.constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a4e78T+22ZOW7SYk4+bsMpx", "playerManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      CAMERA_MOVE_PER_PERSON = 100; //每多少人摄像机抬高一次

      ANTI_KEY = 'anti-aliasing';

      _export("playerManager", playerManager = (_dec = ccclass('playerManager'), _dec2 = property([CCString]), _dec3 = property(CameraComponent), _dec(_class = (_class2 = class playerManager extends Component {
        constructor() {
          super(...arguments);
          this.arrModel = [];

          _initializerDefineProperty(this, "arrName", _descriptor, this);

          _initializerDefineProperty(this, "mainCamera", _descriptor2, this);

          this.artTriangle = 0;
          this.artVertex = 0;
          this._people = 0;
          this.onPeopleNumChanged = null;
          this.isStart = false;
          this.currentLevel = 0;
          this.tweenCamera = void 0;
          this.posCameraOrigin = void 0;
          this.isEnableInstancing = false;
          this._prevPeopleRate = 0;
          this.isEnableShadow = true;
          this.isEnableAntiAliasing = false;
        }

        get people() {
          return this._people;
        }

        set people(value) {
          this._people = value;

          if (this.onPeopleNumChanged) {
            this.onPeopleNumChanged(this._people);
          }
        }

        //人数除以30等于多少倍
        set enableInstancing(value) {
          this.isEnableInstancing = value;
          this.node.children.forEach(nodePlayer => {
            var playerScript = nodePlayer.getComponent(_crd && player === void 0 ? (_reportPossibleCrUseOfplayer({
              error: Error()
            }), player) : player);

            if (playerScript) {
              playerScript.changeInstancingBatch(value);
            }
          });
        }

        get enableInstancing() {
          return this.isEnableInstancing;
        }

        set enableShadow(value) {
          this.isEnableShadow = value;
          this.node.children.forEach(nodePlayer => {
            var playerScript = nodePlayer.getComponent(_crd && player === void 0 ? (_reportPossibleCrUseOfplayer({
              error: Error()
            }), player) : player);

            if (playerScript) {
              playerScript.changeShadow(value);
            }
          });
        }

        get enableShadow() {
          return this.isEnableShadow;
        }

        set enableAntiAliasing(value) {
          this.isEnableAntiAliasing = value;
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData(ANTI_KEY, value);

          if (cc.sys.isBrowser) {
            window.location.reload();
          } else if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            console.log('reload!');
            window.wx.exitMiniProgram({
              complete: () => {}
            });
          } else if (cc.sys.isNative) {
            window.__restartVM();
          }
        }

        get enableAntiAliasing() {
          return this.isEnableAntiAliasing;
        }

        onLoad() {
          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).resPath = 'model-animation/';
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.start();
          this.isEnableAntiAliasing = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getGlobalData(ANTI_KEY) || false;
        }

        start() {
          // Your initialization goes here.
          this.arrName.forEach(name => {
            (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
              error: Error()
            }), ResManager) : ResManager).getModel(name, (err, prefab) => {
              if (!err) {
                this.arrModel.push(prefab);

                if (this.arrModel.length === this.arrName.length) {
                  this.addPlayerGroup();
                  this.isStart = true;
                }
              }
            });
          });
          this.posCameraOrigin = this.mainCamera.node.position.clone();
        }

        addPlayerGroup() {
          this.updatePlayerNumber(this.people + this.arrModel.length);
        }

        resetPlayer() {
          this.node.destroyAllChildren();
          this.artTriangle = 0;
          this.artVertex = 0;
          this.people = 0;
          this.currentLevel = 0;
          this.mainCamera.node.position = this.posCameraOrigin;
          this._prevPeopleRate = 0;
        }

        reducePlayer() {
          this.updatePlayerNumber(this.people - this.arrName.length);
        }

        updatePlayerNumber(num) {
          if (this.people === num) {
            return;
          }

          if (num < 0) {
            num = 0;
          } // add


          if (num > this.people) {
            var addNum = num - this.people;

            for (var i = 0; i < addNum; i++) {
              var pfModel = this.arrModel[i % this.arrModel.length];
              console.log(pfModel.data.name);
              var model = instantiate(pfModel);
              model.parent = this.node;
              var playerScript = model.getComponent(_crd && player === void 0 ? (_reportPossibleCrUseOfplayer({
                error: Error()
              }), player) : player);
              playerScript.show(this);
              this.artTriangle += playerScript.triangle;
              this.artVertex += playerScript.vertex;
            }

            this.people = num;

            if (Math.floor(this.people / CAMERA_MOVE_PER_PERSON) > this.currentLevel) {
              //触发镜头拉高
              this.moveUpCamera();
            }

            var rate = Math.floor(this.people / 30);

            if (rate > this._prevPeopleRate) {
              var obj = {
                'Fps': Math.round(profiler._stats.fps.counter.value).toString(),
                'Drawcall': profiler._stats.draws.counter.value.toString(),
                'Instancing': profiler._stats.instances.counter.value.toString(),
                'Triangle': profiler._stats.tricount.counter.value.toString(),
                'GFXMem': profiler._stats.textureMemory.counter.value.toFixed(1).toString(),
                'GameLogic': profiler._stats.logic.counter.value.toFixed(2).toString(),
                'ArtTriangle': this.artTriangle.toString(),
                'Vertex': this.artVertex.toString(),
                'People': this.people.toString()
              };
              this.scheduleOnce(() => {
                (_crd && gameLogic === void 0 ? (_reportPossibleCrUseOfgameLogic({
                  error: Error()
                }), gameLogic) : gameLogic).customEventStatistics((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                  error: Error()
                }), constants) : constants).EVENT_TYPE.PERFORMANCE_PARAMETER, obj);
              }, 0.5);
              this._prevPeopleRate = rate;
            }
          } else {
            // reduce
            var deleteNum = this.people - num;

            for (var _i = 0; _i < deleteNum; _i++) {
              var nodePlayer = this.node.children[this.node.children.length - 1 - _i];

              if (!nodePlayer) {
                return;
              }

              var _playerScript = nodePlayer.getComponent(_crd && player === void 0 ? (_reportPossibleCrUseOfplayer({
                error: Error()
              }), player) : player);

              this.artTriangle -= _playerScript.triangle;
              this.artVertex -= _playerScript.vertex;
              nodePlayer.destroy();
            }

            this.people = num;

            if (this.currentLevel > Math.floor(this.people / CAMERA_MOVE_PER_PERSON)) {
              this.currentLevel = Math.floor(this.people / CAMERA_MOVE_PER_PERSON);
              var pos = this.mainCamera.node.forward.clone().negative().multiplyScalar(8 * this.currentLevel);
              pos.add(this.posCameraOrigin);

              if (this.tweenCamera) {
                this.tweenCamera.stop();
                this.tweenCamera = null;
              }

              this.tweenCamera = new Tween(this.mainCamera.node).to(0.2, {
                position: pos
              }).start();
            }
          }
        }

        moveUpCamera() {
          this.currentLevel++;
          var direction = this.mainCamera.node.forward.clone().negative().multiplyScalar(8);
          direction.add(this.mainCamera.node.position);

          if (this.tweenCamera) {
            this.tweenCamera.stop();
            this.tweenCamera = null;
          }

          this.tweenCamera = new Tween(this.mainCamera.node).to(0.2, {
            position: direction
          }).start();
        }

        addDancer() {
          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getModel('dance1', (err, prefab) => {
            if (!err) {
              var model = instantiate(prefab);
              model.parent = this.node;
              model.setScale(new Vec3(2.5, 2.5, 2.5));
              model.setPosition(new Vec3(2.4, 0, 2));
            }
          });
        } // enableInstancing (isEnable: boolean) {
        //     // this.arrName.forEach((name)=>{
        //     //     let nodePlayer = this.node.getChildByName(name);
        //     //     nodePlayer.getComponent(player).changeInstancingBatch(isEnable);
        //     // });
        //     this.isEnableInstancing = false;
        //     this.node.children.forEach((nodePlayer)=>{
        //         let playerScript = nodePlayer.getComponent(player);
        //         if (playerScript) {
        //             playerScript.changeInstancingBatch(isEnable);
        //         }
        //     })
        // }
        // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec3], {
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
//# sourceMappingURL=1edfb533d987bae28d3a86f238aebf92fadf2f51.js.map