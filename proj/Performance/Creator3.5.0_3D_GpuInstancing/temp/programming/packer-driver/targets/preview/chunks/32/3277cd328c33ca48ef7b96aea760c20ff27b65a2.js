System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec3, Tween, SkinningModelComponent, SkeletalAnimationComponent, instacingMaterial, _dec, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfplayerManager(extras) {
    _reporterNs.report("playerManager", "./playerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinstacingMaterial(extras) {
    _reporterNs.report("instacingMaterial", "./instacingMaterial", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Tween = _cc.Tween;
      SkinningModelComponent = _cc.SkinningModelComponent;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
    }, function (_unresolved_2) {
      instacingMaterial = _unresolved_2.instacingMaterial;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62579N1fFdIdbaTNEdZclqj", "player", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("player", player = (_dec = ccclass('player'), _dec(_class = (_class2 = class player extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "triangle", _descriptor, this);

          _initializerDefineProperty(this, "vertex", _descriptor2, this);

          this.manager = void 0;
          this.tweenMove = void 0;
        }

        start() {// Your initialization goes here.
        }

        show(manager) {
          //x: -5~5
          //z: -20~6
          this.manager = manager;
          var x = -8 - 3 * this.manager.currentLevel + Math.random() * (16 + 6 * this.manager.currentLevel);
          var z = -20 + Math.random() * (26 + 5 * this.manager.currentLevel);
          var pos = new Vec3(x, 0, z);
          this.node.position = pos; //TODO 开始随机移动

          this.move();

          if (this.manager.enableInstancing) {
            this.changeInstancingBatch(true); //如果当前开启合批，则跟随开启
          }

          this.changeShadow(this.manager.enableShadow);
        }

        onDestroy() {
          if (this.tweenMove) {
            this.tweenMove.stop();
            this.tweenMove = null;
          }
        }

        move() {
          var nextPoint = new Vec3(-8 - 3 * this.manager.currentLevel + Math.random() * (16 + 6 * this.manager.currentLevel), 0, -20 + Math.random() * (26 + 5 * this.manager.currentLevel));
          var offset = nextPoint.clone().subtract(this.node.position);
          this.node.forward = offset.clone().normalize().negative();
          var costTime = offset.length() / 2;

          if (this.tweenMove) {
            this.tweenMove.stop();
            this.tweenMove = null;
          }

          this.tweenMove = new Tween(this.node).to(costTime, {
            position: nextPoint
          }).call(() => {
            this.move();
          }).start();
        }

        changeInstancingBatch(isEnable) {
          var arrInstancing = this.node.getComponentsInChildren(_crd && instacingMaterial === void 0 ? (_reportPossibleCrUseOfinstacingMaterial({
            error: Error()
          }), instacingMaterial) : instacingMaterial);
          arrInstancing.forEach(instancing => {
            instancing.enableInstancing = isEnable;
          });

          if (isEnable) {
            this.node.getComponent(SkeletalAnimationComponent).play();
          }
        }

        changeShadow(isEnable) {
          var arrModel = this.node.getComponentsInChildren(SkinningModelComponent);
          arrModel.forEach(model => {
            model.shadowCastingMode = isEnable ? SkinningModelComponent.ShadowCastingMode.ON : SkinningModelComponent.ShadowCastingMode.OFF;
          });
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "triangle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "vertex", [property], {
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
//# sourceMappingURL=3277cd328c33ca48ef7b96aea760c20ff27b65a2.js.map