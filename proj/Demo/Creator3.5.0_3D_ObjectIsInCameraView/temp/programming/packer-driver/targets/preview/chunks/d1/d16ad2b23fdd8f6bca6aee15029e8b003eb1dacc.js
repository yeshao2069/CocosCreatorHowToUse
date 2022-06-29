System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Camera, Vec3, view, Quat, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, IsInViewTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Camera = _cc.Camera;
      Vec3 = _cc.Vec3;
      view = _cc.view;
      Quat = _cc.Quat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa1dbrS6ZhCpbWKx9Sw1Qqu", "IsInViewTest", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IsInViewTest", IsInViewTest = (_dec = ccclass('IsInViewTest'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Camera), _dec6 = property(Node), _dec(_class = (_class2 = class IsInViewTest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "capsuleSelf", _descriptor, this);

          _initializerDefineProperty(this, "cubeSelf", _descriptor2, this);

          _initializerDefineProperty(this, "torusSelf", _descriptor3, this);

          _initializerDefineProperty(this, "mainCameraSelf", _descriptor4, this);

          _initializerDefineProperty(this, "nodeSelf", _descriptor5, this);

          this.dir = new Vec3();
        }

        update() {
          this.rotationAroundNode(this.capsuleSelf, this.cubeSelf.position, Vec3.UP, 1);
          this.capsuleSelf.lookAt(this.cubeSelf.position);
          this.rotationAroundNode(this.torusSelf, this.cubeSelf.position, Vec3.RIGHT, 1);
          this.torusSelf.lookAt(this.cubeSelf.position);

          if (this.IsInView(this.capsuleSelf.worldPosition)) {
            console.log("Capsule is in view");
          }

          if (this.IsInView(this.torusSelf.worldPosition)) {
            console.log("Torus is in view");
          }
        }

        rotationAroundNode(self, pos, axis, angle) {
          var _quat = new Quat();

          var v1 = new Vec3();
          var v2 = new Vec3();
          var pos2 = self.position;
          var rad = angle / 180 * Math.PI; //根据旋转轴和旋转弧度计算四元数

          Quat.fromAxisAngle(_quat, axis, rad); //相减，目标点与相机点之间的向量

          Vec3.subtract(v1, pos2, pos); //把向量dir根据计算到的四元数旋转，然后计算出旋转后的距离

          Vec3.transformQuat(v2, v1, _quat);
          self.position = Vec3.add(v2, pos, v2); //根据轴和弧度绕世界空间下指定轴旋转四元数

          Quat.rotateAround(_quat, self.rotation, axis, rad);
          return _quat;
        }

        IsInView(worldPos) {
          var cameraPos = this.mainCameraSelf.node.getWorldPosition();
          var viewPos = this.mainCameraSelf.worldToScreen(worldPos);
          Vec3.normalize(this.dir, worldPos.subtract(cameraPos));
          var forward = this.mainCameraSelf.node.forward;
          var dot = Vec3.dot(forward, this.dir);
          var viewportRect = view.getViewportRect(); //判断物体是否在相机前面

          if (dot > 0 // 判断物体是否在视窗内
          && viewPos.x <= viewportRect.width && viewPos.x >= 0 && viewPos.y <= viewportRect.height && viewPos.y >= 0) return true;else return false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "capsuleSelf", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cubeSelf", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "torusSelf", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mainCameraSelf", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeSelf", [_dec6], {
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
//# sourceMappingURL=d16ad2b23fdd8f6bca6aee15029e8b003eb1dacc.js.map