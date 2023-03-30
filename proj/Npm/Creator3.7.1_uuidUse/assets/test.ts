import { _decorator, Component, Node, Label } from 'cc';
import { v4 as uuidv4 } from 'uuid';

const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {

    @property(Label)
    showLabel !: Label;

    start() {
        const u = uuidv4();
        this.showLabel.string = `uuid => ` + u;
    }
}

