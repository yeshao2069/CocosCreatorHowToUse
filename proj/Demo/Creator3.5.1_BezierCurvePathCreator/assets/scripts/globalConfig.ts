
import { _decorator, Component } from 'cc';
import { Bezier } from './Bezier';
import { BezierData } from './BezierData';
import { EventListener } from './EventListener';
import { NodeEvents } from './NodeEvents';
const { ccclass, property } = _decorator;

@ccclass('GlobalConfig')
export class GlobalConfig extends Component {

    onLoad () {
        window['Bezier'] = new Bezier();
        window['BezierData'] = new BezierData();
        window['NodeEvents'] = new NodeEvents();
        window['EventListener'] = new EventListener();
    }
}
