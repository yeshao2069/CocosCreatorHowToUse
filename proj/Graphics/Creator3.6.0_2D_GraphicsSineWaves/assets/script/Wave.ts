
import { _decorator, Component, Node, Color, CCFloat, Enum, BitMask } from 'cc';
const { ccclass, property } = _decorator;

var PI180 = Math.PI / 180;
var PI2 = Math.PI * 2;
var HALFPI = Math.PI / 2;


/**
 * This holds all of the easing objects and can be added to by the user
 *
 * @type    {Object}
 */
var Ease = [
    /**
     * Do not apply any easing
     *
     * @param  {Number} percent   where in the line are we?
     * @param  {Number} amplitude the current strength
     *
     * @return {Number}           the new strength
     */
    {
        name : 'linear',
        callback : function(percent: number, amplitude: number) {
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
        name : 'sinein',
        callback : function(percent: number, amplitude: number) {
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
        name : 'sineout',
        callback : function(percent: number, amplitude: number) {
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
        name : 'sineinout',
        callback : function(percent: number, amplitude: number) {
            return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * 0.5;
        }
    }
];

export enum EaseEnumOptis {
    linear = 0,
    sinein = 1,
    sineout = 2,
    sineinout = 3,
}

export class CEase {
    public static getInstance () {
        return Ease;
    }
}

/**
 * Holds the different types of waves
 *
 * @type    {Object}
 */
var Waves = [
    /**
     * Default Sine Waves
     *
     * @param    {Number}    x
     */
    {
        name : 'sine',
        callback : function(x: number) {
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
        name : 'sign',
        callback : function(x: number) {
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
        name : 'square',
        callback : function(x: number) {
            function sign(x: number) {
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
        name : 'sawtooth',
        callback : function(x: number) {
            return (x - Math.floor(x + 0.5)) * 2;
        }
    },

    {
        name : 'triangle',
        callback : function(x: number) {
            function sawtooth(x: number) {
                return (x - Math.floor(x + 0.5)) * 2;
            }
            return Math.abs(sawtooth(x));
        }
    },
];

export class CWaves {
    public static getInstance () {
        return Waves;
    }
}

export enum WavesEnumOptis {
    sine = 0,
    sign = 1,
    square = 2,
    sawtooth = 3,
    triangle = 4,
}

@ccclass('Wave')
export class Wave {
    @property(CCFloat)
    timeModifier: number = 1;
    @property(CCFloat)
    amplitude: number = 50;
    @property(CCFloat)
    wavelength: number = 50;
    @property(CCFloat)
    segmentLength: number = 10;
    @property(CCFloat)
    lineWidth: number = 1;

    // @property({ type: BitMask(WavesEnumOptis)})
    // waveType: WavesEnumOptis = WavesEnumOptis.sine;
    // @property({ type: BitMask(EaseEnumOptis)})
    // easeType: EaseEnumOptis = EaseEnumOptis.sinein;

    // 由于3.0.0版本, 掩码有问题，所以直接设置为数字
    @property({ type:CCFloat, tooltip: ' 0: sine \n 1: sign \n 2: square \n 3: sawtppth \n 4: triangle'})
    waveType: number = 0;
    @property({ type:CCFloat, tooltip: ' 0: linear \n 1: sinein \n 2: sineout \n 3: sineinout'})
    easeType: number = 1;

    @property(Color)
    strokeColor: Color = new Color(255, 255, 255, 100);
}
