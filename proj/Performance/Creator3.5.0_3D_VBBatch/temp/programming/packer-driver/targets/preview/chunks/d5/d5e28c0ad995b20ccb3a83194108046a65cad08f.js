System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _class, _class2, _crd, ccclass, property, ResManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1716f1F5YtO1ax28+Z1G5w2", "resManager", undefined);

      ({
        ccclass,
        property
      } = cc._decorator);

      _export("default", ResManager = ccclass(_class = (_class2 = class ResManager {
        /**
         * 加载资源
         * @param url   资源路径
         * @param type  资源类型
         * @param cb    回调
         * @method loadRes
         */
        static loadRes(url, type, cb) {
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


        static loadModuleRes(moduleName, url, type, cb) {
          cc.loader.loadRes(this.resPath + ("package/" + moduleName + "/" + url), type, (err, res) => {
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


        static releasePanelRes(path) {
          // 如果在这个 资源 中有一些资源与其他界面共用, 不希望被释放,则可以将这个资源从依赖列表中删除
          var deps = cc.loader.getDependsRecursively(path);
          cc.loader.release(deps);
        }

        static getData(fileName, cb) {
          cc.loader.loadRes(this.resPath + "data/" + fileName, function (err, content) {
            if (err) {
              cc.error(err.message || err);
              return;
            }

            var name = content.name;
            var text = content.text;

            if (!text) {
              cc.loader.load(content.nativeUrl, function (err, content) {
                text = content;
                cb(err, {
                  name: name,
                  text: text
                });
              });
              return;
            }

            cb(err, {
              name: name,
              text: text
            });
          });
        }

        static getModel(modelName, cb) {
          this.loadRes(this.resPath + ("model/" + modelName), cc.Prefab, cb);
        }

        static getUIPrefabRes(prefabPath, cb) {
          this.loadRes(this.resPath + "package/prefab/ui/" + prefabPath, cc.Prefab, cb);
        }

        static createUI(path, cb, parent) {
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

      }, _class2.resPath = '', _class2)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d5e28c0ad995b20ccb3a83194108046a65cad08f.js.map