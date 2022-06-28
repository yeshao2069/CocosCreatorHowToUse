
import { _decorator, Component, Node, CCFloat, Graphics, view, Enum } from 'cc';
import { CWaves, CEase, Wave } from './Wave';
const { ccclass, property } = _decorator;

@ccclass('SineWaves')
export class SineWaves extends Component {
   
    @property(CCFloat)
    speed : number = 1;
    @property([Wave])
    waves : Wave[] = [];

    ctx !: Graphics;
    time : number = 0;
    yAxis : number = 0;
    width : number = 0;
    waveWidth : number = 0;
    waveLeft : number = 0;

    // use this for initialization
    onLoad () {
        this.time = 0;

        this.ctx = this.getComponent(Graphics)!;
        this.ctx.lineCap = Graphics.LineCap.BUTT;
        this.ctx.lineJoin = Graphics.LineJoin.ROUND;

        let waves = this.waves;
        for (let i = 0; i < waves.length; i++) {
            // @ts-ignore
            waves[i].waveFn = CWaves.getInstance()[waves[i].waveType].callback;

            // @ts-ignore
            waves[i].easeFn = CEase.getInstance()[waves[i].easeType].callback;
        }
    }

    update (dt: number) {
        this.ctx.clear();

        let visibleRect = view.getFrameSize();
        this.yAxis = 0;
        this.width = visibleRect.width;

        this.waveWidth = this.width * 0.95;
        this.waveLeft = this.width * 0.25;

        this.time += dt;

        // Draw each line
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
     drawWave (time: number, options: any) {
        // Styles
        this.ctx.lineWidth = options.lineWidth;
        this.ctx.strokeColor = options.strokeColor;

        // Starting Line
        this.ctx.moveTo(0, this.yAxis);
        this.ctx.lineTo(this.waveLeft, this.yAxis);

        for (let i = 0; i < this.waveWidth; i += options.segmentLength) {
            // Calculate where the next point is
            let point = this.getPoint(time, i, options);

            // Draw to it
            this.ctx.lineTo(point.x, point.y);
        }

        // Ending Line
        this.ctx.lineTo(this.width, this.yAxis);

        // Stroke it
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
     getPoint (time: number, position: number, options: any) {
        var x = (time * this.speed) + (-this.yAxis + position) / options.wavelength;
        var y = options.waveFn(x);

        // Left and Right Sine Easing
        var amplitude = options.easeFn(position / this.waveWidth, options.amplitude);

        x = position + this.waveLeft;
        y = amplitude * y + this.yAxis;

        return {
            x: x,
            y: y
        };
    }
}
