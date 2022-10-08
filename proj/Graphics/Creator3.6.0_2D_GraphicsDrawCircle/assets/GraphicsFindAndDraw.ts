
import { _decorator, Component, Node, Vec3, Graphics, EventTouch, view, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GraphicsFindAndDraw')
export class GraphicsFindAndDraw extends Component {
    
    @property(Node)
    aNode !: Node;
    @property(Node)
    bNode !: Node;
    @property(Node)
    cNode !: Node;

    tempPosVec3 = new Vec3();

    start () {
        this.aNode.on(Node.EventType.TOUCH_MOVE, this.onClickMove, this);
        this.bNode.on(Node.EventType.TOUCH_MOVE, this.onClickMove, this);
        this.cNode.on(Node.EventType.TOUCH_MOVE, this.onClickMove, this);

        // 初始化
        this.aNode.getChildByName("posLab")!.getComponent(Label)!.string = "("+this.aNode.position.x.toFixed(2)+","+this.aNode.position.y.toFixed(2)+")";
        this.bNode.getChildByName("posLab")!.getComponent(Label)!.string = "("+this.bNode.position.x.toFixed(2)+","+this.bNode.position.y.toFixed(2)+")";
        this.cNode.getChildByName("posLab")!.getComponent(Label)!.string = "("+this.cNode.position.x.toFixed(2)+","+this.cNode.position.y.toFixed(2)+")";
    }

    onClickMove (evt : EventTouch) {
        const localPos = evt.getUILocation();
        const viewRect = view.getVisibleSize();
        this.tempPosVec3.set(localPos.x-viewRect.width/2, localPos.y-viewRect.height/2);
        (evt.target as Node).setPosition(this.tempPosVec3);
        let tempStr = "("+this.tempPosVec3.x.toFixed(2)+","+this.tempPosVec3.y.toFixed(2)+")";
        (evt.target as Node).getChildByName("posLab")!.getComponent(Label)!.string = tempStr;
    }

    /**
     * 
     * @param p1 节点A的坐标
     * @param p2 节点B的坐标
     * @param p3 节点C的坐标
     * @returns {x,y,r}
     */
    findCircle(p1: Vec3, p2: Vec3, p3: Vec3){
        const pt1 = new Vec3();
        const pt2 = new Vec3();
        const center = new Vec3();

        pt1.set((p1.x+p2.x)/2, (p1.y+p2.y)/2, 0);
        pt2.set((p1.x+p3.x)/2, (p1.y+p3.y)/2, 0);

        var k1 = (p2.y == p1.y ? 1 : -(p2.x-p1.x) / (p2.y-p1.y));
        var k2 = (p3.y == p1.y ? 1 : -(p3.x-p1.x) / (p3.y-p1.y));
        center.set(
            (pt2.y - pt1.y - k2* pt2.x + k1*pt1.x) / (k1 - k2),
            pt1.y + k1*(pt2.y-pt1.y-k2*pt2.x + k2*pt1.x)/(k1-k2),
            0);
        var radius = Math.sqrt((center.x-p1.x)*(center.x-p1.x) + (center.y-p1.y)*(center.y-p1.y));
        return { center: center, radius: radius}
    }

    onClickDraw (){
        let info = this.findCircle(this.aNode.position, this.bNode.position, this.cNode.position);
        const g = this.getComponent(Graphics)!;
        g.lineWidth = 2;
        g.strokeColor.fromHEX('#FFFFFF');
        g.circle(info.center.x, info.center.y, info.radius);
        g.stroke();
    }

    onClickClear (){
        const g = this.getComponent(Graphics)!;
        g.clear();
    }
}
