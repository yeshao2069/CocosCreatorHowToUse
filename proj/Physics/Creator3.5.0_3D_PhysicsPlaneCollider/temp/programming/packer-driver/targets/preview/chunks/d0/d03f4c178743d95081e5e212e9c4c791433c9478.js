System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, resources, systemEvent, SystemEventType, geometry, Camera, PhysicsSystem, Enum, macro, game, PrefabPoolUtil, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, menu, ERaycastType, EKey, RaycastHelper;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPrefabPoolUtil(extras) {
    _reporterNs.report("PrefabPoolUtil", "./PrefabPoolUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      geometry = _cc.geometry;
      Camera = _cc.Camera;
      PhysicsSystem = _cc.PhysicsSystem;
      Enum = _cc.Enum;
      macro = _cc.macro;
      game = _cc.game;
    }, function (_unresolved_2) {
      PrefabPoolUtil = _unresolved_2.PrefabPoolUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e3c67ctQpK0JoRYrtDyYyG", "RaycastHelper", undefined);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      (function (ERaycastType) {
        ERaycastType[ERaycastType["ALL"] = 0] = "ALL";
        ERaycastType[ERaycastType["CLOSEST"] = 1] = "CLOSEST";
      })(ERaycastType || (ERaycastType = {}));

      Enum(ERaycastType);

      (function (EKey) {
        EKey[EKey["r"] = macro.KEY.r] = "r";
        EKey[EKey["g"] = macro.KEY.g] = "g";
        EKey[EKey["b"] = macro.KEY.b] = "b";
      })(EKey || (EKey = {}));

      Enum(EKey);

      _export("RaycastHelper", RaycastHelper = (_dec = ccclass('RaycastHelper'), _dec2 = property({
        type: Camera
      }), _dec3 = property({
        type: ERaycastType
      }), _dec4 = property({
        type: EKey,
        tooltip: "开关，控制全局"
      }), _dec(_class = (_class2 = (_class3 = class RaycastHelper extends Component {
        constructor() {
          super(...arguments);
          this._cache = [];

          _initializerDefineProperty(this, "cameraCom", _descriptor, this);

          _initializerDefineProperty(this, "raycastType", _descriptor2, this);

          _initializerDefineProperty(this, "switch", _descriptor3, this);

          _initializerDefineProperty(this, "scale", _descriptor4, this);
        }

        __preload() {
          if (RaycastHelper._point == null) {
            resources.load('common/Point', Prefab, function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              if (args) {
                if (args[0]) {
                  console.error(args[0]);
                } else {
                  RaycastHelper._point = args[1];
                  RaycastHelper._enable = true;
                }
              }
            });
          }

          game.addPersistRootNode(RaycastHelper._container);
        }

        onEnable() {
          systemEvent.on(SystemEventType.TOUCH_START, this.onTouchStart, this);
          systemEvent.on(SystemEventType.KEY_DOWN, this.onKeyDown, this);
        }

        onDisable() {
          systemEvent.off(SystemEventType.TOUCH_START, this.onTouchStart, this);
          systemEvent.off(SystemEventType.KEY_DOWN, this.onKeyDown, this);
        }

        onDestroy() {
          this.recover();
        }

        onKeyDown(event) {
          if (event.keyCode == this.switch) {
            RaycastHelper._enable = !RaycastHelper._enable;
          }
        }

        onTouchStart(touch) {
          if (!RaycastHelper._enable) return;
          this.recover();
          var r = new geometry.ray();
          var p = touch.getLocation();
          this.cameraCom.screenPointToRay(p.x, p.y, r);

          if (this.raycastType == ERaycastType.CLOSEST) {
            if (PhysicsSystem.instance.raycastClosest(r)) {
              var result = PhysicsSystem.instance.raycastClosestResult;
              var clone = (_crd && PrefabPoolUtil === void 0 ? (_reportPossibleCrUseOfPrefabPoolUtil({
                error: Error()
              }), PrefabPoolUtil) : PrefabPoolUtil).getItemByPoolName('COMMON.Point', RaycastHelper._point);

              this._cache.push(clone);

              clone.setWorldPosition(result.hitPoint);
              clone.setScale(this.scale, this.scale, this.scale);

              RaycastHelper._container.addChild(clone);
            }
          } else if (this.raycastType == ERaycastType.ALL) {
            if (PhysicsSystem.instance.raycast(r)) {
              var results = PhysicsSystem.instance.raycastResults;

              for (var i = 0; i < results.length; i++) {
                var _result = results[i];

                var _clone = (_crd && PrefabPoolUtil === void 0 ? (_reportPossibleCrUseOfPrefabPoolUtil({
                  error: Error()
                }), PrefabPoolUtil) : PrefabPoolUtil).getItemByPoolName('COMMON.Point', RaycastHelper._point);

                this._cache.push(_clone);

                _clone.setWorldPosition(_result.hitPoint);

                _clone.setScale(this.scale, this.scale, this.scale);

                RaycastHelper._container.addChild(_clone);
              }
            }
          }
        }

        recover() {
          var len = this._cache.length;

          while (len--) {
            (_crd && PrefabPoolUtil === void 0 ? (_reportPossibleCrUseOfPrefabPoolUtil({
              error: Error()
            }), PrefabPoolUtil) : PrefabPoolUtil).recoverItemByPoolName('COMMON.Point', this._cache.pop(), true);
          }
        }

      }, _class3._point = null, _class3._enable = false, _class3._container = new Node("_RAYCAST_CONTAINER_"), _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cameraCom", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "raycastType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ERaycastType.CLOSEST;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "switch", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return macro.KEY.r;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d03f4c178743d95081e5e212e9c4c791433c9478.js.map