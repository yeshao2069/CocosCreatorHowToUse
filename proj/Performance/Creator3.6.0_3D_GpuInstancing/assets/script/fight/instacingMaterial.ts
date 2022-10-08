import { _decorator, Component, Node, Material, SkinningModelComponent, ModelComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('instacingMaterial')
export class instacingMaterial extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property(Material)
    normalMaterial: Material = null;

    @property(Material)
    instancingMaterial: Material = null;

    _isEnable = false;
    set enableInstancing (value: boolean) {
        this._isEnable = value;

        let material = this._isEnable ? this.instancingMaterial : this.normalMaterial;
        let skinModel = this.node.getComponent(SkinningModelComponent);
        
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

    get enableInstancing () {
        return this._isEnable;
    }

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
