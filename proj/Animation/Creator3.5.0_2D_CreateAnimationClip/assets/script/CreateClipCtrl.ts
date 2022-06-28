
import { _decorator, Component, SpriteAtlas, resources, AnimationComponent, Asset, AnimationClip, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CreateClipCtrl')
export class CreateClipCtrl extends Component {

    _atlas !: Asset;

    onLoad () {
        var animation = this.getComponent(AnimationComponent)!;
        resources.load('sheep/atlas', SpriteAtlas, (err, atlas) =>{
            this._atlas = atlas.addRef();

            var spriteFrames = <SpriteFrame[]>atlas.getSpriteFrames();
            var clip = AnimationClip.createWithSpriteFrames(spriteFrames, 10)!;
            clip.name = 'run';
            clip.wrapMode = AnimationClip.WrapMode.Loop;

            // animation.clips.concat(clip);
            animation.createState(clip);
            animation.play('run');
        })
    }

    onDestroy () {
        this._atlas.decRef();
        this._atlas = null!;
    }
}

