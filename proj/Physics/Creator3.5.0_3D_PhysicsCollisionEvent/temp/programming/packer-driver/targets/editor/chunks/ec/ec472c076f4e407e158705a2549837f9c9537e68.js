System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Collider, Label, Color, UITransform, Size, VerticalTextAlignment, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, CollisionTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider = _cc.Collider;
      Label = _cc.Label;
      Color = _cc.Color;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      VerticalTextAlignment = _cc.VerticalTextAlignment;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55ac6b51mtG0o/5q9cvDniP", "CollisionTest", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CollisionTest", CollisionTest = (_dec = ccclass("CollisionTest"), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = (_class3 = class CollisionTest extends Component {
        constructor() {
          super();
          this.id = void 0;
          this.alreadyStay = false;
          this.messageAmount = 0;

          _initializerDefineProperty(this, "label", _descriptor, this);

          this.id = CollisionTest._idCounter++;
        }

        start() {
          // Your initialization goes here.
          let collider = this.getComponent(Collider);

          if (collider) {
            collider.on('onCollisionEnter', this.onCollision, this);
            collider.on('onCollisionStay', this.onCollision, this);
            collider.on('onCollisionExit', this.onCollision, this);
          }
        }

        onCollision(event) {
          const collider = this.getComponent(Collider);

          if (collider != event.selfCollider) {
            this.label.string = "[错误]：self不等于自己，请提交 issue";
            this.label.fontSize = 40;
            this.label.lineHeight = 40;
            this.label.verticalAlign = VerticalTextAlignment.CENTER;
            this.label.getComponent(UITransform).contentSize = new Size(400, 400);
            this.label.color = Color.RED;
            this.enabled = false;
            return;
          }

          if (event.type == 'onCollisionStay') {
            if (!this.alreadyStay) {
              this.alreadyStay = true;
            } else {
              return;
            }
          } else if (event.type == 'onCollisionExit') {
            this.alreadyStay = false;
          }

          if (this.label) {
            if (this.messageAmount > 10) {
              this.label.string = "";
              this.messageAmount = 0;
            }

            this.messageAmount++;
            this.label.string += event.selfCollider.node.name + '一' + event.type + '一' + event.otherCollider.node.name + '\n';
          }
        }

      }, _class3._idCounter = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec472c076f4e407e158705a2549837f9c9537e68.js.map