import { _decorator, Component, Node, profiler, Label, SpriteFrame, Sprite, EditBox, EventTouch } from 'cc';
import { playerManager } from '../../fight/playerManager';
import { confirmBox } from './confirmBox';
import { constants } from '../../framework/util/constants';
const { ccclass, property } = _decorator;

@ccclass('mainUI')
export class mainUI extends Component {
    @property (playerManager)
    manager: playerManager = null!; 

    @property (Label)
    lbFps: Label = null!;

    @property (Label)
    lbDrawcall: Label = null!;

    @property (Label)
    lbInstancing: Label = null!;

    @property (Label)
    lbTriangle: Label = null!;

    @property (Label)
    lbGFXMem: Label = null!;

    @property (Label)
    lbGameLogic: Label = null!;

    @property (Label)
    lbArtTriangle: Label = null!;

    @property (Label)
    lbVertex: Label = null!;

    @property (Label)
    lbPeople: Label = null!;

    @property (SpriteFrame)
    imgOn: SpriteFrame = null!;

    @property(SpriteFrame)
    imgOff: SpriteFrame = null!;

    @property(Sprite)
    spInstacing: Sprite = null!;

    @property(Sprite)
    spShadow: Sprite = null!;

    @property(Sprite)
    spAliasing: Sprite = null!;

    @property(Node)
    nodeConfirmBox: Node = null!;

    @property(Label)
    lbVersion: Label = null!;
    
    @property(EditBox)
    numberInput: EditBox = null!;

    count: number = 0;
    curClickLogoTimes: number = 0;
    maxClickLogoTimes: number = 3;

    set enableInstancing (value: boolean) {
        this.manager.enableInstancing = value;

        this.spInstacing.spriteFrame = value ? this.imgOn : this.imgOff;
    }

    get enableInstancing () {
        return this.manager.enableInstancing;
    }

    set enableShadow (value: boolean) {
        this.manager.enableShadow = value;

        this.spShadow.spriteFrame = value ? this.imgOn : this.imgOff;
    }

    get enableShadow () {
        return this.manager.enableShadow;
    }

    shareGame (title: string, imageUrl: string) {
        // @ts-ignore
        if (!window.wx) {
            return;
        }

        // @ts-ignore
        window.wx.showShareMenu({
            withShareTicket: true,
            complete: ()=>{

            }
        });

        // @ts-ignore
        window.wx.onShareAppMessage(function () {
            // 用户点击了“转发”按钮
            return {
                title: title,
                imageUrl: imageUrl,
                
            };
        });
        
        // @ts-ignore
        var updateManager = window['wx'].getUpdateManager();
        updateManager.onUpdateReady(()=>{
            // @ts-ignore
            window['wx'].showModal({
                title: '温馨提示',
                content: '新的版本已经准备好, 请重新启动',
                success: (res: any)=>{
                    if (res.confirm) {
                        updateManager.applyUpdate();
                    }
                }
            })
        })
    }

    start () {
        // @ts-ignore
        if (window.cocosAnalytics) {
            // @ts-ignore
            window.cocosAnalytics.init({
                appID: "697959573",              // 游戏ID
                version: constants.VERSION,           // 游戏/应用版本号
                storeID: "wechat",     // 分发渠道
                engine: "cocos",            // 游戏引擎
            });
        }

        // Your initialization goes here.

        this.shareGame("更多精彩游戏等你来发现！", "https://res.592you.com/game-shares/cake/imgs/40.jpg");

        if (!profiler._stats) {
            console.log('showStats');
            profiler.showStats();
        }

        //@ts-ignore
        // if (profiler._rootNode) {
        //     //@ts-ignore
        //     profiler._rootNode.active = false;
        // }
        
        this.lbVersion.string = 'Version: ' + constants.VERSION;

        this.updateSwitch();

        if (this.manager) {
            this.manager.onPeopleNumChanged = this.onPeopleNumberChanged.bind(this);
        }
    }

    updateSwitch () {
        this.spShadow.spriteFrame = this.enableShadow ? this.imgOn : this.imgOff;

        this.spInstacing.spriteFrame = this.enableInstancing ? this.imgOn : this.imgOff;

        this.spAliasing.spriteFrame = this.manager.enableAntiAliasing ? this.imgOn : this.imgOff;
    }

    onBtnAddClick () {
        this.manager.addPlayerGroup();
    }

    onBtnResetClick () {
        this.manager.resetPlayer();
        this.curClickLogoTimes = 0;
    }

    onBtnReduceClick () {
        //减人
        this.manager.reducePlayer();
    }

    onLogoClick () {
        this.curClickLogoTimes += 1;
        if (this.curClickLogoTimes === this.maxClickLogoTimes) {
            this.manager.addDancer();
        }
    }

    switchInstancing () {
        // this.spInstacing.spriteFrame

        this.enableInstancing = !this.enableInstancing;
    }

    switchAliasing () {
        //跳出提示框
        let str = this.manager.enableAntiAliasing ? '关闭' : '开启';

        this.nodeConfirmBox.getComponent(confirmBox)!.show(`${str}抗锯齿需要重启游戏`, ()=>{
            this.manager.enableAntiAliasing = !this.manager.enableAntiAliasing;
        }, ()=>{

        });

        this.nodeConfirmBox.active = true;
    }

    switchShadow () {
        this.enableShadow = !this.enableShadow;
    }

    onNumberInputEnd() {
        const num = Number.parseInt(this.numberInput.string);
        this.manager.updatePlayerNumber(num);
    }

    onNumberClick (evt: EventTouch, data: string) {
        const num = Number.parseInt(data);
        this.manager.updatePlayerNumber(num);
    }

    onPeopleNumberChanged(num: number) {
        if (this.numberInput) {
            this.numberInput.string = num.toString();
        }
    }

    update (deltaTime: number) {
        // Your update function goes here.
        this.count++;
        if (this.count > 10 && profiler._stats) {
            this.count = 0;

            //fps
            this.lbFps.string = Math.round(profiler._stats.fps.counter.value).toString();
            
            //drawcall
            this.lbDrawcall.string = profiler._stats.draws.counter.value.toString();
            this.lbInstancing.string = profiler._stats.instances.counter.value.toString();
            this.lbTriangle.string = profiler._stats.tricount.counter.value.toString();
            this.lbGFXMem.string = profiler._stats.textureMemory.counter.value.toFixed(1).toString();
            this.lbGameLogic.string = profiler._stats.logic.counter.value.toFixed(2).toString();
            this.lbArtTriangle.string = this.manager.artTriangle.toString();
            this.lbVertex.string = this.manager.artVertex.toString();
            this.lbPeople.string = this.manager.people.toString();
        }

        
        
        //
    }

    onDestroy() {
        // @ts-ignore
        if (profiler._rootNode) {
            // @ts-ignore
            profiler._rootNode.active = true;
        }
    }
}
