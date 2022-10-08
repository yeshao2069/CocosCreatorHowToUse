import { _decorator, Component, Camera, Sprite, Node, Slider, RenderTexture, tween, Quat, Vec3, UITransform, SpriteFrame, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraSample')
export default class CameraSample extends Component {
    @property(Camera)
    camera !: Camera;
    @property(Sprite)
    sp_camera !: Sprite;
    @property(Node)
    node_icon !: Node;
    @property(Slider)
    sl_scale !: Slider;
    @property(Slider)
    sl_h !: Slider;
    @property(Slider)
    sl_v !: Slider;

    onLoad() {
        let renderTex = new RenderTexture();
        let spCameraUITrans = this.sp_camera.node.getComponent(UITransform)!;
        renderTex.reset({
            width: spCameraUITrans.width,
            height: spCameraUITrans.height,
        });

        let spriteframe: SpriteFrame = this.sp_camera.spriteFrame!;
        let sp: SpriteFrame = new SpriteFrame();
        sp.reset({
            originalSize: spriteframe.originalSize,
            rect: spriteframe.rect,
            offset: spriteframe.offset,
            isRotate: spriteframe.rotated,
            borderTop: spriteframe.insetTop,
            borderLeft: spriteframe.insetLeft,
            borderBottom: spriteframe.insetBottom,
            borderRight: spriteframe.insetRight,
        });

        this.camera.targetTexture = renderTex;
        sp.texture = renderTex;
        this.sp_camera.spriteFrame = sp;

        // 无限旋转
        tween(this.node_icon).repeatForever(
            tween(this.node_icon).by(1, { angle: -90} )
        ).start();

        this.onSliderChange(this.sl_scale);
        this.onSliderChange(this.sl_h);
        this.onSliderChange(this.sl_v);
    }

    private onSliderChange(slider?: Slider) {
        switch (slider) {
            case this.sl_scale: {
                const zoomRatio = this.sl_scale.progress * 2;
                this.camera.orthoHeight = 320 * zoomRatio;   // 320是试验数据
                // this.sp_camera.node.scale = new Vec3(zoomRatio, zoomRatio, 1);
            break;
            }
            case this.sl_h: {
                let newCameraPos = this.camera.node.getPosition();
                newCameraPos.x = (this.sl_h.progress - 0.5) * this.node.getComponent(UITransform)!.width;
                this.camera.node.setPosition(newCameraPos);
            break;
            }
            case this.sl_v: {
                let newCameraPos = this.camera.node.getPosition();
                newCameraPos.y = (this.sl_v.progress - 0.5) * this.node.getComponent(UITransform)!.height;
                this.camera.node.setPosition(newCameraPos);
            break;
            }
        }
    }

    private updateSliderLabel (slider: Slider) {
        let label = slider.node.getChildByName('label')!.getComponent(Label)!;
        switch (slider) {
            case this.sl_scale: {
                label.string = 'Scale (' + Math.round(slider.progress * 100).toString() + "%)"
            break;
            }
            case this.sl_h: {
                label.string = 'x (' + Math.round(slider.progress * 100).toString() + "%)"
            break;
            }
            case this.sl_v: {
                label.string = 'y (' + Math.round(slider.progress * 100).toString() + "%)"
            break;
            }
        }
    }
}
