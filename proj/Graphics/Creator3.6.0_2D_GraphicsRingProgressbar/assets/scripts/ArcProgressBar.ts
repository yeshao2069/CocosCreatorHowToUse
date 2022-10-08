import { _decorator, Component, Graphics, Color, Tween, tween, UIOpacity } from 'cc';
import { DEV } from 'cc/env';
const { ccclass, property, requireComponent, executeInEditMode, help, menu } = _decorator;

// /**
// * 弧形进度条
// * @author 陈皮皮 (ifaswind)
// * @version 20210908
// * @see ArcProgressBar.ts https://gitee.com/ifaswind/eazax-ccc/blob/master/components/charts/ArcProgressBar.ts
// */

@ccclass('ArcProgressBar')
@requireComponent(Graphics)
@executeInEditMode
// @ts-ignore
export default class ArcProgressBar extends Component {
    @property(Graphics)
    protected graphics: Graphics | null = null;
    @property()
    protected _radius: number = 100;
    @property({ tooltip: DEV && '半径' })
    public get radius() {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
        this.updateProperties();
    }
    @property()
    protected _clockwise: boolean = true;
    @property({ tooltip: DEV && '顺时针方向' })
    public get clockwise() {
        return this._clockwise;
    }
    public set clockwise(value: boolean) {
        this._clockwise = value;
        this.updateProperties();
    }
    @property()
    protected _startAngle: number = 90;
    @property({ tooltip: DEV && '开始角度 (基于 y 轴)' })
    public get startAngle() {
        return this._startAngle;
    }
    public set startAngle(value: number) {
        this._startAngle = value;
        this.updateProperties();
    }
    @property()
    protected _range: number = 180;
    @property({ tooltip: DEV && '范围 (角度)' })
    public get range() {
        return this._range;
    }
    public set range(value: number) {
        this._range = value;
        this.updateProperties();
    }
    @property()
    protected _lineWidth: number = 20;
    @property({ tooltip: DEV && '线宽' })
    public get lineWidth() {
        return this._lineWidth;
    }
    public set lineWidth(value: number) {
        this._lineWidth = value;
        this.updateProperties();
    }
    @property()
    protected _progress: number = 0.4;
    @property({ range: [0, 1], step: 0.01, tooltip: DEV && '进度 (0 ~ 1)' })
    public get progress() {
        return this._progress;
    }
    public set progress(value: number) {
        this.updateProgress(value);
    }
    @property()
    // @ts-ignore
    protected _lineCap: Graphics.LineCap = Graphics.LineCap.ROUND;
    @property({ type: Graphics.LineCap, tooltip: DEV && '线帽' })
    public get lineCap() {
        return this._lineCap;
    }
    public set lineCap(value: number) {
        this._lineCap = value;
        this.updateProperties();
    }
    @property()
    protected _backgroundColor: Color = new Color(255, 255, 255, 255);
    @property({ type: Color, tooltip: DEV && '背景颜色' })
    public get backgroundColor() {
        return this._backgroundColor;
    }
    public set backgroundColor(value: Color) {
        this._backgroundColor = value;
        this.updateProperties();
    }
    @property()
    protected _progressColor: Color = new Color(50, 101, 246, 255);
    @property({ type: Color, tooltip: DEV && '进度颜色' })
    public get progressColor() {
        return this._progressColor;
    }
    public set progressColor(value: Color) {
        this._progressColor = value;
        this.updateProperties();
    }
    /**
    * 预计算的开始角度
    */
    protected curStartAngle: number = 0;
    /**
    * 预计算的开始弧度
    */
    protected curStartRadians: number = 0;
    /**
    * 预计算的结束弧度
    */
    protected curEndRadians: number = 0;
    /**
    * 当前缓动对象
    */
    protected curTween: Tween<any> | null = null;
    /**
    * 当前缓动的 Promise resolve
    */
    protected curTweenRes: Function = null;
    /**
    * 生命周期：加载
    */
    protected onLoad() {
        this.init();
    }
    /**
    * 编辑器回调：重置
    */
    protected resetInEditor() {
        this.init();
    }
    /**
    * 初始化
    */
    protected init() {
        if (!this.graphics) {
        this.graphics = this.getComponent(Graphics);
        }
        this.updateProperties();
    }
    /**
    * 展示
    */
    public show() {
        return new Promise<void>(res => {
            const node = this.graphics.node;
            node.getComponent(UIOpacity).opacity = 0;
            node.active = true;
            tween(node.getComponent(UIOpacity))
                .to(0.1, { opacity: 255 })
                .call(res)
                .start();
            });
    }
    /**
    * 隐藏
    */
    public hide() {
        return new Promise<void>(res => {
            const node = this.graphics.node;
            tween(node.getComponent(UIOpacity))
                .to(0.1, { opacity: 0 })
                // .set({ active: false })
                .call(res)
                .call( () => { node.active = false; } )
                .start();
            });
    }
    /**
    * 更新属性
    */
    protected updateProperties() {
        // 设置样式
        const graphics = this.graphics;
        graphics.lineWidth = this._lineWidth;
        graphics.lineCap = this._lineCap;
        // 预计算角度
        this.curStartAngle = this._startAngle + 90;
        this.curStartRadians = this.angleToRadians(this.curStartAngle);
        const endAngle = this.curStartAngle + (this._clockwise ? -this._range : this._range);
        this.curEndRadians = this.angleToRadians(endAngle);
        // 重新绘制进度条
        this.updateProgress(this._progress);
    }
    /**
    * 更新进度
    * @param value 进度值（0~1）
    */
    public updateProgress(value: number) {
        // 处理并保存值
        if (value < 0) {
        value = 0;
        } else if (value > 1) {
        value = 1;
        }
        this._progress = value;

        // 清空画布
        const graphics = this.graphics;
        graphics.clear();

        // 画出背景
        graphics.strokeColor = this._backgroundColor;
        graphics.arc(0, 0, this._radius, this.curStartRadians, this.curEndRadians, !this._clockwise);
        graphics.stroke();

        // 计算并画出进度
        const offset = this._clockwise ? -this._range : this._range,
        angle = this.curStartAngle + (offset * value),
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
    public to(duration: number, progress: number) {
        return new Promise<void>(res => {
        this.stop();
        this.curTweenRes = res;
        this.curTween = tween<ArcProgressBar>(this)
            .to(duration, { progress })
            .call(() => {
            this.curTween = null;
            this.curTweenRes = null;
            })
            .call(res)
            .start();
        });
    }
    /**
    * 停止当前缓动
    */
    public stop() {
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
    public angleToRadians(angle: number) {
        return (Math.PI / 180) * angle;
    }
}
