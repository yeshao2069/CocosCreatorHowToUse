System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, SpineBoyCtrl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b340pgM6pKnq8vAlDZtB5/", "SpineBoyCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", SpineBoyCtrl = (_dec = ccclass('SpineBoyCtrl'), _dec(_class = class SpineBoyCtrl extends Component {
        constructor() {
          super(...arguments);
          this.mixTime = 0.2;
          this._hasStop = true;
        }

        onLoad() {
          var spine = this.spine = this.getComponent('sp.Skeleton');

          this._setMix('walk', 'run');

          this._setMix('run', 'jump');

          this._setMix('walk', 'jump');

          spine.setStartListener(trackEntry => {
            var animationName = trackEntry.animation ? trackEntry.animation.name : "";
            console.log("[track %s][animation %s] start.", trackEntry.trackIndex, animationName);
          });
          spine.setInterruptListener(trackEntry => {
            var animationName = trackEntry.animation ? trackEntry.animation.name : "";
            console.log("[track %s][animation %s] interrupt.", trackEntry.trackIndex, animationName);
          });
          spine.setEndListener(trackEntry => {
            var animationName = trackEntry.animation ? trackEntry.animation.name : "";
            console.log("[track %s][animation %s] end.", trackEntry.trackIndex, animationName);
          });
          spine.setDisposeListener(trackEntry => {
            var animationName = trackEntry.animation ? trackEntry.animation.name : "";
            console.log("[track %s][animation %s] will be disposed.", trackEntry.trackIndex, animationName);
          });
          spine.setCompleteListener(trackEntry => {
            var animationName = trackEntry.animation ? trackEntry.animation.name : "";

            if (animationName === 'shoot') {
              this.spine.clearTrack(1);
            }

            var loopCount = Math.floor(trackEntry.trackTime / trackEntry.animationEnd);
            console.log("[track %s][animation %s] complete: %s", trackEntry.trackIndex, animationName, loopCount);
          });
          spine.setEventListener((trackEntry, event) => {
            var animationName = trackEntry.animation ? trackEntry.animation.name : "";
            console.log("[track %s][animation %s] event: %s, %s, %s, %s", trackEntry.trackIndex, animationName, event.data.name, event.intValue, event.floatValue, event.stringValue);
          });
          this._hasStop = false;
        } // OPTIONS


        toggleDebugSlots() {
          this.spine.debugSlots = !this.spine.debugSlots;
        }

        toggleDebugBones() {
          this.spine.debugBones = !this.spine.debugBones;
        }

        toggleDebugMesh() {
          this.spine.debugMesh = !this.spine.debugMesh;
        }

        toggleUseTint() {
          this.spine.useTint = !this.spine.useTint;
        }

        toggleTimeScale() {
          if (this.spine.timeScale === 1.0) {
            this.spine.timeScale = 0.3;
          } else {
            this.spine.timeScale = 1.0;
          }
        } // ANIMATIONS


        stop() {
          this.spine.clearTrack(0);
          this._hasStop = true;
        }

        walk() {
          this.spine.setAnimation(0, 'walk', true);
          this._hasStop = false;
        }

        run() {
          this.spine.setAnimation(0, 'run', true);
          this._hasStop = false;
        }

        jump() {
          var _this$spine;

          var oldAnim = (_this$spine = this.spine) == null ? void 0 : _this$spine.animation;
          this.spine.setAnimation(0, 'jump', false);

          if (oldAnim && !this._hasStop) {
            var _this$spine2;

            (_this$spine2 = this.spine) == null ? void 0 : _this$spine2.addAnimation(0, oldAnim === 'run' ? 'run' : 'walk', true, 0);
          }
        }

        shoot() {
          this.spine.setAnimation(1, 'shoot', false);
        }

        idle() {
          this.spine.setAnimation(0, 'idle', true);
        }

        portal() {
          this.spine.setAnimation(0, 'portal', false);
        } //


        _setMix(anim1, anim2) {
          this.spine.setMix(anim1, anim2, this.mixTime);
          this.spine.setMix(anim2, anim1, this.mixTime);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=45a31353165fdd8a5c60e8aa1af68272b8431557.js.map