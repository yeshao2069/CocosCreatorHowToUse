
import { _decorator, Component, Node } from 'cc';
import { CCUtils } from './ccUtils';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {

    @property(Node)
    testNode !: Node;

    start () {

        // Example
        // CCUtils.fadeOut(this.testNode, 2);

        // this.scheduleOnce(()=>{
        //     CCUtils.fadeIn(this.testNode, 2);
        // }, 2);

        // CCUtils.hide(this.testNode, 1);
        // CCUtils.show(this.testNode, 4);
    }

    onClick () {
        CCUtils.toggleVisibility(this.testNode, 1);
    }
}

