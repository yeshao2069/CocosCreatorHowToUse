System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Toggle, director, log, setDisplayStats, NATIVE, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, OcclusionQuery;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Toggle = _cc.Toggle;
      director = _cc.director;
      log = _cc.log;
      setDisplayStats = _cc.setDisplayStats;
    }, function (_ccEnv) {
      NATIVE = _ccEnv.NATIVE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "81334qeNQlIOL0hLV5iyVWR", "occulusion-query", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("OcclusionQuery", OcclusionQuery = (_dec = ccclass('OcclusionQuery'), _dec2 = property(Toggle), _dec(_class = (_class2 = class OcclusionQuery extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "toggleOcclusionQuery", _descriptor, this);
        }

        start() {
          setDisplayStats(true);

          if (NATIVE) {
            this.toggleOcclusionQuery.isChecked = director.root.pipeline.getOcclusionQueryEnabled();
          } else {
            this.toggleOcclusionQuery.isChecked = false;
          }

          this.toggleOcclusionQuery.node.on(Toggle.EventType.TOGGLE, this.onToggle, this);
          log('Occlusion query enabled: ' + this.toggleOcclusionQuery.isChecked);
        }

        onToggle(toggle) {
          if (NATIVE) {
            director.root.pipeline.setOcclusionQueryEnabled(toggle.isChecked);
          }

          log('Occlusion query enabled: ' + toggle.isChecked);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleOcclusionQuery", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92f3afe070d5df3592332c645ed0fbec10a12d81.js.map