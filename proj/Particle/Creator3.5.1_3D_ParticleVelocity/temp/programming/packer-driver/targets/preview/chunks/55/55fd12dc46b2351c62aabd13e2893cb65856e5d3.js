System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Toggle, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, _temp_num, TransformController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da537vtBYVN350xTvxM0MEY", "TransformController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      _temp_num = 0;

      _export("TransformController", TransformController = (_dec = ccclass("TransformController"), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Toggle
      }), _dec7 = property({
        type: Toggle
      }), _dec8 = property({
        type: Toggle
      }), _dec9 = property({
        type: Toggle
      }), _dec(_class = (_class2 = class TransformController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "particle1", _descriptor, this);

          _initializerDefineProperty(this, "particle2", _descriptor2, this);

          _initializerDefineProperty(this, "particle3", _descriptor3, this);

          _initializerDefineProperty(this, "particle4", _descriptor4, this);

          _initializerDefineProperty(this, "check1", _descriptor5, this);

          _initializerDefineProperty(this, "check2", _descriptor6, this);

          _initializerDefineProperty(this, "check3", _descriptor7, this);

          _initializerDefineProperty(this, "check4", _descriptor8, this);

          this._translate = new Vec3();
          this._rotate = new Vec3();
        }

        start() {// Your initialization goes here.
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


        onTranslateChanged(slider, data) {
          this._translate.set(0, 0, slider.progress * 10 - _temp_num);

          _temp_num = slider.progress * 10;

          if (this.check1.isChecked) {
            this.particle1.translate(this._translate);
          }

          if (this.check2.isChecked) {
            this.particle2.translate(this._translate);
          }

          if (this.check3.isChecked) {
            this.particle3.translate(this._translate);
          }

          if (this.check4.isChecked) {
            this.particle4.translate(this._translate);
          }
        }

        onRotateChanged(slider, data) {
          this._rotate.set(slider.progress * 90, 0, 0);

          if (this.check1.isChecked) {
            this.particle1.setRotationFromEuler(this.particle1.eulerAngles.x, this._rotate.x, this.particle1.eulerAngles.z);
          }

          if (this.check2.isChecked) {
            this.particle2.setRotationFromEuler(this.particle2.eulerAngles.x, this._rotate.x, this.particle2.eulerAngles.z);
          }

          if (this.check3.isChecked) {
            this.particle3.setRotationFromEuler(this.particle3.eulerAngles.x, this._rotate.x, this.particle3.eulerAngles.z);
          }

          if (this.check4.isChecked) {
            this.particle4.setRotationFromEuler(this.particle4.eulerAngles.x, this._rotate.x, this.particle4.eulerAngles.z);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "particle1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "particle2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "particle3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "particle4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "check1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "check2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "check3", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "check4", [_dec9], {
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
//# sourceMappingURL=55fd12dc46b2351c62aabd13e2893cb65856e5d3.js.map