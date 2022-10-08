import { _decorator, Component, Node, Label, MeshRenderer, Canvas } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UseLabelTexture')
export class UseLabelTexture extends Component {
    @property(Label)
    label: Label = null!;
    

    start () {
        
    }

    update (deltaTime: number) {
        // Your update function goes here.

        this.label.string = (parseInt(this.label.string) - 1).toString();
        this.label.node.active = true;
        this.label.updateRenderData(true);
        this.label.node.active = false;
        let mat = this.node.getComponent(MeshRenderer)!.getMaterial(0)!;
        mat.setProperty('mainTexture', this.label.spriteFrame!.getGFXTexture());
    }
}
