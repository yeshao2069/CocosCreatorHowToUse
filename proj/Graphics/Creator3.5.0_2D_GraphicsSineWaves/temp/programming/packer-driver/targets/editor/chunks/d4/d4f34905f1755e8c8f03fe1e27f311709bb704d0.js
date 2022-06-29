System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, CCFloat, Graphics, view, CWaves, CEase, Wave, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SineWaves;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCWaves(extras) {
    _reporterNs.report("CWaves", "./Wave", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCEase(extras) {
    _reporterNs.report("CEase", "./Wave", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWave(extras) {
    _reporterNs.report("Wave", "./Wave", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CCFloat = _cc.CCFloat;
      Graphics = _cc.Graphics;
      view = _cc.view;
    }, function (_unresolved_2) {
      CWaves = _unresolved_2.CWaves;
      CEase = _unresolved_2.CEase;
      Wave = _unresolved_2.Wave;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7970b+P1TRArK81uZPNVUQi", "SineWaves", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SineWaves", SineWaves = (_dec = ccclass('SineWaves'), _dec2 = property(CCFloat), _dec3 = property([_crd && Wave === void 0 ? (_reportPossibleCrUseOfWave({
        error: Error()
      }), Wave) : Wave]), _dec(_class = (_class2 = class SineWaves extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "waves", _descriptor2, this);

          this.time = 0;
          this.yAxis = 0;
          this.width = 0;
          this.waveWidth = 0;
          this.waveLeft = 0;
        }

        // use this for initialization
        onLoad() {
          this.time = 0;
          this.ctx = this.getComponent(Graphics);
          this.ctx.lineCap = Graphics.LineCap.BUTT;
          this.ctx.lineJoin = Graphics.LineJoin.ROUND;
          let waves = this.waves;

          for (let i = 0; i < waves.length; i++) {
            // @ts-ignore
            waves[i].waveFn = (_crd && CWaves === void 0 ? (_reportPossibleCrUseOfCWaves({
              error: Error()
            }), CWaves) : CWaves).getInstance()[waves[i].waveType].callback; // @ts-ignore

            waves[i].easeFn = (_crd && CEase === void 0 ? (_reportPossibleCrUseOfCEase({
              error: Error()
            }), CEase) : CEase).getInstance()[waves[i].easeType].callback;
          }
        }

        update(dt) {
          this.ctx.clear();
          let visibleRect = view.getFrameSize();
          this.yAxis = 0;
          this.width = visibleRect.width;
          this.waveWidth = this.width * 0.95;
          this.waveLeft = this.width * 0.25;
          this.time += dt; // Draw each line

          let waves = this.waves;

          for (let i = 0, l = waves.length; i < l; i++) {
            var timeModifier = this.waves[i].timeModifier || 1;
            this.drawWave(this.time * timeModifier, waves[i]);
          }
        }
        /**
         * Draws one line on the canvas
         *
         * @param  {Number} time    current internal clock time
         * @param  {Object} options wave options
         */


        drawWave(time, options) {
          // Styles
          this.ctx.lineWidth = options.lineWidth;
          this.ctx.strokeColor = options.strokeColor; // Starting Line

          this.ctx.moveTo(0, this.yAxis);
          this.ctx.lineTo(this.waveLeft, this.yAxis);

          for (let i = 0; i < this.waveWidth; i += options.segmentLength) {
            // Calculate where the next point is
            let point = this.getPoint(time, i, options); // Draw to it

            this.ctx.lineTo(point.x, point.y);
          } // Ending Line


          this.ctx.lineTo(this.width, this.yAxis); // Stroke it

          this.ctx.stroke();
        }
        /**
         * Calculate the x, y coordinates of a point in a sine wave
         *
         * @param  {Number} time     Internal time index
         * @param  {Number} position Pixels x poistion
         * @param  {Object} options  Wave options
         *
         * @return {Object}          {x, y}
         */


        getPoint(time, position, options) {
          var x = time * this.speed + (-this.yAxis + position) / options.wavelength;
          var y = options.waveFn(x); // Left and Right Sine Easing

          var amplitude = options.easeFn(position / this.waveWidth, options.amplitude);
          x = position + this.waveLeft;
          y = amplitude * y + this.yAxis;
          return {
            x: x,
            y: y
          };
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "waves", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4f34905f1755e8c8f03fe1e27f311709bb704d0.js.map