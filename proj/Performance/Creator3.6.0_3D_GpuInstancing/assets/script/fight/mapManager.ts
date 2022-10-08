import { _decorator, Component, Node, instantiate } from 'cc';
import { SubPackageManager } from '../framework/util/subPackageManager';
import ResManager from '../framework/util/resManager';
const { ccclass, property } = _decorator;

@ccclass('mapManager')
export class mapManager extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
        ResManager.getModel('map', (err, prefab)=>{
            if (!err) {
                let node = instantiate(prefab) as Node;
                node.parent = this.node;
            }
        });
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
