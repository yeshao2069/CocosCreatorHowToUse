System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, color, Component, Node, Graphics, Vec2, Layers, _dec, _class, _crd, ccclass, property, config1, config2, UpLine, downLine, boomLine, boomChip, Draw;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      color = _cc.color;
      Component = _cc.Component;
      Node = _cc.Node;
      Graphics = _cc.Graphics;
      Vec2 = _cc.Vec2;
      Layers = _cc.Layers;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "93e3ciRvRVEt6nTnU2540Ll", "draw", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      config1 = [{
        color: color(255, 147, 145, 51),
        width: 50,
        widthRatio: -1
      }, {
        color: color(255, 147, 145, 80),
        width: 35,
        widthRatio: -1
      }, {
        color: color(255, 172, 76, 125),
        width: 20,
        widthRatio: -1
      }, {
        color: color(255, 255, 255, 125),
        width: 10,
        widthRatio: -1
      }, {
        color: color(255, 255, 255, 255),
        width: 5,
        widthRatio: -1
      }];
      config2 = [{
        color: color(255, 147, 145, 25),
        width: 30,
        widthRatio: 1
      }, {
        color: color(255, 147, 145, 40),
        width: 20,
        widthRatio: 1
      }, {
        color: color(255, 172, 76, 65),
        width: 10,
        widthRatio: 1
      }, {
        color: color(255, 255, 255, 65),
        width: 5,
        widthRatio: 1
      }];
      UpLine = {
        startPos: new Vec2(0, 0),
        controlPos: new Vec2(0, 900),
        endPos: new Vec2(360, 1100)
      };
      downLine = {
        startPos: new Vec2(360, 1100),
        controlPos: new Vec2(400, -200),
        endPos: new Vec2(800, 0)
      };
      boomLine = {
        startPos: new Vec2(0, 0),
        controlPos: new Vec2(0, 900),
        endPos: new Vec2(294, 1100)
      };
      boomChip = [{
        ControlPos: new Vec2(330, 100),
        EndPos: new Vec2(600, 0)
      }, {
        ControlPos: new Vec2(0, 500),
        EndPos: new Vec2(0, 0)
      }, {
        ControlPos: new Vec2(354, -400),
        EndPos: new Vec2(700, 0)
      }, {
        ControlPos: new Vec2(-274, -600),
        EndPos: new Vec2(-274, 0)
      }, {
        ControlPos: new Vec2(-234, -800),
        EndPos: new Vec2(-234, 0)
      }, {
        ControlPos: new Vec2(1100, -500),
        EndPos: new Vec2(1100, 0)
      }];

      _export("default", Draw = (_dec = ccclass('Draw'), _dec(_class = class Draw extends Component {
        start() {
          this.BeamBoom(); // 测试
          // this.BeamUp();
        } //------------------------------外部引用------------------------------
        //上升曲线


        BeamUp() {
          var paint1 = this.GetNewPaint();
          var t = 0;
          var inter = 6; //画线

          this.GradientCurve(paint1, config1, inter, UpLine.startPos, UpLine.controlPos, UpLine.endPos, t, () => {
            this.BeamDown();
          });
        } //下降曲线


        BeamDown() {
          var paint2 = this.GetNewPaint();
          this.GradientCurve(paint2, config1, 10, downLine.startPos, downLine.controlPos, downLine.endPos, 0);
        } //爆炸曲线


        BeamBoom() {
          var paint3 = this.GetNewPaint(); // 烟花开始

          this.GradientCurve(paint3, config1, 6, boomLine.startPos, boomLine.controlPos, boomLine.endPos, 0, () => {
            // 烟花炸开
            this.GradientCurve(paint3, config2, 10, boomLine.endPos, boomChip[0].ControlPos, boomChip[0].EndPos, 0);
            this.GradientCurve(paint3, config2, 10, boomLine.endPos, boomChip[1].ControlPos, boomChip[1].EndPos, 0);
            this.GradientCurve(paint3, config2, 10, boomLine.endPos, boomChip[2].ControlPos, boomChip[2].EndPos, 0);
            this.GradientCurve(paint3, config2, 10, boomLine.endPos, boomChip[3].ControlPos, boomChip[3].EndPos, 0);
            this.GradientCurve(paint3, config2, 10, boomLine.endPos, boomChip[4].ControlPos, boomChip[4].EndPos, 0);
            this.GradientCurve(paint3, config2, 10, boomLine.endPos, boomChip[5].ControlPos, boomChip[5].EndPos, 0);
          });
        } //----------------------------------绘画封装-----------------------------------

        /**
         * 渐变曲线 从p0逐渐画到p2
         * @param paint 画笔
         * @param config 配置
         * @param inter 完成时间
         * @param p0 起点
         * @param p1 控制点
         * @param p2 终点
         * @param t  起始比例
         */


        GradientCurve(paint, config, inter, p0, p1, p2, t, callBack) {
          if (t === void 0) {
            t = 0;
          }

          if (callBack === void 0) {
            callBack = null;
          }

          var pt = 0;
          var step = (1 - t) / (inter * 25);
          var pre = p0;
          var width;

          while (pt < t) {
            // 绘制固定区域
            pt += 0.01;
            var pEndPos = this.BesselCurve(pt, p0.clone(), p1.clone(), p2.clone());

            if (config[0].widthRatio < 0) {
              width = p2.y > p0.y ? 1 - pt : pt;
            } else {
              width = config[0].widthRatio;
            }

            this.DrawLines(paint, config, pre, pEndPos, this.limt(0.3, width, 1));
            pre = pEndPos;
          } // 绘制动态区域


          var leng = inter * 25;

          var loop = () => {
            pt += step;

            if (pt > 1) {
              this.unschedule(loop);
              callBack && callBack();
            } else {
              var _pEndPos = this.BesselCurve(pt, p0.clone(), p1.clone(), p2.clone());

              if (config[0].widthRatio < 0) {
                width = p2.y > p0.y ? 1 - pt : pt;
              } else {
                width = config[0].widthRatio;
              }

              this.DrawLines(paint, config, pre, _pEndPos, this.limt(0.3, width, 1));
              pre = _pEndPos;
            }
          };

          this.schedule(loop, 0.04, leng + 10);
        }
        /**
         * 画重叠的直线
         * @param panit 画笔
         * @param start 开始节点
         * @param end 结束节点
         * @param config 配置
         * @param widthRatio 宽度比例
         */


        DrawLines(panit, config, start, end, widthRatio) {
          for (var i = 0; i < config.length; i++) {
            this.DrawLine(panit, start, end, config[i].color, config[i].width * widthRatio);
          }
        }
        /**
         * 画直线
         * @param panit 画笔
         * @param p0  起点
         * @param p1  终点
         * @param color 颜色
         * @param width 宽度
         */


        DrawLine(panit, p0, p1, color, width) {
          panit.strokeColor = color;
          panit.lineWidth = width;
          panit.moveTo(p0.x, p0.y);
          panit.lineTo(p1.x, p1.y);
          panit.stroke();
        }
        /**
         * 获得一条贝塞尔曲线上的点
         * @param t  x比例
         * @param p0 起点
         * @param p1 控制点
         * @param p2 重点
         * @returns 对应的坐标
         */


        BesselCurve(t, p0, p1, p2) {
          var t1 = 1 - t ** 2;
          var t2 = 2 * t * (1 - t);
          var t3 = t ** 2;
          var a1 = p0.multiply2f(t1, t1);
          var a2 = p1.multiply2f(t2, t2);
          var a3 = p2.multiply2f(t3, t3);
          var a2t = a2.add(a3).clone();
          var a1t = a1.add(a2t).clone();
          return a1t;
        } //---------------------------------工具封装-----------------------------------------------------------

        /**获得新的笔刷 */


        GetNewPaint() {
          var node = new Node();
          this.node.addChild(node);
          node.layer = Layers.Enum.UI_2D;
          var g = node.addComponent(Graphics);
          return g;
        }
        /**
         * 控制number在min和max之间
         * @param min {number}
         * @param number {number}
         * @param max {number}
         */


        limt(min, number, max) {
          return Math.min(Math.max(min, number), max);
        }

        onDestroy() {
          this.unscheduleAllCallbacks(); // 销毁所有定时器
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=762cd308407d58edad26d40bfa63bce1b53b6ed4.js.map