import { _decorator, Component, Node, Vec3, Tween, ModelComponent, SkinningModelComponent, SkeletalAnimation, SkinnedMeshRenderer } from 'cc';
import { playerManager } from './playerManager';
import { vbMaterial } from './vbMaterial';
const { ccclass, property } = _decorator;

@ccclass('player')
export class player extends Component {

    @property
    triangle: number = 0;

    @property
    vertex: number = 0;

    manager !: playerManager;
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

        if (this.manager.enableVBB) {
            this.changeVBBatch(true); //如果当前开启合批，则跟随开启
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

    changeVBBatch (isEnable: boolean) {
        let arrVBB = this.node.getComponentsInChildren(vbMaterial);
        arrVBB.forEach((vb)=>{
            vb.enableVBB = isEnable;
        });

        if (isEnable) {
            this.node.getComponent(SkeletalAnimation)!.play();
        }
    }

    changeShadow (isEnable: boolean) {
        let arrModel = this.node.getComponentsInChildren(SkinnedMeshRenderer);
        arrModel.forEach((model)=>{
            model.shadowCastingMode = isEnable ? SkinnedMeshRenderer.ShadowCastingMode.ON : SkinnedMeshRenderer.ShadowCastingMode.OFF;
        });
    }
}
