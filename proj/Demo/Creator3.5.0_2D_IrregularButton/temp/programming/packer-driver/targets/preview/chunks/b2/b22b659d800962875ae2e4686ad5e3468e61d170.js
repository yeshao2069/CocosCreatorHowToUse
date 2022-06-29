System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec2, Color, UITransform, Vec3, Sprite, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, IrregularButton;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
      Color = _cc.Color;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "801f0pS2QxGt7PSXhv+KL3w", "IrregularButton", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", IrregularButton = (_dec = ccclass('IrregularButton'), _dec2 = property(Node), _dec(_class = (_class2 = class IrregularButton extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "wrapper", _descriptor, this);

          this.childWposList = [];
        }

        start() {
          this.childWposList = this.wrapper.children.map(node => {
            return node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3());
          });
          this.wrapper.on(Node.EventType.TOUCH_START, this.onTap, this);
        }

        onTap(e) {
          var touchPos = e.getUILocation(); // 每个子节点与点击坐标的距离集合

          var dis_list = []; // 遍历所有子节点坐标得出与鼠标的距离然后升序排列

          var dis_list_sort = this.childWposList.map(wpos => {
            var tmpVec2 = new Vec2(wpos.x, wpos.y);
            var dis = tmpVec2.subtract(touchPos).lengthSqr(); // 记录距离值

            dis_list.push(dis);
            return dis;
          }).sort((a, b) => a - b); // 获取排序最前面的索引

          var nearest_index = dis_list.indexOf(dis_list_sort[0]); // 颜色修改
          // 先全部恢复白色

          this.wrapper.children.forEach(node => {
            node.getComponent(Sprite).color = Color.WHITE;
          }); // 设置目标颜色 红色

          this.wrapper.children[nearest_index].getComponent(Sprite).color = Color.RED;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "wrapper", [_dec2], {
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
//# sourceMappingURL=b22b659d800962875ae2e4686ad5e3468e61d170.js.map