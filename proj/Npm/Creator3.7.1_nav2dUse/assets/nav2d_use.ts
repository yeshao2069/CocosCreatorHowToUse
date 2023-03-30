import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('nav2d_use')
export class nav2d_use extends Component {

    @property(Label)
    showLabel !: Label;

    start() {
        // @ts-ignore
        const navmesh = new NavMesh([
            [[0, 0],[0, 12],[12, 0],],
            [[12, 8],[12, 4],[16, 6],],
            [[12, 0],[6, 6],[12, 6],],
            [[100, 100],[110, 100],[100, 110],[95, 107],[105, 102],],
        ]);

        const path = navmesh.findPath([1, 1], [14, 6]);
        this.showLabel.string = `[0, 0],[0, 12],[12, 0],\n` +
                                `[12, 8],[12, 4],[16, 6],\n` +
                                `[12, 0],[6, 6],[12, 6],\n` +
                                `[100, 100],[110, 100],[100, 110],[95, 107],[105, 102],\n` +
                                `find Path [1, 1], [14, 6] ,  result => ` + path;
    }
}

