
import { _decorator, Component, Node, PhysicsSystem, geometry, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RaycastClosest')
export class RaycastClosest extends Component {
    // 检测点 1
    @property(Node)
    cube1!: Node;
    // 检测点 2
    @property(Node)
    cube2!: Node;

    start () {
        // [3]

        let mask = (1<<2) | (1<<1);
        console.log(mask);
        const pos1 = this.cube1.position;
        const pos2 = this.cube2.position;
        const pos3 = new Vec3();
        pos3.x = pos2.x - pos1.x;
        pos3.y = pos2.y - pos1.y;
        pos3.z = pos2.z - pos1.z;

        console.log(pos1,pos2);
        // cube1本身，去检查cube2，所以起点为cube1 终点为cube2, Ray的3,4,5参数为方向(终点坐标向量-起点坐标向量)
        let ray = new geometry.Ray(pos1.x, pos1.y, pos1.z, pos3.x, pos3.y, pos3.z);
        var physys = PhysicsSystem.instance;
        var maxdistance = 10000;
        const result = physys.raycastClosest(ray, mask, maxdistance, false);
        console.log("检测结果:",result); // 如果是true则存在碰撞体，如果是false则不存在碰撞体
    }
}
