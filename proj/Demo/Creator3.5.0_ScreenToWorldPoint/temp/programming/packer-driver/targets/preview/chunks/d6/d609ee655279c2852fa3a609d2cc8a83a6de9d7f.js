System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Label, find, Vec3, Camera, UITransform, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ScreenToWorldPoint;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      find = _cc.find;
      Vec3 = _cc.Vec3;
      Camera = _cc.Camera;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a118nm3HNMwZGP0dwa8TCS", "ScreenToWorldPoint", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScreenToWorldPoint", ScreenToWorldPoint = (_dec = ccclass('ScreenToWorldPoint'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Camera), _dec(_class = (_class2 = class ScreenToWorldPoint extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "box", _descriptor, this);

          _initializerDefineProperty(this, "distanceLabel", _descriptor2, this);

          _initializerDefineProperty(this, "Camera3D", _descriptor3, this);

          this._distance = 0;
        }

        start() {
          var canvas = find('Canvas');
          canvas.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          canvas.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this._distance = 0.5;
        }

        onTouchStart(evt) {
          this.moveBox(evt.getLocation());
        }

        onTouchMove(evt) {
          this.moveBox(evt.getLocation());
        }

        moveBox(touchPos) {
          var pos = this.Camera3D.screenToWorld(new Vec3(touchPos.x, touchPos.y, this._distance));
          this.box.position = this.box.parent.getComponent(UITransform).convertToNodeSpaceAR(pos);
        }

        onDistanceChanged(slider) {
          this._distance = parseFloat(slider.progress.toFixed(2));
          this.distanceLabel.string = 'distance : ' + this._distance;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "box", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "distanceLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Camera3D", [_dec4], {
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
//# sourceMappingURL=d609ee655279c2852fa3a609d2cc8a83a6de9d7f.js.map