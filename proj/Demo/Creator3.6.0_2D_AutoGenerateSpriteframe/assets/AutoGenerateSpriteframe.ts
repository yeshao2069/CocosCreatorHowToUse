
import { _decorator, Component, Node, UITransform, Layers, Texture2D, ImageAsset, SpriteFrame, Sprite, Color} from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('AutoGenerateSpriteframe')
export class AutoGenerateSpriteframe extends Component {
    
    @property(Node)
    uiNode !: Node;

    start () {
        let aNode = new Node();
        aNode.name = 'new A';
        let a = aNode.addComponent(UITransform);
        a.setContentSize(100, 100);
        aNode.layer = Layers.Enum.UI_2D;
        this.uiNode.addChild(aNode);

        let sprite = aNode.addComponent(Sprite);
        sprite.spriteFrame = this.genSpriteFrame(100, 100, new Color(255, 0, 0, 255));
    }

    /**
     * 生成精灵帧
     * @param width 宽
     * @param height 高
     * @param color 颜色
     * @returns sprite frame
     */
    genSpriteFrame (width:number, height: number, color: Color = new Color(255, 255, 255, 255)) {
        const data: Uint8Array = new Uint8Array(width * height * 4);
        for (let i = 0; i < data.byteLength / 4; i++) {
            //R
            data[i * 4 + 0] = color.r;
            //G
            data[i * 4 + 1] = color.g;
            //B
            data[i * 4 + 2] = color.b;
            //A
            data[i * 4 + 3] = color.a;
        }
    
        const image = new ImageAsset();
        image.reset({
            _data: data,
            _compressed: false,
            width: width, 
            height: height,
            format: Texture2D.PixelFormat.RGBA8888
        });

        const texture = new Texture2D()
        texture.image = image;
        
        const spf = new SpriteFrame();
        spf.texture = texture;

        // 动态生成的纹理，不能参与动态图集
        spf.packable = false;

        return spf;
    }
}

