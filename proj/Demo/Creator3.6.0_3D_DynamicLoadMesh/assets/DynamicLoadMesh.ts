
import { _decorator, Component, assetManager, MeshRenderer, Node, Mesh, Prefab, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DynamicLoadMesh')
export default class DynamicLoadMesh extends Component {

    @property(Node)
    testNode !: Node;
    @property(Prefab)
    testPrefab !: Prefab;
    @property(Label)
    uuidLabel !: Label;
    @property(Label)
    nameLabel !: Label;

    _prefabMeshUUIDS : string[] = []; // 记录FBX模型的mesh的uuid
    _prefabMeshNames : string[] = []; // 记录FBX模型的mesh的name

    start () {
        this.initConfig();
    }

    initConfig () {
        if (this.testPrefab) {
            const prefab = this.testPrefab
            const prefabData = prefab.data; // 获取到预制体的data数据
            if (!prefabData) return;
            const prefabChildren = prefabData.children; // 获取到预制体的子节点数组
            const prefabChildrenCount = prefabChildren.length;
            for (let i = 0; i < prefabChildrenCount; i++) {
                const node = prefabChildren[i];
                const name = node.name;

                // 手动剔除一些无用的 mesh
                if(name === 'Dice' || name === 'Dragon_Blank'){

                } else {
                    this._prefabMeshNames.push(name);

                    const mesh = node.getComponent(MeshRenderer)!.mesh;
                    const meshUUID = mesh['_uuid'];
                    this._prefabMeshUUIDS.push(meshUUID);
                }
                
                // console.log(name,meshUUID);
            }
        }
    }

    onClickRandom () {
        let index = Math.round(Math.random() * (this._prefabMeshUUIDS.length - 1));
        const uuid = this._prefabMeshUUIDS[index];
        const name = this._prefabMeshNames[index];
        console.log(index);
        assetManager.loadAny(uuid, (err: any, mesh: Mesh) => {
            if (err){
                console.log(err);
                return;
            }

            this.uuidLabel.string = '当前的UUID是:' + uuid;
            this.nameLabel.string = '当前的Mesh是:' + name;
            this.testNode.getComponent(MeshRenderer)!.mesh = mesh;
        })
    }
}
