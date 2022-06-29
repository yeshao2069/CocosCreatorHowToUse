System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Graphics, _dec, _class, _crd, ccclass, property, GraphicsRect;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8e835gazpJFIfCzmgb6Jef", "GraphicsRect", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GraphicsRect", GraphicsRect = (_dec = ccclass('GraphicsRect'), _dec(_class = class GraphicsRect extends Component {
        start() {
          const g = this.node.getComponent(Graphics);
          g.lineWidth = 10;
          g.fillColor.fromHEX('#FF0000'); // rect

          g.rect(-250, 0, 200, 100); // round rect

          g.roundRect(50, 0, 200, 100, 20);
          g.stroke();
          g.fill();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=02fe187bdc90278fb258015fe7ce8e824ee4f809.js.map