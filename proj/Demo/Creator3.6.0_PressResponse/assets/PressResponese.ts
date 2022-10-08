
import { _decorator, Component, Node, find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PressResponeseTest')
export class PressResponeseTest extends Component {

    start () {
        // 节点A 默认和Canvas一样大
        find('Canvas')!.on(Node.EventType.TOUCH_START,this.onClickA,this,true)

        find('Canvas/nodeB')!.on(Node.EventType.TOUCH_START, this.onClickB, this);

        find('Canvas/nodeC')!.on(Node.EventType.TOUCH_START, this.onClickC, this);
    }

    onClickA (){
        console.log("A 节点被点击");
    }

    onClickB (){
        console.log("B 节点被点击");
    }

    onClickC (){
        console.log("C 节点被点击");
    }
}