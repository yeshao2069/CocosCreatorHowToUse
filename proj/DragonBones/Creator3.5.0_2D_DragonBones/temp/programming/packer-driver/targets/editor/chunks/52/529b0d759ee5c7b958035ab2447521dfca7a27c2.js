System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, dragonBones, macro, SystemEventType, systemEvent, Vec3, director, _dec, _class, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class3, _class4, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, requireComponent, NORMAL_ANIMATION_GROUP, AIM_ANIMATION_GROUP, ATTACK_ANIMATION_GROUP, JUMP_SPEED, NORMALIZE_MOVE_SPEED, MAX_MOVE_SPEED_FRONT, MAX_MOVE_SPEED_BACK, WEAPON_R_LIST, WEAPON_L_LIST, SKINS, GROUND, G, DragonBonesCtrl, DragonBullet;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      dragonBones = _cc.dragonBones;
      macro = _cc.macro;
      SystemEventType = _cc.SystemEventType;
      systemEvent = _cc.systemEvent;
      Vec3 = _cc.Vec3;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3a1cVCirpDlonbJrG1FY5H", "DragonBonesCtrl", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);
      NORMAL_ANIMATION_GROUP = "normal";
      AIM_ANIMATION_GROUP = "aim";
      ATTACK_ANIMATION_GROUP = "attack";
      JUMP_SPEED = -20;
      NORMALIZE_MOVE_SPEED = 3.6;
      MAX_MOVE_SPEED_FRONT = NORMALIZE_MOVE_SPEED * 1.4;
      MAX_MOVE_SPEED_BACK = NORMALIZE_MOVE_SPEED * 1.0;
      WEAPON_R_LIST = ["weapon_1502b_r", "weapon_1005", "weapon_1005b", "weapon_1005c", "weapon_1005d", "weapon_1005e"];
      WEAPON_L_LIST = ["weapon_1502b_l", "weapon_1005", "weapon_1005b", "weapon_1005c", "weapon_1005d"];
      SKINS = ["mecha_1502b", "skin_a", "skin_b", "skin_c"];
      GROUND = -200;
      G = -0.6;

      _export("default", DragonBonesCtrl = (_dec2 = ccclass('DragonBonesCtrl'), _dec3 = requireComponent(dragonBones.ArmatureDisplay), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: dragonBones.ArmatureDisplay
      }), _dec10 = property({
        type: dragonBones.ArmatureDisplay
      }), _dec2(_class3 = _dec3(_class3 = (_class4 = class DragonBonesCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "touchHandler", _descriptor, this);

          _initializerDefineProperty(this, "upButton", _descriptor2, this);

          _initializerDefineProperty(this, "downButton", _descriptor3, this);

          _initializerDefineProperty(this, "leftButton", _descriptor4, this);

          _initializerDefineProperty(this, "rightButton", _descriptor5, this);

          _initializerDefineProperty(this, "weaponArmature", _descriptor6, this);

          _initializerDefineProperty(this, "skinArmature", _descriptor7, this);

          this._bullets = [];
          this._left = false;
          this._right = false;
          this._isJumpingA = false;
          this._isJumpingB = false;
          this._isSquating = false;
          this._isAttackingA = false;
          this._isAttackingB = false;
          this._weaponRIndex = 0;
          this._weaponLIndex = 0;
          this._skinIndex = 0;
          this._faceDir = 1;
          this._aimDir = 0;
          this._moveDir = 0;
          this._aimRadian = 0;
          this._speedX = 0;
          this._speedY = 0;
          this._armature = null;
          this._weaponR = null;
          this._weaponL = null;
          this._aimState = null;
          this._walkState = null;
          this._attackState = null;
          this._target = new Vec3(0, 0, 0);
          this._mouseDown_ = false;
        }

        // use this for initialization
        onLoad() {
          this._armatureDisplay = this.getComponent(dragonBones.ArmatureDisplay);
          this._armature = this._armatureDisplay.armature();

          this._armatureDisplay.addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE, this._animationEventHandler, this);

          this._armatureDisplay.addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE, this._animationEventHandler, this);

          this._armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this._animationEventHandler, this);

          this._weaponR = this._armature.getSlot('weapon_r').childArmature;
          this._weaponL = this._armature.getSlot('weapon_l').childArmature;

          this._weaponR.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);

          this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this); // load all skin data


          for (let i = 1; i < SKINS.length; i++) {
            this.skinArmature.armatureName = SKINS[i];
          }

          for (let i = 1; i < WEAPON_R_LIST.length; i++) {
            this.weaponArmature.armatureName = WEAPON_R_LIST[i];
          }

          this._updateAnimation();

          if (this.touchHandler) {
            // touch event
            this.touchHandler.on(SystemEventType.TOUCH_START, event => {
              this._mouseDown_ = true;
              var touchLoc = event.getUILocation();
              this.aim(touchLoc.x, touchLoc.y);
              this.attack(true);
            }, this);
            this.touchHandler.on(SystemEventType.TOUCH_END, event => {
              this._mouseDown_ = false;
              this.attack(false);
            }, this);
            this.touchHandler.on(SystemEventType.TOUCH_MOVE, event => {
              var touchLoc = event.getUILocation();
              this.aim(touchLoc.x, touchLoc.y);
            }, this);
          }

          if (this.upButton) {
            this.upButton.on(SystemEventType.TOUCH_START, event => {
              this.jump();
            }, this);
          }

          if (this.downButton) {
            this.downButton.on(SystemEventType.TOUCH_START, event => {
              this.squat(true);
            }, this);
            this.downButton.on(SystemEventType.TOUCH_END, event => {
              this.squat(false);
            }, this);
            this.downButton.on(SystemEventType.TOUCH_CANCEL, event => {
              this.squat(false);
            }, this);
          }

          if (this.leftButton) {
            this.leftButton.on(SystemEventType.TOUCH_START, event => {
              this._left = true;

              this._updateMove(-1);
            }, this);
            this.leftButton.on(SystemEventType.TOUCH_END, event => {
              this._left = false;

              this._updateMove(-1);
            }, this);
            this.leftButton.on(SystemEventType.TOUCH_CANCEL, event => {
              this._left = false;

              this._updateMove(-1);
            }, this);
          }

          if (this.rightButton) {
            this.rightButton.on(SystemEventType.TOUCH_START, event => {
              this._right = true;

              this._updateMove(1);
            }, this);
            this.rightButton.on(SystemEventType.TOUCH_END, event => {
              this._right = false;

              this._updateMove(1);
            }, this);
            this.rightButton.on(SystemEventType.TOUCH_CANCEL, event => {
              this._right = false;

              this._updateMove(1);
            }, this);
          } // keyboard events


          systemEvent.on(SystemEventType.KEY_DOWN, event => {
            this._keyHandler(event.keyCode, true);
          }, this);
          systemEvent.on(SystemEventType.KEY_UP, event => {
            this._keyHandler(event.keyCode, false);
          }, this);
        }

        _keyHandler(keyCode, isDown) {
          switch (keyCode) {
            case macro.KEY.a:
            case macro.KEY.left:
              this._left = isDown;

              this._updateMove(-1);

              break;

            case macro.KEY.d:
            case macro.KEY.right:
              this._right = isDown;

              this._updateMove(1);

              break;

            case macro.KEY.w:
            case macro.KEY.up:
              if (isDown) {
                this.jump();
              }

              break;

            case macro.KEY.s:
            case macro.KEY.down:
              this.squat(isDown);
              break;

            case macro.KEY.q:
              if (isDown) {
                this.switchWeaponR();
              }

              break;

            case macro.KEY.e:
              if (isDown) {
                this.switchWeaponL();
              }

              break;

            case macro.KEY.space:
              if (isDown) {
                this.switchWeaponR();
                this.switchWeaponL();
              }

              break;

            default:
              return;
          }
        }

        _updateMove(dir) {
          if (this._left && this._right) {
            this.move(dir);
          } else if (this._left) {
            this.move(-1);
          } else if (this._right) {
            this.move(1);
          } else {
            this.move(0);
          }
        }

        move(dir) {
          if (this._moveDir === dir) {
            return;
          }

          this._moveDir = dir;

          this._updateAnimation();
        }

        jump() {
          if (this._isJumpingA) {
            return;
          }

          this._isJumpingA = true;

          this._armature.animation.fadeIn("jump_1", -1, -1, 0, NORMAL_ANIMATION_GROUP);

          this._walkState = null;
        }

        squat(isSquating) {
          if (this._isSquating === isSquating) {
            return;
          }

          this._isSquating = isSquating;

          this._updateAnimation();
        }

        attack(isAttacking) {
          if (this._isAttackingA == isAttacking) {
            return;
          }

          this._isAttackingA = isAttacking;
        }

        switchWeaponL() {
          this._weaponL.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);

          this._weaponLIndex++;

          if (this._weaponLIndex >= WEAPON_L_LIST.length) {
            this._weaponLIndex = 0;
          }

          var newWeaponName = WEAPON_L_LIST[this._weaponLIndex];
          let factory = dragonBones.CCFactory.getInstance();
          this._weaponL = factory.buildArmature(newWeaponName);
          this._armature.getSlot('weapon_l').childArmature = this._weaponL;

          this._weaponL.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
        }

        switchWeaponR() {
          this._weaponR.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);

          this._weaponRIndex++;

          if (this._weaponRIndex >= WEAPON_R_LIST.length) {
            this._weaponRIndex = 0;
          }

          var newWeaponName = WEAPON_R_LIST[this._weaponRIndex];
          let factory = dragonBones.CCFactory.getInstance();
          this._weaponR = factory.buildArmature(newWeaponName);
          this._armature.getSlot('weapon_r').childArmature = this._weaponR;

          this._weaponR.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._frameEventHandler, this);
        }

        switchSkin() {
          this._skinIndex++;

          if (this._skinIndex >= SKINS.length) {
            this._skinIndex = 0;
          }

          let skinName = SKINS[this._skinIndex];
          let factory = dragonBones.CCFactory.getInstance();
          let skinData = factory.getArmatureData(skinName).defaultSkin;
          factory.replaceSkin(this._armatureDisplay.armature(), skinData, false, ["weapon_l", "weapon_r"]);
        }

        aim(x, y) {
          if (this._aimDir === 0) {
            this._aimDir = 10;
          }

          const t = this._target = this.node.parent._uiProps.uiTransformComp.convertToNodeSpaceAR(new Vec3(x, y, 0));
        }

        update(dt) {
          this._updatePosition();

          this._updateAim();

          this._updateAttack();

          this._enterFrameHandler(dt);
        }

        onDisable() {
          // clean the bullets
          for (var i = this._bullets.length - 1; i >= 0; i--) {
            var bullet = this._bullets[i];
            bullet.enabled = false;
          }

          this._bullets = [];
        }

        addBullet(bullet) {
          this._bullets.push(bullet);
        }

        _enterFrameHandler(dt) {
          for (var i = this._bullets.length - 1; i >= 0; i--) {
            var bullet = this._bullets[i];

            if (bullet.update()) {
              this._bullets.splice(i, 1);
            }
          }
        }

        _animationEventHandler(event) {
          if (event.type === dragonBones.EventObject.FADE_IN_COMPLETE) {
            if (event.animationState.name === "jump_1") {
              this._isJumpingB = true;
              this._speedY = -JUMP_SPEED;

              if (this._moveDir != 0) {
                if (this._moveDir * this._faceDir > 0) {
                  this._speedX = MAX_MOVE_SPEED_FRONT * this._faceDir;
                } else {
                  this._speedX = -MAX_MOVE_SPEED_BACK * this._faceDir;
                }
              }

              this._armature.animation.fadeIn("jump_2", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
            } else if (event.animationState.name === "jump_4") {
              this._updateAnimation();
            }
          } else if (event.type === dragonBones.EventObject.FADE_OUT_COMPLETE) {
            if (event.animationState.name === "attack_01") {
              this._isAttackingB = false;
              this._attackState = null;
            }
          } else if (event.type === dragonBones.EventObject.COMPLETE) {
            if (event.animationState.name === "jump_4") {
              this._isJumpingA = false;
              this._isJumpingB = false;

              this._updateAnimation();
            }
          }
        }

        _frameEventHandler(event, bone, armature) {
          if (event.name === "fire") {
            // var firePointBone = event.armature.getBone("firePoint");
            var localPoint = new Vec3(event.bone.global.x, event.bone.global.y, 0);
            var display = event.armature.display;
            var globalPoint = display.node.convertToWorldSpace(localPoint);

            this._fire(globalPoint);
          }
        }

        _fire(firePoint) {
          firePoint.x += Math.random() * 2 - 1;
          firePoint.y += Math.random() * 2 - 1;
          firePoint.z = 0;

          var armature = this._armatureDisplay.buildArmature("bullet_01");

          var effect = this._armatureDisplay.buildArmature("fire_effect_01");

          var radian = this._faceDir < 0 ? Math.PI - this._aimRadian : this._aimRadian;
          var bullet = new DragonBullet();
          bullet.init(this.node.parent, armature, effect, radian + Math.random() * 0.02 - 0.01, 40, firePoint);
          this.addBullet(bullet);
        }

        _updateAnimation() {
          if (this._isJumpingA) {
            return;
          }

          if (this._isSquating) {
            this._speedX = 0;
            this._armature.animation.fadeIn("squat", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
            this._walkState = null;
            return;
          }

          if (this._moveDir === 0) {
            this._speedX = 0;
            this._armature.animation.fadeIn("idle", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
            this._walkState = null;
          } else {
            if (!this._walkState) {
              this._walkState = this._armature.animation.fadeIn("walk", -1, -1, 0, NORMAL_ANIMATION_GROUP);
              this._walkState.resetToPose = false;
            }

            if (this._moveDir * this._faceDir > 0) {
              this._walkState.timeScale = MAX_MOVE_SPEED_FRONT / NORMALIZE_MOVE_SPEED;
            } else {
              this._walkState.timeScale = -MAX_MOVE_SPEED_BACK / NORMALIZE_MOVE_SPEED;
            }

            if (this._moveDir * this._faceDir > 0) {
              this._speedX = MAX_MOVE_SPEED_FRONT * this._faceDir;
            } else {
              this._speedX = -MAX_MOVE_SPEED_BACK * this._faceDir;
            }
          }
        }

        _updatePosition() {
          const camera = director.root.ui.getFirstRenderCamera(this.node);
          const pos = this.node.getPosition();

          if (this._speedX !== 0) {
            pos.x += this._speedX;
            var minX = -camera.width / 2;
            var maxX = camera.width / 2;

            if (pos.x < minX) {
              pos.x = minX;
            } else if (pos.x > maxX) {
              pos.x = maxX;
            }

            this.node.setPosition(pos);
          }

          if (this._speedY != 0) {
            if (this._speedY > 5 && this._speedY + G <= 5) {
              this._armature.animation.fadeIn("jump_3", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
            }

            this._speedY += G;
            pos.y += this._speedY;

            if (pos.y < GROUND) {
              pos.y = GROUND;
              this._speedY = 0;
              this._armature.animation.fadeIn("jump_4", -1, -1, 0, NORMAL_ANIMATION_GROUP).resetToPose = false;
            }

            this.node.setPosition(pos);
          }
        }

        _updateAim() {
          if (!this._mouseDown_) return;

          if (this._aimDir === 0) {
            return;
          }

          const pos = this.node.getPosition();
          const scale = this.node.getScale();
          this._faceDir = this._target.x > pos.x ? 1 : -1;

          if (scale.x * this._faceDir < 0) {
            scale.x *= -1;

            if (this._moveDir) {
              this._updateAnimation();
            }

            this.node.setScale(scale);
          }

          var aimOffsetY = this._armature.getBone("chest").global.y * scale.y;

          if (this._faceDir > 0) {
            this._aimRadian = Math.atan2(this._target.y - pos.y - aimOffsetY, this._target.x - pos.x);
          } else {
            this._aimRadian = Math.PI - Math.atan2(this._target.y - pos.y - aimOffsetY, this._target.x - pos.x);

            if (this._aimRadian > Math.PI) {
              this._aimRadian -= Math.PI * 2;
            }
          }

          let aimDir = 0;

          if (this._aimRadian > 0) {
            aimDir = 1;
          } else {
            aimDir = -1;
          }

          if (this._aimDir != aimDir) {
            this._aimDir = aimDir; // Animation mixing.

            if (this._aimDir >= 0) {
              this._aimState = this._armature.animation.fadeIn("aim_up", -1.0, -1, 0, AIM_ANIMATION_GROUP);
            } else {
              this._aimState = this._armature.animation.fadeIn("aim_down", -1.0, -1, 0, AIM_ANIMATION_GROUP);
            }

            this._aimState.resetToPose = false;
          }

          this._aimState.weight = Math.abs(this._aimRadian / Math.PI * 2); //_armature.invalidUpdate("pelvis"); // Only update bone mask.

          this._armature.invalidUpdate();
        }

        _updateAttack() {
          if (!this._isAttackingA || this._isAttackingB) {
            return;
          }

          this._isAttackingB = true; // Animation mixing.

          this._attackState = this._armature.animation.fadeIn("attack_01", -1.0, -1, 0, ATTACK_ANIMATION_GROUP, dragonBones.AnimationFadeOutMode.SameGroup);
          this._attackState.resetToPose = false;
          this._attackState.autoFadeOutTime = this._attackState.fadeTotalTime;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class4.prototype, "touchHandler", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class4.prototype, "upButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class4.prototype, "downButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class4.prototype, "leftButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class4.prototype, "rightButton", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class4.prototype, "weaponArmature", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class4.prototype, "skinArmature", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class4)) || _class3) || _class3));

      _export("DragonBullet", DragonBullet = (_dec = ccclass('DragonBullet'), _dec(_class = class DragonBullet {
        constructor() {
          this._speedX = 0;
          this._speedY = 0;
          this._armature = null;
          this._armatureDisplay = null;
          this._effect = null;
        }

        init(parentNode, armature, effect, radian, speed, position) {
          this._speedX = Math.cos(radian) * speed;
          this._speedY = Math.sin(radian) * speed;

          var thePos = parentNode._uiProps.uiTransformComp.convertToNodeSpaceAR(position);

          armature.playAnimation("idle");
          let armatureNode = armature.node;
          armatureNode.setPosition(thePos);
          armatureNode.angle = radian * macro.DEG;
          this._armature = armature;

          if (effect) {
            this._effect = effect;
            var effectDisplay = this._effect.node;
            effectDisplay.angle = radian * macro.DEG;
            effectDisplay.setPosition(thePos);
            effectDisplay.scaleX = 1 + Math.random() * 1;
            effectDisplay.scaleY = 1 + Math.random() * 0.5;

            if (Math.random() < 0.5) {
              effectDisplay.scaleY *= -1;
            }

            this._effect.playAnimation("idle");

            parentNode.addChild(effectDisplay);
          }

          parentNode.addChild(armatureNode);
        }

        update() {
          let armatureNode = this._armature.node;
          const pos = armatureNode.getPosition();
          pos.x += this._speedX;
          pos.y += this._speedY;
          armatureNode.setPosition(pos);
          const uiTrans = armatureNode.parent._uiProps.uiTransformComp;
          var worldPos = uiTrans.convertToWorldSpaceAR(armatureNode.getPosition());
          const camera = director.root.ui.getFirstRenderCamera(armatureNode);

          if (worldPos.x < -100 || worldPos.x >= camera.width + 100 || worldPos.y < -100 || worldPos.y >= camera.height + 100) {
            this.doClean();
            return true;
          }

          return false;
        }

        onDisable() {
          this.doClean();
        }

        doClean() {
          this._armature.node.removeFromParent();

          if (this._effect) {
            this._effect.node.removeFromParent();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=529b0d759ee5c7b958035ab2447521dfca7a27c2.js.map