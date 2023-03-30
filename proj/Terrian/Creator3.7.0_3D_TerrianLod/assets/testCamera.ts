
import { _decorator, Component, Node, Camera, input, Input, EventKeyboard, KeyCode, Vec3, tween, Toggle, Terrain } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('testCamera')
export class testCamera extends Component {
    @property(Camera)
    mainCamera !: Camera;

    @property(Toggle)
    toggle : Toggle = null!;

    @property(Terrain)
    terrainNode : Node = null!;

    posCameraOrigin : Vec3 = new Vec3();

    start () {
        input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);

        this.posCameraOrigin = this.mainCamera.node.position.clone();
    }

    onEnable () {
        this.toggle.node.on(Toggle.EventType.TOGGLE, this.onToggle, this);
    }

    onDisable () {
        this.toggle.node.off(Toggle.EventType.TOGGLE, this.onToggle, this);
    }

    onKeyPressing (evt: EventKeyboard) {
        let pos = this.mainCamera.node.position.clone();
        
        switch(evt.keyCode) {
            case KeyCode.ARROW_UP:
                pos.z += 1;
                break;
            case KeyCode.ARROW_DOWN:
                pos.z -= 1;
                break;
        }
        tween(this.mainCamera.node).to(0.2, { position: pos }).start();
    }

    onToggle (toggle: Toggle) {
        const terrain = this.terrainNode.getComponent(Terrain) as Terrain;
        if (terrain != null) {
            terrain.lodEnable = toggle.isChecked;
        }
    }
}