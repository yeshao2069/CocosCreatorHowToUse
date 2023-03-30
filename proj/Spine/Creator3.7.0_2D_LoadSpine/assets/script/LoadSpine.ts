import { _decorator, Component, Node, sp, Label, resources } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoadSpine')
export class LoadSpine extends Component {

    @property({type:Label})
    tips !: Label;

    start () {
        
        this.node.addComponent(sp.Skeleton);
        resources.load("spine/alien/alien-pro", sp.SkeletonData, (err, spineAsset)=> {
            if(err) {
                this.tips.string = "Failed to load asset";
                return;
            }
            let comp = this.getComponent('sp.Skeleton') as sp.Skeleton;
            comp.skeletonData = spineAsset!;
            let ani = comp.setAnimation(0, 'run', true);
            this.tips.string = 'Load Success';
        });
    }
    
}
