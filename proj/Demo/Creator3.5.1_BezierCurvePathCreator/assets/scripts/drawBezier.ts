import { _decorator, Component, Node, Prefab, Label, Color,Graphics, EditBox, EventMouse, UITransform, Size, sys, Vec3, tween } from 'cc';
import { Ident } from './Enums';
const { ccclass, property } = _decorator;

@ccclass('DrawBezier')
export class DrawBezier extends Component {
    @property(Node)
    public graphicsNode !:Node;
    @property(Node)
    public box !:Node;
    @property(Prefab)
    public point !:Prefab;
    @property(Prefab)
    public control !:Prefab;
    @property
    public bezierColor : Color = new Color(255, 0, 0);
    @property
    public lineColor : Color = new Color(0, 255, 255);
    @property(Node)
    public infoWindow !:Node;
    @property(Node)
    public paper !:Node;
    @property(Node)
    public msg !:Node;
    @property(Label)
    public timeInfo !:Label;
    @property(Node)
    public deleteBtn !:Node;
    @property(Label)
    public mouseLocation !:Label;

    notice !: Label;
    fileInputBox !: EditBox;
    moveBtn !: Node;
    smoothnessInputBox !: EditBox;
    runTimeInputBox !: EditBox;
    resolutionWidthInputBox !: EditBox;
    resolutionHeightInputBox !: EditBox;
    ctx !: Graphics;


    isStartRun : boolean =  false;
    resolution : any = {};
    prveRunTime : number = 0;
    prvePointCount : number = 0;
    currentRunTime : number = 0;
    actionLists : any[] = [];

    onLoad () {
        this.init();
        window['EventListener'].on("setMouseLocation", this.setMouseLocation.bind(this));
        window['EventListener'].on("showDeleteBtn", this.showDeleteBtn.bind(this));
        window['EventListener'].on("hideDeleteBtn", this.hideDeleteBtn.bind(this));
    }

    init () {
        this.infoWindow.getComponent(UITransform)!.priority = 10;
        this.notice = this.infoWindow.getChildByName("notice")!.getComponent(Label)!;
        this.fileInputBox = this.infoWindow.getChildByName("Input")!.getChildByName("fileEditBox")!.getComponent(EditBox)!;
        let controlPanel = this.node.getChildByName("controlPanel")!;
        this.moveBtn = controlPanel.getChildByName("moveBtn")!;
        this.smoothnessInputBox = controlPanel.getChildByName("smoothnessInput")!.getChildByName("EditBox")!.getComponent(EditBox)!;
        this.runTimeInputBox = controlPanel.getChildByName("runTimeInput")!.getChildByName("EditBox")!.getComponent(EditBox)!;
        this.resolutionWidthInputBox = controlPanel.getChildByName("resolution")!.getChildByName("width")!.getComponent(EditBox)!;
        this.resolutionHeightInputBox = controlPanel.getChildByName("resolution")!.getChildByName("height")!.getComponent(EditBox)!;
        this.initGraphics();
        this.initNodeEvents();
        this.hideInfoWindow();
        this.addDeleteBtnEvents();
        this.initResolution();
        // @ts-ignore
        window['BezierData'].init(this.point, this.control, this.node);
        // @ts-ignore
        window['BezierData'].setBezierCurveRunTime(Number(this.runTimeInputBox.string));
        // @ts-ignore
        window['BezierData'].saveBezierPath();
    }

    update (dt: any) {
        // @ts-ignore
        window['NodeEvents'].setOperateStatus(!this.deleteBtn.active);
        this.drawBezierAll();
        if (this.isStartRun) {
           this.setCountTimeLabel(dt);
        }
    }

    initResolution () {
        // @ts-ignore
        this.resolution = window['BezierData'].getResolution();
        this.resolutionWidthInputBox.string = this.resolution.width;
        this.resolutionHeightInputBox.string = this.resolution.height;
        this.setPaperSize();
    }

    initGraphics () {
        this.ctx = this.graphicsNode.getComponent(Graphics)!;
        this.ctx.lineWidth = 2;
    }

    initNodeEvents () {
        // @ts-ignore
        window['NodeEvents'].addCanvasTouchEvents();
        (this.box as any).ident = Ident.window;
        (this.moveBtn as any).ident = Ident.window;
        (this.moveBtn!.parent as any).ident = Ident.window;
        // @ts-ignore
        window['NodeEvents'].addDragEvents(this.box);
        // @ts-ignore
        window['NodeEvents'].addDragEvents(this.moveBtn, this.moveBtn.parent!);
        this.addHideEvents(this.moveBtn.parent)
    }

