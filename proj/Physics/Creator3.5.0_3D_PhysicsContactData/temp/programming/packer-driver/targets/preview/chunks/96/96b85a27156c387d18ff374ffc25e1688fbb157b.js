System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Prefab, resources, instantiate, Collider, game, Vec3, Quat, _dec, _class, _class2, _crd, ccclass, property, q_0, ContactPointHelper;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
      instantiate = _cc.instantiate;
      Collider = _cc.Collider;
      game = _cc.game;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70c4cCZwHZAJ7uQHwxJ/JlA", "ContactPointHelper", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      q_0 = new Quat();

      _export("ContactPointHelper", ContactPointHelper = (_dec = ccclass('ContactPointHelper'), _dec(_class = (_class2 = class ContactPointHelper extends Component {
        constructor() {
          super(...arguments);
          this._entityMap = new Map();
        }

        __preload() {
          if (ContactPointHelper._point == null && !(ContactPointHelper._flag & 1)) {
            ContactPointHelper._flag |= 1 << 0;
            resources.load('common/Point', Prefab, function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              if (args) {
                if (args[0]) {
                  console.error(args[0]);
                } else {
                  ContactPointHelper._point = args[1];
                }
              }
            });
          }

          if (ContactPointHelper._arrow == null && !(ContactPointHelper._flag & 1 << 1)) {
            ContactPointHelper._flag |= 1 << 1;
            resources.load('common/Arrow', Prefab, function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              if (args) {
                if (args[0]) {
                  console.error(args[0]);
                } else {
                  ContactPointHelper._arrow = args[1];
                }
              }
            });
          }

          if (ContactPointHelper._container == null) {
            ContactPointHelper._container = new Node('__CONTACT_POINT__');
            game.addPersistRootNode(ContactPointHelper._container);
          }
        }

        onLoad() {
          ContactPointHelper._insArr.push(this);
        }

        onEnable() {
          var colliders = this.getComponents(Collider);
          var that = this;
          colliders.forEach(e => {
            e.on('onCollisionEnter', that.onCollision, that);
            e.on('onCollisionStay', that.onCollision, that);
            e.on('onCollisionExit', that.onCollision, that);
          });
        }

        onDisable() {
          var colliders = this.getComponents(Collider);
          var that = this;
          colliders.forEach(e => {
            e.off('onCollisionEnter', that.onCollision, that);
            e.off('onCollisionStay', that.onCollision, that);
            e.off('onCollisionExit', that.onCollision, that);
          });
        }

        onCollision(event) {
          if (ContactPointHelper._point && ContactPointHelper._arrow) {
            if (!this._entityMap.has(event.otherCollider.uuid)) this._entityMap.set(event.otherCollider.uuid, {
              pt: [],
              aw: []
            });

            var map = this._entityMap.get(event.otherCollider.uuid);

            map.pt.forEach(e => {
              e.active = false;
            });
            map.aw.forEach(e => {
              e.active = false;
            });
            event.contacts.forEach((e, i) => {
              var wp = new Vec3();
              var wn = new Vec3();

              if (e.isBodyA) {
                e.getWorldPointOnA(wp);
                e.getWorldNormalOnB(wn);
              } else {
                e.getWorldPointOnB(wp);
                e.getWorldNormalOnA(wn);
              }

              var pt, aw;

              if (map.pt.length > i) {
                pt = map.pt[i];
                aw = map.aw[i];
                pt.active = true;
                aw.active = true;
              } else {
                pt = instantiate(ContactPointHelper._point);
                pt.setWorldScale(0.25, 0.25, 0.25);
                pt.setParent(ContactPointHelper._container);
                aw = instantiate(ContactPointHelper._arrow);
                aw.setParent(ContactPointHelper._container);
                map.pt.push(pt);
                map.aw.push(aw);
              }

              pt.setWorldPosition(wp);
              aw.setWorldPosition(wp);
              Quat.rotationTo(q_0, Vec3.UNIT_Z, wn);
              aw.setWorldRotation(q_0);
            });
          }
        }

        onDestroy() {
          var index = ContactPointHelper._insArr.indexOf(this);

          if (index >= 0) {
            ContactPointHelper._insArr.splice(index, 1);
          }

          this._entityMap.forEach(e => {
            e.pt.forEach(t => {
              t.removeFromParent();
              t.destroy();
            });
            e.aw.forEach(b => {
              b.removeFromParent();
              b.destroy();
            });
          });
        }

      }, _class2._point = null, _class2._arrow = null, _class2._flag = 0, _class2._insArr = [], _class2._container = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=96b85a27156c387d18ff374ffc25e1688fbb157b.js.map