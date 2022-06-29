System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, instantiate, Item, ItemTemplate, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ItemList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItem(extras) {
    _reporterNs.report("Item", "./Item", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemTemplate(extras) {
    _reporterNs.report("ItemTemplate", "./ItemTemplate", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Item = _unresolved_2.Item;
    }, function (_unresolved_3) {
      ItemTemplate = _unresolved_3.ItemTemplate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0105f8nIRNK04CTnZ/5wb7y", "ItemList", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemList", ItemList = (_dec = ccclass('ItemList'), _dec2 = property([_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
        error: Error()
      }), Item) : Item]), _dec3 = property(Prefab), _dec(_class = (_class2 = class ItemList extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "items", _descriptor, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);
        }

        onLoad() {
          for (var i = 0; i < this.items.length; ++i) {
            var item = instantiate(this.itemPrefab);
            var data = this.items[i];
            this.node.addChild(item);
            item.getComponent(_crd && ItemTemplate === void 0 ? (_reportPossibleCrUseOfItemTemplate({
              error: Error()
            }), ItemTemplate) : ItemTemplate).init(data);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=405367237eac793e169340b9db61c551652523f0.js.map