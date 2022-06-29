System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, PhysicsSystem2D, Contact2DType, Color, Sprite, EPhysics2DDrawFlags, _dec, _class, _crd, ccclass, property, DragonBonesCollider;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Contact2DType = _cc.Contact2DType;
      Color = _cc.Color;
      Sprite = _cc.Sprite;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f90aXbeLNCPJyAQeWVGOp9", "DragonBonesCollider", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonBonesCollider", DragonBonesCollider = (_dec = ccclass('DragonBonesCollider'), _dec(_class = class DragonBonesCollider extends Component {
        constructor() {
          super(...arguments);
          this.touchingCountMap = new Map();
          this.debugDrawFlags = 0;
        }

        start() {
          // Your initialization goes here.
          PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          this.debugDrawFlags = PhysicsSystem2D.instance.debugDrawFlags;
        }

        onEnable() {
          PhysicsSystem2D.instance.debugDrawFlags = this.debugDrawFlags | EPhysics2DDrawFlags.Shape;
        }

        onDisable() {
          PhysicsSystem2D.instance.debugDrawFlags = this.debugDrawFlags;
        }

        addContact(c) {
          var count = this.touchingCountMap.get(c.node) || 0;
          this.touchingCountMap.set(c.node, ++count);
          var sprite = c.getComponent(Sprite);

          if (sprite) {
            sprite.color = Color.RED;
          }
        }

        removeContact(c) {
          var count = this.touchingCountMap.get(c.node) || 0;
          --count;

          if (count <= 0) {
            this.touchingCountMap.delete(c.node);
            var sprite = c.getComponent(Sprite);

            if (sprite) {
              sprite.color = Color.WHITE;
            }
          } else {
            this.touchingCountMap.set(c.node, count);
          }
        }

        onBeginContact(a, b) {
          this.addContact(a);
          this.addContact(b);
        }

        onEndContact(a, b) {
          this.removeContact(a);
          this.removeContact(b);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7345c83dc8190a5fe9449239433bab921b2b4f34.js.map