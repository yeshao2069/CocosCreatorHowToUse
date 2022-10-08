import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {
    start() {
        let temp = new Uint8Array(1000);
        console.log(temp);
        // @ts-ignore
        var deflate = new Zlib.Deflate(temp);
        var compressed:Uint8Array = deflate.compress();
        console.log(compressed);
    }

    update(deltaTime: number) {
        
    }
}

