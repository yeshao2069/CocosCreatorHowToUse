import { _decorator, Component, Node, Toggle } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Typescript')
export class Typescript extends Component {
    @property(Node)
    subContextNode: Node = null!;

    onLoad () {
        // @ts-ignore
        let env = window.wx || window.tt || window.swan;
        if (env) {
            console.log('Message posted');
            env.getOpenDataContext().postMessage({
                value: 'MESSAGE FROM MAIN PROJECT',
            });
        }
    }

    onToggle(toggle: Toggle) {
        this.subContextNode.active = toggle.isChecked;
    }
}
