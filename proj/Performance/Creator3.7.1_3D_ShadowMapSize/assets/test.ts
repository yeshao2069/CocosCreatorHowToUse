import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {

    _isLow : boolean = false;

    
    click () {
        this._isLow = !this._isLow;

        if (this._isLow) {
            director.getScene().globals.shadows.shadowMapSize = 2048;
        } else {
            director.getScene().globals.shadows.shadowMapSize = 256;
        }
    }
}