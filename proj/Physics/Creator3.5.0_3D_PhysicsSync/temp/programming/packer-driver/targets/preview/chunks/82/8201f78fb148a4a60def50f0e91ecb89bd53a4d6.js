System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Material, ColliderComponent, ModelComponent, LabelComponent, VerticalTextAlignment, UITransformComponent, Size, Color, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, menu, TriggerTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Material = _cc.Material;
      ColliderComponent = _cc.ColliderComponent;
      ModelComponent = _cc.ModelComponent;
      LabelComponent = _cc.LabelComponent;
      VerticalTextAlignment = _cc.VerticalTextAlignment;
      UITransformComponent = _cc.UITransformComponent;
      Size = _cc.Size;
      Color = _cc.Color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5bd140RbPdEL7Tz0wujw2ts", "TriggerTest", undefined);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("TriggerTest", TriggerTest = (_dec = ccclass("TriggerTest"), _dec2 = property({
        type: Material,
        visible: function visible() {
          return this.USE_MATERIAL;
        }
      }), _dec3 = property({
        type: Material,
        visible: function visible() {
          return this.USE_MATERIAL;
        }
      }), _dec4 = property({
        type: LabelComponent,
        visible: function visible() {
          return this.USE_LABEL;
        }
      }), _dec(_class = (_class2 = class TriggerTest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "USE_MATERIAL", _descriptor, this);

          _initializerDefineProperty(this, "enterMat", _descriptor2, this);

          _initializerDefineProperty(this, "exitMat", _descriptor3, this);

          _initializerDefineProperty(this, "USE_LABEL", _descriptor4, this);

          _initializerDefineProperty(this, "label", _descriptor5, this);

          this._prev = [];
          this._amount = 0;
        }

        start() {
          var collider = this.getComponent(ColliderComponent);

          if (collider) {
            if (this.USE_MATERIAL) {
              collider.on('onTriggerEnter', this.onTriggerForUseMaterial, this);
              collider.on('onTriggerStay', this.onTriggerForUseMaterial, this);
              collider.on('onTriggerExit', this.onTriggerForUseMaterial, this);
            }

            if (this.USE_LABEL) {
              collider.on('onTriggerEnter', this.onTriggerForUseLabel, this);
              collider.on('onTriggerStay', this.onTriggerForUseLabel, this);
              collider.on('onTriggerExit', this.onTriggerForUseLabel, this);
            }
          }
        }

        onTriggerForUseMaterial(event) {
          if (event.type == 'onTriggerEnter') {
            var modelCom = event.otherCollider.node.getComponent(ModelComponent);

            if (modelCom) {
              modelCom.material = this.enterMat;
            }
          } else if (event.type == 'onTriggerExit') {
            var _modelCom = event.otherCollider.node.getComponent(ModelComponent);

            if (_modelCom) {
              _modelCom.material = this.exitMat;
            }
          }
        }

        onTriggerForUseLabel(event) {
          var collider = this.getComponent(ColliderComponent);

          if (collider != event.selfCollider) {
            this.label.string = "[错误]：self不等于自己，请提交 issue";
            this.label.fontSize = 40;
            this.label.lineHeight = 40;
            this.label.verticalAlign = VerticalTextAlignment.CENTER;
            this.label.getComponent(UITransformComponent).contentSize = new Size(400, 400);
            this.label.color = Color.RED;
            this.enabled = false;
            return;
          }

          if (event.type == 'onTriggerStay') {
            if (!this._prev[event.otherCollider.uuid]) {
              this._prev[event.otherCollider.uuid] = true;
            } else {
              return;
            }
          } else if (event.type == 'onTriggerExit') {
            this._prev[event.otherCollider.uuid] = false;
          }

          if (this.label) {
            if (this._amount++ > 11) {
              this.label.string = '';
              this._amount = 0;
            }

            this.label.string += event.selfCollider.node.name + '__' + event.type + '__' + event.otherCollider.node.name + ' ';
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "USE_MATERIAL", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enterMat", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "exitMat", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "USE_LABEL", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec4], {
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
//# sourceMappingURL=8201f78fb148a4a60def50f0e91ecb89bd53a4d6.js.map