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

      _cclegacy._RF.push({}, "77bcfptEZNP4JzyzyV8MumZ", "PhysicsEnvCheck", undefined);

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
        constructor(...args) {
          super(...args);
          this.physics = EPhysicsItem.CANNON_AMMO;
        }

        onLoad() {
          if (PhysicsSystem.PHYSICS_BUILTIN) {
            const lbCom = this.node.getChildByName('desc').getComponent(Label);
            lbCom.string = "当前物理：builtin";
          } else if (PhysicsSystem.PHYSICS_CANNON) {
            const lbCom = this.node.getChildByName('desc').getComponent(Label);
            lbCom.string = "当前物理：cannon.js";
          } else if (PhysicsSystem.PHYSICS_BULLET) {
            const lbCom = this.node.getChildByName('desc').getComponent(Label);
            lbCom.string = "当前物理：ammo.js";
          } else if (PhysicsSystem.PHYSICS_PHYSX) {
            const lbCom = this.node.getChildByName('desc').getComponent(Label);
            lbCom.string = "当前物理：physx";
          } else {
            const lbCom = this.node.getChildByName('desc').getComponent(Label);
            lbCom.string = "当前物理：none";
          }

          const name = this.node.name;

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

              let lbCom = this.node.getChildByName('lb').getComponent(Label);
              lbCom.enabled = true;
              lbCom.string = "测试此场景需要将物理模块设置为 cannon.js 或 ammo.js";
              let sprCom = this.getComponentInChildren(Sprite);
              sprCom.enabled = true;
              break;

            case EPhysicsItem.BUILTIN_AMMO:
              if (PhysicsSystem.PHYSICS_BUILTIN || PhysicsSystem.PHYSICS_AMMO) {
                break;
              }

              let lbCom1 = this.node.getChildByName('lb').getComponent(Label);
              lbCom1.enabled = true;
              lbCom1.string = "测试此场景需要将物理模块设置为 builtin 或 ammo.js";
              let sprCom1 = this.getComponentInChildren(Sprite);
              sprCom1.enabled = true;
              break;

            case EPhysicsItem.CANNON:
              if (!PhysicsSystem.PHYSICS_CANNON) {
                let lbCom = this.node.getChildByName('lb').getComponent(Label);
                lbCom.enabled = true;
                lbCom.string = "测试此场景需要将物理模块设置为 cannon.js";
                let sprCom = this.getComponentInChildren(Sprite);
                sprCom.enabled = true;
              }

              break;

            case EPhysicsItem.AMMO:
              if (!PhysicsSystem.PHYSICS_AMMO) {
                let lbCom = this.node.getChildByName('lb').getComponent(Label);
                lbCom.enabled = true;
                lbCom.string = "测试此场景需要将物理模块设置为 ammo.js";
                let sprCom = this.getComponentInChildren(Sprite);
                sprCom.enabled = true;
              }

              break;

            case EPhysicsItem.BUILTIN:
              if (!PhysicsSystem.PHYSICS_BUILTIN) {
                let lbCom = this.node.getChildByName('lb').getComponent(Label);
                lbCom.enabled = true;
                lbCom.string = "测试此场景需要将物理模块设置为 builtin";
                let sprCom = this.getComponentInChildren(Sprite);
                sprCom.enabled = true;
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
//# sourceMappingURL=9fa8b9a4c52103d233cb8cc2756891f752bc8a05.js.map