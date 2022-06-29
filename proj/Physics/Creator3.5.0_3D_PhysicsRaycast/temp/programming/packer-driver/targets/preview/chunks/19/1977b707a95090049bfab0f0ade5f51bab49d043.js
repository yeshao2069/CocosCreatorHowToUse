System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Material, systemEvent, SystemEventType, Camera, geometry, PhysicsSystem, MeshRenderer, Label, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, menu, ERaycastType, RaycastTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Material = _cc.Material;
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      Camera = _cc.Camera;
      geometry = _cc.geometry;
      PhysicsSystem = _cc.PhysicsSystem;
      MeshRenderer = _cc.MeshRenderer;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb583UOA0FHmJNxuPMu3/VF", "RaycastTest", undefined);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      (function (ERaycastType) {
        ERaycastType[ERaycastType["ALL"] = 0] = "ALL";
        ERaycastType[ERaycastType["CLOSEST"] = 1] = "CLOSEST";
      })(ERaycastType || (ERaycastType = {}));

      _export("RaycastTest", RaycastTest = (_dec = ccclass("RaycastTest"), _dec2 = property({
        type: Material
      }), _dec3 = property({
        type: Material
      }), _dec4 = property({
        type: Camera
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: PhysicsSystem.PhysicsGroup
      }), _dec(_class = (_class2 = class RaycastTest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "defaultMaterial", _descriptor, this);

          _initializerDefineProperty(this, "rayMaterial", _descriptor2, this);

          _initializerDefineProperty(this, "camera", _descriptor3, this);

          _initializerDefineProperty(this, "label", _descriptor4, this);

          _initializerDefineProperty(this, "ingnoreLayer", _descriptor5, this);

          this._raycastType = ERaycastType.ALL;
          this._ray = new geometry.Ray();
          this._maxDistance = 100;
          this._mask = 0xffffffff;
        }

        set maxDistance(v) {
          this._maxDistance = v;
          this.label.string = '当前检测距离：' + this._maxDistance.toString();
        }

        start() {
          this.maxDistance = this._maxDistance;
          this._mask &= ~this.ingnoreLayer;
        }

        onEnable() {
          systemEvent.on(SystemEventType.TOUCH_START, this.onTouchStart, this);
        }

        onDisable() {
          systemEvent.off(SystemEventType.TOUCH_START, this.onTouchStart, this);
        }

        onTouchStart(touch, event) {
          this.resetAll();
          this.camera.screenPointToRay(touch.getLocationX(), touch.getLocationY(), this._ray);

          switch (this._raycastType) {
            case ERaycastType.ALL:
              if (PhysicsSystem.instance.raycast(this._ray, this._mask, this._maxDistance)) {
                var r = PhysicsSystem.instance.raycastResults;

                for (var i = 0; i < r.length; i++) {
                  var item = r[i];
                  var modelCom = item.collider.node.getComponent(MeshRenderer);
                  modelCom.material = this.rayMaterial;
                }
              }

              break;

            case ERaycastType.CLOSEST:
              if (PhysicsSystem.instance.raycastClosest(this._ray, this._mask, this._maxDistance)) {
                var _r = PhysicsSystem.instance.raycastClosestResult;

                var _modelCom = _r.collider.node.getComponent(MeshRenderer);

                _modelCom.material = this.rayMaterial;
              }

              break;
          }
        }

        resetAll() {
          for (var i = 0; i < this.node.children.length; i++) {
            var modelCom = this.node.children[i].getComponent(MeshRenderer);
            modelCom.material = this.defaultMaterial;
          }
        }

        onToggle(toggleCom) {
          if (toggleCom.node.name == 'Toggle1') {
            this._raycastType = ERaycastType.ALL;
          } else if (toggleCom.node.name == 'Toggle2') {
            this._raycastType = ERaycastType.CLOSEST;
          }
        }

        onEditFinish(editBox) {
          var v = parseFloat(editBox.string);

          if (!isNaN(v)) {
            this.maxDistance = v;
          }
        }

        onMaskBtn(event) {
          var lb = event.target.getComponentInChildren(Label);

          if (this._mask != 0) {
            this._mask = 0;
            lb.string = "检测状态：off";
          } else {
            this._mask = 0xffffffff & ~this.ingnoreLayer;
            lb.string = "检测状态：on";
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "defaultMaterial", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rayMaterial", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ingnoreLayer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1977b707a95090049bfab0f0ade5f51bab49d043.js.map