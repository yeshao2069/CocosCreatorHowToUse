System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Graphics, _dec, _class, _crd, ccclass, property, GraphicsHouse;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "382c5WaoC5GVYgxc9/SHW2m", "GraphicsHouse", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GraphicsHouse", GraphicsHouse = (_dec = ccclass('GraphicsHouse'), _dec(_class = class GraphicsHouse extends Component {
        start() {
          const g = this.node.getComponent(Graphics); // wall

          g.lineWidth = 10;
          g.rect(-75, -140, 150, 110);
          g.fillColor.fromHEX('#666666');
          g.fill();
          g.stroke(); // door

          g.lineWidth = 10;
          g.rect(-20, -135, 40, 50);
          g.fillColor.fromHEX('#BBBBBB');
          g.fill();
          g.lineWidth = 6;
          g.moveTo(-20, -140);
          g.lineTo(-20, -85);
          g.lineTo(20, -85);
          g.lineTo(20, -140);
          g.stroke(); // roof

          g.lineWidth = 10;
          g.moveTo(-100, -30);
          g.lineTo(0, 60);
          g.lineTo(100, -30);
          g.lineTo(-100, -30);
          g.fillColor.fromHEX('#DD1010');
          g.fill();
          g.stroke();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f4bc5acba4133f3b2d0c8520b515299e676f5dfa.js.map