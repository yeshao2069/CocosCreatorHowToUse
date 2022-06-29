System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, SpriteAtlas, resources, AnimationComponent, AnimationClip, _dec, _class, _crd, ccclass, property, CreateClipCtrl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SpriteAtlas = _cc.SpriteAtlas;
      resources = _cc.resources;
      AnimationComponent = _cc.AnimationComponent;
      AnimationClip = _cc.AnimationClip;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "444f6dXwwBMQ5/K4ioDjBWn", "CreateClipCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CreateClipCtrl", CreateClipCtrl = (_dec = ccclass('CreateClipCtrl'), _dec(_class = class CreateClipCtrl extends Component {
        onLoad() {
          var animation = this.getComponent(AnimationComponent);
          resources.load('sheep/atlas', SpriteAtlas, (err, atlas) => {
            this._atlas = atlas.addRef();
            var spriteFrames = atlas.getSpriteFrames();
            var clip = AnimationClip.createWithSpriteFrames(spriteFrames, 10);
            clip.name = 'run';
            clip.wrapMode = AnimationClip.WrapMode.Loop; // animation.clips.concat(clip);

            animation.createState(clip);
            animation.play('run');
          });
        }

        onDestroy() {
          this._atlas.decRef();

          this._atlas = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=da2588d4ff23bbe20f0b3bd610c483d4450c7717.js.map