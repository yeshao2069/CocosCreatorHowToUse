System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ProgressBar, tween, Sprite, _dec, _class, _crd, ccclass, property, CircularProgressBar;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ProgressBar = _cc.ProgressBar;
      tween = _cc.tween;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "686e3v+1P1A2rIw2ua1M2qD", "CircularProgressBar", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CircularProgressBar", CircularProgressBar = (_dec = ccclass('CircularProgressBar'), _dec(_class = class CircularProgressBar extends Component {
        start() {
          // 使用ProgressBar方式
          for (let i = 1; i < 5; i++) {
            let node = this.node.getChildByName('pbNode' + i);

            if (node) {
              let pb = node.getComponent(ProgressBar);
              let time = Math.floor(Math.random() * 10) + 1;
              tween(pb).repeatForever(tween(pb).to(time, {
                progress: 1
              }).call(() => {
                pb.progress = 0;
              })).start();
            }
          } // 使用动画 Animation 方式
          // 使用ProgressBar方式


          for (let i = 1; i < 5; i++) {
            let node = this.node.getChildByName('spNode' + i);

            if (node) {
              let sp = node.getChildByName('progress').getComponent(Sprite);
              let time = Math.floor(Math.random() * 10) + 1;
              tween(sp).repeatForever(tween(sp).to(time, {
                fillRange: -1
              }).call(() => {
                sp.fillRange = 0;
              })).start();
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e2fef911f3d5b6e94949128c3437549ee9c5417c.js.map