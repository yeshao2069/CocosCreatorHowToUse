import { Node, SpriteFrame } from "cc";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ResManager {
    public static resPath = '';
    /**
     * 加载资源
     * @param url   资源路径
     * @param type  资源类型
     * @param cb    回调
     * @method loadRes
     */
    public static loadRes (url: string, type: any, cb: Function) {
        cc.loader.loadRes(url, type, (err, res) => {
            if (err) {
                cc.error(err.message || err);
                cb(err, res);
                return;
            }

            cb(err, res);
        });
    }

    /**
     * 加载模块资源
     * @param moduleName   模块名
     * @param url   资源路径
     * @param type  资源类型
     * @param cb    回调
     * @method loadModuleRes
     */
    public static loadModuleRes (moduleName: string, url: string, type: any, cb: Function) {
        cc.loader.loadRes(this.resPath+`package/${moduleName}/${url}`, type, (err, res) => {
            if (err) {
                cc.error(err.message || err);
                cb(err, res);
                return;
            }

            cb(err, res);
        });
    }

    /**
     * 释放资源
     * @param path  释放资源的路径
     * @method releasePanelRes
     */
    public static releasePanelRes (path: string) {
        // 如果在这个 资源 中有一些资源与其他界面共用, 不希望被释放,则可以将这个资源从依赖列表中删除
        const deps = cc.loader.getDependsRecursively(path);
        cc.loader.release(deps);
    }

    public static getData (fileName:string, cb: Function) {
        cc.loader.loadRes(this.resPath+"data/" + fileName, function (err, content) {
            if (err) {
                cc.error(err.message || err);
                return;
            }

            let name = content.name;
            let text = content.text;
            if (!text) {
                cc.loader.load(content.nativeUrl, function(err, content) {
                    text = content;
                    cb(err, {name: name, text: text});
                });
                return;
            }

            cb(err, {name: name, text: text});
        });
    }

    public static getModel (modelName: string, cb: Function) {
        this.loadRes(this.resPath+`model/${modelName}`, cc.Prefab, cb);
    }

    public static getUIPrefabRes (prefabPath: string, cb?: Function) {
        this.loadRes(this.resPath+"package/prefab/ui/" + prefabPath, cc.Prefab, cb);
    }

    public static createUI (path: string, cb?: Function, parent?: Node) {
        this.getUIPrefabRes(path, function (err, prefab) {
            if (err) return;
            var node = cc.instantiate(prefab);
            node.setPosition(0, 0, 0);
            if (!parent) {
                parent = cc.find("Canvas");
            }

            parent.addChild(node);
            cb(null, node);
        });
    }
}
