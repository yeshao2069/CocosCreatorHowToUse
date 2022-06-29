System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, Component, _decorator, systemEvent, SystemEvent, Vec3, Quat, Vec2, Node, lerp, director, Canvas, EDITOR, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, type, tempVec3, tempVec3_2, tempQuat, DeltaFactor, PositiveForward, OrbitCamera;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
      Vec2 = _cc.Vec2;
      Node = _cc.Node;
      lerp = _cc.lerp;
      director = _cc.director;
      Canvas = _cc.Canvas;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6be7d8BhlpJFobtMkxMXvVa", "orbit-camera", undefined);

      ({
        ccclass,
        property,
        type
      } = _decorator);
      tempVec3 = new Vec3();
      tempVec3_2 = new Vec3();
      tempQuat = new Quat();
      DeltaFactor = 1 / 200;
      PositiveForward = new Vec3(0, 0, 1);

      _export("default", OrbitCamera = (_dec = ccclass('OrbitCamera'), _dec2 = type(Node), _dec3 = type(Node), _dec4 = type(Vec3), _dec(_class = (_class2 = class OrbitCamera extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "enableTouch", _descriptor, this);

          _initializerDefineProperty(this, "enableScaleRadius", _descriptor2, this);

          _initializerDefineProperty(this, "autoRotate", _descriptor3, this);

          _initializerDefineProperty(this, "autoRotateSpeed", _descriptor4, this);

          _initializerDefineProperty(this, "rotateSpeed", _descriptor5, this);

          _initializerDefineProperty(this, "followSpeed", _descriptor6, this);

          _initializerDefineProperty(this, "xRotationRange", _descriptor7, this);

          _initializerDefineProperty(this, "_target", _descriptor8, this);

          _initializerDefineProperty(this, "radiusScaleSpeed", _descriptor9, this);

          _initializerDefineProperty(this, "minRadius", _descriptor10, this);

          _initializerDefineProperty(this, "maxRadius", _descriptor11, this);

          _initializerDefineProperty(this, "followTargetRotationY", _descriptor12, this);

          this._startRotation = new Vec3();
          this._center = new Vec3();
          this._targetCenter = new Vec3();
          this._touched = false;
          this._targetRotation = new Vec3();
          this._rotation = new Quat();

          _initializerDefineProperty(this, "_targetRadius", _descriptor13, this);

          this._radius = 10;
        }

        get radius() {
          return this._targetRadius;
        }

        set radius(v) {
          this._targetRadius = v;
        }

        get target() {
          return this._target;
        }

        set target(v) {
          this._target = v;

          this._targetRotation.set(this._startRotation);

          this._targetCenter.set(v.worldPosition);
        }

        get targetRotation() {
          if (!EDITOR) {
            this._startRotation.set(this._targetRotation);
          }

          return this._startRotation;
        }

        set targetRotation(v) {
          this._targetRotation.set(v);

          this._startRotation.set(v);
        }

        start() {
          var canvas = director.getScene().getComponentInChildren(Canvas);

          if (canvas && canvas.node) {
            if (this.enableTouch) {
              canvas.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
              canvas.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
              canvas.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
            }

            if (this.enableScaleRadius) {
              canvas.node.on(Node.EventType.MOUSE_WHEEL, this.onMouseWhee, this);
            }
          } else {
            if (this.enableTouch) {
              systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
              systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
              systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
            }

            if (this.enableScaleRadius) {
              systemEvent.on(SystemEvent.EventType.MOUSE_WHEEL, this.onMouseWhee, this);
            }
          }

          this.resetTargetRotation();
          Quat.fromEuler(this._rotation, this._targetRotation.x, this._targetRotation.y, this._targetRotation.z);

          if (this.target) {
            this._targetCenter.set(this.target.worldPosition);

            this._center.set(this._targetCenter);
          }

          this._radius = this.radius;
          this.limitRotation();
        }

        resetTargetRotation() {
          var targetRotation = this._targetRotation.set(this._startRotation);

          if (this.followTargetRotationY) {
            targetRotation = tempVec3_2.set(targetRotation);
            Quat.toEuler(tempVec3, this.target.worldRotation);
            targetRotation.y += tempVec3.y;
          }
        }

        onTouchStart() {
          this._touched = true;
        }

        onTouchMove(touch, event) {
          if (!this._touched) return;
          var delta = touch.getDelta();
          Quat.fromEuler(tempQuat, this._targetRotation.x, this._targetRotation.y, this._targetRotation.z);
          Quat.rotateX(tempQuat, tempQuat, -delta.y * DeltaFactor);
          Quat.rotateAround(tempQuat, tempQuat, Vec3.UP, -delta.x * DeltaFactor);
          Quat.toEuler(this._targetRotation, tempQuat);
          this.limitRotation();
        }

        onTouchEnd() {
          this._touched = false;
        }

        onMouseWhee(event) {
          var scrollY = event.getScrollY();
          this._targetRadius += this.radiusScaleSpeed * -Math.sign(scrollY);
          this._targetRadius = Math.min(this.maxRadius, Math.max(this.minRadius, this._targetRadius));
        }

        limitRotation() {
          var rotation = this._targetRotation;

          if (rotation.x < this.xRotationRange.x) {
            rotation.x = this.xRotationRange.x;
          } else if (rotation.x > this.xRotationRange.y) {
            rotation.x = this.xRotationRange.y;
          }

          rotation.z = 0;
        }

        update(dt) {
          var targetRotation = this._targetRotation;

          if (this.autoRotate && !this._touched) {
            targetRotation.y += this.autoRotateSpeed * dt;
          }

          if (this.target) {
            this._targetCenter.set(this.target.worldPosition);

            if (this.followTargetRotationY) {
              targetRotation = tempVec3_2.set(targetRotation);
              Quat.toEuler(tempVec3, this.target.worldRotation);
              targetRotation.y += tempVec3.y;
            }
          }

          Quat.fromEuler(tempQuat, targetRotation.x, targetRotation.y, targetRotation.z);
          Quat.slerp(this._rotation, this._rotation, tempQuat, dt * 7 * this.rotateSpeed);
          Vec3.lerp(this._center, this._center, this._targetCenter, dt * 5 * this.followSpeed);
          this._radius = lerp(this._radius, this._targetRadius, dt * 5);
          Vec3.transformQuat(tempVec3, Vec3.FORWARD, this._rotation);
          Vec3.multiplyScalar(tempVec3, tempVec3, this._radius);
          tempVec3.add(this._center);
          this.node.position = tempVec3;
          this.node.lookAt(this._center);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enableTouch", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enableScaleRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "autoRotate", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "autoRotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 90;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "followSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "xRotationRange", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(5, 70);
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radius", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "radiusScaleSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "minRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "maxRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "target", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "target"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "targetRotation", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "targetRotation"), _class2.prototype), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "followTargetRotationY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_targetRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e3b4d56b93eea81d0099bd147ce81cfc45265a32.js.map