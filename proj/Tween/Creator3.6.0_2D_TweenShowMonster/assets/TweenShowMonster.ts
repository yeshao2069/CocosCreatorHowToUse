
import { _decorator, Component, Node, tween, Vec2, Vec3, Sprite, Color, UITransform, easing, Tween, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TweenShowMonster')
export class TweenShowMonster extends Component {

    @property([Node])
    nodes : Node[] = [];

    start () {
        let nodes = this.nodes;
        let posXArrs = [-300, -150, 0, 150, 300];

        for (let i = 0; i < nodes.length; i++) {
            let node = nodes[i];

            tween(node)
                .delay(0.5 + i * 0.2)
                .repeat(1000,
                    tween(node)
                        .set({ scale: new Vec3(10, 10, 10), 
                            position: new Vec3(0, 0, 0),
                            angle: 0 })
                        .parallel(
                            tween(node).to(1, { scale: new Vec3(1, 1, 1) }, { easing: 'quintInOut' }),
                            tween(node).to(2.5, { position: new Vec3(posXArrs[i], 0, 0) }, { easing: 'backOut' })
                        )
                        .delay(0.5)
                        .to(0.8, { angle: 360 }, { easing: 'cubicInOut' })
                        .delay(1)
                        .to(0.3, { scale: new Vec3(3, 3, 3) }, { easing: 'quintIn' })
                        .delay(1)
                ).start();

            tween(node.getComponent(UIOpacity))
                .delay(0.5 + i * 0.2)
                .repeat(1000,
                    tween(node.getComponent(UIOpacity))
                        .set({ opacity: 0 })
                        .parallel(
                            tween(node.getComponent(UIOpacity)).to(1, { opacity: 255 }, { easing: 'quintInOut' }),
                            tween(node.getComponent(UIOpacity)).delay(2.5)
                        )
                        .delay(0.5)
                        .delay(0.8)
                        .delay(1)
                        .to(0.3, { opacity: 0 }, { easing: 'quintIn' })
                        .delay(1)
                ).start();
        }
    }
}

