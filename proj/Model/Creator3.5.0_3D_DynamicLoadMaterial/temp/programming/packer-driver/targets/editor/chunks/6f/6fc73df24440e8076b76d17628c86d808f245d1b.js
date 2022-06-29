System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _crd, ccclass, property, Rotate;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "933fcBH19xCcJobzzU5vbdi", "rotate", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Rotate", Rotate = (_dec = ccclass('Rotate'), _dec(_class = class Rotate extends Component {
        constructor(...args) {
          super(...args);
          this.total = 0;
        }

        start() {
          this.total = 0;
        }

        update(dt) {
          this.total += dt * 50;
          this.node.eulerAngles = new Vec3(0, this.total, 0);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6fc73df24440e8076b76d17628c86d808f245d1b.js.map