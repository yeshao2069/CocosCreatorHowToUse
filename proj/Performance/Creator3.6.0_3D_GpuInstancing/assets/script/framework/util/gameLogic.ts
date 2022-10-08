import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('gameLogic')
export class gameLogic {
    /**
     * 自定义事件统计
     */
    public static customEventStatistics(eventType, objParams) {
        eventType = eventType.toString();

        console.log(`##### eventType:${eventType} , objParams:`, objParams);
        if (!objParams) {
            objParams = {};
        }

        if (window.cocosAnalytics) {
            window.cocosAnalytics.CACustomEvent.onStarted(eventType, objParams);
        }
    }
}
