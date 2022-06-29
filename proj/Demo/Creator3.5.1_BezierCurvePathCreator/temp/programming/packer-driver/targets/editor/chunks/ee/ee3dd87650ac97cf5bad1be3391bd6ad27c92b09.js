System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Bezier, _crd, ccclass, property;

  _export("Bezier", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d039dqa1TtIq7lmvTjJ9ncx", "Bezier", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ccclass('Bezier');

      _export("Bezier", Bezier = class Bezier {
        constructor() {
          this._pointArr = [];
          this._runTime = 0;
          this._pointLists = [];
          this._totalLength = 0;
          this._previousPos = {};
          this._currentRunTime = 0;
        }

        init(pointArr, allTime = 2) {
          this._pointArr = pointArr;
          this._runTime = allTime;
        } // 重置数据


        resetData() {
          this._pointLists = [];
          this._totalLength = 0;
          this._currentRunTime = 0;
          let pos = this._pointArr[0].position;
          this._previousPos = {
            x: pos.x,
            y: pos.y,
            length: 0
          };
        } // 阶乘


        factorial(i) {
          let n = 1;

          for (let j = 1; j <= i; j++) {
            n *= j;
          }

          return n;
        }

        ComputeBezier(dt, runTime) {
          // 把时间从 [0,runTime] 映射到 [0,1] 之间
          let t = this._currentRunTime / runTime;
          var x = 0,
              y = 0; //控制点数组

          var n = this._pointArr.length - 1;

          this._pointArr.forEach((item, index) => {
            let itemPos = item.position;

            if (!index) {
              x += itemPos.x * Math.pow(1 - t, n - index) * Math.pow(t, index);
              y += itemPos.y * Math.pow(1 - t, n - index) * Math.pow(t, index);
            } else {
              //factorial为阶乘函数
              x += this.factorial(n) / this.factorial(index) / this.factorial(n - index) * itemPos.x * Math.pow(1 - t, n - index) * Math.pow(t, index);
              y += this.factorial(n) / this.factorial(index) / this.factorial(n - index) * itemPos.y * Math.pow(1 - t, n - index) * Math.pow(t, index);
            }
          }); //  // 二阶贝塞尔曲线公式 (t => [0,1]) 
          //  var x = Math.pow(1 - t, 2) * _startPos.x
          //  + 2 * t * (1 - t) * _controlPos.x
          //  + Math.pow(t, 2) * _endPos.x;
          //  var y = Math.pow(1 - t, 2) * _startPos.y
          //  + 2 * t * (1 - t) * _controlPos.y
          //  + Math.pow(t, 2) * _endPos.y;
          // console.log(`x:${x},y:${y}`);
          // 计算两点距离


          let length = Math.sqrt(Math.pow(this._previousPos.x - x, 2) + Math.pow(this._previousPos.y - y, 2));
          let v2 = {
            x: x,
            y: y,
            length: length
          }; // 存储当前节点

          this._pointLists.push(v2);

          this._previousPos = v2; // 累计长度

          this._totalLength += length; // 累计时间

          this._currentRunTime += dt;
        } // 切割贝塞尔曲线


        getPoints(count = 200) {
          this.resetData(); // 分割时间

          let dt = this._runTime / count; // 开始分割曲线

          for (var i = 0, len = count + 1; i < len; i++) {
            this.ComputeBezier(dt, this._runTime);
          }

          return this._pointLists;
        }

        getCurveLength() {
          return this._totalLength;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee3dd87650ac97cf5bad1be3391bd6ad27c92b09.js.map