    drawBezierAll () {
        this.ctx.clear();
        // @ts-ignore
        let bezierLists = window['BezierData'].getBezierCurveLists();
        for (var i = 0, len = bezierLists.length; i < len; i++) {
           const curve = bezierLists[i];
           let n = Object.keys(curve).length;
           if (n == 3) {
               this.drawBezier(
                   curve.start.position,
                   curve.control.position,
                   curve.end.position
                );
           }
           if (n == 4) {
               this.drawThirdOrderBezier(
                   curve.start.position,
                   curve.control1.position,
                   curve.control2.position,
                   curve.end.position
                );
           }
        }
    }

    drawBezier (sPos: Vec3, cPos: Vec3, ePos: Vec3) {
        // 因为坐标转换问题，需要在原本保存的节点坐标进行处理
        const startPos = sPos.clone();
        const controlPos = cPos.clone();
        const endPos = ePos.clone();
        let addSize = new Size();
        startPos.set(startPos.x+addSize.width/2, startPos.y+addSize.height/2, startPos.z);
        controlPos.set(controlPos.x+addSize.width/2, controlPos.y+addSize.height/2, controlPos.z);
        endPos.set(endPos.x+addSize.width/2, endPos.y+addSize.height/2, endPos.z);

        this.ctx.moveTo(startPos.x, startPos.y);
        this.ctx.strokeColor = this.bezierColor;
        this.ctx.quadraticCurveTo(controlPos.x, controlPos.y, endPos.x, endPos.y);
        this.ctx.stroke();
        this.ctx.moveTo(endPos.x, endPos.y);
        this.ctx.strokeColor = this.lineColor;
        this.ctx.lineTo(controlPos.x, controlPos.y);
        this.ctx.stroke();
    }

    drawThirdOrderBezier (sPos: Vec3, cPos1: Vec3, cPos2: Vec3, ePos: Vec3) {
        // 因为坐标转换问题，需要在原本保存的节点坐标进行处理
        const startPos = sPos.clone();
        const controlPos1 = cPos1.clone();
        const controlPos2 = cPos2.clone();
        const endPos = ePos.clone();
        let addSize = new Size();
        startPos.set(startPos.x+addSize.width/2, startPos.y+addSize.height/2, startPos.z);
        controlPos1.set(controlPos1.x+addSize.width/2, controlPos1.y+addSize.height/2, controlPos1.z);
        controlPos2.set(controlPos2.x+addSize.width/2, controlPos2.y+addSize.height/2, controlPos2.z);
        endPos.set(endPos.x+addSize.width/2, endPos.y+addSize.height/2, endPos.z);

        this.ctx.moveTo(startPos.x, startPos.y);
        this.ctx.strokeColor = this.bezierColor;
        this.ctx.bezierCurveTo(controlPos1.x, controlPos1.y, controlPos2.x, controlPos2.y, endPos.x, endPos.y);
        this.ctx.stroke();
        this.ctx.moveTo(startPos.x, startPos.y);
        this.ctx.strokeColor = this.lineColor;
        this.ctx.lineTo(controlPos1.x, controlPos1.y);
        this.ctx.stroke();
        this.ctx.moveTo(endPos.x, endPos.y);
        this.ctx.lineTo(controlPos2.x, controlPos2.y);
        this.ctx.stroke();
    }

    addHideEvents (node: any) {
        node.on(Node.EventType.MOUSE_MOVE, (evt: any) => {
           this.hideMouseLocation()
        })
    }

    convertToNodeSpace (event: any) {
        return this.node.getComponent(UITransform)!.convertToNodeSpaceAR(event.getUILocation());
    }

    addDeleteBtnEvents () {
        this.deleteBtn.on(Node.EventType.MOUSE_DOWN, (evt: any) => {
            evt.stopPropagation();
           if (evt.getButton() == EventMouse.BUTTON_LEFT) {
               // @ts-ignore
               if (window['BezierData'].isLastCurve()) {
                   this.showMsg("不能删除最后一个曲线!!");
                   return;
               }
               this.hideDeleteBtn();
               // @ts-ignore
               window['BezierData'].deletePoint();//删除坐标点
               // @ts-ignore
               window['BezierData'].saveBezierPath();//保存坐标点
           }
        })
    }

    save () {
        if (this.fileInputBox.string == "") {
           this.setNoitce("文件名不能为空!");
           return
        }
        this.setNoitce('');
        this.computeBezierActions();
        this.saveBezierPathToJson(this.fileInputBox.string);
    }

