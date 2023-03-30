import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {

    @property(Label)
    showLabel !: Label;

    start() {
        let old = new Uint8Array(1000);

        // @ts-ignore
        var deflate = new Zlib.Deflate(old);
        var compressed:Uint8Array = deflate.compress();
        this.showLabel.string = `Old Data => ` + old + `\n\n\nCompress Data => ` + compressed;
    }
}

