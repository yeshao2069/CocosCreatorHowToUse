import { _decorator, Component, Node, Material, SkinnedMeshRenderer, ModelComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('vbMaterial')
export class vbMaterial extends Component {

    @property(Material)
    normalMaterial: Material = null!;

    @property(Material)
    vbbMaterial: Material = null!;

    _isEnable = false;
    set enableVBB (value: boolean) {
        this._isEnable = value;

        let material = this._isEnable ? this.vbbMaterial : this.normalMaterial;
        let skinModel = this.node.getComponent(SkinnedMeshRenderer);
        
        if (skinModel) {
            let len = skinModel.materials.length;
            for (let idx = 0; idx < len; idx++) {
                skinModel.setMaterial(material, idx);
            }    
        } else {
            let model = this.node.getComponent(ModelComponent);
            if (model) {
                let len = model.materials.length;
                for (let idx = 0; idx < len; idx++) {
                    model.setMaterial(material, idx);
                }
            }
        }

        
        
            
    }

    get enablevbb () {
        return this._isEnable;
    }

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
