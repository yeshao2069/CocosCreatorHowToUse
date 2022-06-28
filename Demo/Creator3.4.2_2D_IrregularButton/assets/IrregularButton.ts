import { _decorator, Component, Node, Vec2, Color, EventTouch, UITransform, Vec3, Sprite } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('IrregularButton')
export default class IrregularButton extends Component {
    @property(Node)
    wrapper !: Node;

    childWposList: Vec3[] = [];

    start () {
        this.childWposList = this.wrapper.children.map((node: Node) => {
            return node.getComponent(UITransform)!.convertToWorldSpaceAR(new Vec3());
        });

        this.wrapper.on(Node.EventType.TOUCH_START, this.onTap, this);
    }

    onTap (e: EventTouch) {
        let touchPos = e.getUILocation();

        // 每个子节点与点击坐标的距离集合
        let dis_list: number[] = [];
        // 遍历所有子节点坐标得出与鼠标的距离然后升序排列
        let dis_list_sort = this.childWposList.map((wpos: Vec3) => {
            let tmpVec2 = new Vec2(wpos.x, wpos.y);
            let dis = tmpVec2.subtract(touchPos).lengthSqr();
            // 记录距离值
            dis_list.push(dis);
            return dis;
        }).sort((a, b) => a-b);

        // 获取排序最前面的索引
        let nearest_index = dis_list.indexOf(dis_list_sort[0]);


        // 颜色修改
        // 先全部恢复白色
        this.wrapper.children.forEach((node: Node) => {
            node.getComponent(Sprite)!.color = Color.WHITE;
        });
        // 设置目标颜色 红色
        this.wrapper.children[nearest_index].getComponent(Sprite)!.color = Color.RED;
    }
}