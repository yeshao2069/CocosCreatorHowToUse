System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, MeshRenderer, Material, resources, error, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, DynamicLoadMaterial;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      MeshRenderer = _cc.MeshRenderer;
      Material = _cc.Material;
      resources = _cc.resources;
      error = _cc.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3e742RdHrtMObDoKXurwJ78", "DynamicLoadMaterial", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DynamicLoadMaterial", DynamicLoadMaterial = (_dec = ccclass('DynamicLoadMaterial'), _dec2 = property(MeshRenderer), _dec(_class = (_class2 = class DynamicLoadMaterial extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "meshRenderer", _descriptor, this);
        }

        start() {
          this.scheduleOnce(() => {
            resources.load('materials/dynamic-load-material', Material, (err, material) => {
              if (err) {
                error(err);
                return;
              }

              this._material = material.addRef();
              this.meshRenderer.setMaterial(material, 0);
            });
          }, 1);
        }

        onDestroy() {
          this._material && this._material.decRef();
          this._material = null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "meshRenderer", [_dec2], {
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
//# sourceMappingURL=d43b84aaa3d78f6503bbbcc8bd94b92f75bf4e8a.js.map