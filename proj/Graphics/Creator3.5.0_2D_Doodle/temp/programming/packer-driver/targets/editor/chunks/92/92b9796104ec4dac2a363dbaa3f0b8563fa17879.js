System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, CCFloat, CCBoolean, Graphics, Color, Vec2, find, view, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Doodle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      CCFloat = _cc.CCFloat;
      CCBoolean = _cc.CCBoolean;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
      Vec2 = _cc.Vec2;
      find = _cc.find;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c699aUIYZ9O1ZygraRFBor6", "Doodle", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Doodle", Doodle = (_dec = ccclass('Doodle'), _dec2 = property(CCFloat), _dec3 = property(CCBoolean), _dec(_class = (_class2 = class Doodle extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "reactivity", _descriptor, this);

          _initializerDefineProperty(this, "debug", _descriptor2, this);

          this.nodes = [];
          this.ripples = [];
          this.mouse = new Vec2();
          this.color = new Color();
          this.cycle = 0;
          this.input = false;
        }

        onEnable() {
          this._graphics = this.getComponent(Graphics);
          this.nodes = [];
          this.ripples = [];
          this.mouse.x = 0, this.mouse.y = 0;
          this.color.r = 0, this.color.g = 0, this.color.b = 0, this.color.a = 255;
          this.cycle = 90;
          this.createBezierNodes();
          let canvas = find('Canvas');
          const that = this;
          canvas.on(Node.EventType.TOUCH_START, function (touch, event) {
            let touchPos = touch.getUILocation();
            let winSize = view.getFrameSize();
            touchPos.subtract2f(winSize.width / 2, winSize.height / 2);
            that.mouse = touchPos;
            that.addRipple();
          }, this);
          canvas.on(Node.EventType.TOUCH_END, function () {
            that.input = false;
          }, this);
        }

        createBezierNodes() {
          this.updateColorCycle();

          for (var quantity = 0, len = 6; quantity < len; quantity++) {
            var theta = Math.PI * 2 * quantity / len;
            var x = 0 * Math.cos(theta);
            var y = 0 * Math.sin(theta);
            this.nodes.push({
              x: x,
              y: y,
              vx: 0,
              vy: 0,
              lastX: x,
              lastY: y,
              min: 150,
              max: 250,
              disturb: 150,
              orbit: 20,
              angle: Math.random() * Math.PI * 2,
              speed: 0.05 + Math.random() * 0.05,
              theta: theta
            });
          }
        }

        addRipple() {
          this.input = true;

          if (this.ripples.length === 0) {
            this.updateColorCycle();
            this.ripples.push({
              x: this.mouse.x,
              y: this.mouse.y,
              reactivity: 0,
              fade: 1.0
            });
          }
        }

        updateColorCycle() {
          this.cycle = Math.min(this.cycle + this.reactivity + 0.3, 100) !== 100 ? this.cycle += this.reactivity + 0.3 : 0;
          let color = this.color;
          color.r = ~~(Math.sin(0.3 * this.cycle + 0) * 127 + 128);
          color.g = ~~(Math.sin(0.3 * this.cycle + 2) * 127 + 128);
          color.b = ~~(Math.sin(0.3 * this.cycle + 4) * 127 + 128);
        }

        update(dt) {
          let nodes = this.nodes;
          let ripples = this.ripples;
          var ease = 0.01,
              friction = 0.98;

          for (var index = 0; index < ripples.length; index++) {
            var ripple = ripples[index];
            ripple.reactivity += 5;
            ripple.fade -= 0.05;

            if (ripple.fade <= 0.0) {
              ripples.splice(index, 1);
            }
          }

          [].forEach.call(nodes, (node, index) => {
            node.lastX += (node.disturb * Math.cos(node.theta) - node.lastX) * 0.08;
            node.lastY += (node.disturb * Math.sin(node.theta) - node.lastY) * 0.08; // Motion

            node.x += (node.lastX + Math.cos(node.angle) * node.orbit - node.x) * 0.08;
            node.y += (node.lastY + Math.sin(node.angle) * node.orbit - node.y) * 0.08; // Ease

            node.vx += (node.min - node.disturb) * ease; // Friction

            node.vx *= friction;
            node.disturb += node.vx;

            if (this.input) {
              node.disturb += (node.max - node.disturb) * this.reactivity;
            }

            node.angle += node.speed;
          });
          this.render();
        }

        render() {
          let nodes = this.nodes;
          let ripples = this.ripples;
          let graphics = this._graphics;
          let color = this.color;
          var currentIndex, nextIndex, xc, yc;
          color.a = this.debug ? 255 : 255 / 2;
          graphics.clear();
          [].forEach.call(nodes, (node, index) => {
            currentIndex = nodes[nodes.length - 1];
            nextIndex = nodes[0];
            xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.5;
            yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.5;
            let strokeColor = new Color();
            Color.fromHEX(strokeColor, this.debug ? '#a9a9a9' : '#e5e5e5');
            strokeColor.a = this.debug ? 255 : 255 / 2;
            graphics.strokeColor = strokeColor;
            graphics.fillColor = color;
            graphics.lineWidth = this.debug ? 1 : 5;
            graphics.moveTo(xc, yc); // Draw through N points

            for (var N = 0; N < nodes.length; N++) {
              currentIndex = nodes[N];
              nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
              xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.5;
              yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.5;
              graphics.quadraticCurveTo(currentIndex.x, currentIndex.y, xc, yc);
            }

            this.debug ? null : graphics.fill();
            graphics.stroke();
            graphics.lineWidth = 1;
            graphics.lineCap = Graphics.LineCap.ROUND;
            graphics.lineJoin = Graphics.LineJoin.ROUND;
            graphics.strokeColor.fromHEX('#a9a9a9');
            graphics.fillColor.fromHEX('#a9a9a9'); // Draw through N points

            for (var N = 0; N < nodes.length; N++) {
              // First anchor
              currentIndex = nodes[N];
              nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
              xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.8;
              yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.8;
              graphics.moveTo(xc, yc); // Second anchor

              currentIndex = nextIndex;
              nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2];
              xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.2;
              yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.2;
              graphics.lineTo(xc, yc);
              graphics.stroke(); // First anchor

              currentIndex = nodes[N];
              nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
              xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.8;
              yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.8;
              graphics.circle(xc, yc, 2);
              graphics.fill(); // Second anchor

              currentIndex = nextIndex;
              nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2];
              xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.2;
              yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.2;
              graphics.circle(xc, yc, 2);
              graphics.fill();
            }
          });

          for (var index = 0; index < ripples.length; index++) {
            var ripple = ripples[index];
            let fillColor = new Color();
            Color.fromHEX(fillColor, '#ffffff');
            fillColor.a = ripple.fade * 255;
            graphics.fillColor = fillColor;
            graphics.circle(ripple.x, ripple.y, ripple.reactivity);
            graphics.fill();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reactivity", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "debug", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92b9796104ec4dac2a363dbaa3f0b8563fa17879.js.map