System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Graphics, _dec, _class, _crd, ccclass, property, GraphicsEllipse;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3762dDEP4ZBkquWZ9IEumL+", "GraphicsEllipse", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GraphicsEllipse", GraphicsEllipse = (_dec = ccclass('GraphicsEllipse'), _dec(_class = class GraphicsEllipse extends Component {
        start() {
          var g = this.getComponent(Graphics);
          g.lineWidth = 10;
          g.fillColor.fromHEX('#ff0000');
          g.circle(150, 0, 100);
          g.ellipse(-150, 0, 100, 70);
          g.stroke();
          g.fill();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e5e2ee97f6bccfac3f47664e18c849d17e56b58a.js.map