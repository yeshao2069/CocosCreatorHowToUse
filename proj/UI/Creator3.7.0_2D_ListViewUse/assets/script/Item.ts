
import { _decorator, Component, Node, Label, CCFloat } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Item')
export class Item extends Component {
   
    @property(Label)
    label !: Label;
    @property(CCFloat)
    tmplID: number = 0;
    @property(CCFloat)
    itemID: number = 0;

    onLoad () {
        const that = this;
        this.node.on(Node.EventType.TOUCH_END, function(){
            console.log("Item " + that.itemID + ' clicked');
        }, this);
    }

    initItem (tmplID: number, itemID: number) {
        this.tmplID = tmplID;
        this.itemID = itemID;
        this.label.string = "Tmpl#" + this.tmplID + ' Item#' + this.itemID;
    }

    updateItem (itemID: number) {
        this.itemID = itemID;
        this.label.string = "Tmpl#" + this.tmplID + ' Item#' + this.itemID;
    }
}
