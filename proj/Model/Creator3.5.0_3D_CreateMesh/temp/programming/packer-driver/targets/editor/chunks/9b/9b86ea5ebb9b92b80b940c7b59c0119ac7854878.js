System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, utils, primitives, ModelComponent, CCFloat, CCInteger, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, executeInEditMode, EditableTorus;

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

      _cclegacy._RF.push({}, "da73a/FbehMI4XV35+KkKUN", "EditableTorus", undefined);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("EditableTorus", EditableTorus = (_dec = ccclass("EditableTorus"), _dec2 = property({
        type: CCInteger,
        step: 1
      }), _dec3 = property({
        type: CCInteger,
        step: 1
      }), _dec4 = property({
        type: CCFloat
      }), _dec5 = property({
        type: CCFloat,
        range: [0, 1.0],
        slide: true,
        step: 0.1
      }), _dec(_class = executeInEditMode(_class = (_class2 = class EditableTorus extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_radius", _descriptor, this);

          _initializerDefineProperty(this, "_tubular", _descriptor2, this);

          _initializerDefineProperty(this, "_radiusSegments", _descriptor3, this);

          _initializerDefineProperty(this, "_tubularSegments", _descriptor4, this);

          _initializerDefineProperty(this, "_fillRange", _descriptor5, this);

          this.model = void 0;
        }

        get radius() {
          return this._radius;
        }

        set radius(v) {
          this._radius = v;
          this.rebuildModel();
        }

        get tubular() {
          return this._tubular;
        }

        set tubular(v) {
          this._tubular = v;
          this.rebuildModel();
        }

        get radiusSegments() {
          return this._radiusSegments;
        }

        set radiusSegments(v) {
          this._radiusSegments = v;
          this.rebuildModel();
        }

        get tubularSegments() {
          return this._tubularSegments;
        }

        set tubularSegments(v) {
          this._tubularSegments = v;
          this.rebuildModel();
        }

        get fillRange() {
          return this._fillRange;
        }

        set fillRange(v) {
          this._fillRange = v;
          this.rebuildModel();
        }

        onLoad() {
          this.model = this.getComponent(ModelComponent);
          if (this.model == null) this.model = this.addComponent(ModelComponent);
          this.rebuildModel();
        }

        rebuildModel() {
          let capsule = primitives.torus(this._radius, this._tubular, {
            radialSegments: this._radiusSegments,
            tubularSegments: this._tubularSegments,
            arc: this._fillRange * 2 * Math.PI
          });
          let mesh = utils.createMesh(capsule);
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
        initializer: function () {
          return 0.5;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radius", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_tubular", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "tubular", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "tubular"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_radiusSegments", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 8;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radiusSegments", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "radiusSegments"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_tubularSegments", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 24;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "tubularSegments", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "tubularSegments"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_fillRange", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "fillRange", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "fillRange"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b86ea5ebb9b92b80b940c7b59c0119ac7854878.js.map