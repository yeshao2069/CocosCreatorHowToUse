System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, UseAnimationFrameEvents;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fef93kxiLtB94PLC/vXvSjx", "UseAnimationFrameEvents", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UseAnimationFrameEvents", UseAnimationFrameEvents = (_dec = ccclass('UseAnimationFrameEvents'), _dec(_class = class UseAnimationFrameEvents extends Component {
        constructor() {
          super(...arguments);
          this._loopTime = 1;
        }

        finishAnim(progress) {
          if (progress === 100) {
            this._loopTime += 1;
          }

          console.log('第' + this._loopTime + '圈,' + progress + '%');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3d096a16afcfc3931ff1c2e92b8f07fcddede793.js.map