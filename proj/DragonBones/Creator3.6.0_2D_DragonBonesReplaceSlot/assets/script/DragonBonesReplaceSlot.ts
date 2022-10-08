
import { _decorator, Component, dragonBones } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DragonBonesReplaceSlot')
export class DragonBonesReplaceSlot extends Component {

    @property(dragonBones.ArmatureDisplay)
    armatureDisplay !: dragonBones.ArmatureDisplay;
    @property(dragonBones.ArmatureDisplay)
    replaceArmatureDisplay !: dragonBones.ArmatureDisplay;

    _leftWeaponIndex = 0;
    _rightDisplayIndex = 0;
    _rightDisplayNames:string[] = [];
    _rightDisplayOffset:{x: number, y: number}[] = [];

    start () {
        this.replaceArmatureDisplay!.node.active = false;
        this._leftWeaponIndex = 0;
        this._rightDisplayIndex = 0;
        this._rightDisplayNames = ["weapon_1004_r", "weapon_1004d_r"];
        this._rightDisplayOffset = [{ x: 0, y: 0 }, { x: -60, y: 100 }];
    }

    onClickLeft () {
        let armature = this.armatureDisplay!.armature()!;
        let slot = armature.getSlot("weapon_hand_l")!;
        slot.displayIndex = slot.displayIndex == 0 ? 4 : 0;
    }

    onClickRight () {
        this._rightDisplayIndex++;
        this._rightDisplayIndex %= this._rightDisplayNames.length;
        let armature = this.armatureDisplay!.armature()!;
        let slot = armature.getSlot("weapon_hand_r")!;
        const displayName = this._rightDisplayNames[this._rightDisplayIndex];
        let factory = dragonBones.CCFactory.getInstance() as any;
        factory.replaceSlotDisplay(this.replaceArmatureDisplay!.getArmatureKey(), "weapon", "weapon_r", displayName, slot);

        let offset = this._rightDisplayOffset[this._rightDisplayIndex];
        slot.parent.offset.x = offset.x;
        slot.parent.offset.y = offset.y;
        armature.invalidUpdate();
    }

}

