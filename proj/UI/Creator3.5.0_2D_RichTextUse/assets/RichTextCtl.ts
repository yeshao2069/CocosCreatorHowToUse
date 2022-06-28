
import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RichTextCtl')
export class RichTextCtl extends Component {
    
    @property(Label)
    positionMessage !: Label;

    clickme (event: any) {
        var clickPosition = event.touch.getUILocation();
        this.positionMessage.string = 'Clicked at: x = ' + parseInt(parseFloat(clickPosition.x)+'') + ', y = ' + parseInt(parseFloat(clickPosition.y)+'');
    }
}

