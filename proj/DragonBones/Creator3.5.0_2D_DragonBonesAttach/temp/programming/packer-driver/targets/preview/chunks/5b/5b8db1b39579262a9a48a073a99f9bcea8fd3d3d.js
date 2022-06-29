System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Node, Component, instantiate, Label, Color, Prefab, dragonBones, Sprite, Vec3, _dec, _dec2, _dec3, _dec4, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, _class;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Color = _cc.Color;
      Prefab = _cc.Prefab;
      dragonBones = _cc.dragonBones;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd83dH0BktHrrwqZVE2WIOb", "DragonBonesAttach", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", _class = (_dec = ccclass('DragonBonesAttach'), _dec2 = property({
        type: dragonBones.ArmatureDisplay
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Label
      }), _dec(_class2 = (_class3 = class _class3 extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "skeleton", _descriptor, this);

          _initializerDefineProperty(this, "targetPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "modeLabel", _descriptor3, this);

          _initializerDefineProperty(this, "redBoneName", _descriptor4, this);

          _initializerDefineProperty(this, "greenBoneName", _descriptor5, this);

          _initializerDefineProperty(this, "blueBoneName", _descriptor6, this);
        }

        generateAllNodes() {
          this.destroyAllNodes();
          var red = this.createSocket(this.redBoneName, new Color(255, 0, 0));
          var green = this.createSocket(this.greenBoneName, new Color(0, 255, 0));
          var blue = this.createSocket(this.blueBoneName, new Color(0, 0, 255));
          this.skeleton.sockets = [red, green, blue];
        }

        destroyUnusual() {
          this.destroyAllNodes();
        }

        destroyAllNodes() {
          var sockets = this.skeleton.sockets;

          for (var s of sockets) {
            s.target.removeFromParent();
          }

          this.skeleton.sockets = [];
        }

        generateSomeNodes() {
          var sockets = this.skeleton.sockets;
          var greens = sockets.filter(x => {
            var _x$target;

            return ((_x$target = x.target) == null ? void 0 : _x$target.name) == this.greenBoneName;
          });

          if (greens.length === 0) {
            var green = this.createSocket(this.greenBoneName, new Color(0, 255, 0));
            sockets.push(green);
            green.target.setScale(new Vec3(0.3, 0.3, 1));
            this.skeleton.sockets = sockets;
          }
        }

        destroySomeNodes() {
          var sockets = this.skeleton.sockets;

          for (var l = sockets.length - 1; l >= 0; l--) {
            if (sockets[l].target.name === this.greenBoneName) {
              var s = sockets.splice(l, 1);
              s[0].target.removeFromParent();
              this.skeleton.sockets = sockets;
              break;
            }
          }
        }

        changeMode() {
          var isCached = this.skeleton.isAnimationCached();

          if (isCached) {
            this.skeleton.setAnimationCacheMode(dragonBones.ArmatureDisplay.AnimationCacheMode.REALTIME);
            this.modeLabel.string = "cache";
          } else {
            this.skeleton.setAnimationCacheMode(dragonBones.ArmatureDisplay.AnimationCacheMode.SHARED_CACHE);
            this.modeLabel.string = "realtime";
          }
        }

        createSocket(name, color) {
          var dbNode = new dragonBones.DragonBoneSocket();
          dbNode.path = this.skeleton.querySocketPathByName(name)[0];
          var newNode = new Node();
          newNode.addChild(instantiate(this.targetPrefab));
          var child = dbNode.target = newNode;
          child.parent = this.node;
          child.name = name;
          var sp = child.getComponent(Sprite);
          sp.sizeMode = Sprite.SizeMode.CUSTOM;
          sp.color = color;
          return dbNode;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "skeleton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "targetPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "modeLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "redBoneName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "toujiaoR";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "greenBoneName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "shouL";
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "blueBoneName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "bone24";
        }
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b8db1b39579262a9a48a073a99f9bcea8fd3d3d.js.map