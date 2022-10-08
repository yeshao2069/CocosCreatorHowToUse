
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PhysicsTest')
export class PhysicsTest extends Component {

    @property(Node)
    sphereNode !: Node;
    @property(Node)
    cubeNode !: Node;

    onClickReset () {
        this.sphereNode.setPosition(0, 4, 3);
        this.cubeNode.setPosition(0, 4, 0);
    }
}

