System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, tween, Vec4, Color, RenderComponent, Component, _dec, _class, _class2, _crd, ccclass, property, CCUtils;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      tween = _cc.tween;
      Vec4 = _cc.Vec4;
      Color = _cc.Color;
      RenderComponent = _cc.RenderComponent;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32dfaiegL1DXqsztv01Mu6g", "ccUtils", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CCUtils", CCUtils = (_dec = ccclass('CCUtils'), _dec(_class = (_class2 = class CCUtils {
        /**
         * 显隐状态切换
         * 替代cc.toggleVisibility
         * @param target target, 目标节点
         * @param duration duration, 隐藏时间
         * @example
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.toggleVisibility(node);
         * CCUtils.toggleVisibility(node, 2);
         * ```
         */
        static toggleVisibility(target, duration = 0) {
          var _renderComps = this._getAllRenderComponents(target);

          if (duration > 0) {
            this._tmpComponent.scheduleOnce(() => {
              for (var i = 0; i < _renderComps.length; i++) {
                var render = _renderComps[i];
                render.enabled = !render.enabled;
              }
            }, duration);
          } else {
            for (var i = 0; i < _renderComps.length; i++) {
              var render = _renderComps[i];
              render.enabled = !render.enabled;
            }
          }
        }
        /**
         * 立即显示
         * tween版本实现，替代cc.show
         * @param target target, 目标节点
         * @param duration duration, 隐藏时间
         * @example
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.show(node);
         * CCUtils.show(node, 2);
         * ```
         */


        static show(target, duration = 0) {
          if (duration > 0) {
            this._tmpComponent.scheduleOnce(() => {
              tween(target).show().start();
            }, duration);
          } else {
            tween(target).show().start();
          }
        }
        /**
         * 立即隐藏
         * tween版本实现，替代cc.hide
         * @param target target, 目标节点
         * @param duration duration, 隐藏时间
         * @example
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.hide(node);
         * CCUtils.hide(node, 2);
         * ```
         */


        static hide(target, duration = 0) {
          if (duration > 0) {
            this._tmpComponent.scheduleOnce(() => {
              tween(target).hide().start();
            }, duration);
          } else {
            tween(target).hide().start();
          }
        }
        /**
         * 渐显效果 
         * tween版本实现，替代cc.fadeIn
         * @param target target, 目标节点
         * @param duration duration, 渐显时间, 单位秒
         * @example 
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.fadeIn(node, 1);
         * ```
         */


        static fadeIn(target, duration) {
          let c = new Vec4();

          let renders = this._getAllRenderComponents(target);

          for (let i = 0; i < renders.length; i++) {
            c.x = renders[i].color.r;
            c.y = renders[i].color.g;
            c.z = renders[i].color.b;
            c.w = renders[i].color.a;
            let tempColor = new Color();
            tween(c).to(duration, new Vec4(c.x, c.y, c.z, 255), {
              'onUpdate': () => {
                tempColor.r = c.x;
                tempColor.b = c.y;
                tempColor.g = c.z;
                tempColor.a = c.w;
                renders[i].color = tempColor;
              }
            }).start();
          }
        }
        /**
         * 渐隐效果 
         * tween版本实现，替代cc.fadeOut
         * @param target target, 目标节点
         * @param duration duration, 渐显时间, 单位秒
         * @example 
         * ```ts
         * import { CCUtils } from 'ccUtils';
         * CCUtils.fadeIn(node, 1);
         * ```
         */


        static fadeOut(target, duration) {
          let c = new Vec4();

          let renders = this._getAllRenderComponents(target);

          for (let i = 0; i < renders.length; i++) {
            c.x = renders[i].color.r;
            c.y = renders[i].color.g;
            c.z = renders[i].color.b;
            c.w = renders[i].color.a;
            let tempColor = new Color();
            tween(c).to(duration, new Vec4(c.x, c.y, c.z, 0), {
              'onUpdate': () => {
                tempColor.r = c.x;
                tempColor.b = c.y;
                tempColor.g = c.z;
                tempColor.a = c.w;
                renders[i].color = tempColor;
              }
            }).start();
          }
        }

        static _getAllRenderComponents(target) {
          return target.getComponentsInChildren(RenderComponent);
        }

      }, _class2._tmpComponent = new Component(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d46b153dee0838a4e3cb5be38bddad9b2d5e9c6d.js.map