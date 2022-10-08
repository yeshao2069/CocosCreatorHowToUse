
import { _decorator, Component, Node, game, Mask, Slider, Label, Game } from 'cc';
import { JSB } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('MaskCtl')
export class MaskCtl extends Component {
    
    @property(Mask)
    mask !: Mask;
    @property(Slider)
    slider !: Slider;
    @property(Label)
    label !: Label;

    onLoad () {
        this.slider.progress = this.mask.alphaThreshold;
    }

    update (deltaTime: number) {
        // if (game.renderType !== Game.RENDER_TYPE_WEBGL && !JSB) {
        //     return;
        // }
        this.mask.alphaThreshold = this.slider.progress;
        this.label.string = this.slider.progress.toFixed(1);
    }
}
