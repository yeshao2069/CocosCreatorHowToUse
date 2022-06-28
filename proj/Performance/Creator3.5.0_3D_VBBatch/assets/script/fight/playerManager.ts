import { _decorator, Component, Node, Prefab, instantiate, Camera, Tween, Vec3, easing, game, CCString, profiler, SkinningModelComponent, sys } from 'cc';
import { player } from './player';
import { SubPackageManager } from '../framework/util/subPackageManager';
import ResManager from '../framework/util/resManager';
import { StorageManager } from '../framework/config/storageManager';
import { gameLogic } from '../framework/util/gameLogic';
import { constants } from '../framework/util/constants';
const { ccclass, property } = _decorator;

const CAMERA_MOVE_PER_PERSON = 100; //每多少人摄像机抬高一次

const ANTI_KEY = 'anti-aliasing';
const ARRNAME_KEY = 'arrName';

@ccclass('playerManager')
export class playerManager extends Component {
    arrModel: Prefab[] = [];
    arrName: string[] = [];
    vbbArrName: string[] = []; // 可以参与 VB 合批的模型数组
    allArrName: string[] = [];

    @property(Camera)
    mainCamera: Camera = null!;

    //美术的面数及顶点数
    artTriangle: number = 0;
    artVertex: number = 0;
    private _people: number = 0;
    get people() {
        return this._people;
    }
    set people(value: number) {
        this._people = value;
        if (this.onPeopleNumChanged) {
            this.onPeopleNumChanged(this._people);
        }
    }

    public onPeopleNumChanged: Function = null!;

    currentLevel: number = 0;
    tweenCamera: Tween;
    posCameraOrigin !: Vec3;

    isEnableVBB = false;

    private _prevPeopleRate: number = 0; //人数除以30等于多少倍

    set enableVBB (value: boolean) {
        this.isEnableVBB = value;

        this.node.children.forEach((nodePlayer)=>{
            let playerScript = nodePlayer.getComponent(player);
            if (playerScript) {
                playerScript.changeVBBatch(value);
            }
        })
    }

    get enableVBB () {
        return this.isEnableVBB;
    }

    isEnableShadow = true;

    set enableShadow (value: boolean) {
        this.isEnableShadow = value;

        this.node.children.forEach((nodePlayer)=>{
            let playerScript = nodePlayer.getComponent(player);
            if (playerScript) {
                playerScript.changeShadow(value);
            }
        })
    }

    get enableShadow () {
        return this.isEnableShadow;
    }

    isEnableAntiAliasing = false;

    set enableAntiAliasing (value: boolean) {
        this.isEnableAntiAliasing = value;

        StorageManager.instance.setGlobalData(ANTI_KEY, value);

        if (sys.isBrowser) {
            window.location.reload();
        } else if (sys.platform === sys.WECHAT_GAME) {
            console.log('reload!');
            // @ts-ignore
            window.wx.exitMiniProgram({
                complete: ()=>{
                    
                }
            });
        } else if (sys.isNative) {
            // @ts-ignore
            window.__restartVM();
        }
    }

    get enableAntiAliasing () {
        return this.isEnableAntiAliasing;
    }

    isEnableLowModel = false;

    set enableLowModel (value: boolean) {
        this.isEnableLowModel = value;
    }

    get enableLowModel () {
        return this.isEnableLowModel;
    }

    onLoad () {
        ResManager.resPath = 'model-animation/';
        StorageManager.instance.start();

        this.isEnableAntiAliasing = StorageManager.instance.getGlobalData(ANTI_KEY) || false;
    }

    start () {
        this.arrName = StorageManager.instance.getGlobalData(ARRNAME_KEY) || ["altman", "clown", "cocosWalk", "kulou", "shitouWalk", "soldier"];
        this.arrName.forEach((name)=>{
            ResManager.getModel(name, (err: any, prefab: Prefab)=>{
                if (!err) {
                    this.arrModel.push(prefab);

                    if (this.arrModel.length === this.arrName.length) {
                        this.addPlayerGroup();
                    }
                }
            });
        });

        this.posCameraOrigin = this.mainCamera.node.position.clone();
    }

    addPlayerGroup () {
        this.updatePlayerNumber(this.people + this.arrModel.length);
    }

    resetPlayer () {
        this.node.destroyAllChildren();

        this.artTriangle = 0;
        this.artVertex = 0;
        this.people = 0;
        this.currentLevel = 0;

        this.mainCamera.node.position = this.posCameraOrigin;

        this._prevPeopleRate = 0;
    }

