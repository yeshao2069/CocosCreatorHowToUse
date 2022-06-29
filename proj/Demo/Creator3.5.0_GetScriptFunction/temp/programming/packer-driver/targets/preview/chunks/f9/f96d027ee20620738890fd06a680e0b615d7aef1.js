System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, js, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GetScriptFunction;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd738mt3NVNDaiC9L1bdQ53", "GetScriptFunction", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GetScriptFunction", GetScriptFunction = (_dec = ccclass('GetScriptFunction'), _dec2 = property(Node), _dec(_class = (_class2 = class GetScriptFunction extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "testNode", _descriptor, this);
        }

        onLoad() {
          var myMap = new Map(); // 保存总数据的map

          var privateFuncMap = new Map(); // 私有

          var publicFuncMap = new Map(); // 非私有

          var unsortFuncMap = new Map(); // 未分类

          var propFuncMap = new Map(); // __props__获取的方法

          var components = this.testNode['_components'];

          for (var i = 0; i < components.length; i++) {
            // 获取类名
            var className = js.getClassName(components[i]);
            var script = js.getClassByName(className); // new script.prototype.constructor()['__proto__']  == script.prototype

            var scriptPrototype = script.prototype;
            var val1 = [];
            var val2 = [];
            var val3 = [];

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
          myMap.set('Prop Function', propFuncMap);
          console.log(myMap);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "testNode", [_dec2], {
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
//# sourceMappingURL=f96d027ee20620738890fd06a680e0b615d7aef1.js.map