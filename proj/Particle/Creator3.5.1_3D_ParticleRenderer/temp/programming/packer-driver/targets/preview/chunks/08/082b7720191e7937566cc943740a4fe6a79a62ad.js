System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, ShowTips;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d9c7hO8MFFebprFkygUSTG", "ShowTips", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShowTips", ShowTips = (_dec = ccclass("ShowTips"), _dec(_class = class ShowTips extends Component {
        constructor() {
          super(...arguments);
          this.tips = null;
          this.ifShow = true;
        }

        showTip() {
          if (this.ifShow == false) {
            this.tips.setPosition(0, 1000, 0);
          }

          if (this.ifShow) {
            this.tips.setPosition(0, 0, 0);
          }

          this.ifShow = !this.ifShow;
        }

        start() {
          // Your initialization goes here.
          this.tips = this.node.getChildByName('tips');
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=082b7720191e7937566cc943740a4fe6a79a62ad.js.map