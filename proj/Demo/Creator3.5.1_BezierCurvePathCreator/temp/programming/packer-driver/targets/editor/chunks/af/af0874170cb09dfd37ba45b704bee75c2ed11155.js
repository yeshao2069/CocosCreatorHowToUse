System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, instantiate, Label, Node, Vec3, Bezier, Ident, BezierData, _crd, ccclass, property;

  function _reportPossibleCrUseOfBezier(extras) {
    _reporterNs.report("Bezier", "./Bezier", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIdent(extras) {
    _reporterNs.report("Ident", "./Enums", _context.meta, extras);
  }

  _export("BezierData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Bezier = _unresolved_2.Bezier;
    }, function (_unresolved_3) {
      Ident = _unresolved_3.Ident;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0bdd4Tm8mxMCLzyMc12Tebc", "BezierData", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ccclass('BezierData');

      _export("BezierData", BezierData = class BezierData {
        constructor() {
          this._bezierCurveLists = [];
          this._bezierCurveData = {
            time: 2,
            //运行总时长
            length: 0,
            //曲线总长
            points: [] //曲线点列表

          };
          this._pointCurveDict = new Map();
          this._PointNum = 0;
          this._currentBezierType = 2;
          this._pointCount = 100;
          this._resolution = {
            width: 1280,
            height: 720
          };
        }

        // 初始化
        init(point, control, parent) {
          this.clearAllBezier();
          this._pointPrefab = point;
          this._controlPrefab = control;
          this._pointParent = parent;
          this.initRandCurve();
        } // 设置曲线切割份数


        setPointCount(num) {
          this._pointCount = num;
        } // 设置曲线类型


        setBezierCurveType(type) {
          this._currentBezierType = type;
        } // 获取曲线类型


        getBezierCurveType() {
          return this._currentBezierType;
        } // 设置删除的目标节点


        setDeleteTarget(node) {
          this._deleteTarget = node;
        } // 添加贝塞尔曲线到列表


        addBezierCurve(curve) {
          this._bezierCurveLists.push(curve);
        } // 获取贝塞尔曲线列表


        getBezierCurveLists() {
          return this._bezierCurveLists;
        } // 获取贝塞尔曲线数据


        getBezierCurveData() {
          return this._bezierCurveData;
        } // 设置贝塞尔曲线运行时长


        setBezierCurveRunTime(time) {
          this._bezierCurveData.time = time;
        } // 是否是最后一个曲线


        isLastCurve() {
          return this._bezierCurveLists.length <= 1;
        } // 获取分辨率


        getResolution() {
          return this._resolution;
        } // 设置分辨率


        setResolution(width, height) {
          this._resolution = {
            width: width,
            height: height
          };
          return this._resolution;
        } // 创建二阶贝塞尔曲线


        createCurve(pos) {
          let end = this.createPoint((_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).point, pos);
          let control = this.createPoint((_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).control, pos); // 把曲线列表最后一个点作为新曲线起点

          let start = this._bezierCurveLists[this._bezierCurveLists.length - 1].end;
          let curve = {
            start,
            control,
            end
          };

          this._bezierCurveLists.push(curve);

          this.saveToPointCurveDict(curve);
          console.log("bezierLists->", this._bezierCurveLists);
        } // 创建三阶贝塞尔曲线


        createThirdOrderCurve(pos) {
          // 把曲线列表最后一个点作为新曲线起点
          let start = this._bezierCurveLists[this._bezierCurveLists.length - 1].end;
          let end = this.createPoint((_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).point, pos);
          let control2 = this.createPoint((_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).control, pos); //计算偏移点

          let c1pos = new Vec3(200, 200, 0).add(start.position);
          c1pos.x = Math.min(this._resolution.width / 2, c1pos.x);
          c1pos.y = Math.min(this._resolution.height / 2, c1pos.y);
          let control1 = this.createPoint((_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).control, c1pos, false);
          let curve = {
            start,
            control1,
            control2,
            end
          };

          this._bezierCurveLists.push(curve);

          this.saveToPointCurveDict(curve);
          console.log("bezierLists->", this._bezierCurveLists);
        } // 存储到曲线字典
        // key - 点, value - 该点所关联的曲线对象Obj, 
        // 曲线对象Obj: start字段 为 该点作为起点所在的曲线,  control end类似


        saveToPointCurveDict(curve) {
          let obj;

          for (const key in curve) {
            const point = curve[key];

            if (this._pointCurveDict.has(point)) {
              obj = this._pointCurveDict.get(point);
            } else {
              obj = {};
            }

            obj[key + "Curve"] = curve;

            this._pointCurveDict.set(point, obj);
          }

          console.log("pointCurveDict", this._pointCurveDict);
        } // 删除节点


        deletePoint() {
          if (this._pointCurveDict.has(this._deleteTarget)) {
            let location = this.getPointLocation(this._deleteTarget);

            if (location == "center") {
              this.deleteCenterPoint(this._deleteTarget);
            } else if (location == "start") {
              this.deleteStartPoint(this._deleteTarget);
            } else if (location == "end") {
              this.deleteEndPoint(this._deleteTarget);
            }
          }
        } // 保存路径


        saveBezierPath() {
          this._bezierCurveData.length = 0;
          this._bezierCurveData.points = [];
          console.log("保存路径bezierLists", this._bezierCurveLists);

          for (var i = 0, len = this._bezierCurveLists.length; i < len; i++) {
            const bezier = this._bezierCurveLists[i]; // 创建一个贝塞尔曲线
            // let bezierCurve = new Bezier(bezier.start, bezier.control, bezier.end, 100);
            // console.log("consscscds", Object.values(bezier));

            let bezierCurve = new (_crd && Bezier === void 0 ? (_reportPossibleCrUseOfBezier({
              error: Error()
            }), Bezier) : Bezier)();
            bezierCurve.init(Object.values(bezier), 2); // 获取曲线点

            let points = bezierCurve.getPoints(this._pointCount);
            console.log("consscscds", this._pointCount); // 获取曲线长度

            let curveLength = bezierCurve.getCurveLength(); // 计算路程长度

            this._bezierCurveData.length += curveLength; // 存储曲线点

            this._bezierCurveData.points.push(...points); // console.log("points", points);

          }

          console.log("保存路径bezierCurveData", this._bezierCurveData);
          console.log("保存路径pointCurveDict->", this._pointCurveDict);
        } // 情况所有曲线


        clearAllBezier() {
          console.log("clearAllBezier");
          this._bezierCurveLists = [];

          this._pointCurveDict.forEach((curve, point) => {
            if (point) point.destroy();
          });

          this._pointCurveDict.clear();
        } // 创建新节点


        createPoint(ident, pos, isSelect = true) {
          let node;
          let name;

          if (ident == (_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).point) {
            node = instantiate(this._pointPrefab);
            node.ident = (_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
              error: Error()
            }), Ident) : Ident).point;
            name = "point";
          } else if (ident == (_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).control) {
            node = instantiate(this._controlPrefab);
            node.ident = (_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
              error: Error()
            }), Ident) : Ident).control;
            name = "control";
            if (isSelect) window['NodeEvents'].setMoveTargetNode(node);
          }

          let count = this._PointNum++;
          node = node;
          node.name = name + "_" + count;
          node.parent = this._pointParent;
          node.setPosition(pos);
          window['NodeEvents'].addPointDeleteEvents(node);
          window['NodeEvents'].addDragEvents(node); // 创建编号

          let num = new Node();
          num.parent = node;
          num.setPosition(num.position.x, 20, num.position.z);
          num.addComponent(Label).string = count.toString();
          return node;
        }

        getRandPos() {
          let randX = Math.random() * this._resolution.width - this._resolution.width * 0.5;
          let randY = Math.random() * this._resolution.height - this._resolution.height * 0.5;
          return new Vec3(randX, randY, 0);
        } // 初始化一个随机曲线


        initRandCurve() {
          let start = this.createPoint((_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).point, this.getRandPos());
          let control = this.createPoint((_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).control, this.getRandPos());
          let end = this.createPoint((_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).point, this.getRandPos());
          window['NodeEvents'].setMoveTargetNode(null);
          let bezier = {
            start,
            control,
            end
          };
          this.addBezierCurve(bezier);
          this.saveToPointCurveDict(bezier);
        } // 判断该点是起点,终点或者中间点


        getPointLocation(node) {
          let curveObj = this._pointCurveDict.get(node);

          if (curveObj) {
            if (curveObj["startCurve"] && curveObj["endCurve"]) {
              return "center";
            }

            if (curveObj["startCurve"]) {
              return "start";
            }

            if (curveObj["endCurve"]) {
              return "end";
            }
          }

          return 0;
        } // 删除的是中间点


        deleteCenterPoint(point) {
          console.warn("删除的是中间点");

          if (this._pointCurveDict.has(point)) {
            //中间点有前后两个曲线,删除该点就需要合并两个曲线（这里的方案是保留前面的曲线，删除后面的曲线）
            let CurveObj = this._pointCurveDict.get(point);

            let prevCurve = CurveObj.endCurve;
            let nextCurve = CurveObj.startCurve; // 把前一个曲线的终点移动到后一个曲线的终点上

            prevCurve.end = nextCurve.end; // 重新赋值该节点下的曲线对象的end曲线

            let prevEndCurveObj = this._pointCurveDict.get(prevCurve.end);

            prevEndCurveObj.endCurve = prevCurve;

            this._pointCurveDict.delete(point); // 删除后曲线相关的信息


            for (const key in nextCurve) {
              if (key == "end") continue;
              const _point = nextCurve[key];

              this._pointCurveDict.delete(_point);

              _point.destroy();
            } // pointCurveDict.delete(nextCurve.start)
            // pointCurveDict.delete(nextCurve.control)
            // nextCurve.start.destroy();
            // nextCurve.control.destroy();


            this.deleteCurveFromBezierLists(nextCurve);
          }
        } // 删除的是起点


        deleteStartPoint(point) {
          console.warn("删除的是起点");

          if (this._pointCurveDict.has(point)) {
            //找到该点关联的曲线
            let CurveObj = this._pointCurveDict.get(point);

            let startCurve = CurveObj.startCurve;
            CurveObj.endCurve = null; // 删除曲线及其相关的点

            let endCurveObj = this._pointCurveDict.get(startCurve.end);

            endCurveObj.endCurve = null;

            for (const key in startCurve) {
              if (key == "end") continue;
              const _point = startCurve[key];

              this._pointCurveDict.delete(_point);

              _point.destroy();
            }

            this.deleteCurveFromBezierLists(startCurve);
          }
        } // 删除的是终点


        deleteEndPoint(point) {
          console.warn("删除的是终点");

          if (this._pointCurveDict.has(point)) {
            let CurveObj = this._pointCurveDict.get(point);

            let endCurve = CurveObj.endCurve;
            CurveObj.startCurve = null; // 删除曲线及其相关的点

            let startCurveObj = this._pointCurveDict.get(endCurve.start);

            startCurveObj.startCurve = null;

            for (const key in endCurve) {
              if (key == "start") continue;
              const _point = endCurve[key];

              this._pointCurveDict.delete(_point);

              _point.destroy();
            } // pointCurveDict.delete(endCurve.control)
            // endCurve.control.destroy();


            this.deleteCurveFromBezierLists(endCurve);
          }
        } // 从曲线列表删除曲线


        deleteCurveFromBezierLists(curve) {
          for (var i = 0, len = this._bezierCurveLists.length; i < len; i++) {
            const _curve = this._bezierCurveLists[i];

            if (_curve === curve) {
              this._bezierCurveLists.splice(i, 1);

              return;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af0874170cb09dfd37ba45b704bee75c2ed11155.js.map