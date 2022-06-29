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
          const g = this.getComponent(Graphics);
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
//# sourceMappingURL=ca7580cc029c489df009401832d74e2f71f685c8.js.map