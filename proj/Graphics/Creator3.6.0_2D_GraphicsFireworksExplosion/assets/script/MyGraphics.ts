import { _decorator, Component, Graphics, Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MyGraphics')
export default class MyGraphics extends Component {
    public paint !: Graphics;
    public startX: number = 0;
    public startY: number = 0;
    public endX: number = 0;
    public endY: number = 0;

    start() {
        this.paint = this.node.getComponent(Graphics)!;
    }

    /**
     * 火箭轨迹
     * @param startNode 开始的节点 
     * @param endNode  结束的节点
     */
    public setLine(p0x: number, p0y: number, p1x: number, p1y: number, color: Color, width: number) {
        this.paint.strokeColor = color;
        this.paint.lineWidth = width;
        this.paint.moveTo(p0x, p0y);
        this.paint.lineTo(p1x, p1y);
        this.paint.quadraticCurveTo((p1x - p0x) / 2, p1y, p1x, p1y);
        this.paint.stroke();
    }

    update(dt: number) {
        this.paint.clear();
        this.setLine(this.startX, this.startY, this.endX, this.endY, new Color(255, 147, 145, 255), 50);
        if (this.endX < 500) this.endX += 1;
        if (this.endY < 500) this.endY += 1;
    }
}