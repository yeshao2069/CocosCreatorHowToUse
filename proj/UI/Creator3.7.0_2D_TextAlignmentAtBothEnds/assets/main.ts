import { _decorator, Component, Node, Label, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {

    @property(Label)
    lbl1 : Label;
    @property(Label)
    lbl2 : Label;
    @property(Label)
    lbl3 : Label;

    start() {

        let lbls = [
            this.lbl1,
            this.lbl2,
            this.lbl3,
        ];
        
        lbls.forEach((lbl, i) => {
            lbl.string = [
                "1008611",
                "13100007788",
                "12306",
            ][i];
            lbl.updateRenderData(true);
        });
        
        let w = lbls.map(lbl => lbl.node.getComponent(UITransform).width);
        let max = Math.max(...w);
        
        let s = w.map((w, i) => {
            return (max - w) / (lbls[i].string.length - 1)
        });
        
        lbls.forEach((lbl, i) => {
            lbl.spacingX = s[i];
        });
    }
}

