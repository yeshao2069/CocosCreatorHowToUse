System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, find, _dec, _class, _crd, ccclass, property, PressResponeseTest;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0efd0atSSZA1o162E3qQGTo", "PressResponeseTest", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PressResponeseTest", PressResponeseTest = (_dec = ccclass('PressResponeseTest'), _dec(_class = class PressResponeseTest extends Component {
        start() {
          // 节点A 默认和Canvas一样大
          find('Canvas').on(Node.EventType.TOUCH_START, this.onClickA, this, true);
          find('Canvas/nodeB').on(Node.EventType.TOUCH_START, this.onClickB, this);
          find('Canvas/nodeC').on(Node.EventType.TOUCH_START, this.onClickC, this);
        }

        onClickA() {
          console.log("A 节点被点击");
        }

        onClickB() {
          console.log("B 节点被点击");
        }

        onClickC() {
          console.log("C 节点被点击");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9dda6eb4aa55d2b72554b3836f3521d9af417bec.js.map