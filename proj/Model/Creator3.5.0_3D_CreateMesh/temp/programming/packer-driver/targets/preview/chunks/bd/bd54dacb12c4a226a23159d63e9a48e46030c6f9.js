System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, utils, primitives, ModelComponent, CCInteger, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, executeInEditMode, EditableSphere;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      utils = _cc.utils;
      primitives = _cc.primitives;
      ModelComponent = _cc.ModelComponent;
      CCInteger = _cc.CCInteger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5990bs+bwtK97DLcTd7ptI7", "EditableSphere", undefined);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("EditableSphere", EditableSphere = (_dec = ccclass("EditableSphere"), _dec2 = property({
        type: CCInteger,
        step: 1
      }), _dec(_class = executeInEditMode(_class = (_class2 = class EditableSphere extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_radius", _descriptor, this);

          _initializerDefineProperty(this, "_segments", _descriptor2, this);

          this.model = void 0;
        }

        get radius() {
          return this._radius;
        }

        set radius(v) {
          this._radius = v;
          this.rebuildModel();
        }

        get segments() {
          return this._segments;
        }

        set segments(v) {
          this._segments = v;
          this.rebuildModel();
        }

        onLoad() {
          this.model = this.getComponent(ModelComponent);
          if (this.model == null) this.model = this.addComponent(ModelComponent);
          this.rebuildModel();
        }

        rebuildModel() {
          var capsule = primitives.sphere(this._radius, {
            segments: this._segments
          });
          var mesh = utils.createMesh(capsule);
          if (this.model.mesh) this.model.mesh.destroy();
          this.model.mesh = mesh;
        }

        onDestroy() {
          if (this.model.mesh) {
            this.model.mesh.destroy();
            this.model.mesh = null;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_radius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radius", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_segments", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 24;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "segments", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "segments"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd54dacb12c4a226a23159d63e9a48e46030c6f9.js.map