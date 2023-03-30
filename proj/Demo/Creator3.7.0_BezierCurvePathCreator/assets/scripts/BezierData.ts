import { _decorator, Vec2, instantiate, Label, Prefab, Node, view, Vec3 } from 'cc';
import { Bezier } from './Bezier';
import { Ident } from './Enums';
const { ccclass, property } = _decorator;

ccclass('BezierData')
export class BezierData {
    // point预制体
    _pointPrefab !: Prefab;
    _controlPrefab !: Prefab;
    // 贝塞尔曲线列表
    _bezierCurveLists : any[] = [];
    // 曲线点列表
    _bezierCurveData : any = {
        time: 2,//运行总时长
        length: 0,//曲线总长
        points: [],//曲线点列表
    }
    // 点 - 曲线 字典
    _pointCurveDict = new Map();
    // 需要删除的目标节点
    _deleteTarget !: Node;
    // 点计数
    _PointNum = 0;
    // 父节点
    _pointParent !: Node;
    // 曲线类型
    _currentBezierType : number = 2;
    // 每段曲线的切割分数
    _pointCount : number = 100;
    // 画板分辨率
    _resolution = {
        width: 1280,
        height: 720
    }

    // 初始化
    init (point: Prefab, control: Prefab, parent: Node) {
        this.clearAllBezier()
        this._pointPrefab = point;
        this._controlPrefab = control;
        this._pointParent = parent;
        this.initRandCurve();
    }

    // 设置曲线切割份数
    setPointCount (num: number) {
        this._pointCount = num;
    }
    // 设置曲线类型
    setBezierCurveType (type: number) {
        this._currentBezierType = type;
    }
    // 获取曲线类型
    getBezierCurveType () {
        return this._currentBezierType;
    }
    // 设置删除的目标节点
    setDeleteTarget (node: Node) {
        this._deleteTarget = node;
    }
    // 添加贝塞尔曲线到列表
    addBezierCurve (curve: any) {
        this._bezierCurveLists.push(curve);
    }
    // 获取贝塞尔曲线列表
    getBezierCurveLists () {
        return this._bezierCurveLists;
    }
    // 获取贝塞尔曲线数据
    getBezierCurveData () {
        return this._bezierCurveData;
    }
    // 设置贝塞尔曲线运行时长
    setBezierCurveRunTime (time: number) {
        this._bezierCurveData.time = time;
    }
    // 是否是最后一个曲线
    isLastCurve () {
        return this._bezierCurveLists.length <= 1;
    }

    // 获取分辨率
    getResolution () {
        return this._resolution;
    }

    // 设置分辨率
    setResolution (width: number, height: number) {
        this._resolution = {
            width : width,
            height : height,
        };
        return this._resolution;
    }

    // 创建二阶贝塞尔曲线
    createCurve (pos: Vec3) {
        let end = this.createPoint(Ident.point, pos);
        let control = this.createPoint(Ident.control, pos);
        // 把曲线列表最后一个点作为新曲线起点
        let start = this._bezierCurveLists[this._bezierCurveLists.length - 1].end;
        let curve = { start, control, end }
        this._bezierCurveLists.push(curve);
        this.saveToPointCurveDict(curve);
        console.log("bezierLists->", this._bezierCurveLists)
    }

    // 创建三阶贝塞尔曲线
    createThirdOrderCurve (pos: Vec3) {
        // 把曲线列表最后一个点作为新曲线起点
        let start = this._bezierCurveLists[this._bezierCurveLists.length - 1].end;
        let end = this.createPoint(Ident.point, pos);
        let control2 = this.createPoint(Ident.control, pos);
        //计算偏移点
        let c1pos = new Vec3(200, 200, 0).add(start.position);
        c1pos.x = Math.min(this._resolution.width/2, c1pos.x);
        c1pos.y = Math.min(this._resolution.height/2, c1pos.y);
        let control1 = this.createPoint(Ident.control, c1pos, false);

        let curve = { start, control1, control2, end }
        this._bezierCurveLists.push(curve);
        this.saveToPointCurveDict(curve);
        console.log("bezierLists->", this._bezierCurveLists)
    }

    // 存储到曲线字典
    // key - 点, value - 该点所关联的曲线对象Obj, 
    // 曲线对象Obj: start字段 为 该点作为起点所在的曲线,  control end类似
    saveToPointCurveDict (curve: any) {
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
    }

    // 删除节点
    deletePoint () {
        if (this._pointCurveDict.has(this._deleteTarget)) {
            let location = this.getPointLocation(this._deleteTarget)
            if (location == "center") {
                this.deleteCenterPoint(this._deleteTarget);
            } else if (location == "start") {
                this.deleteStartPoint(this._deleteTarget);
            } else if (location == "end") {
                this.deleteEndPoint(this._deleteTarget);
            }
        }
    }

    // 保存路径
    saveBezierPath () {
        this._bezierCurveData.length = 0;
        this._bezierCurveData.points = [];
        console.log("保存路径bezierLists", this._bezierCurveLists);
        for (var i = 0, len = this._bezierCurveLists.length; i < len; i++) {
            const bezier = this._bezierCurveLists[i];
            // 创建一个贝塞尔曲线
            // let bezierCurve = new Bezier(bezier.start, bezier.control, bezier.end, 100);
            // console.log("consscscds", Object.values(bezier));

            let bezierCurve = new Bezier();
            bezierCurve.init((Object as any).values(bezier), 2);

            // 获取曲线点
            let points = bezierCurve.getPoints(this._pointCount);
            console.log("consscscds", this._pointCount);

            // 获取曲线长度
            let curveLength = bezierCurve.getCurveLength();
            // 计算路程长度
            this._bezierCurveData.length += curveLength;
            // 存储曲线点
            (this._bezierCurveData.points as any[]).push(...points);
            // console.log("points", points);
        }
        console.log("保存路径bezierCurveData", this._bezierCurveData);
        console.log("保存路径pointCurveDict->", this._pointCurveDict)
    }

