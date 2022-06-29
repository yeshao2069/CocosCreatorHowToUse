System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, sp, Label, resources, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, LoadSpine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sp = _cc.sp;
      Label = _cc.Label;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68615HsmsFPLJLvQ0ZXm+Ol", "LoadSpine", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadSpine", LoadSpine = (_dec = ccclass('LoadSpine'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = class LoadSpine extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tips", _descriptor, this);
        }

        start() {
          this.node.addComponent(sp.Skeleton);
          resources.load("spine/alien/alien-pro", sp.SkeletonData, (err, spineAsset) => {
            if (err) {
              this.tips.string = "Failed to load asset";
              return;
            }

            let comp = this.getComponent('sp.Skeleton');
            comp.skeletonData = spineAsset;
            let ani = comp.setAnimation(0, 'run', true);
            this.tips.string = 'Load Success';
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tips", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b1388bd54095f91a65ed45aed1bc31bdf1faf5d.js.map