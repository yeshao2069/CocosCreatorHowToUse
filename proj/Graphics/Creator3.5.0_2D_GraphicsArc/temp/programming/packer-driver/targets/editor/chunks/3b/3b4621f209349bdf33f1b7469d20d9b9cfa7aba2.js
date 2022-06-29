System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Graphics, _dec, _class, _crd, ccclass, property, GraphicsArc;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "382c5WaoC5GVYgxc9/SHW2m", "GraphicsArc", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GraphicsArc", GraphicsArc = (_dec = ccclass('GraphicsArc'), _dec(_class = class GraphicsArc extends Component {
        start() {
          const g = this.node.getComponent(Graphics);
          g.lineWidth = 5;
          g.fillColor.fromHEX('#FF0000');
          g.arc(0, 0, 100, Math.PI / 2, Math.PI, false);
          g.lineTo(0, 0);
          g.close();
          g.stroke();
          g.fill();
          g.fillColor.fromHEX('#00FF00');
          g.arc(-10, 10, 100, Math.PI / 2, Math.PI, true);
          g.lineTo(-10, 10);
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
//# sourceMappingURL=3b4621f209349bdf33f1b7469d20d9b9cfa7aba2.js.map