    // 情况所有曲线
    clearAllBezier () {
        console.log("clearAllBezier");

        this._bezierCurveLists = [];
        this._pointCurveDict.forEach((curve,point) => {
            if (point)
                point.destroy();
        })
        this._pointCurveDict.clear();
    }

    // 创建新节点
    createPoint (ident: number, pos : any, isSelect = true) {
        let node;
        let name;
        if (ident == Ident.point) {
            node = instantiate(this._pointPrefab);
            (node as any).ident = Ident.point;
            name = "point";
        } else if (ident == Ident.control) {
            node = instantiate(this._controlPrefab);
            (node as any).ident = Ident.control;
            name = "control";
            if (isSelect) window['NodeEvents'].setMoveTargetNode(node);
        }
        let count = this._PointNum++;
        node = node as any;
        node.name = name + "_" + count;
        node.parent = this._pointParent;
        node.setPosition(pos);
        window['NodeEvents'].addPointDeleteEvents(node);
        window['NodeEvents'].addDragEvents(node);
        // 创建编号
        let num = new Node();
        num.parent = node;
        num.setPosition(num.position.x, 20, num.position.z);
        num.addComponent(Label).string = count.toString();
        return node;
    }

    getRandPos () {
        let randX = Math.random() * this._resolution.width - this._resolution.width * 0.5;
        let randY = Math.random() * this._resolution.height - this._resolution.height * 0.5;
        return new Vec3(randX, randY, 0);
    }
    // 初始化一个随机曲线
    initRandCurve () {
        let start = this.createPoint(Ident.point, this.getRandPos());
        let control = this.createPoint(Ident.control, this.getRandPos());
        let end = this.createPoint(Ident.point, this.getRandPos());
        window['NodeEvents'].setMoveTargetNode(null);
        let bezier = { start, control, end }
        this.addBezierCurve(bezier);
        this.saveToPointCurveDict(bezier);
    }

    // 判断该点是起点,终点或者中间点
    getPointLocation (node: any) {
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
    }

    // 删除的是中间点
    deleteCenterPoint (point: any) {
        console.warn("删除的是中间点");

        if (this._pointCurveDict.has(point)) {
            //中间点有前后两个曲线,删除该点就需要合并两个曲线（这里的方案是保留前面的曲线，删除后面的曲线）
            let CurveObj = this._pointCurveDict.get(point);
            let prevCurve = CurveObj.endCurve;
            let nextCurve = CurveObj.startCurve;
            // 把前一个曲线的终点移动到后一个曲线的终点上
            prevCurve.end = nextCurve.end;
            // 重新赋值该节点下的曲线对象的end曲线
            let prevEndCurveObj = this._pointCurveDict.get(prevCurve.end);
            prevEndCurveObj.endCurve = prevCurve;
            this._pointCurveDict.delete(point);
            // 删除后曲线相关的信息
            for (const key in nextCurve) {
                if (key == "end") continue;
                const _point = nextCurve[key];
                this._pointCurveDict.delete(_point)
                _point.destroy();
            }
            // pointCurveDict.delete(nextCurve.start)
            // pointCurveDict.delete(nextCurve.control)
            // nextCurve.start.destroy();
            // nextCurve.control.destroy();
            this.deleteCurveFromBezierLists(nextCurve);
        }
    }
    // 删除的是起点
    deleteStartPoint (point: any) {
        console.warn("删除的是起点");

        if (this._pointCurveDict.has(point)) {
            //找到该点关联的曲线
            let CurveObj = this._pointCurveDict.get(point);
            let startCurve = CurveObj.startCurve;
            CurveObj.endCurve = null;
            // 删除曲线及其相关的点
            let endCurveObj = this._pointCurveDict.get(startCurve.end);
            endCurveObj.endCurve = null;
            for (const key in startCurve) {
                if (key == "end") continue;
                const _point = startCurve[key];
                this._pointCurveDict.delete(_point)
                _point.destroy();
            }
            this.deleteCurveFromBezierLists(startCurve);
        }
    }
    // 删除的是终点
    deleteEndPoint (point: any) {
        console.warn("删除的是终点");
        if (this._pointCurveDict.has(point)) {
            let CurveObj = this._pointCurveDict.get(point);
            let endCurve = CurveObj.endCurve;
            CurveObj.startCurve = null;
            // 删除曲线及其相关的点
            let startCurveObj = this._pointCurveDict.get(endCurve.start);
            startCurveObj.startCurve = null;
            for (const key in endCurve) {
                if (key == "start") continue;
                const _point = endCurve[key];
                this._pointCurveDict.delete(_point)
                _point.destroy();
            }
            // pointCurveDict.delete(endCurve.control)
            // endCurve.control.destroy();
            this.deleteCurveFromBezierLists(endCurve);
        }
    }

    // 从曲线列表删除曲线
    deleteCurveFromBezierLists (curve: any) {
        for (var i = 0, len = this._bezierCurveLists.length; i < len; i++) {
            const _curve = this._bezierCurveLists[i];
            if (_curve === curve) {
                this._bezierCurveLists.splice(i, 1);
                return ;
            }
        }
    }
}
