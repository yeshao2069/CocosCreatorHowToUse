
import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CTest')
export class CTest extends Component {

    doWhat(){
        console.log("hello !")
    }
}

