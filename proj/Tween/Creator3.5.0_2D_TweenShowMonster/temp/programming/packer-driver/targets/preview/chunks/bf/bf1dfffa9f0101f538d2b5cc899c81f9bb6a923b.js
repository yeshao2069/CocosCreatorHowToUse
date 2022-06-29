System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, tween, Vec3, UIOpacity, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, TweenShowMonster;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      UIOpacity = _cc.UIOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "958f24f9LhDaqAD5eoLRNAy", "TweenShowMonster", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TweenShowMonster", TweenShowMonster = (_dec = ccclass('TweenShowMonster'), _dec2 = property([Node]), _dec(_class = (_class2 = class TweenShowMonster extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodes", _descriptor, this);
        }

        start() {
          var nodes = this.nodes;
          var posXArrs = [-300, -150, 0, 150, 300];

          for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            tween(node).delay(0.5 + i * 0.2).repeat(1000, tween(node).set({
              scale: new Vec3(10, 10, 10),
              position: new Vec3(0, 0, 0),
              angle: 0
            }).parallel(tween(node).to(1, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'quintInOut'
            }), tween(node).to(2.5, {
              position: new Vec3(posXArrs[i], 0, 0)
            }, {
              easing: 'backOut'
            })).delay(0.5).to(0.8, {
              angle: 360
            }, {
              easing: 'cubicInOut'
            }).delay(1).to(0.3, {
              scale: new Vec3(3, 3, 3)
            }, {
              easing: 'quintIn'
            }).delay(1)).start();
            tween(node.getComponent(UIOpacity)).delay(0.5 + i * 0.2).repeat(1000, tween(node.getComponent(UIOpacity)).set({
              opacity: 0
            }).parallel(tween(node.getComponent(UIOpacity)).to(1, {
              opacity: 255
            }, {
              easing: 'quintInOut'
            }), tween(node.getComponent(UIOpacity)).delay(2.5)).delay(0.5).delay(0.8).delay(1).to(0.3, {
              opacity: 0
            }, {
              easing: 'quintIn'
            }).delay(1)).start();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodes", [_dec2], {
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
//# sourceMappingURL=bf1dfffa9f0101f538d2b5cc899c81f9bb6a923b.js.map