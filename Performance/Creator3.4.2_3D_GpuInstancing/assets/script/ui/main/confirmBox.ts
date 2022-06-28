import { _decorator, Component, Node, LabelComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('confirmBox')
export class confirmBox extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property(LabelComponent)
    lbTips: LabelComponent = null;
    confirmCb: Function;
    cancelCb: Function;

    start () {
        // Your initialization goes here.
    }

    show (tips: string, confirmCb: Function, cancelCb: Function) {
        this.lbTips.string = tips;

        this.confirmCb = confirmCb;
        this.cancelCb = cancelCb;
    }

    onBtnOKClick () {
        if (this.confirmCb) {
            this.confirmCb();
        }

        this.hide();
    }

    onBtnCancelClick () {
        if (this.cancelCb) {
            this.cancelCb();
        }

        this.hide();
    }

    hide () {
        this.node.active = false;
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
