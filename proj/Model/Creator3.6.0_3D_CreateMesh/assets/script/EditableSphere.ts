/*
 * @Author: wss 
 * @Date: 2020-04-04 20:00:45 
 * @Last Modified by:   wss 
 * @Last Modified time: 2020-04-04 20:00:45 
 */
import { _decorator, Component, Node, utils, primitives, geometry, ModelComponent, CCFloat, CCInteger } from "cc";
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass("EditableSphere")
@executeInEditMode
export class EditableSphere extends Component {

    @property
    private _radius : number = 0.5;
    public get radius() : number {
        return this._radius;
    }
    @property
    public set radius(v : number) {
        this._radius = v;
        this.rebuildModel();
    }

    @property
    private _segments: number = 24;
    public get segments(): number {
        return this._segments;
    }
    @property({
        type: CCInteger,
        step: 1,
    })
    public set segments(v: number) {
        this._segments = v;
        this.rebuildModel();
    }

    
    private model: ModelComponent;

    onLoad() {
        this.model = this.getComponent(ModelComponent);
        if (this.model == null) this.model = this.addComponent(ModelComponent);
        this.rebuildModel();
    }

    private rebuildModel() {
        let capsule: primitives.IGeometry = primitives.sphere(this._radius,{
            segments:this._segments
        });

        let mesh = utils.createMesh(capsule);
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
