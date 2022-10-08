
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Knight')
export class Knight extends Component {
    @property([Node])
    grounds : Node[] = [];

    index: number = 0;

    onClick () {
        this.index ++;
        this.index = this.index % this.grounds.length;

        this.setAllDefault();
        this.grounds[this.index].active = true;
    }

    setAllDefault () {
        for (let i = 0; i < this.grounds.length; i++) {
            let ground = this.grounds[i];
            if (ground.active) ground.active = false;
        }
    }
}
