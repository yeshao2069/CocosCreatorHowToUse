/*
 * @Author: wss 
 * @Date: 2020-04-04 20:00:42 
 * @Last Modified by:   wss 
 * @Last Modified time: 2020-04-04 20:00:42 
 */
import { _decorator, Component, Node, utils, primitives, geometry, ModelComponent, CCFloat, CCInteger } from "cc";
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass("EditableCylinder")
@executeInEditMode
export class EditableCylinder extends Component {

    @property
    private _radiusTop: number = 1;
    public get radiusTop(): number {
        return this._radiusTop;
    }
    @property
    public set radiusTop(v: number) {
        this._radiusTop = v;
        this.rebuildModel();
    }

    @property
    private _radiusBottom: number = 1;
    public get radiusBottom(): number {
        return this._radiusBottom;
    }
    @property
    public set radiusBottom(v: number) {
        this._radiusBottom = v;
        this.rebuildModel();
    }

    @property
    private _height: number = 3;
    public get height(): number {
        return this._height;
    }
    @property
    public set height(v: number) {
        this._height = v;
        this.rebuildModel();
    }

    @property
    private _heightSegments: number = 1;
    public get heightSegments(): number {
        return this._heightSegments;
    }
    @property({
        type: CCInteger,
        step: 1,
    })
    public set heightSegments(v: number) {
        this._heightSegments = v;
        this.rebuildModel();
    }


    @property({
        type: CCFloat,
    })
    private _fillRange: number = 1.0;
    public get fillRange(): number {
        return this._fillRange;
    }
    @property({
        type: CCFloat,
        range: [0, 1.0],
        slide: true,
        step: 0.1,
    })
    public set fillRange(v: number) {
        this._fillRange = v;
        this.rebuildModel();
    }

    @property
    private _capped: boolean = true;
    public get capped(): boolean {
        return this._capped;
    }
    @property
    public set capped(v: boolean) {
        this._capped = v;
        this.rebuildModel();
    }


    private model: ModelComponent;

    onLoad() {
        this.model = this.getComponent(ModelComponent);
        if (this.model == null) this.model = this.addComponent(ModelComponent);
        this.rebuildModel();
    }

    private rebuildModel() {
        let capsule: primitives.IGeometry = primitives.cylinder(this._radiusTop, this._radiusBottom, this._height, {
            heightSegments: this._heightSegments,
            capped: this._capped,
            arc: this._fillRange * 2 * Math.PI,
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
