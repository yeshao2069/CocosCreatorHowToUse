
import { _decorator, Component,  sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpineSkin')
export class SpineSkin extends Component {

    @property({type:sp.Skeleton})
    spine !: sp.Skeleton;

    skinId: number = 0; // 皮肤ID

    change() {
        const skins =['girl', 'boy', 'girl-blue-cape', 'girl-spring-dress'].map(x=> `full-skins/${x}`);
        this.skinId = (this.skinId + 1) % skins.length;
        this.spine.setSkin(skins[this.skinId]);
    }

}
