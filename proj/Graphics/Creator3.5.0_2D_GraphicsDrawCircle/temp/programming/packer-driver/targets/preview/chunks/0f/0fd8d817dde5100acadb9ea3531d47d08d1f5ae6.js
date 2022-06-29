System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, Graphics, view, Label, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GraphicsFindAndDraw;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Graphics = _cc.Graphics;
      view = _cc.view;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b47bYdQglO/r7scX1XL/cV", "GraphicsFindAndDraw", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GraphicsFindAndDraw", GraphicsFindAndDraw = (_dec = ccclass('GraphicsFindAndDraw'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class GraphicsFindAndDraw extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "aNode", _descriptor, this);

          _initializerDefineProperty(this, "bNode", _descriptor2, this);

          _initializerDefineProperty(this, "cNode", _descriptor3, this);

          this.tempPosVec3 = new Vec3();
        }

        start() {
          this.aNode.on(Node.EventType.TOUCH_MOVE, this.onClickMove, this);
          this.bNode.on(Node.EventType.TOUCH_MOVE, this.onClickMove, this);
          this.cNode.on(Node.EventType.TOUCH_MOVE, this.onClickMove, this); // 初始化

          this.aNode.getChildByName("posLab").getComponent(Label).string = "(" + this.aNode.position.x.toFixed(2) + "," + this.aNode.position.y.toFixed(2) + ")";
          this.bNode.getChildByName("posLab").getComponent(Label).string = "(" + this.bNode.position.x.toFixed(2) + "," + this.bNode.position.y.toFixed(2) + ")";
          this.cNode.getChildByName("posLab").getComponent(Label).string = "(" + this.cNode.position.x.toFixed(2) + "," + this.cNode.position.y.toFixed(2) + ")";
        }

        onClickMove(evt) {
          var localPos = evt.getUILocation();
          var viewRect = view.getVisibleSize();
          this.tempPosVec3.set(localPos.x - viewRect.width / 2, localPos.y - viewRect.height / 2);
          evt.target.setPosition(this.tempPosVec3);
          var tempStr = "(" + this.tempPosVec3.x.toFixed(2) + "," + this.tempPosVec3.y.toFixed(2) + ")";
          evt.target.getChildByName("posLab").getComponent(Label).string = tempStr;
        }
        /**
         * 
         * @param p1 节点A的坐标
         * @param p2 节点B的坐标
         * @param p3 节点C的坐标
         * @returns {x,y,r}
         */


        findCircle(p1, p2, p3) {
          var pt1 = new Vec3();
          var pt2 = new Vec3();
          var center = new Vec3();
          pt1.set((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, 0);
          pt2.set((p1.x + p3.x) / 2, (p1.y + p3.y) / 2, 0);
          var k1 = p2.y == p1.y ? 1 : -(p2.x - p1.x) / (p2.y - p1.y);
          var k2 = p3.y == p1.y ? 1 : -(p3.x - p1.x) / (p3.y - p1.y);
          center.set((pt2.y - pt1.y - k2 * pt2.x + k1 * pt1.x) / (k1 - k2), pt1.y + k1 * (pt2.y - pt1.y - k2 * pt2.x + k2 * pt1.x) / (k1 - k2), 0);
          var radius = Math.sqrt((center.x - p1.x) * (center.x - p1.x) + (center.y - p1.y) * (center.y - p1.y));
          return {
            center: center,
            radius: radius
          };
        }

        onClickDraw() {
          var info = this.findCircle(this.aNode.position, this.bNode.position, this.cNode.position);
          var g = this.getComponent(Graphics);
          g.lineWidth = 2;
          g.strokeColor.fromHEX('#FFFFFF');
          g.circle(info.center.x, info.center.y, info.radius);
          g.stroke();
        }

        onClickClear() {
          var g = this.getComponent(Graphics);
          g.clear();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cNode", [_dec4], {
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
//# sourceMappingURL=0fd8d817dde5100acadb9ea3531d47d08d1f5ae6.js.map