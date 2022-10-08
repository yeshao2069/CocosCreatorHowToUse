
import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SimpleButton')
export class SimpleButton extends Component {
    
    @property(Label)
    displayLabel !: Label;

    
    onBtnLeftClicked () {
        console.log('Left button clicked!');
        this.displayLabel.string = "左边的按钮被点击!";
    }

    onBtnRightClicked () {
        console.log('Right button clicked!');
        this.displayLabel.string = "右边的按钮被点击!";
    }
}
