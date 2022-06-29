System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Label, Sprite, Enum, PhysicsSystem, _dec, _class, _crd, ccclass, property, EPhysicsItem, PhysicsEnvCheck;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Enum = _cc.Enum;
      PhysicsSystem = _cc.PhysicsSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "710b56LdnBA3KNRaWyGMcpy", "PhysicsEnvCheck", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (EPhysicsItem) {
        EPhysicsItem[EPhysicsItem["BUILTIN"] = 1] = "BUILTIN";
        EPhysicsItem[EPhysicsItem["CANNON"] = 2] = "CANNON";
        EPhysicsItem[EPhysicsItem["AMMO"] = 4] = "AMMO";
        EPhysicsItem[EPhysicsItem["BUILTIN_AMMO"] = EPhysicsItem.BUILTIN + EPhysicsItem.AMMO] = "BUILTIN_AMMO";
        EPhysicsItem[EPhysicsItem["CANNON_AMMO"] = EPhysicsItem.CANNON + EPhysicsItem.AMMO] = "CANNON_AMMO";
        EPhysicsItem[EPhysicsItem["ALL"] = -1] = "ALL";
      })(EPhysicsItem || (EPhysicsItem = {}));

      Enum(EPhysicsItem);

      _export("PhysicsEnvCheck", PhysicsEnvCheck = (_dec = ccclass("PhysicsEnvCheck"), _dec(_class = class PhysicsEnvCheck extends Component {
        constructor() {
          super(...arguments);
          this.physics = EPhysicsItem.CANNON_AMMO;
        }

        onLoad() {
          if (PhysicsSystem.PHYSICS_BUILTIN) {
            var lbCom = this.node.getChildByName('desc').getComponent(Label);
            lbCom.string = "当前物理：builtin";
          } else if (PhysicsSystem.PHYSICS_CANNON) {
            var _lbCom = this.node.getChildByName('desc').getComponent(Label);

            _lbCom.string = "当前物理：cannon.js";
          } else if (PhysicsSystem.PHYSICS_AMMO) {
            var _lbCom2 = this.node.getChildByName('desc').getComponent(Label);

            _lbCom2.string = "当前物理：ammo.js";
          } else if (PhysicsSystem.PHYSICS_PHYSX) {
            var _lbCom3 = this.node.getChildByName('desc').getComponent(Label);

            _lbCom3.string = "当前物理：physx";
          } else {
            var _lbCom4 = this.node.getChildByName('desc').getComponent(Label);

            _lbCom4.string = "当前物理：none";
          }

          var name = this.node.name;

          if (name == "cannon-ammo") {
            this.physics = EPhysicsItem.CANNON_AMMO;
          } else if (name == "builtin") {
            this.physics = EPhysicsItem.BUILTIN;
          } else if (name == "cannon") {
            this.physics = EPhysicsItem.CANNON;
          } else if (name == "ammo") {
            this.physics = EPhysicsItem.AMMO;
          } else if (name == "builtin-cannon-ammo") {
            this.physics = EPhysicsItem.ALL;
          } else if (name == "builtin-ammo") {
            this.physics = EPhysicsItem.BUILTIN_AMMO;
          }

          switch (this.physics) {
            case EPhysicsItem.ALL:
              break;

            case EPhysicsItem.CANNON_AMMO:
              if (PhysicsSystem.PHYSICS_CANNON || PhysicsSystem.PHYSICS_AMMO) {
                break;
              }

              var _lbCom5 = this.node.getChildByName('lb').getComponent(Label);

              _lbCom5.enabled = true;
              _lbCom5.string = "测试此场景需要将物理模块设置为 cannon.js 或 ammo.js";
              var sprCom = this.getComponentInChildren(Sprite);
              sprCom.enabled = true;
              break;

            case EPhysicsItem.BUILTIN_AMMO:
              if (PhysicsSystem.PHYSICS_BUILTIN || PhysicsSystem.PHYSICS_AMMO) {
                break;
              }

              var lbCom1 = this.node.getChildByName('lb').getComponent(Label);
              lbCom1.enabled = true;
              lbCom1.string = "测试此场景需要将物理模块设置为 builtin 或 ammo.js";
              var sprCom1 = this.getComponentInChildren(Sprite);
              sprCom1.enabled = true;
              break;

            case EPhysicsItem.CANNON:
              if (!PhysicsSystem.PHYSICS_CANNON) {
                var _lbCom6 = this.node.getChildByName('lb').getComponent(Label);

                _lbCom6.enabled = true;
                _lbCom6.string = "测试此场景需要将物理模块设置为 cannon.js";

                var _sprCom = this.getComponentInChildren(Sprite);

                _sprCom.enabled = true;
              }

              break;

            case EPhysicsItem.AMMO:
              if (!PhysicsSystem.PHYSICS_AMMO) {
                var _lbCom7 = this.node.getChildByName('lb').getComponent(Label);

                _lbCom7.enabled = true;
                _lbCom7.string = "测试此场景需要将物理模块设置为 ammo.js";

                var _sprCom2 = this.getComponentInChildren(Sprite);

                _sprCom2.enabled = true;
              }

              break;

            case EPhysicsItem.BUILTIN:
              if (!PhysicsSystem.PHYSICS_BUILTIN) {
                var _lbCom8 = this.node.getChildByName('lb').getComponent(Label);

                _lbCom8.enabled = true;
                _lbCom8.string = "测试此场景需要将物理模块设置为 builtin";

                var _sprCom3 = this.getComponentInChildren(Sprite);

                _sprCom3.enabled = true;
              }

              break;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=50fd5e2aea2a553aaab85667c0befeb8557b8f7d.js.map