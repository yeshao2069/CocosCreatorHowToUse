System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, PhysicsSystem, geometry, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RaycastClosest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
      geometry = _cc.geometry;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c86eDLiapFwYGWVLaEimt7", "raycastClosest", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RaycastClosest", RaycastClosest = (_dec = ccclass('RaycastClosest'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class RaycastClosest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cube1", _descriptor, this);

          _initializerDefineProperty(this, "cube2", _descriptor2, this);
        }

        start() {
          // [3]
          var mask = 1 << 2 | 1 << 1;
          console.log(mask);
          var pos1 = this.cube1.position;
          var pos2 = this.cube2.position;
          var pos3 = new Vec3();
          pos3.x = pos2.x - pos1.x;
          pos3.y = pos2.y - pos1.y;
          pos3.z = pos2.z - pos1.z;
          console.log(pos1, pos2); // cube1本身，去检查cube2，所以起点为cube1 终点为cube2, Ray的3,4,5参数为方向(终点坐标向量-起点坐标向量)

          var ray = new geometry.Ray(pos1.x, pos1.y, pos1.z, pos3.x, pos3.y, pos3.z);
          var physys = PhysicsSystem.instance;
          var maxdistance = 10000;
          var result = physys.raycastClosest(ray, mask, maxdistance, false);
          console.log("检测结果:", result); // 如果是true则存在碰撞体，如果是false则不存在碰撞体
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cube1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cube2", [_dec3], {
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
//# sourceMappingURL=296d87dd0f4e6dbe67fe175e496e482c38437dd1.js.map