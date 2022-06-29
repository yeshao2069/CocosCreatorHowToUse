System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, PhysicsSystem, _dec, _class, _crd, ccclass, property, SyncTest;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PhysicsSystem = _cc.PhysicsSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb399WL8zVCNqIs/967ObV3", "SyncTest", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SyncTest", SyncTest = (_dec = ccclass('SyncTest'), _dec(_class = class SyncTest extends Component {
        constructor() {
          super(...arguments);
          this.count = 0;
        }

        onEnable() {
          PhysicsSystem.instance.enable = false;
        }

        onDisable() {
          PhysicsSystem.instance.enable = true;
        }

        update(dt) {
          if (this.count == 20) {
            this.node.setWorldPosition(0, 0.5, 0);
          } else if (this.count == 80) {
            PhysicsSystem.instance.enable = true;
          }

          this.count++;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b124b36dcea39e645e3bd9aacacaf94773b729f8.js.map