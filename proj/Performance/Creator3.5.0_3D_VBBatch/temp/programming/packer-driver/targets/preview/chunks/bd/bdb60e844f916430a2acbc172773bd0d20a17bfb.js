System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _crd, ccclass, property, gameLogic;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da479MYiZdGbrlkDSKicas1", "gameLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gameLogic", gameLogic = (_dec = ccclass('gameLogic'), _dec(_class = class gameLogic {
        /**
         * 自定义事件统计
         */
        static customEventStatistics(eventType, objParams) {
          eventType = eventType.toString();
          console.log("##### eventType:" + eventType + " , objParams:", objParams);

          if (!objParams) {
            objParams = {};
          }

          if (window.cocosAnalytics) {
            window.cocosAnalytics.CACustomEvent.onStarted(eventType, objParams);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bdb60e844f916430a2acbc172773bd0d20a17bfb.js.map