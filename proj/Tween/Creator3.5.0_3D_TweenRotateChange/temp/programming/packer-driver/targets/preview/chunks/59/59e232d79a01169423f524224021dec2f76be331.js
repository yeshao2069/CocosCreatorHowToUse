System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, tween, Vec3, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, TweenRotateChange;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd316rschJEZoFtb0gOqsaK", "TweenRotateChange", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TweenRotateChange", TweenRotateChange = (_dec = ccclass('TweenRotateChange'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class TweenRotateChange extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "capsuleNode", _descriptor, this);

          _initializerDefineProperty(this, "torusNode", _descriptor2, this);

          _initializerDefineProperty(this, "cylinderNode", _descriptor3, this);
        }

        Click() {
          var that = this;
          /** 方式1 */
          // 循环8次，每次30°

          tween(this.capsuleNode).repeat(8, tween(this.capsuleNode).by(1, {
            angle: 30
          })).start(); // 无限循环
          // tween(this.capsuleNode).repeatForever(
          //     tween(this.capsuleNode).by(1, { angle : 30 } )
          // ).start();

          /** 方式2 */
          // 循环10次，每次15°

          tween(this.torusNode).repeat(10, tween(this.torusNode).by(1, {
            eulerAngles: new Vec3(15, 0, 0)
          })).start();
          /** 方式3 */

          var _rotate1 = new Vec3(); // 角度值 x,y,z


          tween(_rotate1).by(5, new Vec3(50, 50, 0), {
            'onUpdate': () => {
              that.cylinderNode.setRotationFromEuler(_rotate1);
            }
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "capsuleNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "torusNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cylinderNode", [_dec4], {
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
//# sourceMappingURL=59e232d79a01169423f524224021dec2f76be331.js.map