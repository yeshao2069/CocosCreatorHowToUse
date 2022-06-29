System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Material, SkinningModelComponent, ModelComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, instacingMaterial;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Material = _cc.Material;
      SkinningModelComponent = _cc.SkinningModelComponent;
      ModelComponent = _cc.ModelComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bcf19WXQ/FNSoaaPEqPFbYb", "instacingMaterial", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("instacingMaterial", instacingMaterial = (_dec = ccclass('instacingMaterial'), _dec2 = property(Material), _dec3 = property(Material), _dec(_class = (_class2 = class instacingMaterial extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "normalMaterial", _descriptor, this);

          _initializerDefineProperty(this, "instancingMaterial", _descriptor2, this);

          this._isEnable = false;
        }

        set enableInstancing(value) {
          this._isEnable = value;
          var material = this._isEnable ? this.instancingMaterial : this.normalMaterial;
          var skinModel = this.node.getComponent(SkinningModelComponent);

          if (skinModel) {
            var len = skinModel.materials.length;

            for (var idx = 0; idx < len; idx++) {
              skinModel.setMaterial(material, idx);
            }
          } else {
            var model = this.node.getComponent(ModelComponent);

            if (model) {
              var _len = model.materials.length;

              for (var _idx = 0; _idx < _len; _idx++) {
                model.setMaterial(material, _idx);
              }
            }
          }
        }

        get enableInstancing() {
          return this._isEnable;
        }

        start() {// Your initialization goes here.
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "normalMaterial", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "instancingMaterial", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e1268afc43e13e3c6fd04d9ef3eec5d83d97bc19.js.map