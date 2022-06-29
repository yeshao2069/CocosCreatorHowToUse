System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioClip, Button, EventHandler, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AddGlobalButtonSound;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioClip = _cc.AudioClip;
      Button = _cc.Button;
      EventHandler = _cc.EventHandler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6f5334NftGXocfTuVJzr+4", "AddGlobalButtonSound", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", AddGlobalButtonSound = (_dec = ccclass('AddGlobalButtonSound'), _dec2 = property(AudioClip), _dec(_class = (_class2 = class AddGlobalButtonSound extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "audio", _descriptor, this);
        }

        onLoad() {
          // @ts-ignore
          Button.prototype._onTouchEnded = event => {
            this.audio.play();
            let self = event.target.getComponent(Button);
            if (!self.interactable || !self.enabledInHierarchy) return;

            if (self._pressed) {
              EventHandler.emitEvents(self.clickEvents, event);
              this.node.emit('click', this);
            }

            self._pressed = false;

            self._updateState();

            if (event) {
              event.propagationStopped = true;
            }
          };
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audio", [_dec2], {
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
//# sourceMappingURL=405b019a6bf8ce3931cbe9fb2339ef59d1d33673.js.map