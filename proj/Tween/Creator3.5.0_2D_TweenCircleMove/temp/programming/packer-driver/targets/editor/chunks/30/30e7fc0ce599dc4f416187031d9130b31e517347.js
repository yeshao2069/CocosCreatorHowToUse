System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Graphics, _dec, _class, _crd, ccclass, property, Test;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "31422sySNVPKrIIqi4ziOs4", "GraphicsDraw", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Test", Test = (_dec = ccclass('Test'), _dec(_class = class Test extends Component {
        start() {
          const g = this.node.getComponent(Graphics);
          g.lineWidth = 2;
          g.strokeColor.fromHEX('#FFFFFF');
          g.ellipse(0, 0, 200, 200);
          g.stroke();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=30e7fc0ce599dc4f416187031d9130b31e517347.js.map