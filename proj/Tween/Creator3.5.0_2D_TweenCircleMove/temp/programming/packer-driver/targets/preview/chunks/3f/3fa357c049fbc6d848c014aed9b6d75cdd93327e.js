System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, tween, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, EllipseAutoScroll;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "269f0OkOx5NkajmREqo4DzA", "CircleMove", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EllipseAutoScroll", EllipseAutoScroll = (_dec = ccclass('EllipseAutoScroll'), _dec2 = property([Node]), _dec(_class = (_class2 = class EllipseAutoScroll extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodes", _descriptor, this);
        }

        start() {
          this.init();
        }

        init() {
          var _this = this;

          var _loop = function _loop() {
            child = _this.nodes[i];
            var dstartAngle = 0; // 开始的角度

            var dendAngle = 2 * Math.PI; // 结束的角度

            var radius = 200; // 半径

            var center = new Vec3(); // 转动的时候的中心点位置

            var time = 5; // 决定转动的速度

            var rotate1 = 0;
            var rotate2 = 2 * Math.PI;
            tween(child).repeatForever(tween(rotate1).by(time + i * 5, rotate2, {
              'onUpdate': function onUpdate(t, r) {
                if (r === void 0) {
                  r = 0;
                }

                var a = (dendAngle - dstartAngle) * r + dstartAngle;
                dstartAngle = r * rotate1;
                var x = center.x + radius * Math.sin(a);
                var y = center.y + radius * Math.cos(a);
                t.setPosition(x, y, 0);
              }
            }).start()).start();
          };

          for (var i = 0; i < this.nodes.length; i++) {
            var child;

            _loop();
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
//# sourceMappingURL=3fa357c049fbc6d848c014aed9b6d75cdd93327e.js.map