System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, Size, Graphics, Color, _dec, _class, _crd, ccclass, property, Typescript;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Size = _cc.Size;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "157044Fgu9BSIqlV4qQ6PNf", "AbovePointTest", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Typescript", Typescript = (_dec = ccclass('Typescript'), _dec(_class = class Typescript extends Component {
        start() {
          this.normalTest(); // 普通测试

          this.rotateTest(); // 旋转测试
        }

        normalTest() {
          // 绘制方块
          var rectPos = new Vec3(-250, 0, 0);
          var size = new Size(200, 200);
          var a = new Vec3(rectPos.x + size.width / 2, rectPos.y + size.height / 2, 0);
          var b = new Vec3(rectPos.x - size.width / 2, rectPos.y + size.height / 2, 0);
          var c = new Vec3(rectPos.x - size.width / 2, rectPos.y - size.height / 2, 0);
          var d = new Vec3(rectPos.x + size.width / 2, rectPos.y - size.height / 2, 0);
          this.drawRect(a, b, c, d); // 绘制测试点

          var point1 = new Vec3(-200, 100, 0);
          var point2 = new Vec3(-205, 6, 7);
          var point3 = new Vec3(-400, 0, 0);
          this.drawPoint(point1);
          this.drawPoint(point2);
          this.drawPoint(point3);
          console.log(" ------  normal test  -------");
          var p1Res = this.rectangleContainPoint(point1, size, rectPos);
          console.log('point1 pos->', point1, 'is Contain Result ->', p1Res);
          var p2Res = this.rectangleContainPoint(point2, size, rectPos);
          console.log('point2 pos->', point2, 'is Contain Result ->', p2Res);
          var p3Res = this.rectangleContainPoint(point3, size, rectPos);
          console.log('point3 pos->', point3, 'is Contain Result ->', p3Res);
        }

        rotateTest() {
          // 绘制方块
          var rectPos = new Vec3(250, 0, 0);
          var size = new Size(200, 200);
          var angle = 45;
          var radius = Math.PI / 180 * angle;
          var getSin = parseFloat(Math.sin(radius).toFixed(3));
          var getCos = parseFloat(Math.cos(radius).toFixed(3));
          var a = new Vec3(rectPos.x + size.width / 2, rectPos.y + size.height / 2, 0);
          var b = new Vec3(rectPos.x - size.width / 2, rectPos.y + size.height / 2, 0);
          var c = new Vec3(rectPos.x - size.width / 2, rectPos.y - size.height / 2, 0);
          var d = new Vec3(rectPos.x + size.width / 2, rectPos.y - size.height / 2, 0); // 旋转前

          this.drawRect(a, b, c, d, new Color(100, 100, 100));

          var _ax = (a.x - rectPos.x) * getCos - (a.y - rectPos.y) * getSin + rectPos.x;

          var _ay = (a.y - rectPos.y) * getCos + (a.x - rectPos.x) * getSin + rectPos.y;

          a.set(_ax, _ay, 0);

          var _bx = (b.x - rectPos.x) * getCos - (b.y - rectPos.y) * getSin + rectPos.x;

          var _by = (b.y - rectPos.y) * getCos + (b.x - rectPos.x) * getSin + rectPos.y;

          b.set(_bx, _by, 0);

          var _cx = (c.x - rectPos.x) * getCos - (c.y - rectPos.y) * getSin + rectPos.x;

          var _cy = (c.y - rectPos.y) * getCos + (c.x - rectPos.x) * getSin + rectPos.y;

          c.set(_cx, _cy, 0);

          var _dx = (d.x - rectPos.x) * getCos - (d.y - rectPos.y) * getSin + rectPos.x;

          var _dy = (d.y - rectPos.y) * getCos + (d.x - rectPos.x) * getSin + rectPos.y;

          d.set(_dx, _dy, 0);
          this.drawRect(a, b, c, d); // 绘制测试点

          var point1 = new Vec3(300, 20, 0);
          var point2 = new Vec3(250, 0, 0);
          var point3 = new Vec3(400, 0, 0);
          this.drawPoint(point1);
          this.drawPoint(point2);
          this.drawPoint(point3);
          console.log(" ------  rotate test  -------");
          var p1Res = this.rectangleContainPointExt(point1, angle, size, rectPos);
          console.log('point1 pos->', point1, 'is Contain Result ->', p1Res);
          var p2Res = this.rectangleContainPointExt(point2, angle, size, rectPos);
          console.log('point2 pos->', point2, 'is Contain Result ->', p2Res);
          var p3Res = this.rectangleContainPointExt(point3, angle, size, rectPos);
          console.log('point3 pos->', point3, 'is Contain Result ->', p3Res);
        }
        /**
         * 
         * 检测矩形是否包含某个点
         * @param rectSize 矩形尺寸 宽&高
         * @param targetPos 目标点的坐标
         * @param rectPos 矩形的坐标
         * @return boolean 返回是否包含的boolean
         */


        rectangleContainPoint(targetPos, rectSize, rectPos) {
          if (rectSize === void 0) {
            rectSize = new Size();
          }

          if (rectPos === void 0) {
            rectPos = new Vec3();
          }

          // 计算边界值
          var leftX = rectPos.x - rectSize.width / 2;
          var rightX = rectPos.x + rectSize.width / 2;
          var topY = rectPos.y + rectSize.height / 2;
          var bottomY = rectPos.y - rectSize.height / 2;
          var isContain = false; // 是否包含标志

          var tPosX = targetPos.x;
          var tPosY = targetPos.y;

          if (tPosX <= rightX && tPosX >= leftX && tPosY <= topY && tPosY >= bottomY) {
            isContain = true;
          }

          return isContain;
        }
        /**
         * 
         * 检测矩形是否包含某个点(扩展1)
         * @param targetPos 目标点的坐标
         * @param angle 矩形的旋转角度
         * @param rectSize 矩形尺寸 宽&高
         * @param rectPos 矩形的坐标
         * @return boolean 返回是否包含的boolean
         */


        rectangleContainPointExt(targetPos, angle, rectSize, rectPos) {
          if (rectSize === void 0) {
            rectSize = new Size();
          }

          if (rectPos === void 0) {
            rectPos = new Vec3();
          }

          // 计算边界值
          var leftX = rectPos.x - rectSize.width / 2;
          var rightX = rectPos.x + rectSize.width / 2;
          var topY = rectPos.y + rectSize.height / 2;
          var bottomY = rectPos.y - rectSize.height / 2;
          var isContain = false; // 是否包含标志

          var tPosX = targetPos.x;
          var tPosY = targetPos.y; // 获取旋转后的坐标
          // b.x = a.x*cos(angle) - a.y*sin(angle)
          // b.y = a.x*sin(angle) + a.y*cos(angle)
          // 平面上一点x1,y1,绕平面上另一点x2,y2顺时针旋转θ角度 ，怎么求旋转后的x1,y1对应的坐标x，y
          // x=(x1-x2)cosθ-(y1-y2)sinθ+x2
          // y=(y1-y2)cosθ+(x1-x2)sinθ+y2

          var radius = Math.PI / 180 * -angle;
          var getSin = parseFloat(Math.sin(radius).toFixed(3));
          var getCos = parseFloat(Math.cos(radius).toFixed(3)); // console.log(getSin,getCos);

          var xOld = (tPosX - rectPos.x) * getCos - (tPosY - rectPos.y) * getSin + rectPos.x;
          var yOld = (tPosY - rectPos.y) * getCos + (tPosX - rectPos.x) * getSin + rectPos.y; // 思路: 将旋转的矩形转换成旋转前(angle=0°时)的矩形，然后把需要判断的节点也转换成旋转前的节点然后进行判断

          if (xOld <= rightX && xOld >= leftX && yOld <= topY && yOld >= bottomY) {
            isContain = true;
          }

          return isContain;
        }
        /**
         * 绘制方块
         * @param aPos 方块节点坐标
         * @param bPos 方块节点坐标
         * @param cPos 方块节点坐标
         * @param dPos 方块节点坐标
         * @param dColor 绘制颜色
         */


        drawRect(aPos, bPos, cPos, dPos, dColor) {
          if (dColor === void 0) {
            dColor = Color.BLACK;
          }

          var g = this.node.getChildByName('draw').getComponent(Graphics);
          g.lineWidth = 5; // g.strokeColor.fromHEX('#000000');

          g.strokeColor.set(dColor);
          g.moveTo(aPos.x, aPos.y);
          g.lineTo(bPos.x, bPos.y);
          g.lineTo(cPos.x, cPos.y);
          g.lineTo(dPos.x, dPos.y);
          g.lineTo(aPos.x, aPos.y);
          g.stroke();
        }
        /**
         * 绘制点
         * @param aPos 点坐标
         * @param radius 点大小
         */


        drawPoint(aPos, radius) {
          if (radius === void 0) {
            radius = 5;
          }

          var g = this.node.getChildByName('draw').getComponent(Graphics);
          g.lineWidth = 5;
          g.fillColor.fromHEX('#FF0000');
          g.strokeColor.fromHEX('#FF0000');
          g.circle(aPos.x, aPos.y, radius);
          g.stroke();
          g.fill();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3fb46815f4cb30e33cabaf3a837d2b9b403b247a.js.map