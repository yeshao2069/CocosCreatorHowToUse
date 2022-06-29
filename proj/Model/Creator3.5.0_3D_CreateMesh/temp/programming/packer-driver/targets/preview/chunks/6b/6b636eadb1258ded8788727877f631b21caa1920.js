System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, utils, primitives, ModelComponent, CCFloat, CCInteger, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, executeInEditMode, EditableCylinder;

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
      CCFloat = _cc.CCFloat;
      CCInteger = _cc.CCInteger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c2b06JF+9ONY5Rl/MCyDa3", "EditableCylinder", undefined);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("EditableCylinder", EditableCylinder = (_dec = ccclass("EditableCylinder"), _dec2 = property({
        type: CCInteger,
        step: 1
      }), _dec3 = property({
        type: CCFloat
      }), _dec4 = property({
        type: CCFloat,
        range: [0, 1.0],
        slide: true,
        step: 0.1
      }), _dec(_class = executeInEditMode(_class = (_class2 = class EditableCylinder extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_radiusTop", _descriptor, this);

          _initializerDefineProperty(this, "_radiusBottom", _descriptor2, this);

          _initializerDefineProperty(this, "_height", _descriptor3, this);

          _initializerDefineProperty(this, "_heightSegments", _descriptor4, this);

          _initializerDefineProperty(this, "_fillRange", _descriptor5, this);

          _initializerDefineProperty(this, "_capped", _descriptor6, this);

          this.model = void 0;
        }

        get radiusTop() {
          return this._radiusTop;
        }

        set radiusTop(v) {
          this._radiusTop = v;
          this.rebuildModel();
        }

        get radiusBottom() {
          return this._radiusBottom;
        }

        set radiusBottom(v) {
          this._radiusBottom = v;
          this.rebuildModel();
        }

        get height() {
          return this._height;
        }

        set height(v) {
          this._height = v;
          this.rebuildModel();
        }

        get heightSegments() {
          return this._heightSegments;
        }

        set heightSegments(v) {
          this._heightSegments = v;
          this.rebuildModel();
        }

        get fillRange() {
          return this._fillRange;
        }

        set fillRange(v) {
          this._fillRange = v;
          this.rebuildModel();
        }

        get capped() {
          return this._capped;
        }

        set capped(v) {
          this._capped = v;
          this.rebuildModel();
        }

        onLoad() {
          this.model = this.getComponent(ModelComponent);
          if (this.model == null) this.model = this.addComponent(ModelComponent);
          this.rebuildModel();
        }

        rebuildModel() {
          var capsule = primitives.cylinder(this._radiusTop, this._radiusBottom, this._height, {
            heightSegments: this._heightSegments,
            capped: this._capped,
            arc: this._fillRange * 2 * Math.PI
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_radiusTop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radiusTop", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "radiusTop"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_radiusBottom", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radiusBottom", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "radiusBottom"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_height", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "height", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "height"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_heightSegments", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "heightSegments", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "heightSegments"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_fillRange", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "fillRange", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "fillRange"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_capped", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "capped", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "capped"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6b636eadb1258ded8788727877f631b21caa1920.js.map