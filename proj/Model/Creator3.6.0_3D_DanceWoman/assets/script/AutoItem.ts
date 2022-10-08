
import { _decorator, EventHandler, Button } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AutoItem')
export class AutoItem{
    @property(Button)
    button !: Button;
    @property
    delay : number = 1;

    click (){
        EventHandler.emitEvents(this.button.clickEvents, null);
    }
}

