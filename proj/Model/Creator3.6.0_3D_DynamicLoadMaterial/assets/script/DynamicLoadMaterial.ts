
import { _decorator, Component, MeshRenderer, Material, resources, error } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DynamicLoadMaterial')
export class DynamicLoadMaterial extends Component {

    @property(MeshRenderer)
    meshRenderer !: MeshRenderer;

    _material !: Material;

    start (){
        this.scheduleOnce(()=>{
            resources.load('materials/dynamic-load-material', Material, (err: any, material: Material) => {
                if (err) {
                    error(err);
                    return;
                }
                this._material = (material as any).addRef();
                this.meshRenderer.setMaterial(material, 0);
            })
        }, 1);
    }

    onDestroy (){
        this._material && this._material.decRef();
        this._material = null!;
    }
}

