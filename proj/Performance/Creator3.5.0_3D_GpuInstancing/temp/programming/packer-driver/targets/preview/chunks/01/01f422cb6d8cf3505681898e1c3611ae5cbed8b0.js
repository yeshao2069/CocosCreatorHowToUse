System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _class2, _crd, ccclass, property, SubPackageManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bdff3EAmM9N8oepIHiSlwe2", "subPackageManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SubPackageManager", SubPackageManager = (_dec = ccclass("SubPackageManager"), _dec(_class = (_class2 = class SubPackageManager {
        constructor() {
          this.dictLoading = {};
          this.dictPackage = {};
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new SubPackageManager();
          return this._instance;
        }

        loadSubPackage(packageName, finishCb) {
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
                  success: () => {
                    this.dictPackage[packageName] = true;
                    var arrLoading = this.dictLoading[packageName];
                    arrLoading.forEach(cb => {
                      cb && cb(null);
                    });
                    delete this.dictLoading[packageName];
                  },
                  fail: err => {
                    console.error("load subpackage (" + packageName + ") failed!! err:" + err); // finishCb && finishCb(err);

                    var arrLoading = this.dictLoading[packageName];
                    arrLoading.forEach(cb => {
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

        loadAudioPackage(finishCb) {
          this.loadSubPackage('audio', finishCb);
        }

        isAudioPackageLoad() {
          return !window.wx || this.dictPackage.hasOwnProperty('audio');
        }

        loadModelPackage(finishCb) {
          this.loadSubPackage('model', finishCb);
        } // loadCardPackage (finishCb: Function) {
        //     this.loadSubPackage('card', finishCb);
        // }
        // loadEffectPackage (finishCb: Function) {
        //     this.loadSubPackage('effect', finishCb);
        // }
        // loadBuildingPackage (finishCb: Function) {
        //     this.loadSubPackage('building', finishCb);
        // }


        loadAllPackage() {
          this.loadModelPackage(() => {});
          this.loadAudioPackage(() => {}); // this.loadCardPackage(()=>{
          // });
          // this.loadEffectPackage(()=>{
          // });
          // this.loadBuildingPackage(()=>{
          // });
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=01f422cb6d8cf3505681898e1c3611ae5cbed8b0.js.map