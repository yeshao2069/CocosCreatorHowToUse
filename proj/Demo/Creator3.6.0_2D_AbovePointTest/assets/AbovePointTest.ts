
import { _decorator, Component, Vec3, Size, rect, Graphics, Rect, size, Vec2, Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Typescript')
export class Typescript extends Component {

    start () {
        this.normalTest(); // 普通测试
        this.rotateTest(); // 旋转测试
    }

    normalTest () {
        // 绘制方块
        let rectPos = new Vec3(-250, 0, 0);
        let size = new Size(200, 200);
        let a = new Vec3(rectPos.x + size.width/2, rectPos.y + size.height/2, 0);
        let b = new Vec3(rectPos.x - size.width/2, rectPos.y + size.height/2, 0);
        let c = new Vec3(rectPos.x - size.width/2, rectPos.y - size.height/2, 0);
        let d = new Vec3(rectPos.x + size.width/2, rectPos.y - size.height/2, 0);
        this.drawRect(a, b, c, d);
        // 绘制测试点
        let point1 = new Vec3(-200, 100, 0);
        let point2 = new Vec3(-205, 6, 7);
        let point3 = new Vec3(-400, 0, 0);
        this.drawPoint(point1);
        this.drawPoint(point2);
        this.drawPoint(point3);

        console.log(" ------  normal test  -------");
        let p1Res = this.rectangleContainPoint(point1, size, rectPos);
        console.log('point1 pos->',point1, 'is Contain Result ->', p1Res);

        let p2Res = this.rectangleContainPoint(point2, size, rectPos);
        console.log('point2 pos->',point2, 'is Contain Result ->', p2Res);

        let p3Res = this.rectangleContainPoint(point3, size, rectPos);
        console.log('point3 pos->',point3, 'is Contain Result ->', p3Res);
    }

    rotateTest () {
        // 绘制方块
        let rectPos = new Vec3(250, 0, 0);
        let size = new Size(200, 200);
        let angle = 45;

        let radius = Math.PI / 180 * (angle);
        let getSin = parseFloat(Math.sin(radius).toFixed(3));
        let getCos = parseFloat(Math.cos(radius).toFixed(3));

        let a = new Vec3(rectPos.x + size.width/2, rectPos.y + size.height/2, 0);
        let b = new Vec3(rectPos.x - size.width/2, rectPos.y + size.height/2, 0);
        let c = new Vec3(rectPos.x - size.width/2, rectPos.y - size.height/2, 0);
        let d = new Vec3(rectPos.x + size.width/2, rectPos.y - size.height/2, 0);
        // 旋转前
        this.drawRect(a, b, c, d, new Color(100,100,100));

        let _ax = (a.x - rectPos.x) * getCos - (a.y - rectPos.y) * getSin + rectPos.x;
        let _ay = (a.y - rectPos.y) * getCos + (a.x - rectPos.x) * getSin + rectPos.y;
        a.set(_ax, _ay, 0);
        let _bx = (b.x - rectPos.x) * getCos - (b.y - rectPos.y) * getSin + rectPos.x;
        let _by = (b.y - rectPos.y) * getCos + (b.x - rectPos.x) * getSin + rectPos.y;
        b.set(_bx, _by, 0);
        let _cx = (c.x - rectPos.x) * getCos - (c.y - rectPos.y) * getSin + rectPos.x;
        let _cy = (c.y - rectPos.y) * getCos + (c.x - rectPos.x) * getSin + rectPos.y;
        c.set(_cx, _cy, 0);
        let _dx = (d.x - rectPos.x) * getCos - (d.y - rectPos.y) * getSin + rectPos.x;
        let _dy = (d.y - rectPos.y) * getCos + (d.x - rectPos.x) * getSin + rectPos.y;
        d.set(_dx, _dy, 0);

        this.drawRect(a, b, c, d);
        // 绘制测试点
        let point1 = new Vec3(300, 20, 0);
        let point2 = new Vec3(250, 0, 0);
        let point3 = new Vec3(400, 0, 0);
        this.drawPoint(point1);
        this.drawPoint(point2);
        this.drawPoint(point3);

        console.log(" ------  rotate test  -------");
        let p1Res = this.rectangleContainPointExt(point1, angle, size, rectPos);
        console.log('point1 pos->',point1, 'is Contain Result ->', p1Res);

        let p2Res = this.rectangleContainPointExt(point2, angle, size, rectPos);
        console.log('point2 pos->',point2, 'is Contain Result ->', p2Res);

        let p3Res = this.rectangleContainPointExt(point3, angle, size, rectPos);
        console.log('point3 pos->',point3, 'is Contain Result ->', p3Res);
    }

    /**
     * 
     * 检测矩形是否包含某个点
     * @param rectSize 矩形尺寸 宽&高
     * @param targetPos 目标点的坐标
     * @param rectPos 矩形的坐标
     * @return boolean 返回是否包含的boolean
     */
    rectangleContainPoint(targetPos: Vec3, rectSize: Size = new Size(), rectPos: Vec3 = new Vec3()) : boolean {
        // 计算边界值
        let leftX = rectPos.x - rectSize.width / 2; 
        let rightX = rectPos.x + rectSize.width / 2;
        let topY = rectPos.y + rectSize.height / 2;
        let bottomY = rectPos.y - rectSize.height / 2;

        let isContain = false; // 是否包含标志
        let tPosX = targetPos.x;
        let tPosY = targetPos.y;

        if(tPosX <= rightX && tPosX >= leftX && tPosY <= topY && tPosY >= bottomY) {
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
    rectangleContainPointExt(targetPos: Vec3, angle: number, rectSize: Size = new Size(), rectPos: Vec3 = new Vec3()) : boolean {
        // 计算边界值
        let leftX = rectPos.x - rectSize.width / 2; 
        let rightX = rectPos.x + rectSize.width / 2;
        let topY = rectPos.y + rectSize.height / 2;
        let bottomY = rectPos.y - rectSize.height / 2;

        let isContain = false; // 是否包含标志
        let tPosX = targetPos.x;
        let tPosY = targetPos.y;

        // 获取旋转后的坐标
        // b.x = a.x*cos(angle) - a.y*sin(angle)
        // b.y = a.x*sin(angle) + a.y*cos(angle)

        // 平面上一点x1,y1,绕平面上另一点x2,y2顺时针旋转θ角度 ，怎么求旋转后的x1,y1对应的坐标x，y
        // x=(x1-x2)cosθ-(y1-y2)sinθ+x2
        // y=(y1-y2)cosθ+(x1-x2)sinθ+y2

        let radius = Math.PI / 180 * (-angle);
        let getSin = parseFloat(Math.sin(radius).toFixed(3));
        let getCos = parseFloat(Math.cos(radius).toFixed(3));
        // console.log(getSin,getCos);
        let xOld = (tPosX - rectPos.x) * getCos - (tPosY - rectPos.y) * getSin + rectPos.x;
        let yOld = (tPosY - rectPos.y) * getCos + (tPosX - rectPos.x) * getSin + rectPos.y;

        // 思路: 将旋转的矩形转换成旋转前(angle=0°时)的矩形，然后把需要判断的节点也转换成旋转前的节点然后进行判断
        if(xOld <= rightX && xOld >= leftX && yOld <= topY && yOld >= bottomY) {
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
    drawRect (aPos: Vec3, bPos: Vec3, cPos: Vec3, dPos: Vec3, dColor: Color = Color.BLACK) {
        const g = this.node.getChildByName('draw')!.getComponent(Graphics)!;

        g.lineWidth = 5;
        // g.strokeColor.fromHEX('#000000');
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
    drawPoint (aPos: Vec3, radius: number = 5){
        const g = this.node.getChildByName('draw')!.getComponent(Graphics)!;

        g.lineWidth = 5;
        g.fillColor.fromHEX('#FF0000');
        g.strokeColor.fromHEX('#FF0000');
        g.circle(aPos.x, aPos.y, radius);
        g.stroke();
        g.fill();
    }
}
