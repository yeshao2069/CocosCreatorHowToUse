import { _decorator, Component, Node, CCFloat, MeshRenderer } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('anchor3D')
@executeInEditMode(true)
export class anchor3D extends Component {
    @property({ type: CCFloat, tooltip: "X-axis Anchor", slide: true, range: [0, 1, 0.1]})
    anchorX : number = 0.5;
    @property({ type: CCFloat, tooltip: "Y-axis Anchor", slide: true, range: [0, 1, 0.1]})
    anchorY : number = 0.5;
    @property({ type: CCFloat, tooltip: "Z-axis Anchor", slide: true, range: [0, 1, 0.1]})
    anchorZ : number = 0.5;

    @property({ type: Node, tooltip: "参考3d节点"})
    tempNode : Node;

    update() {
        const tempMesh = this.tempNode.getComponent(MeshRenderer).mesh;
        console.log("mesh data: ", tempMesh);

        const tempPos = this.tempNode.getPosition();
        console.log("position data: ", tempPos);

        const tempScale = this.tempNode.getScale();
        console.log("scale data: ", tempScale);

        const diffX = tempPos.x + (this.anchorX - 0.5) * tempScale.x;
        const diffY = tempPos.y + (this.anchorY - 0.5) * tempScale.y;
        const diffZ = tempPos.z + (this.anchorZ - 0.5) * tempScale.z;
        
        this.node.setPosition(diffX, diffY, diffZ);
    }
}