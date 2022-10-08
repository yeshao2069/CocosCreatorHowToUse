

import { _decorator, Node, tween, Vec4, Color, RenderComponent, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CCUtils')
export class CCUtils {

    

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
    public static toggleVisibility (target: Node, duration: number = 0) {
        var _renderComps = this._getAllRenderComponents(target);

        if (duration > 0) {
            this._tmpComponent.scheduleOnce(()=>{
                for(var i = 0; i < _renderComps.length; i++) {
                    var render = _renderComps[i];
                    render.enabled = !render.enabled;
                }
            }, duration);
        } else {
            for(var i = 0; i < _renderComps.length; i++) {
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
     public static show (target: Node, duration: number = 0) {
        if (duration > 0) {
            this._tmpComponent.scheduleOnce(()=>{
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
    public static hide (target: Node, duration: number = 0) {
        if (duration > 0) {
            this._tmpComponent.scheduleOnce(()=>{
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
    public static fadeIn (target: Node, duration: number) {
        let c = new Vec4();
        let renders = this._getAllRenderComponents(target);

        for(let i = 0; i < renders.length; i++) {
            c.x = renders[i].color.r;
            c.y = renders[i].color.g;
            c.z = renders[i].color.b;
            c.w = renders[i].color.a;
            let tempColor = new Color();

            tween(c).to(duration, new Vec4(c.x, c.y, c.z, 255), {
                'onUpdate' : () => {
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
    public static fadeOut (target: Node, duration: number) {
        let c = new Vec4();
        let renders = this._getAllRenderComponents(target);

        for(let i = 0; i < renders.length; i++) {
            c.x = renders[i].color.r;
            c.y = renders[i].color.g;
            c.z = renders[i].color.b;
            c.w = renders[i].color.a;
            let tempColor = new Color();

            tween(c).to(duration, new Vec4(c.x, c.y, c.z, 0), {
                'onUpdate' : () => {
                    tempColor.r = c.x;
                    tempColor.b = c.y;
                    tempColor.g = c.z;
                    tempColor.a = c.w;
                    renders[i].color = tempColor;
                }  
            }).start();
        }
    }

    private static _getAllRenderComponents(target: Node) {
        return target.getComponentsInChildren(RenderComponent);
    }
    private static _tmpComponent = new Component();
}