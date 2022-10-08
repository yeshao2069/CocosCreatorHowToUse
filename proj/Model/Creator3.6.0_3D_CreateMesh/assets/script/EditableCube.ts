/*
 * @Author: wss 
 * @Date: 2020-04-04 20:00:39 
 * @Last Modified by:   wss 
 * @Last Modified time: 2020-04-04 20:00:39 
 */
import { _decorator, Component, Node, utils, primitives, geometry, ModelComponent, CCFloat,Vec3, Material} from "cc";
const { ccclass, property, executeInEditMode } = _decorator;


@ccclass("EditableCube")
@executeInEditMode
export class EditableCube extends Component {
    

    @property
    private _size : Vec3 = new Vec3(1,1,1);
    public get size() : Vec3 {
        return this._size;
    }
    @property
    public set size(v : Vec3) {
        this._size = v;
        this.rebuildModel();
    }

    @property
    private _segments : Vec3 = new Vec3(1,1,1);
    public get segments() : Vec3 {
        return this._segments;
    }
    @property({
       step:1
    })
    public set segments(v : Vec3) {
        this._segments = v;
        this.rebuildModel();
    }
    
    
    private model:ModelComponent;

    onLoad() {
        this.model = this.getComponent(ModelComponent);
        if (this.model == null){
            this.model = this.addComponent(ModelComponent);
        }

        this.rebuildModel();

    }

    private rebuildModel()
    {
        let box: primitives.IGeometry = primitives.box({
            width:this._size.x,
            height:this._size.y,
            length:this._size.z,
            widthSegments:Math.round(this._segments.x),
            heightSegments:Math.round(this._segments.y),
            lengthSegments:Math.round(this._segments.z)
        });

        let mesh = utils.createMesh(box);
        if (this.model.mesh) this.model.mesh.destroy();
        this.model.mesh = mesh;
    }

    onDestroy() {
        if (this.model.mesh) {
            this.model.mesh.destroy();
            this.model.mesh = null;
        }
    }
}
