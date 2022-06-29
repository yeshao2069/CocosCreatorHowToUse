System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Graphics, Color, tween, DEV, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, requireComponent, executeInEditMode, help, menu, ArcProgressBar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
      tween = _cc.tween;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e815EI+ItLN7UUw8EtiwMA", "ArcProgressBar", undefined);

      ({
        ccclass,
        property,
        requireComponent,
        executeInEditMode,
        help,
        menu
      } = _decorator); // /**
      // * 弧形进度条
      // * @author 陈皮皮 (ifaswind)
      // * @version 20210908
      // * @see ArcProgressBar.ts https://gitee.com/ifaswind/eazax-ccc/blob/master/components/charts/ArcProgressBar.ts
      // */

      _export("default", ArcProgressBar = (_dec = ccclass('ArcProgressBar'), _dec2 = requireComponent(Graphics), _dec3 = property(Graphics), _dec4 = property(), _dec5 = property({
        tooltip: DEV && '半径'
      }), _dec6 = property(), _dec7 = property({
        tooltip: DEV && '顺时针方向'
      }), _dec8 = property(), _dec9 = property({
        tooltip: DEV && '开始角度 (基于 y 轴)'
      }), _dec10 = property(), _dec11 = property({
        tooltip: DEV && '范围 (角度)'
      }), _dec12 = property(), _dec13 = property({
        tooltip: DEV && '线宽'
      }), _dec14 = property(), _dec15 = property({
        range: [0, 1],
        step: 0.01,
        tooltip: DEV && '进度 (0 ~ 1)'
      }), _dec16 = property(), _dec17 = property({
        type: Graphics.LineCap,
        tooltip: DEV && '线帽'
      }), _dec18 = property(), _dec19 = property({
        type: Color,
        tooltip: DEV && '背景颜色'
      }), _dec20 = property(), _dec21 = property({
        type: Color,
        tooltip: DEV && '进度颜色'
      }), _dec(_class = _dec2(_class = (_class2 = class ArcProgressBar extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "graphics", _descriptor, this);

          _initializerDefineProperty(this, "_radius", _descriptor2, this);

          _initializerDefineProperty(this, "_clockwise", _descriptor3, this);

          _initializerDefineProperty(this, "_startAngle", _descriptor4, this);

          _initializerDefineProperty(this, "_range", _descriptor5, this);

          _initializerDefineProperty(this, "_lineWidth", _descriptor6, this);

          _initializerDefineProperty(this, "_progress", _descriptor7, this);

          _initializerDefineProperty(this, "_lineCap", _descriptor8, this);

          _initializerDefineProperty(this, "_backgroundColor", _descriptor9, this);

          _initializerDefineProperty(this, "_progressColor", _descriptor10, this);

          this.curStartAngle = 0;
          this.curStartRadians = 0;
          this.curEndRadians = 0;
          this.curTween = null;
          this.curTweenRes = null;
        }

        get radius() {
          return this._radius;
        }

        set radius(value) {
          this._radius = value;
          this.updateProperties();
        }

        get clockwise() {
          return this._clockwise;
        }

        set clockwise(value) {
          this._clockwise = value;
          this.updateProperties();
        }

        get startAngle() {
          return this._startAngle;
        }

        set startAngle(value) {
          this._startAngle = value;
          this.updateProperties();
        }

        get range() {
          return this._range;
        }

        set range(value) {
          this._range = value;
          this.updateProperties();
        }

        get lineWidth() {
          return this._lineWidth;
        }

        set lineWidth(value) {
          this._lineWidth = value;
          this.updateProperties();
        }

        get progress() {
          return this._progress;
        }

        set progress(value) {
          this.updateProgress(value);
        }

        get lineCap() {
          return this._lineCap;
        }

        set lineCap(value) {
          this._lineCap = value;
          this.updateProperties();
        }

        get backgroundColor() {
          return this._backgroundColor;
        }

        set backgroundColor(value) {
          this._backgroundColor = value;
          this.updateProperties();
        }

        get progressColor() {
          return this._progressColor;
        }

        set progressColor(value) {
          this._progressColor = value;
          this.updateProperties();
        }
        /**
        * 预计算的开始角度
        */


        /**
        * 生命周期：加载
        */
        onLoad() {
          this.init();
        }
        /**
        * 编辑器回调：重置
        */


        resetInEditor() {
          this.init();
        }
        /**
        * 初始化
        */


        init() {
          if (!this.graphics) {
            this.graphics = this.getComponent(Graphics);
          }

          this.updateProperties();
        }
        /**
        * 展示
        */


        show() {
          return new Promise(res => {
            var node = this.graphics.node;
            node.opacity = 0;
            node.active = true;
            tween(node).to(0.1, {
              opacity: 255
            }).call(res).start();
          });
        }
        /**
        * 隐藏
        */


        hide() {
          return new Promise(res => {
            var node = this.graphics.node;
            tween(node).to(0.1, {
              opacity: 0
            }).set({
              active: false
            }).call(res).start();
          });
        }
        /**
        * 更新属性
        */


        updateProperties() {
          // 设置样式
          var graphics = this.graphics;
          graphics.lineWidth = this._lineWidth;
          graphics.lineCap = this._lineCap; // 预计算角度

          this.curStartAngle = this._startAngle + 90;
          this.curStartRadians = this.angleToRadians(this.curStartAngle);
          var endAngle = this.curStartAngle + (this._clockwise ? -this._range : this._range);
          this.curEndRadians = this.angleToRadians(endAngle); // 重新绘制进度条

          this.updateProgress(this._progress);
        }
        /**
        * 更新进度
        * @param value 进度值（0~1）
        */


        updateProgress(value) {
          // 处理并保存值
          if (value < 0) {
            value = 0;
          } else if (value > 1) {
            value = 1;
          }

          this._progress = value; // 清空画布

          var graphics = this.graphics;
          graphics.clear(); // 画出背景

          graphics.strokeColor = this._backgroundColor;
          graphics.arc(0, 0, this._radius, this.curStartRadians, this.curEndRadians, !this._clockwise);
          graphics.stroke(); // 计算并画出进度

          var offset = this._clockwise ? -this._range : this._range,
              angle = this.curStartAngle + offset * value,
              radians = this.angleToRadians(angle);
          graphics.strokeColor = this._progressColor;
          graphics.arc(0, 0, this._radius, this.curStartRadians, radians, !this._clockwise);
          graphics.stroke();
        }
        /**
        * 缓动进度
        * @param duration 时长
        * @param progress 目标进度
        */


        to(duration, progress) {
          return new Promise(res => {
            this.stop();
            this.curTweenRes = res;
            this.curTween = tween(this).to(duration, {
              progress
            }).call(() => {
              this.curTween = null;
              this.curTweenRes = null;
            }).call(res).start();
          });
        }
        /**
        * 停止当前缓动
        */


        stop() {
          if (this.curTween) {
            this.curTween.stop();
            this.curTween = null;
          }

          if (this.curTweenRes) {
            this.curTweenRes();
            this.curTweenRes = null;
          }
        }
        /**
        * 角度转弧度
        * @param angle 角度
        */


        angleToRadians(angle) {
          return Math.PI / 180 * angle;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "graphics", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_radius", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_clockwise", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "clockwise", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "clockwise"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_startAngle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 90;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "startAngle", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "startAngle"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_range", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 180;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "range", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "range"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_lineWidth", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "lineWidth", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "lineWidth"), _class2.prototype), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_progress", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.4;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "progress"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_lineCap", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Graphics.LineCap.ROUND;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "lineCap", [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "lineCap"), _class2.prototype), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_backgroundColor", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "backgroundColor", [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "backgroundColor"), _class2.prototype), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_progressColor", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(50, 101, 246, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "progressColor", [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "progressColor"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0460064eeed183eddf0aa384d2d00e4bdcbd6034.js.map