System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, isValid, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, EnumCommand;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      isValid = _cc.isValid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af017Kfo+5AN40vmamMCNIv", "EnumCommand", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnumCommand", EnumCommand = (_dec = ccclass('EnumCommand'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_class3 = class EnumCommand extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_objNode", _descriptor, this);

          _initializerDefineProperty(this, "command", _descriptor2, this);

          _initializerDefineProperty(this, "delay", _descriptor3, this);
        }

        set objNode(v) {
          this._objNode = v;
        }

        get objNode() {
          return this._objNode;
        }

        start() {
          const props = this.command.split('.');
          if (!this._objNode) return;
          var lh = this._objNode;
          var that = this;
          props.forEach(e => {
            var last = e[e.length - 1];

            if (last == ']') {
              var i = e.indexOf('[');
              lh = lh[e.substring(0, i)];
              var str = e.substring(i);

              if (str[0] == '[') {
                var index = str.replace('[', '').replace(']', '');
                lh = lh[parseFloat(index)];
              }
            } else if (last == ';') {
              const ss = e.split('=');

              if (ss.length == 2) {
                var lf = ss[1].trim().split(';')[0];
                if (lf == 'false') lf = false;else if (lf == '{}') lf = {};else if (lf == '[]') lf = [];else if (isNaN(lf)) lf = parseFloat(lf);
                setTimeout(() => {
                  if (isValid(lh)) {
                    console.log("[COMMAND]:", lh.name, ss[0].trim(), lf);
                    lh[ss[0].trim()] = lf;
                  }
                }, that.delay);
              }
            } else {
              lh = lh[e];
            }
          });
        }

      }, _class3._map = new Map(), _class3), (_applyDecoratedDescriptor(_class2.prototype, "objNode", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "objNode"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_objNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "command", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "delay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1000;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53edd79d0d218d13a6b5dd638254a9d2832831b7.js.map