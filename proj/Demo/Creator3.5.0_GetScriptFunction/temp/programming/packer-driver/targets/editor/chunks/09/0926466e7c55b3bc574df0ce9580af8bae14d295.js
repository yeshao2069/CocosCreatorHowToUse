System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, js, Node, Label, Layout, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GetScriptFunction;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      js = _cc.js;
      Node = _cc.Node;
      Label = _cc.Label;
      Layout = _cc.Layout;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd738mt3NVNDaiC9L1bdQ53", "GetScriptFunction", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GetScriptFunction", GetScriptFunction = (_dec = ccclass('GetScriptFunction'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Layout), _dec(_class = (_class2 = class GetScriptFunction extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "testNode", _descriptor, this);

          _initializerDefineProperty(this, "testLabel", _descriptor2, this);

          _initializerDefineProperty(this, "testLayout", _descriptor3, this);
        }

        onLoad() {
          let myMap = new Map(); // 保存总数据的map

          let privateFuncMap = new Map(); // 私有

          let publicFuncMap = new Map(); // 非私有

          let unsortFuncMap = new Map(); // 未分类

          let propFuncMap = new Map(); // __props__获取的方法

          let components = this.testNode['_components'];

          for (let i = 0; i < components.length; i++) {
            // 获取类名
            let className = js.getClassName(components[i]);
            const script = js.getClassByName(className); // new script.prototype.constructor()['__proto__']  == script.prototype

            const scriptPrototype = script.prototype;
            let val1 = [];
            let val2 = [];
            let val3 = [];

            for (var k in scriptPrototype) {
              val1.push(k);

              if (k[0] == '_') {
                val2.push(k);
              } else {
                val3.push(k);
              }
            }

            unsortFuncMap.set(className, val1);
            privateFuncMap.set(className, val2);
            publicFuncMap.set(className, val3);
            propFuncMap.set(className, script['__props__']);
          } // 信息存入map


          myMap.set('Private Function', privateFuncMap);
          myMap.set('Public Function', publicFuncMap);
          myMap.set('Unsort Function', unsortFuncMap);
          myMap.set('Prop Function', propFuncMap); // console.log(myMap);

          this.testLabel.string += `Private Function\n`;
          privateFuncMap.forEach(v => {
            this.testLabel.string += v + ", ";
          });
          this.testLabel.string += `\n`;
          this.testLabel.string += `Public Function\n`;
          publicFuncMap.forEach(v => {
            this.testLabel.string += v + ", ";
          });
          this.testLabel.string += `\n`;
          this.testLabel.string += `Unsort Function\n`;
          unsortFuncMap.forEach(v => {
            this.testLabel.string += v + ", ";
          });
          this.testLabel.string += `\n`;
          this.testLabel.string += `Prop Function\n`;
          propFuncMap.forEach(v => {
            this.testLabel.string += v + ", ";
          });
          this.testLayout.updateLayout();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "testNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "testLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "testLayout", [_dec4], {
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
//# sourceMappingURL=0926466e7c55b3bc574df0ce9580af8bae14d295.js.map