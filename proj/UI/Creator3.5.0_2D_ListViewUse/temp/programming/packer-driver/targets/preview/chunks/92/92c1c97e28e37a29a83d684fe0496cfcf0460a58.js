System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, ScrollView, Label, Button, instantiate, error, UITransform, Vec3, CCFloat, Item, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, ListViewUse;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItem(extras) {
    _reporterNs.report("Item", "./Item", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      Label = _cc.Label;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      error = _cc.error;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      CCFloat = _cc.CCFloat;
    }, function (_unresolved_2) {
      Item = _unresolved_2.Item;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28745ZMffxKDpdhrYcaTJHa", "ListViewUse", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ListViewUse", ListViewUse = (_dec = ccclass('ListViewUse'), _dec2 = property(Node), _dec3 = property(ScrollView), _dec4 = property(CCFloat), _dec5 = property(CCFloat), _dec6 = property(CCFloat), _dec7 = property(CCFloat), _dec8 = property(Label), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Label), _dec13 = property(Label), _dec(_class = (_class2 = class ListViewUse extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemTemplate", _descriptor, this);

          _initializerDefineProperty(this, "scrollview", _descriptor2, this);

          _initializerDefineProperty(this, "spawnCount", _descriptor3, this);

          _initializerDefineProperty(this, "totalCount", _descriptor4, this);

          _initializerDefineProperty(this, "spacing", _descriptor5, this);

          _initializerDefineProperty(this, "bufferZone", _descriptor6, this);

          _initializerDefineProperty(this, "lblScrollEvent", _descriptor7, this);

          _initializerDefineProperty(this, "btnAddItem", _descriptor8, this);

          _initializerDefineProperty(this, "btnRemoveItem", _descriptor9, this);

          _initializerDefineProperty(this, "btnJumpToPosition", _descriptor10, this);

          _initializerDefineProperty(this, "lblJumpPosition", _descriptor11, this);

          _initializerDefineProperty(this, "lblTotalItems", _descriptor12, this);

          this.items = [];
          this.updateTimer = 0;
          this.updateInterval = 0;
          this.lastContentPosY = 0;
        }

        onLoad() {
          this.content = this.scrollview.content;
          this.items = []; // array to store spawned items

          this.initialize();
          this.updateTimer = 0;
          this.updateInterval = 0.2;
          this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
        }

        initialize() {
          this.content.getComponent(UITransform).height = this.totalCount * (this.itemTemplate.getComponent(UITransform).height + this.spacing) + this.spacing; // get total content height

          for (var i = 0; i < this.spawnCount; ++i) {
            // spawn items, we only need to do this once
            var item = instantiate(this.itemTemplate);
            this.content.addChild(item);
            item.setPosition(0, -item.getComponent(UITransform).height * (0.5 + i) - this.spacing * (i + 1));
            item.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
              error: Error()
            }), Item) : Item).initItem(i, i);
            this.items.push(item);
          }
        }

        getPositionInView(item) {
          // get item position in scrollview's node space
          var worldPos = item.parent.getComponent(UITransform).convertToWorldSpaceAR(item.position);
          var viewPos = this.scrollview.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          return viewPos;
        }

        update(dt) {
          this.updateTimer += dt;
          if (this.updateTimer < this.updateInterval) return; // we don't need to do the math every frame

          this.updateTimer = 0;
          var items = this.items;
          var buffer = this.bufferZone;
          var isDown = this.scrollview.content.getPosition().y < this.lastContentPosY; // scrolling direction

          var offset = (this.itemTemplate.getComponent(UITransform).height + this.spacing) * items.length;

          for (var i = 0; i < items.length; ++i) {
            var viewPos = this.getPositionInView(items[i]);

            if (isDown) {
              // if away from buffer zone and not reaching top of content
              if (viewPos.y < -buffer && items[i].getPosition().y + offset < 0) {
                var pos = items[i].getPosition();
                pos.y += offset;
                items[i].setPosition(pos);
                var item = items[i].getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
                  error: Error()
                }), Item) : Item);
                var itemId = item.itemID - items.length; // update item id

                item.updateItem(itemId);
              }
            } else {
              // if away from buffer zone and not reaching bottom of content
              if (viewPos.y > buffer && items[i].getPosition().y - offset > -this.content.getComponent(UITransform).height) {
                var _pos = items[i].getPosition();

                _pos.y -= offset;
                items[i].setPosition(_pos);

                var _item = items[i].getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
                  error: Error()
                }), Item) : Item);

                var _itemId = _item.itemID + items.length;

                _item.updateItem(_itemId);
              }
            }
          } // update lastContentPosY


          this.lastContentPosY = this.scrollview.content.getPosition().y;
          this.lblTotalItems.string = "Total Items: " + this.totalCount;
        }

        scrollEvent(sender, event) {
          switch (event) {
            case 0:
              this.lblScrollEvent.string = "Scroll to Top";
              break;

            case 1:
              this.lblScrollEvent.string = "Scroll to Bottom";
              break;

            case 2:
              this.lblScrollEvent.string = "Scroll to Left";
              break;

            case 3:
              this.lblScrollEvent.string = "Scroll to Right";
              break;

            case 4:
              this.lblScrollEvent.string = "Scrolling";
              break;

            case 5:
              this.lblScrollEvent.string = "Bounce Top";
              break;

            case 6:
              this.lblScrollEvent.string = "Bounce bottom";
              break;

            case 7:
              this.lblScrollEvent.string = "Bounce left";
              break;

            case 8:
              this.lblScrollEvent.string = "Bounce right";
              break;

            case 9:
              this.lblScrollEvent.string = "Auto scroll ended";
              break;
          }
        }

        addItem() {
          this.content.getComponent(UITransform).height = (this.totalCount + 1) * (this.itemTemplate.getComponent(UITransform).height + this.spacing) + this.spacing; // get total content height

          this.totalCount = this.totalCount + 1;
        }

        removeItem() {
          if (this.totalCount - 1 < 30) {
            error("can't remove item less than 30!");
            return;
          }

          this.content.getComponent(UITransform).height = (this.totalCount - 1) * (this.itemTemplate.getComponent(UITransform).height + this.spacing) + this.spacing; // get total content height

          this.totalCount = this.totalCount - 1;
          this.moveBottomItemToTop();
        }

        moveBottomItemToTop() {
          var offset = (this.itemTemplate.getComponent(UITransform).height + this.spacing) * this.items.length;
          var length = this.items.length;
          var item = this.getItemAtBottom(); // whether need to move to top

          if (item.getPosition().y + offset < 0) {
            var pos = item.getPosition();
            pos.y += offset;
            item.setPosition(pos);
            var itemComp = item.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
              error: Error()
            }), Item) : Item);
            var itemId = itemComp.itemID - length;
            itemComp.updateItem(itemId);
          }
        }

        getItemAtBottom() {
          var item = this.items[0];

          for (var i = 1; i < this.items.length; ++i) {
            if (item.getPosition().y > this.items[i].getPosition().y) {
              item = this.items[i];
            }
          }

          return item;
        }

        scrollToFixedPosition() {
          this.scrollview.scrollToOffset(new Vec3(0, 500, 0), 2);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemplate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollview", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spawnCount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "totalCount", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spacing", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bufferZone", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lblScrollEvent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnAddItem", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnRemoveItem", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btnJumpToPosition", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lblJumpPosition", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lblTotalItems", [_dec13], {
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
//# sourceMappingURL=92c1c97e28e37a29a83d684fe0496cfcf0460a58.js.map