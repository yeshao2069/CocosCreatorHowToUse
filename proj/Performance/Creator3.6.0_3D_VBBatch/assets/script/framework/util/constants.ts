import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('constants')
export class constants {
    static EVENT_TYPE = {
        PERFORMANCE_PARAMETER: 'performanceParameter' //性能参数
    }

    static VERSION = '0.2.5';
}
