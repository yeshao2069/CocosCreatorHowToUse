System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Graphics, _dec, _class, _crd, ccclass, property, GraphicsLineTo;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c45817vbXRDC5XdjHQYThpx", "GraphicsLineTo", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GraphicsLineTo", GraphicsLineTo = (_dec = ccclass('GraphicsLineTo'), _dec(_class = class GraphicsLineTo extends Component {
        start() {
          var g = this.getComponent(Graphics);
          g.lineWidth = 10;
          g.fillColor.fromHEX('#FF0000');
          g.moveTo(-20, 0);
          g.lineTo(0, -100);
          g.lineTo(20, 0);
          g.lineTo(0, 100);
          g.close();
          g.stroke();
          g.fill();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c58d4bbe4c62bef6b232680c53f2dee0d7b8ce21.js.map