System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, CCInteger, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, EllipseAutoScroll;

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
      CCInteger = _cc.CCInteger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "269f0OkOx5NkajmREqo4DzA", "EllipseAutoScroll", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EllipseAutoScroll", EllipseAutoScroll = (_dec = ccclass('EllipseAutoScroll'), _dec2 = property([Node]), _dec3 = property(CCInteger), _dec4 = property(CCInteger), _dec5 = property(Vec3), _dec6 = property(CCInteger), _dec(_class = (_class2 = class EllipseAutoScroll extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodes", _descriptor, this);

          _initializerDefineProperty(this, "longLine", _descriptor2, this);

          _initializerDefineProperty(this, "shortLine", _descriptor3, this);

          _initializerDefineProperty(this, "center", _descriptor4, this);

          _initializerDefineProperty(this, "speed", _descriptor5, this);

          this.angle = 0;
          this.tempPos = new Vec3();
        }

        start() {
          this.angle = 0;
          this.initAngle();
        }

        initAngle() {
          for (var i = 0; i < this.nodes.length; i++) {
            var child = this.nodes[i];
            var angle = (270 - 360 / this.nodes.length * i + 360) % 360;
            child['_a'] = this.longLine;
            child['_b'] = this.shortLine;
            child['_angle'] = angle;
          }
        }

        update(dt) {
          this.angle = (this.angle + this.speed) % 360;

          for (var i = 0; i < this.nodes.length; i++) {
            var child = this.nodes[i];
            this.tempPos = child.getPosition();
            let angle = (child['_angle'] + this.angle + 360) % 360;
            var a = angle * Math.PI / 180;
            var x = child['_a'] * Math.cos(a) + this.center.x;
            var y = child['_b'] * Math.sin(a) + this.center.y;
            this.tempPos.x = x;
            this.tempPos.y = y;
            child.setPosition(this.tempPos);
            let rotate = 360 - this.getRotation(child.position, new Vec3(x, y, 0)) * 180 / Math.PI;
            child.setRotationFromEuler(0, rotate, 0);
          }
        }

        getRotation(p1, p2) {
          if (p1.strictEquals(p2)) {
            return 0;
          }

          if (p1.x == p2.x) {
            return p2.y > p1.y ? Math.PI / 2 : Math.PI;
          }

          var a = Math.abs(Math.atan((p2.y - p1.y) / (p2.x - p1.x)));

          if (p2.x < p1.x) {
            if (p2.y > p1.y) {
              a = Math.PI - a;
            } else {
              a = Math.PI + a;
            }
          } else if (p2.y < p1.y) {
            a = Math.PI * 2 - a;
          }

          return a;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "longLine", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 200;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "shortLine", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 80;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "center", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0efd19783c63a3530420ac1bb849bd5a7cbe5ce0.js.map