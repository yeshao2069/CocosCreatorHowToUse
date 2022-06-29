System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, AnimationComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MoveAnimationCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      AnimationComponent = _cc.AnimationComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c437cmLK85Kn6NgmwNLPHOP", "MoveAnimationCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MoveAnimationCtrl", MoveAnimationCtrl = (_dec = ccclass('MoveAnimationCtrl'), _dec2 = property(AnimationComponent), _dec3 = property([Node]), _dec(_class = (_class2 = class MoveAnimationCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "target", _descriptor, this);

          _initializerDefineProperty(this, "nodes", _descriptor2, this);
        }

        onLoad() {
          this.onRegisteredEvent();
        }

        onRegisteredEvent() {
          for (var i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].on(Node.EventType.TOUCH_END, this.onPlayAnimation, this);
          }
        }

        onPlayAnimation(event) {
          this.target.stop();

          switch (event.target.name) {
            case 'Linear':
              this.target.play('linear');
              break;

            case 'CaseIn_Expo':
              this.target.play('caseIn-expo');
              break;

            case 'CaseOut_Expo':
              this.target.play('caseOut-expo');
              break;

            case 'CaseInOut_Expo':
              this.target.play('caseInOut-expo');
              break;

            case 'Back_Forward':
              this.target.play('back-forward');
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3380bb076a3de4817e7e1d5c9b1b8b1e475a0f67.js.map