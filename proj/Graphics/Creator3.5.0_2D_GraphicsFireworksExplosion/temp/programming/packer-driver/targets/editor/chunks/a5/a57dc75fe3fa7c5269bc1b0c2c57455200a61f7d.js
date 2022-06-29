System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Graphics, Color, _dec, _class, _crd, ccclass, property, MyGraphics;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b22a3W/uphG9JseO9sPy9vG", "MyGraphics", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MyGraphics = (_dec = ccclass('MyGraphics'), _dec(_class = class MyGraphics extends Component {
        constructor(...args) {
          super(...args);
          this.startX = 0;
          this.startY = 0;
          this.endX = 0;
          this.endY = 0;
        }

        start() {
          this.paint = this.node.getComponent(Graphics);
        }
        /**
         * 火箭轨迹
         * @param startNode 开始的节点 
         * @param endNode  结束的节点
         */


        setLine(p0x, p0y, p1x, p1y, color, width) {
          this.paint.strokeColor = color;
          this.paint.lineWidth = width;
          this.paint.moveTo(p0x, p0y);
          this.paint.lineTo(p1x, p1y);
          this.paint.quadraticCurveTo((p1x - p0x) / 2, p1y, p1x, p1y);
          this.paint.stroke();
        }

        update(dt) {
          this.paint.clear();
          this.setLine(this.startX, this.startY, this.endX, this.endY, new Color(255, 147, 145, 255), 50);
          if (this.endX < 500) this.endX += 1;
          if (this.endY < 500) this.endY += 1;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a57dc75fe3fa7c5269bc1b0c2c57455200a61f7d.js.map