System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Bezier, BezierData, EventListener, NodeEvents, _dec, _class, _crd, ccclass, property, GlobalConfig;

  function _reportPossibleCrUseOfBezier(extras) {
    _reporterNs.report("Bezier", "./Bezier", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBezierData(extras) {
    _reporterNs.report("BezierData", "./BezierData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventListener(extras) {
    _reporterNs.report("EventListener", "./EventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeEvents(extras) {
    _reporterNs.report("NodeEvents", "./NodeEvents", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Bezier = _unresolved_2.Bezier;
    }, function (_unresolved_3) {
      BezierData = _unresolved_3.BezierData;
    }, function (_unresolved_4) {
      EventListener = _unresolved_4.EventListener;
    }, function (_unresolved_5) {
      NodeEvents = _unresolved_5.NodeEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e9c3SwWP9Hbpw0AXJn/Sv6", "globalConfig", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GlobalConfig", GlobalConfig = (_dec = ccclass('GlobalConfig'), _dec(_class = class GlobalConfig extends Component {
        onLoad() {
          window['Bezier'] = new (_crd && Bezier === void 0 ? (_reportPossibleCrUseOfBezier({
            error: Error()
          }), Bezier) : Bezier)();
          window['BezierData'] = new (_crd && BezierData === void 0 ? (_reportPossibleCrUseOfBezierData({
            error: Error()
          }), BezierData) : BezierData)();
          window['NodeEvents'] = new (_crd && NodeEvents === void 0 ? (_reportPossibleCrUseOfNodeEvents({
            error: Error()
          }), NodeEvents) : NodeEvents)();
          window['EventListener'] = new (_crd && EventListener === void 0 ? (_reportPossibleCrUseOfEventListener({
            error: Error()
          }), EventListener) : EventListener)();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b61c58ad770796d80502a7324d49b49635a6a94.js.map