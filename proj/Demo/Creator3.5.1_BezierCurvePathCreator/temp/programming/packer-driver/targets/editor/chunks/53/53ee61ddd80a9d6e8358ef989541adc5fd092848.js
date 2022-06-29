System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _crd, ccclass, property, EventListener;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79eceW6rG9Hza7PDc4t2EIb", "EventListener", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EventListener", EventListener = (_dec = ccclass('EventListener'), _dec(_class = class EventListener {
        constructor() {
          this.handlers = {};
        }

        // 订阅事件
        on(eventType, method) {
          this.handlers[eventType] = this.handlers[eventType] || [];
          this.handlers[eventType].push(method);
        }

        // 触发事件(发布事件)
        emit(eventType, data) {
          if (!this.handlers[eventType]) {
            return;
          }

          for (var i = 0, len = this.handlers[eventType].length; i < len; i++) {
            this.handlers[eventType][i].call(null, data);
          }
        }

        // 删除订阅事件
        off(eventType, method) {
          let handler = this.handlers[eventType];

          for (var i = 0, len = handler.length; i < len; i++) {
            if (handler[i] === method) {
              handler.splice(i, 1);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53ee61ddd80a9d6e8358ef989541adc5fd092848.js.map