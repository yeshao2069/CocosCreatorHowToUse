/*
 * @Author: wss 
 * @Date: 2020-04-04 20:00:36 
 * @Last Modified by:   wss 
 * @Last Modified time: 2020-04-04 20:00:36 
 */
import { _decorator, Component, Node, utils, primitives, geometry, ModelComponent, CCFloat, CCInteger } from "cc";
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass("EditableCone")
@executeInEditMode
export class EditableCone extends Component {

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
    private _height : number = 1;
    public get height() : number {
        return this._height;
    }
    @property
    public set height(v : number) {
        this._height = v;
        this.rebuildModel();
    }

    @property
    private _radialSegments : number = 24;
    public get radialSegments() : number {
        return this._radialSegments;
    }
    @property({
        type:CCInteger,
        step:1,
    })
    public set radialSegments(v : number) {
        this._radialSegments = v;
        this.rebuildModel();
    }

    @property
    private _heightSegments : number = 4;
    public get heightSegments() : number {
        return this._heightSegments;
    }
    @property({
        type:CCInteger,
        step:1,
    })
    public set heightSegments(v : number) {
        this._heightSegments = v;
        this.rebuildModel();
    }


    @property({
        type:CCFloat,
    })
    private _fillRange : number = 1.0;
    public get fillRange() : number {
        return this._fillRange;
    }
    @property({
        type:CCFloat,
        range:[0,1.0],
        slide:true,
        step:0.1,
    })
    public set fillRange(v : number) {
        this._fillRange = v;
        this.rebuildModel();
    }

    @property
    private _capped : boolean = true;
    public get capped() : boolean {
        return this._capped;
    }
    @property
    public set capped(v : boolean) {
        this._capped = v;
        this.rebuildModel();
    }
    

    private model:ModelComponent;

    onLoad() {
        this.model = this.getComponent(ModelComponent);
        if (this.model == null) this.model = this.addComponent(ModelComponent);
        this.rebuildModel();
    }

    private rebuildModel()
    {
        let box: primitives.IGeometry = primitives.cone(this._radius, this._height, {
            radialSegments: Math.round(this.radialSegments),
            heightSegments: Math.round(this.heightSegments),
            capped: this._capped,
            arc: this._fillRange * 2 * Math.PI,
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
