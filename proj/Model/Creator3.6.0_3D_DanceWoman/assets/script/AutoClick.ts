
import { _decorator, Component } from 'cc';
import { AutoItem } from './AutoItem';
const { ccclass, property } = _decorator;

@ccclass('AutoClick')
export class AutoClick extends Component {

    @property([AutoItem])
    buttons !: AutoItem[];

    start () {
        this.autoClick();
    }

    autoClick (){
        let dt = 0;
        this.buttons.forEach((button) => {
            dt += button.delay;
            this.scheduleOnce(() => {
                button.button && button.click();
            }, dt);
        });
    }
}
