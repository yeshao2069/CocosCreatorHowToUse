import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("SubPackageManager")
export class SubPackageManager {
    /* class member could be defined like this */
    // dummy = '';

    static _instance: SubPackageManager;

    static get instance () {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new SubPackageManager();
        return this._instance;
    }

    dictLoading: any = {}
    dictPackage: any = {}

    loadSubPackage (packageName: string, finishCb: Function) {
        if (window.wx) {
            //微信环境下，需要加载子包
            if (this.dictPackage.hasOwnProperty(packageName)) {
                finishCb && finishCb(null);
                return;
            } else {
                if (!this.dictLoading.hasOwnProperty(packageName)) {
                    this.dictLoading[packageName] = [];

                    window.wx.loadSubpackage({
                        name: packageName,
                        success: ()=>{
                            this.dictPackage[packageName] = true;

                            let arrLoading = this.dictLoading[packageName];
                            arrLoading.forEach((cb: Function) => {
                                cb && cb(null);
                            });
    
                            delete this.dictLoading[packageName];
                        },
                        fail: (err)=>{
                            console.error(`load subpackage (${packageName}) failed!! err:${err}`);
    
                            // finishCb && finishCb(err);
                            let arrLoading = this.dictLoading[packageName];
                            arrLoading.forEach((cb: Function) => {
                                cb && cb(err);
                            });

                            delete this.dictLoading[packageName];
                        }
                    });
                }

                this.dictLoading[packageName].push(finishCb);
            }

            
        } else {
            finishCb && finishCb(null);
        }
    }

    loadAudioPackage (finishCb: Function) {
        this.loadSubPackage('audio', finishCb);
    }

    isAudioPackageLoad () {
        return !window.wx || this.dictPackage.hasOwnProperty('audio');
    }

    loadModelPackage (finishCb: Function) {
        this.loadSubPackage('model', finishCb);
    }

    // loadCardPackage (finishCb: Function) {
    //     this.loadSubPackage('card', finishCb);
    // }

    // loadEffectPackage (finishCb: Function) {
    //     this.loadSubPackage('effect', finishCb);
    // }

    // loadBuildingPackage (finishCb: Function) {
    //     this.loadSubPackage('building', finishCb);
    // }

    loadAllPackage () {
        this.loadModelPackage(()=>{

        });

        this.loadAudioPackage(()=>{

        });

        // this.loadCardPackage(()=>{

        // });

        // this.loadEffectPackage(()=>{

        // });

        // this.loadBuildingPackage(()=>{
            
        // });
    }
}
