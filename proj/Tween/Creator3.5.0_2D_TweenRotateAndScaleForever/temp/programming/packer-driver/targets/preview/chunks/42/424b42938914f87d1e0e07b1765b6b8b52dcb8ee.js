System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, tween, Vec3, _dec, _class, _crd, ccclass, property, TweenRotateAndScale;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6abc9bCWWtOUpB6n1P5XxwK", "TweenRotateAndScale", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TweenRotateAndScale", TweenRotateAndScale = (_dec = ccclass('TweenRotateAndScale'), _dec(_class = class TweenRotateAndScale extends Component {
        start() {
          var bg = this.node.getChildByName('SpNode');
          tween(bg).repeatForever(tween().parallel(tween(bg).to(0.3, {
            scale: new Vec3(1.1, 1.1, 1.1)
          }).to(0.3, {
            scale: new Vec3(0.9, 0.9, 0.9)
          }), tween(bg).by(0.3, {
            angle: 90
          }))).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=424b42938914f87d1e0e07b1765b6b8b52dcb8ee.js.map