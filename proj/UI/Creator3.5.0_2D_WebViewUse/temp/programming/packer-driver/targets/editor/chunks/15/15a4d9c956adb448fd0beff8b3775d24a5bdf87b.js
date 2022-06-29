System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Label, WebView, EditBox, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, WebViewCtl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      WebView = _cc.WebView;
      EditBox = _cc.EditBox;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bdc4e8QC9JHkoNmdSn9efhs", "WebViewCtl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WebViewCtl", WebViewCtl = (_dec = ccclass('WebViewCtl'), _dec2 = property(Label), _dec3 = property(WebView), _dec4 = property(EditBox), _dec(_class = (_class2 = class WebViewCtl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelStatus", _descriptor, this);

          _initializerDefineProperty(this, "webView", _descriptor2, this);

          _initializerDefineProperty(this, "url", _descriptor3, this);
        }

        onWebFinishLoad(sender, event) {
          var loadStatus = "";

          if (event === WebView.EventType.LOADED) {
            loadStatus = " is loaded!";
          } else if (event === WebView.EventType.LOADING) {
            loadStatus = " is loading!";
          } else if (event === WebView.EventType.ERROR) {
            loadStatus = ' load error!';
          }

          this.labelStatus.string = this.webView.url + loadStatus;
        }

        visitURL() {
          this.webView.url = this.url.string;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelStatus", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "webView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "url", [_dec4], {
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
//# sourceMappingURL=15a4d9c956adb448fd0beff8b3775d24a5bdf87b.js.map