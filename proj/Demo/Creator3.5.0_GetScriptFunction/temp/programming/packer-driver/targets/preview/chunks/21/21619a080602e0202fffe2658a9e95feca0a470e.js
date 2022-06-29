System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, CTest;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a002ejm0etL0qSCGLBnL9u+", "CTest", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CTest", CTest = (_dec = ccclass('CTest'), _dec(_class = class CTest extends Component {
        doWhat() {
          console.log("hello !");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21619a080602e0202fffe2658a9e95feca0a470e.js.map