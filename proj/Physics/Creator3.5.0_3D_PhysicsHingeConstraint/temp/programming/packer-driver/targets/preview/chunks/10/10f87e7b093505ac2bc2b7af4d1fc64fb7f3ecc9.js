System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, systemEvent, SystemEventType, Camera, Vec3, SphereCollider, RigidBody, instantiate, MeshRenderer, Material, BoxCollider, Primitive, CapsuleCollider, CylinderCollider, ConeCollider, Color, PhysicsSystem, gfx, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, requireComponent, EmitBullet;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      Camera = _cc.Camera;
      Vec3 = _cc.Vec3;
      SphereCollider = _cc.SphereCollider;
      RigidBody = _cc.RigidBody;
      instantiate = _cc.instantiate;
      MeshRenderer = _cc.MeshRenderer;
      Material = _cc.Material;
      BoxCollider = _cc.BoxCollider;
      Primitive = _cc.Primitive;
      CapsuleCollider = _cc.CapsuleCollider;
      CylinderCollider = _cc.CylinderCollider;
      ConeCollider = _cc.ConeCollider;
      Color = _cc.Color;
      PhysicsSystem = _cc.PhysicsSystem;
      gfx = _cc.gfx;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a2bbjXtLVFELTabAZRfnWN", "EmitBullet", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("EmitBullet", EmitBullet = (_dec = ccclass('EmitBullet'), _dec2 = requireComponent(Camera), _dec3 = property({
        type: Primitive.PrimitiveType
      }), _dec(_class = _dec2(_class = (_class2 = class EmitBullet extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "primitiveMesh", _descriptor, this);

          _initializerDefineProperty(this, "strength", _descriptor2, this);

          this._mesh = null;
          this._material = null;
          this._container = null;
          this._bullet = null;
        }

        onLoad() {
          this._container = new Node('__EMIT_BULLET__');

          this._container.setParent(this.node.scene);

          this._material = new Material();

          this._material.reset({
            'effectName': 'builtin-standard',
            // 'technique': 1, // Only pre-generated resources can be used
            'states': {
              'blendState': {
                'targets': [{
                  'blend': true,
                  // 'blendSrc': GFXBlendFactor.SRC_COLOR,
                  // 'blendDst': GFXBlendFactor.DST_COLOR,
                  // // 'blendEq': GFXBlendOp.ADD,
                  'blendSrc': gfx.BlendFactor.SRC_ALPHA,
                  'blendDst': gfx.BlendFactor.ONE_MINUS_SRC_ALPHA,
                  'blendSrcAlpha': gfx.BlendFactor.SRC_ALPHA,
                  'blendDstAlpha': gfx.BlendFactor.ONE_MINUS_SRC_ALPHA // 'blendAlphaEq': GFXBlendOp.ADD,

                }]
              }
            }
          });

          this._material.setProperty('mainColor', new Color(255, 255, 255, 128));

          this._mesh = new Primitive(this.primitiveMesh);

          this._mesh.onLoaded();

          this._bullet = new Node('bullet');

          var modelCom = this._bullet.addComponent(MeshRenderer);

          modelCom.mesh = this._mesh;
          modelCom.material = this._material;

          this._bullet.setWorldScale(0.25, 0.25, 0.25);

          this._bullet.addComponent(RigidBody);

          switch (this.primitiveMesh) {
            case Primitive.PrimitiveType.BOX:
              this._bullet.addComponent(BoxCollider);

              break;

            case Primitive.PrimitiveType.SPHERE:
              this._bullet.addComponent(SphereCollider);

              break;

            case Primitive.PrimitiveType.CAPSULE:
              if (PhysicsSystem.PHYSICS_CANNON) {
                this._bullet.addComponent(CylinderCollider);

                var s1 = this._bullet.addComponent(SphereCollider);

                s1.center = new Vec3(0, 0.5, 0);

                var s2 = this._bullet.addComponent(SphereCollider);

                s2.center = new Vec3(0, -0.5, 0);
              } else {
                this._bullet.addComponent(CapsuleCollider);
              }

              break;

            case Primitive.PrimitiveType.CYLINDER:
              this._bullet.addComponent(CylinderCollider);

              break;

            case Primitive.PrimitiveType.CONE:
              this._bullet.addComponent(ConeCollider);

              break;

            default:
              console.error("Unsupported collider type:", Primitive.PrimitiveType[this.primitiveMesh]);
              break;
          }
        }

        onEnable() {
          systemEvent.on(SystemEventType.TOUCH_START, this.onTouchStart, this);
        }

        onDisable() {
          systemEvent.off(SystemEventType.TOUCH_START, this.onTouchStart, this);
        }

        onTouchStart(touch, event) {
          var cameraCom = this.getComponent(Camera);
          var sp = touch.getLocation();
          var pos = new Vec3(sp.x, sp.y, 1);
          var target = cameraCom.screenToWorld(pos);
          var dir = Vec3.subtract(new Vec3(), target, this.node.worldPosition).normalize();
          dir.multiplyScalar(this.strength);
          var bullet = instantiate(this._bullet);
          bullet.setParent(this._container);
          bullet.setWorldPosition(this.node.worldPosition);
          bullet.getComponent(RigidBody).applyForce(dir);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "primitiveMesh", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Primitive.PrimitiveType.BOX;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "strength", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10000;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=10f87e7b093505ac2bc2b7af4d1fc64fb7f3ecc9.js.map