    reducePlayer () {
        this.updatePlayerNumber(this.people - this.arrName.length);
    }

    updatePlayerNumber(num: number) {
        if (this.people === num) {
            return;
        }

        if (num < 0) {
            num = 0;
        }

        // add
        if (num > this.people) {
            const addNum = num - this.people;
            for (let i = 0; i < addNum; i++) {
                const pfModel = this.arrModel[i % this.arrModel.length];
                let model = instantiate(pfModel) as Node;
                model.parent = this.node;
                let playerScript = model.getComponent(player)!;
                playerScript.show(this);
    
                this.artTriangle += playerScript.triangle;
                this.artVertex += playerScript.vertex;
            }

            this.people = num;

            if (Math.floor(this.people / CAMERA_MOVE_PER_PERSON) > this.currentLevel) {
                //触发镜头拉高
                this.moveUpCamera();
            }
    
            let rate = Math.floor(this.people / 30);
    
            if (rate > this._prevPeopleRate) {
                let obj = {
                    'Fps': Math.round(profiler._stats!.fps.counter.value).toString(),     
                    'Drawcall' : profiler._stats!.draws.counter.value.toString(),
                    'Instancing' : profiler._stats!.instances.counter.value.toString(),
                    'Triangle' : profiler._stats!.tricount.counter.value.toString(),
                    'GFXMem' : profiler._stats!.textureMemory.counter.value.toFixed(1).toString(),
                    'GameLogic' : profiler._stats!.logic.counter.value.toFixed(2).toString(),
                    'ArtTriangle' : this.artTriangle.toString(),
                    'Vertex' : this.artVertex.toString(),
                    'People' : this.people.toString(),            
                }
                
                this.scheduleOnce(()=>{
                    gameLogic.customEventStatistics(constants.EVENT_TYPE.PERFORMANCE_PARAMETER, obj);
                }, 0.5);
    
                this._prevPeopleRate = rate;
            }
        } else {    // reduce
            const deleteNum = this.people - num;
            for(let i = 0; i < deleteNum; i++) {
                const nodePlayer = this.node.children[this.node.children.length - 1 - i];
     
                if (!nodePlayer) {
                    return;
                }
    
                let playerScript = nodePlayer.getComponent(player)!;
                this.artTriangle -= playerScript.triangle;
                this.artVertex -= playerScript.vertex;
    
                nodePlayer.destroy();
            }

            this.people = num;
            
            if (this.currentLevel > Math.floor(this.people / CAMERA_MOVE_PER_PERSON)) {
                this.currentLevel = Math.floor(this.people / CAMERA_MOVE_PER_PERSON);

                let pos = this.mainCamera.node.forward.clone().negative().multiplyScalar(8 * this.currentLevel);

                pos.add(this.posCameraOrigin);

                if (this.tweenCamera) {
                    this.tweenCamera.stop();
                    this.tweenCamera = null;
                }
        
                this.tweenCamera = new Tween(this.mainCamera.node).to(0.2, {position: pos}).start();
            }
        }
    }

    moveUpCamera () {
        this.currentLevel++;

        let direction = this.mainCamera.node.forward.clone().negative().multiplyScalar(8);
        direction.add(this.mainCamera.node.position);
        

        if (this.tweenCamera) {
            this.tweenCamera.stop();
            this.tweenCamera = null;
        }

        this.tweenCamera = new Tween(this.mainCamera.node).to(0.2, {position: direction}).start();
    }

    addDancer () {
        ResManager.getModel('dance1', (err: any, prefab: any)=>{
            if (!err) {
                let model = instantiate(prefab) as Node;
                model.parent = this.node;
                model.setScale(new Vec3(2.5, 2.5, 2.5));
                model.setPosition(new Vec3(2.4,0,2));
            }
        });
    }

    // enableVBB (isEnable: boolean) {
    //     // this.arrName.forEach((name)=>{
    //     //     let nodePlayer = this.node.getChildByName(name);

    //     //     nodePlayer.getComponent(player).changeInstancingBatch(isEnable);
    //     // });
    //     this.isEnableVBB = false;

    //     this.node.children.forEach((nodePlayer)=>{
    //         let playerScript = nodePlayer.getComponent(player);
    //         if (playerScript) {
    //             playerScript.changeInstancingBatch(isEnable);
    //         }
    //     })
    // }
}