    saveBezierPathToJson (name: any) {
        if (sys.isBrowser) {
            // @ts-ignore
           let datas = JSON.stringify(window['BezierData'].getBezierCurveData());
           var textFileAsBlob = new Blob([datas], { type: 'application/json' });
           var downloadLink = document.createElement("a");
           downloadLink.download = name;
           downloadLink.innerHTML = "Download File";
           if (window.webkitURL != null) {
               downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
           }
           else {
               downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
               // @ts-ignore
               downloadLink.onclick = destroyClickedElement;
               downloadLink.style.display = "none";
               document.body.appendChild(downloadLink);
           }
           downloadLink.click();
        }
    }

    computeBezierActions () {
        // @ts-ignore
        let bezierCurveData = window['BezierData'].getBezierCurveData();
        this.actionLists = [];
        for (var i = 0, len = bezierCurveData.points.length; i < len; i++) {
           const point = bezierCurveData.points[i];
           let time = point.length / bezierCurveData.length * bezierCurveData.time;
           point.time = time;
           let toAction = {
               time : time,
               pos : new Vec3(point.x, point.y, 0)
           }
           this.actionLists.push(toAction);
        }
    }

    playMoveAnimation () {
        this.computeBezierActions();
        this.startCountTime();

        const t = tween(this.box);
        for(var i=0; i<this.actionLists.length; i++){
            let time = this.actionLists[i].time;
            let pos = this.actionLists[i].pos;
            t.to(time, {position: pos});
        }
        t.call(()=>{
            this.stopCountTime();
            console.timeEnd("time");
        }).start();
    }

    setResolution (str: any, event: any, ident: any) {
        console.log(str, event, ident);
        let num = Number(str);
        if (str == "" || isNaN(num)) {
           this.showMsg("分辨率只能填写数字！！！");
           event.string = this.resolution[ident];
           return
        }
        this.resolution[ident] = num;
        // @ts-ignore
        window['BezierData'].setResolution(this.resolution.width, this.resolution.height);
        this.setPaperSize();
        // @ts-ignore
        window['BezierData'].init(this.point, this.control, this.node);
    }

    setPaperSize () {
        let paperSize = new Size(this.resolution.width, this.resolution.height);
        this.paper.getComponent(UITransform)!.setContentSize(paperSize);
    }

    setRunTime (str: any) {
        let num = Number(str);
        if (str == "" || isNaN(num)) {
           this.showMsg("运行时间只能填写数字！！！");
           this.runTimeInputBox.string = (this.prveRunTime || 2).toString();
           return
        }
        this.prveRunTime = num;
        // @ts-ignore
        window['BezierData'].setBezierCurveRunTime(num);
    }

    setCurveSmoothness (str: any) {
        console.log(str);
        let num = Number(str);
        if (str == "" || isNaN(num)) {
           this.showMsg("曲线平滑度只能填写数字！！！");
           this.smoothnessInputBox.string = (this.prvePointCount || 100).toString();
           return
        }
        if (num < 0 || num > 1000) {
           this.showMsg("曲线平滑度取值范围在 0 - 1000！");
           this.smoothnessInputBox.string = (this.prvePointCount || 100).toString();
           return
        }
        this.prvePointCount = num;
        // @ts-ignore
        window['BezierData'].setPointCount(num);
    }

    play () {
        // @ts-ignore
        window['BezierData'].saveBezierPath();//保存坐标点
        this.playMoveAnimation()
    }

    showInfoWindow () {
        this.infoWindow.active = true;
        this.setNoitce('');
    }

    hideInfoWindow () {
        this.infoWindow.active = false;
    }

    setNoitce (str: any) {
        this.notice.string = str;
    }

    showMsg (msg: any) {
        this.msg.active = true;
        this.msg.getComponent(Label)!.string = msg
        setTimeout(() => {
           if (this.msg) {
               this.msg.active = false;
           }
        }, 1000);
    }

    startCountTime () {
        this.isStartRun = true;
        this.timeInfo.string = '0';
        this.currentRunTime = 0;
    }

    stopCountTime () {
        this.isStartRun = false;
    }

    setCountTimeLabel (dt: any) {
        this.currentRunTime = this.currentRunTime + dt;
        this.timeInfo.string = "run time: " + this.currentRunTime.toFixed(2) + "s";
    }

    showDeleteBtn (pos: any) {
        this.deleteBtn.active = true;
        this.deleteBtn.setPosition(pos);
    }

    hideDeleteBtn () {
        this.deleteBtn.active = false;
    }

    setMouseLocation (pos: any) {
        this.mouseLocation.node.active = true
        this.mouseLocation.node.setPosition(pos);
        this.mouseLocation.string = `x:${pos.x.toFixed(0)} y:${pos.y.toFixed(0)}`;
    }

    hideMouseLocation () {
        this.mouseLocation.node.active = false;
    }

    setCurveType (event: any) {
        console.log(event);
        // @ts-ignore
        window['BezierData'].setBezierCurveType(event.node._name)
    }

}
