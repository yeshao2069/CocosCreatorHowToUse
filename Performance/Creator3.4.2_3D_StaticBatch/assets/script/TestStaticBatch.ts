
import { _decorator, Component, Node, find, BatchingUtility, Toggle, resources, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TestStaticBatch')
export class TestStaticBatch extends Component {

    toggleEnable (toggle: Toggle) {
        let isChecked = toggle.isChecked;

        if (isChecked) {
            let node = find('islands/Normal')!;
            if (node) {
                node.destroyAllChildren();
            }

            resources.load('staticObj', (err: any, prefab: Prefab) => {
                if (err) {
                    console.log("load prefab staticObj err: ", err);
                    return;
                }

                let p = instantiate(prefab)!;
                p.parent = node;

                console.log(p);
            })
        } else {
            let node = find('islands/Normal')!;
            if (node) {
                node.destroyAllChildren();
            }
        }
    }

    toggleGrass (toggle: Toggle) {
        let isChecked = toggle.isChecked;

        if (isChecked) {
            let grassGroupNode = find('islands/Normal/staticObj/grassGroup')!;
            let islands = find('islands')!;

            let newNode = new Node('grass-static-node');
            newNode.parent = islands;
            BatchingUtility.batchStaticModel(grassGroupNode, newNode);

            console.log(newNode);
        } else {
            let node = find('islands/grass-static-node')!;
            if (node) {
                node.destroy();
            }
        }
    }

    toggleStone (toggle: Toggle) {
        let isChecked = toggle.isChecked;

        if (isChecked) {
            let stoneGroupNode = find('islands/Normal/staticObj/stoneGroup')!;
            let islands = find('islands')!;

            let newNode = new Node('stone-static-node');
            newNode.parent = islands;
            BatchingUtility.batchStaticModel(stoneGroupNode, newNode);

            console.log(newNode);
        } else {
            let node = find('islands/stone-static-node')!;
            if (node) {
                node.destroy();
            }
        }
    }

    toggleTree (toggle: Toggle) {
        let isChecked = toggle.isChecked;

        if (isChecked) {
            let treeGroupNode = find('islands/Normal/staticObj/treeGroup')!;
            let islands = find('islands')!;

            let newNode = new Node('tree-static-node');
            newNode.parent = islands;
            BatchingUtility.batchStaticModel(treeGroupNode, newNode);

            console.log(newNode);
        } else {
            let node = find('islands/tree-static-node')!;
            if (node) {
                node.destroy();
            }
        }
    }
}
