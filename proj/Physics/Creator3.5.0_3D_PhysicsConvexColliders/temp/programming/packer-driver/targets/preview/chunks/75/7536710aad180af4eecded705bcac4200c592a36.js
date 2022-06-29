System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, instantiate, resources, _dec, _class, _class2, _crd, ccclass, property, AxisHelper;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71d16hVorlB7ZLqkXOXEath", "AxisHelper", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AxisHelper", AxisHelper = (_dec = ccclass('AxisHelper'), _dec(_class = (_class2 = class AxisHelper extends Component {
        constructor() {
          super(...arguments);
          this._ins = null;
        }

        __preload() {
          if (AxisHelper._axis == null) {
            resources.load('common/Axis', Prefab, function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              if (args) {
                if (args[0]) {
                  console.error(args[0]);
                } else {
                  AxisHelper._axis = args[1];

                  AxisHelper._insArr.forEach(v => {
                    if (!v._ins && v.enabled && v.enabledInHierarchy && v.node.active && v.node.activeInHierarchy) v.onEnable();
                  });
                }
              }
            });
          }
        }

        onLoad() {
          AxisHelper._insArr.push(this);
        }

        onEnable() {
          if (AxisHelper._axis) {
            if (this._ins == null) {
              this._ins = instantiate(AxisHelper._axis);
              this.node.addChild(this._ins);
            }

            this._ins.active = true;
          }
        }

        onDisable() {
          if (this._ins) this._ins.active = false;
        }

        onDestroy() {
          var index = AxisHelper._insArr.indexOf(this);

          if (index >= 0) {
            AxisHelper._insArr.splice(index, 1);
          }
        }

      }, _class2._axis = null, _class2._insArr = [], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7536710aad180af4eecded705bcac4200c592a36.js.map