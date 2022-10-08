/*
 * @Author: wss 
 * @Date: 2020-04-04 20:00:49 
 * @Last Modified by:   wss 
 * @Last Modified time: 2020-04-04 20:00:49 
 */
import { _decorator, Component, Node, utils, primitives, geometry, ModelComponent, CCFloat, CCInteger } from "cc";
const { ccclass, property, executeInEditMode } = _decorator;


@ccclass("EditableTorus")
@executeInEditMode
export class EditableTorus extends Component {
    @property
    private _radius: number = 0.5;
    public get radius(): number {
        return this._radius;
    }
    @property
    public set radius(v: number) {
        this._radius = v;
        this.rebuildModel();
    }

    @property
    private _tubular: number = 0.1;
    public get tubular(): number {
        return this._tubular;
    }
    @property
    public set tubular(v: number) {
        this._tubular = v;
        this.rebuildModel();
    }


    @property
    private _radiusSegments: number = 8;
    public get radiusSegments(): number {
        return this._radiusSegments;
    }
    @property({
        type: CCInteger,
        step: 1,
    })
    public set radiusSegments(v: number) {
        this._radiusSegments = v;
        this.rebuildModel();
    }


    @property
    private _tubularSegments: number = 24;
    public get tubularSegments(): number {
        return this._tubularSegments;
    }
    @property({
        type: CCInteger,
        step: 1,
    })
    public set tubularSegments(v: number) {
        this._tubularSegments = v;
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



    private model: ModelComponent;

    onLoad() {
        this.model = this.getComponent(ModelComponent);
        if (this.model == null) this.model = this.addComponent(ModelComponent);
        this.rebuildModel();
    }

    private rebuildModel() {
        let capsule: primitives.IGeometry = primitives.torus(this._radius, this._tubular, {
            radialSegments: this._radiusSegments,
            tubularSegments: this._tubularSegments,
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
