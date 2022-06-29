System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Button, EventHandler, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, emptyArr, ButtonEventCapture;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      EventHandler = _cc.EventHandler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32886cuLuRBrrDYxtXcEQ64", "ButtonEventCapture", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      emptyArr = new Array();

      _export("ButtonEventCapture", ButtonEventCapture = (_dec = ccclass("ButtonEventCapture"), _dec2 = property({
        type: EventHandler
      }), _dec(_class = (_class2 = class ButtonEventCapture extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "eventHandler", _descriptor, this);

          this._button = null;
          this._click = false;
        }

        start() {
          // Your initialization goes here.
          this._button = this.getComponent(Button);

          this._button.node.on(Button.EventType.CLICK, this.click, this);
        }

        click() {
          this._click = true;
        }

        update(deltaTime) {
          // Your update function goes here.
          if (this._click) {
            emptyArr[0] = deltaTime;
            this.eventHandler.emit(emptyArr);
            this._click = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "eventHandler", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new EventHandler();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b3bcc38ec7b06f09457ff97c721e339c4aba1c80.js.map