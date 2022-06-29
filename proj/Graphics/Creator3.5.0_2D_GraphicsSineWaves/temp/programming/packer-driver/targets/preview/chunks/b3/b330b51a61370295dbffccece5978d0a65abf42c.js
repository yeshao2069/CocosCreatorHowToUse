System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Color, CCFloat, CEase, CWaves, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, PI180, PI2, HALFPI, Ease, EaseEnumOptis, Waves, WavesEnumOptis, Wave;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    CEase: void 0,
    CWaves: void 0,
    EaseEnumOptis: void 0,
    WavesEnumOptis: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      CCFloat = _cc.CCFloat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "63ef8CYScZPK4nut/dLSoJu", "Wave", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      PI180 = Math.PI / 180;
      PI2 = Math.PI * 2;
      HALFPI = Math.PI / 2;
      /**
       * This holds all of the easing objects and can be added to by the user
       *
       * @type    {Object}
       */

      Ease = [
      /**
       * Do not apply any easing
       *
       * @param  {Number} percent   where in the line are we?
       * @param  {Number} amplitude the current strength
       *
       * @return {Number}           the new strength
       */
      {
        name: 'linear',
        callback: function callback(percent, amplitude) {
          return amplitude;
        }
      },
      /**
       * Easing function to control how string each wave is from
       * left to right
       *
       * @param  {Number} percent   where in the line are we?
       * @param  {Number} amplitude the current strength
       *
       * @return {Number}           the new strength
       */
      {
        name: 'sinein',
        callback: function callback(percent, amplitude) {
          return amplitude * (Math.sin(percent * Math.PI - HALFPI) + 1) * 0.5;
        }
      },
      /**
       * Easing function to control how string each wave is from
       * left to right
       *
       * @param  {Number} percent   where in the line are we?
       * @param  {Number} amplitude the current strength
       *
       * @return {Number}           the new strength
       */
      {
        name: 'sineout',
        callback: function callback(percent, amplitude) {
          return amplitude * (Math.sin(percent * Math.PI + HALFPI) + 1) * 0.5;
        }
      },
      /**
       * Easing function to control how string each wave is from
       * left to right
       *
       * @param  {Number} percent   where in the line are we?
       * @param  {Number} amplitude the current strength
       *
       * @return {Number}           the new strength
       */
      {
        name: 'sineinout',
        callback: function callback(percent, amplitude) {
          return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * 0.5;
        }
      }];

      (function (EaseEnumOptis) {
        EaseEnumOptis[EaseEnumOptis["linear"] = 0] = "linear";
        EaseEnumOptis[EaseEnumOptis["sinein"] = 1] = "sinein";
        EaseEnumOptis[EaseEnumOptis["sineout"] = 2] = "sineout";
        EaseEnumOptis[EaseEnumOptis["sineinout"] = 3] = "sineinout";
      })(EaseEnumOptis || _export("EaseEnumOptis", EaseEnumOptis = {}));

      _export("CEase", CEase = class CEase {
        static getInstance() {
          return Ease;
        }

      });
      /**
       * Holds the different types of waves
       *
       * @type    {Object}
       */


      Waves = [
      /**
       * Default Sine Waves
       *
       * @param    {Number}    x
       */
      {
        name: 'sine',
        callback: function callback(x) {
          return Math.sin(x);
        }
      },
      /**
       * Sign polyfill
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
       *
       * @param     {Number}    x
       *
       * @return    {Number}
       */
      {
        name: 'sign',
        callback: function callback(x) {
          x = +x; // convert to a number

          if (x === 0 || isNaN(x)) {
            return x;
          }

          return x > 0 ? 1 : -1;
        }
      },
      /**
       * Square Waves
       *
       * @param    {Number}    x
       */
      {
        name: 'square',
        callback: function callback(x) {
          function sign(x) {
            x = +x; // convert to a number

            if (x === 0 || isNaN(x)) {
              return x;
            }

            return x > 0 ? 1 : -1;
          }

          return sign(Math.sin(x * PI2));
        }
      },
      /**
       * Sawtooth Waves
       *
       * @param    {Number}    x
       */
      {
        name: 'sawtooth',
        callback: function callback(x) {
          return (x - Math.floor(x + 0.5)) * 2;
        }
      }, {
        name: 'triangle',
        callback: function callback(x) {
          function sawtooth(x) {
            return (x - Math.floor(x + 0.5)) * 2;
          }

          return Math.abs(sawtooth(x));
        }
      }];

      _export("CWaves", CWaves = class CWaves {
        static getInstance() {
          return Waves;
        }

      });

      (function (WavesEnumOptis) {
        WavesEnumOptis[WavesEnumOptis["sine"] = 0] = "sine";
        WavesEnumOptis[WavesEnumOptis["sign"] = 1] = "sign";
        WavesEnumOptis[WavesEnumOptis["square"] = 2] = "square";
        WavesEnumOptis[WavesEnumOptis["sawtooth"] = 3] = "sawtooth";
        WavesEnumOptis[WavesEnumOptis["triangle"] = 4] = "triangle";
      })(WavesEnumOptis || _export("WavesEnumOptis", WavesEnumOptis = {}));

      _export("Wave", Wave = (_dec = ccclass('Wave'), _dec2 = property(CCFloat), _dec3 = property(CCFloat), _dec4 = property(CCFloat), _dec5 = property(CCFloat), _dec6 = property(CCFloat), _dec7 = property({
        type: CCFloat,
        tooltip: ' 0: sine \n 1: sign \n 2: square \n 3: sawtppth \n 4: triangle'
      }), _dec8 = property({
        type: CCFloat,
        tooltip: ' 0: linear \n 1: sinein \n 2: sineout \n 3: sineinout'
      }), _dec9 = property(Color), _dec(_class = (_class2 = class Wave {
        constructor() {
          _initializerDefineProperty(this, "timeModifier", _descriptor, this);

          _initializerDefineProperty(this, "amplitude", _descriptor2, this);

          _initializerDefineProperty(this, "wavelength", _descriptor3, this);

          _initializerDefineProperty(this, "segmentLength", _descriptor4, this);

          _initializerDefineProperty(this, "lineWidth", _descriptor5, this);

          _initializerDefineProperty(this, "waveType", _descriptor6, this);

          _initializerDefineProperty(this, "easeType", _descriptor7, this);

          _initializerDefineProperty(this, "strokeColor", _descriptor8, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "timeModifier", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "amplitude", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wavelength", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "segmentLength", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lineWidth", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "waveType", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "easeType", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "strokeColor", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 100);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b330b51a61370295dbffccece5978d0a65abf42c.js.map