System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, utils, primitives, ModelComponent, Vec3, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, executeInEditMode, EditableCube;

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
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "461b3Yc1zZN06l8TW57ul6D", "EditableCube", undefined);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("EditableCube", EditableCube = (_dec = ccclass("EditableCube"), _dec2 = property({
        step: 1
      }), _dec(_class = executeInEditMode(_class = (_class2 = class EditableCube extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_size", _descriptor, this);

          _initializerDefineProperty(this, "_segments", _descriptor2, this);

          this.model = void 0;
        }

        get size() {
          return this._size;
        }

        set size(v) {
          this._size = v;
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

          if (this.model == null) {
            this.model = this.addComponent(ModelComponent);
          }

          this.rebuildModel();
        }

        rebuildModel() {
          let box = primitives.box({
            width: this._size.x,
            height: this._size.y,
            length: this._size.z,
            widthSegments: Math.round(this._segments.x),
            heightSegments: Math.round(this._segments.y),
            lengthSegments: Math.round(this._segments.z)
          });
          let mesh = utils.createMesh(box);
          if (this.model.mesh) this.model.mesh.destroy();
          this.model.mesh = mesh;
        }

        onDestroy() {
          if (this.model.mesh) {
            this.model.mesh.destroy();
            this.model.mesh = null;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_size", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(1, 1, 1);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "size", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "size"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_segments", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(1, 1, 1);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "segments", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "segments"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5967a65c4f76fd66428fa01db283a1510458589d.js.map