import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("StorageManager")
export class StorageManager {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    static _instance: StorageManager;

    static get instance () {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new StorageManager();
        this._instance.start();
        return this._instance;
    }

    jsonData: any = null;
    path: any = null;
    KEY_CONFIG: string = 'performanceCfg';
    markSave: boolean = false;
    saveTimer: number = -1;

    start () {
        this.jsonData = {
            "userId": ""
        };

        // this.path = this.getConfigPath();

        var content;
        // if (cc.sys.isNative) {
        //     var valueObject = jsb.fileUtils.getValueMapFromFile(this.path);

        //     content = valueObject[this.KEY_CONFIG];
        // } else {
        //     content = cc.sys.localStorage.getItem(this.KEY_CONFIG);
        // }

        content = cc.sys.localStorage.getItem(this.KEY_CONFIG);

        // // 解密代码
        // if (cc.game.config["encript"]) {
        //     var newContent = new Xxtea("upgradeHeroAbility").xxteaDecrypt(content);
        //     if (newContent && newContent.length > 0) {
        //         content = newContent;
        //     }
        // }

        if (content && content.length) {
            try {
                //初始化操作
                var jsonData = JSON.parse(content);
                this.jsonData = jsonData;
            }catch (excepaiton) {

            }

        }

        //启动无限定时器，每1秒保存一次数据，而不是无限保存数据
        this.saveTimer = setInterval(() =>{
            this.scheduleSave();
        }, 500);
    }

    setConfigDataWithoutSave (key: string, value: any) {
        var account = this.jsonData.userId;
        if (this.jsonData[account]) {
            this.jsonData[account][key] = value;
        } else {
            console.error("no account can not save");
        }
    }

    setConfigData (key: string, value: any) {
        this.setConfigDataWithoutSave(key, value);

        // this.save();
        this.markSave = true; //标记为需要存储，避免一直在写入，而是每隔一段时间进行写入
    }

    getConfigData (key: string) {
        var account = this.jsonData.userId;
        if (this.jsonData[account]) {
            var value = this.jsonData[account][key];
            return value ? value : "";
        } else {
            cc.log("no account can not load");
            return "";
        }
    }

    setGlobalData (key:string, value: any) {
        this.jsonData[key] = value;
        this.save();
    }

    getGlobalData (key:string) {
        return this.jsonData[key];
    }

    setUserId (userId:string) {
        this.jsonData.userId = userId;
        if (!this.jsonData[userId]) {
            this.jsonData[userId] = {};
        }

        this.save();
    }

    getUserId () {
        return this.jsonData.userId;
    }

    scheduleSave () {
        if (!this.markSave) {
            return;
        }

        this.save();
    }

    /**
     * 标记为已修改
     */
    markModified () {
        this.markSave = true;
    }

    save () {
        // 写入文件
        var str = JSON.stringify(this.jsonData);

        // // 加密代码
        // if (cc.game.config["encript"]) {
        //     str = new Xxtea("upgradeHeroAbility").xxteaEncrypt(str);
        // }

        // let zipStr = str;

        this.markSave = false;

        var ls = cc.sys.localStorage;
        ls.setItem(this.KEY_CONFIG, str);
        
        // if (!cc.sys.isNative) {
        //     var ls = cc.sys.localStorage;
        //     ls.setItem(this.KEY_CONFIG, str);
        //     return;
        // }

        // var valueObj = {};
        // valueObj[this.KEY_CONFIG] = str;
        // jsb.fileUtils.writeToFile(valueObj, this.path);

    }

    // getConfigPath () {

    //     var platform = cc.sys.platform;

    //     var path = "";

    //     if (platform === cc.sys.OS_WINDOWS) {
    //         path = "src/conf";
    //     } else if (platform === cc.sys.OS_LINUX) {
    //         path = "./conf";
    //     } else {
    //         if (cc.sys.isNative) {
    //             path = jsb.fileUtils.getWritablePath();
    //             path = path + "conf";
    //         } else {
    //             path = "src/conf";
    //         }
    //     }

    //     return path;
    // }
}
