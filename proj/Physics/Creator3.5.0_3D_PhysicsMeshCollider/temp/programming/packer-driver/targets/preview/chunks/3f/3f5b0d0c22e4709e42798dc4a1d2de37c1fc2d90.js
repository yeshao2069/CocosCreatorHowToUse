System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, Quat, Node, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, menu, ccclass, property, LoopMotion;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a0b6Xtnc5NKarpfgPqED7x", "LoopMotion", undefined);

      ({
        menu,
        ccclass,
        property
      } = _decorator);

      _export("LoopMotion", LoopMotion = (_dec = ccclass("LoopMotion"), _dec2 = property({
        visible: function visible() {
          return this.USE_TRANSLATE;
        }
      }), _dec3 = property({
        visible: function visible() {
          return this.USE_TRANSLATE;
        }
      }), _dec4 = property({
        visible: function visible() {
          return this.USE_TRANSLATE && this.USE_LOOP;
        }
      }), _dec5 = property({
        visible: function visible() {
          return this.USE_ROTATION;
        }
      }), _dec6 = property({
        visible: function visible() {
          return this.USE_SCALE;
        }
      }), _dec7 = property({
        visible: function visible() {
          return this.USE_SCALE;
        }
      }), _dec8 = property({
        visible: function visible() {
          return this.USE_SCALE && this.USE_LOOP_SCALE;
        }
      }), _dec(_class = (_class2 = class LoopMotion extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "USE_TRANSLATE", _descriptor, this);

          _initializerDefineProperty(this, "deltaMotion", _descriptor2, this);

          _initializerDefineProperty(this, "USE_LOOP", _descriptor3, this);

          _initializerDefineProperty(this, "displacement", _descriptor4, this);

          _initializerDefineProperty(this, "USE_ROTATION", _descriptor5, this);

          _initializerDefineProperty(this, "deltaEuler", _descriptor6, this);

          _initializerDefineProperty(this, "USE_SCALE", _descriptor7, this);

          _initializerDefineProperty(this, "deltaScale", _descriptor8, this);

          _initializerDefineProperty(this, "USE_LOOP_SCALE", _descriptor9, this);

          _initializerDefineProperty(this, "scaleLength", _descriptor10, this);

          this._origin = new Vec3();
          this._rot = new Quat();
          this._scale = new Vec3();
        }

        start() {
          Quat.fromEuler(this._rot, this.deltaEuler.x, this.deltaEuler.y, this.deltaEuler.z);
          Vec3.copy(this._origin, this.node.worldPosition);
          Vec3.copy(this._scale, this.node.worldScale);
        }

        update(deltaTime) {
          if (this.USE_TRANSLATE) {
            if (this.USE_LOOP) {
              var posNow = this.node.worldPosition;
              if (Math.abs(posNow.x - this._origin.x) > this.displacement.x) this.deltaMotion.x *= -1;
              if (Math.abs(posNow.y - this._origin.y) > this.displacement.y) this.deltaMotion.y *= -1;
              if (Math.abs(posNow.z - this._origin.z) > this.displacement.z) this.deltaMotion.z *= -1;
            }

            this.node.translate(this.deltaMotion, Node.NodeSpace.WORLD);
          }

          if (this.USE_SCALE) {
            var ws = this.node.worldScale;

            if (this.USE_LOOP_SCALE) {
              if (Math.abs(ws.x - this._scale.x) > this.scaleLength.x) this.deltaScale.x *= -1;
              if (Math.abs(ws.y - this._scale.y) > this.scaleLength.y) this.deltaScale.y *= -1;
              if (Math.abs(ws.z - this._scale.z) > this.scaleLength.z) this.deltaScale.z *= -1;
            }

            this.node.setWorldScale(ws.x + this.deltaScale.x, ws.y + this.deltaScale.y, ws.z + this.deltaScale.z);
          }

          if (this.USE_ROTATION) {
            this.node.rotate(this._rot, Node.NodeSpace.WORLD);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "USE_TRANSLATE", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "deltaMotion", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "USE_LOOP", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "displacement", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "USE_ROTATION", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "deltaEuler", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "USE_SCALE", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "deltaScale", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "USE_LOOP_SCALE", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "scaleLength", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3f5b0d0c22e4709e42798dc4a1d2de37c1fc2d90.js.map