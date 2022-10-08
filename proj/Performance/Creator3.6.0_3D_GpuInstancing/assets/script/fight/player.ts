import { _decorator, Component, Node, Vec3, Tween, ModelComponent, SkinningModelComponent, SkeletalAnimationComponent } from 'cc';
import { playerManager } from './playerManager';
import { instacingMaterial } from './instacingMaterial';
const { ccclass, property } = _decorator;

@ccclass('player')
export class player extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property
    triangle: number = 0;

    @property
    vertex: number = 0;

    manager: playerManager;
    tweenMove: Tween;

    start () {
        // Your initialization goes here.
    }

    show (manager: playerManager) {
        //x: -5~5
        //z: -20~6
        this.manager = manager;

        let x = (-8 - 3 * this.manager.currentLevel) + Math.random() * (16 + 6 * this.manager.currentLevel);
        let z = -20 + Math.random() * (26 + 5*this.manager.currentLevel);

        let pos = new Vec3(x, 0, z);

        this.node.position = pos;

        //TODO 开始随机移动
        this.move();

        if (this.manager.enableInstancing) {
            this.changeInstancingBatch(true); //如果当前开启合批，则跟随开启
        }

        this.changeShadow(this.manager.enableShadow);
    }

    onDestroy () {
        if (this.tweenMove) {
            this.tweenMove.stop();
            this.tweenMove = null;
        }
    }

    move () {
        let nextPoint = new Vec3((-8 - 3 * this.manager.currentLevel) + Math.random() * (16 + 6 * this.manager.currentLevel), 0, -20 + Math.random() * (26 + 5*this.manager.currentLevel));

        let offset = nextPoint.clone().subtract(this.node.position);

        this.node.forward = offset.clone().normalize().negative();

        let costTime = offset.length() / 2;

        if (this.tweenMove) {
            this.tweenMove.stop();
            this.tweenMove = null;
        }

        this.tweenMove = new Tween(this.node).to(costTime, {position: nextPoint}).call(()=>{
            this.move();
        }).start();
    }

    changeInstancingBatch (isEnable) {
        let arrInstancing = this.node.getComponentsInChildren(instacingMaterial);
        arrInstancing.forEach((instancing)=>{
            instancing.enableInstancing = isEnable;
        });

        if (isEnable) {
            this.node.getComponent(SkeletalAnimationComponent).play();
        }
    }

    changeShadow (isEnable: boolean) {
        let arrModel = this.node.getComponentsInChildren(SkinningModelComponent);
        arrModel.forEach((model)=>{
            model.shadowCastingMode = isEnable ? SkinningModelComponent.ShadowCastingMode.ON: SkinningModelComponent.ShadowCastingMode.OFF;
        });

        
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
