import { find, game, _decorator, Node, EventMouse, UITransform, UIOpacity, Vec3 } from 'cc';
import { BezierCurveType, Ident } from './Enums';
const { ccclass, property } = _decorator;

ccclass('NodeEvents')
export class NodeEvents {
    //移动目标节点
    moveTargetNode !: Node;
    isMouseDown = false;
    isOperate = true;

    // 屏幕坐标转换到节点坐标
    convertToNodeSpace (evt: any) {
        let pos = evt.getUILocation();
        let tempPos = new Vec3(pos.x, pos.y, 0);
        return find("Canvas")!.getComponent(UITransform)!.convertToNodeSpaceAR(tempPos);
    }

    // 是否能删除
    isDelete (node: any) {
        return node.ident == Ident.point;
    }

    // 是否在绘制区域
    atDrawingArea(pos: Vec3) {
        let resolution = window['BezierData'].getResolution();
        let halfW = resolution.width / 2;
        let halfH = resolution.height / 2;

        return pos.x > -halfW && pos.x < halfW &&
            pos.y > -halfH && pos.y < halfH;
    }

    // 是否能拖拽
    isDragMove (mousePos: Vec3, target: any) {
        let flag = false;
        switch (target.ident) {
            case Ident.point:
            case Ident.control:
                flag = this.atDrawingArea(mousePos)
                break;
            case Ident.window:
                flag = true;

        }
        console.log(target.name, target.ident);

        return flag;
    }

    setMoveTargetNode (target: any) {
        this.moveTargetNode = target;
    }
    
    setOperateStatus (bol: boolean) {
        this.isOperate = bol;
    }

    // 添加拖拽事件
    addDragEvents (node: Node, target = node) {
        // 鼠标按下
        node.on(Node.EventType.MOUSE_DOWN, (event: any) => {
            event.propagationStopped = true;
            // 鼠标右键
            if (event.getButton() == EventMouse.BUTTON_LEFT /**&& _this.isOperate()**/) {
                this.moveTargetNode = target;
                this.isMouseDown = true;
            }
        });
        // 鼠标移动
        node.on(Node.EventType.MOUSE_MOVE, (evt: any) => {
            target.getComponent(UIOpacity)!.opacity = 100;
            game.canvas!.style.cursor = "all-scroll";
            //鼠标按下并且有指定目标节点
            if (this.isMouseDown && this.moveTargetNode) {
                //把屏幕坐标转换到节点坐标下
                let mousePos = this.convertToNodeSpace(evt);
                if (this.isDragMove(mousePos, this.moveTargetNode)){
                    this.moveTargetNode!.setPosition(mousePos);
                }
            }
        });

        // 鼠标离开
        node.on(Node.EventType.MOUSE_LEAVE, (evt: any) => {
            target.getComponent(UIOpacity)!.opacity = 255;
            game.canvas!.style.cursor = "auto";
        });

        // 鼠标抬起
        node.on(Node.EventType.MOUSE_UP, (evt: any) => {
            this.isMouseDown = false;
            this.moveTargetNode = null!;
            window['BezierData'].saveBezierPath();//保存坐标点
        });
    }

    // 添加节点的删除事件
    addPointDeleteEvents (node: Node) {
        // 鼠标按下
        node.on(Node.EventType.MOUSE_DOWN, (evt: any) => {
            // 鼠标右键
            if (evt.getButton() == EventMouse.BUTTON_RIGHT) {
                if (this.isDelete(evt.target)) {
                    let mousePos = this.convertToNodeSpace(evt);
                    // this.deleteTarget = event.target;
                    window['BezierData'].setDeleteTarget(evt.target);
                    window['EventListener'].emit("showDeleteBtn", mousePos);
                }
                return
            }
        });

    }

    // 添加Canvas节点事件
    addCanvasTouchEvents (canvasNode = find("Canvas")!) {
        let target;
        // 鼠标按下
        canvasNode.on(Node.EventType.MOUSE_DOWN, (evt: any) => {

            // 鼠标左键
            if (evt.getButton() == EventMouse.BUTTON_LEFT) {
                evt.propagationStopped = true;
                target = evt.target;
                //创建坐标点,需要先把屏幕坐标转换到节点坐标下
                let mousePos = this.convertToNodeSpace(evt);
                if (!this.atDrawingArea(mousePos))
                    return ;
                if (!this.isOperate){
                    window['EventListener'].emit("hideDeleteBtn", null);
                } 

                // 二阶
                if (window['BezierData'].getBezierCurveType() == BezierCurveType.SecondOrder) {
                    window['BezierData'].createCurve(mousePos);
                }
                // 三阶
                if (window['BezierData'].getBezierCurveType() == BezierCurveType.ThirdOrder) {
                    window['BezierData'].createThirdOrderCurve(mousePos);
                }
                this.isMouseDown = true;
            }
        });
        // 鼠标移动
        canvasNode.on(Node.EventType.MOUSE_MOVE, (evt: any) => {
            target = evt.target;
            //创建坐标点,需要先把屏幕坐标转换到节点坐标下
            let mousePos = this.convertToNodeSpace(evt);
            window['EventListener'].emit("setMouseLocation", mousePos);

            //鼠标按下并且有指定目标节点
            if (this.isMouseDown && this.moveTargetNode && this.isDragMove(mousePos, this.moveTargetNode)) {
                console.log("moveTargetNode.setPosition(mousePos);");
                this.moveTargetNode.setPosition(mousePos);
            }
        });
        // 鼠标抬起
        canvasNode.on(Node.EventType.MOUSE_UP, (evt: any) => {
            target = evt.target;
            this.isMouseDown = false;
            this.moveTargetNode = null!;
        });
    }

}
