import { _decorator } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EventListener')
export class EventListener {

    handlers : any = {};
    // 订阅事件
    on (eventType: string | number, method: any) {
        this.handlers[eventType] = this.handlers[eventType] || [];
        this.handlers[eventType].push(method);
    };

    // 触发事件(发布事件)
    emit (eventType: string | number, data: any) {
        if (!this.handlers[eventType]) {
            return
        }
        for (var i = 0, len = this.handlers[eventType].length; i < len; i++) {
            this.handlers[eventType][i].call(null, data)
        }
    };

    // 删除订阅事件
    off (eventType: string | number, method: any) {
        let handler = this.handlers[eventType];
        for (var i = 0, len = handler.length; i < len; i++) {
            if (handler[i] === method) {
                handler.splice(i, 1);
            }
        }
    }
}
