System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _crd, ccclass, property, NodeMove;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83b09AL85dJeZK6WVXKUqjS", "node-move", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NodeMove", NodeMove = (_dec = ccclass('NodeMove'), _dec(_class = class NodeMove extends Component {
        start() {
          let x = this.node.position.x;
          let y = this.node.position.y;
          let z = this.node.position.z;
          let vec3 = new Vec3(x, y, z);
          this.schedule(dt => {
            x += dt;
            vec3.x = x;
            this.node.setPosition(vec3);

            if (x >= 5) {
              x = -5;
            }
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4d2a7d452b46bd960afcdd0a4d28f336e99f4cd4.js.map