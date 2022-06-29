System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, RigidBody, _dec, _class, _crd, ccclass, property, menu, MeshColliderTest;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      RigidBody = _cc.RigidBody;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f228bCMjNhHO47xpC9VxEi5", "MeshColliderTest", undefined);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("MeshColliderTest", MeshColliderTest = (_dec = ccclass("MeshColliderTest"), _dec(_class = class MeshColliderTest extends Component {
        constructor() {
          super(...arguments);
          this.startPos = [];
        }

        start() {
          // Your initialization goes here.
          for (var i = 0; i < this.node.children.length; i++) {
            this.startPos.push(this.node.children[i].worldPosition.clone());
          }
        }

        update(deltaTime) {
          // Your update function goes here.
          for (var i = 0; i < this.node.children.length; i++) {
            if (this.node.children[i].worldPosition.y < -10) {
              this.node.children[i].worldPosition = this.startPos[i];
              this.node.children[i].getComponent(RigidBody).setLinearVelocity(Vec3.ZERO);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89e9964c5fd50992f6e83aacf77b2923a4f30ba8.js.map