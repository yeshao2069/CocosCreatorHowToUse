
import { _decorator, Component, resources, dragonBones } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoadDragonBones')
export class LoadDragonBones extends Component {

    @property(dragonBones.ArmatureDisplay)
    armatureDisplay !: dragonBones.ArmatureDisplay;

    onLoad() {
        this.dynamicCreate();
    }

    // 动态创建
    dynamicCreate() {

        resources.load('dragonBones/NewDragonTest', dragonBones.DragonBonesAsset, (err: any, res: dragonBones.DragonBonesAsset)=> {
            if(err) {
                console.error(err);
                return;
            }
            this.armatureDisplay.dragonAsset = res;
            resources.load('dragonBones/texture', dragonBones.DragonBonesAtlasAsset, (err: any, res: dragonBones.DragonBonesAtlasAsset)=>{
                if(err) {
                    console.error(err);
                    return;
                }
                this.armatureDisplay.dragonAtlasAsset = res;

                this.armatureDisplay.armatureName = "armatureName";
                this.armatureDisplay.playAnimation('stand', 0);
            });
        });
    }
}

