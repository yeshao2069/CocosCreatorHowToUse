
import { _decorator, Component, Node, Camera, Vec3, UITransform, view, Quat, log } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('IsInViewTest')
export class IsInViewTest extends Component {
    @property(Node)
    capsuleSelf !: Node;

    @property(Node)
    cubeSelf !: Node;

    @property(Node)
    torusSelf !: Node;

    @property(Camera)
    mainCameraSelf !: Camera;

    @property(Node)
    nodeSelf !: Node;

    dir : Vec3 = new Vec3();

    update () {

        this.rotationAroundNode(this.capsuleSelf, this.cubeSelf.position, Vec3.UP, 1);
        this.capsuleSelf.lookAt(this.cubeSelf.position);

        this.rotationAroundNode(this.torusSelf, this.cubeSelf.position, Vec3.RIGHT, 1);
        this.torusSelf.lookAt(this.cubeSelf.position);
        
        if(this.IsInView(this.capsuleSelf.worldPosition)){
            console.log("Capsule is in view");
        }

        if(this.IsInView(this.torusSelf.worldPosition)){
            console.log("Torus is in view");
        }
    }

    rotationAroundNode(self : Node, pos : Vec3, axis : Vec3, angle : number) :Quat
    {
        let _quat=new Quat();
        let v1 = new Vec3();
        let v2 = new Vec3();
        let pos2:Vec3 = self.position;
        let rad = angle / 180 * Math.PI;
        //根据旋转轴和旋转弧度计算四元数
        Quat.fromAxisAngle(_quat,axis,rad);
        //相减，目标点与相机点之间的向量
        Vec3.subtract(v1,pos2,pos);
        //把向量dir根据计算到的四元数旋转，然后计算出旋转后的距离
        Vec3.transformQuat(v2,v1,_quat);
        self.position=Vec3.add(v2,pos,v2);
        //根据轴和弧度绕世界空间下指定轴旋转四元数
        Quat.rotateAround(_quat,self.rotation,axis,rad);
        return _quat;
    }


    IsInView(worldPos: Vec3) {
        var cameraPos = this.mainCameraSelf.node.getWorldPosition();
        const viewPos = this.mainCameraSelf.worldToScreen(worldPos);
        Vec3.normalize(this.dir, worldPos.subtract(cameraPos));
        const forward = this.mainCameraSelf.node.forward;
        var dot = Vec3.dot(forward, this.dir); 

        const viewportRect = view.getViewportRect();
        
        //判断物体是否在相机前面
        if (dot > 0
            // 判断物体是否在视窗内
            && (viewPos.x <= viewportRect.width) && (viewPos.x >= 0)
            && (viewPos.y <= viewportRect.height) && (viewPos.y >= 0))
            return true;
        else
            return false;
    }
}
