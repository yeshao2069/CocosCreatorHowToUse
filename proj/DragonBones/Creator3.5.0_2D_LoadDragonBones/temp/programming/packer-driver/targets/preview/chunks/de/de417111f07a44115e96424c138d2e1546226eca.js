System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, resources, dragonBones, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, LoadDragonBones;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      resources = _cc.resources;
      dragonBones = _cc.dragonBones;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82f6dBOWw5H+aXLOZfObOlO", "LoadDragonBones", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadDragonBones", LoadDragonBones = (_dec = ccclass('LoadDragonBones'), _dec2 = property(dragonBones.ArmatureDisplay), _dec(_class = (_class2 = class LoadDragonBones extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "armatureDisplay", _descriptor, this);
        }

        onLoad() {
          this.dynamicCreate();
        } // 动态创建


        dynamicCreate() {
          resources.load('dragonBones/NewDragonTest', dragonBones.DragonBonesAsset, (err, res) => {
            if (err) {
              console.error(err);
              return;
            }

            this.armatureDisplay.dragonAsset = res;
            resources.load('dragonBones/texture', dragonBones.DragonBonesAtlasAsset, (err, res) => {
              if (err) {
                console.error(err);
                return;
              }

              this.armatureDisplay.dragonAtlasAsset = res;
              this.armatureDisplay.armatureName = "armatureName";
              this.armatureDisplay.playAnimation('stand', 0);
            });
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "armatureDisplay", [_dec2], {
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
//# sourceMappingURL=de417111f07a44115e96424c138d2e1546226eca.js.map