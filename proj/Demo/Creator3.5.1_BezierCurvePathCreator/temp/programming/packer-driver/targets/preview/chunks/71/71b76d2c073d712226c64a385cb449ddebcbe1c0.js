System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, find, game, _decorator, Node, EventMouse, UITransform, UIOpacity, Vec3, BezierCurveType, Ident, NodeEvents, _crd, ccclass, property;

  function _reportPossibleCrUseOfBezierCurveType(extras) {
    _reporterNs.report("BezierCurveType", "./Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIdent(extras) {
    _reporterNs.report("Ident", "./Enums", _context.meta, extras);
  }

  _export("NodeEvents", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      find = _cc.find;
      game = _cc.game;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      EventMouse = _cc.EventMouse;
      UITransform = _cc.UITransform;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BezierCurveType = _unresolved_2.BezierCurveType;
      Ident = _unresolved_2.Ident;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09ffeHRa95D+4fI4+Flx7Mh", "NodeEvents", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ccclass('NodeEvents');

      _export("NodeEvents", NodeEvents = class NodeEvents {
        constructor() {
          this.isMouseDown = false;
          this.isOperate = true;
        }

        // 屏幕坐标转换到节点坐标
        convertToNodeSpace(evt) {
          var pos = evt.getUILocation();
          var tempPos = new Vec3(pos.x, pos.y, 0);
          return find("Canvas").getComponent(UITransform).convertToNodeSpaceAR(tempPos);
        } // 是否能删除


        isDelete(node) {
          return node.ident == (_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).point;
        } // 是否在绘制区域


        atDrawingArea(pos) {
          var resolution = window['BezierData'].getResolution();
          var halfW = resolution.width / 2;
          var halfH = resolution.height / 2;
          return pos.x > -halfW && pos.x < halfW && pos.y > -halfH && pos.y < halfH;
        } // 是否能拖拽


        isDragMove(mousePos, target) {
          var flag = false;

          switch (target.ident) {
            case (_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
              error: Error()
            }), Ident) : Ident).point:
            case (_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
              error: Error()
            }), Ident) : Ident).control:
              flag = this.atDrawingArea(mousePos);
              break;

            case (_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
              error: Error()
            }), Ident) : Ident).window:
              flag = true;
          }

          console.log(target.name, target.ident);
          return flag;
        }

        setMoveTargetNode(target) {
          this.moveTargetNode = target;
        }

        setOperateStatus(bol) {
          this.isOperate = bol;
        } // 添加拖拽事件


        addDragEvents(node, target) {
          if (target === void 0) {
            target = node;
          }

          // 鼠标按下
          node.on(Node.EventType.MOUSE_DOWN, event => {
            event.propagationStopped = true; // 鼠标右键

            if (event.getButton() == EventMouse.BUTTON_LEFT
            /**&& _this.isOperate()**/
            ) {
              this.moveTargetNode = target;
              this.isMouseDown = true;
            }
          }); // 鼠标移动

          node.on(Node.EventType.MOUSE_MOVE, evt => {
            target.getComponent(UIOpacity).opacity = 100;
            game.canvas.style.cursor = "all-scroll"; //鼠标按下并且有指定目标节点

            if (this.isMouseDown && this.moveTargetNode) {
              //把屏幕坐标转换到节点坐标下
              var mousePos = this.convertToNodeSpace(evt);

              if (this.isDragMove(mousePos, this.moveTargetNode)) {
                this.moveTargetNode.setPosition(mousePos);
              }
            }
          }); // 鼠标离开

          node.on(Node.EventType.MOUSE_LEAVE, evt => {
            target.getComponent(UIOpacity).opacity = 255;
            game.canvas.style.cursor = "auto";
          }); // 鼠标抬起

          node.on(Node.EventType.MOUSE_UP, evt => {
            this.isMouseDown = false;
            this.moveTargetNode = null;
            window['BezierData'].saveBezierPath(); //保存坐标点
          });
        } // 添加节点的删除事件


        addPointDeleteEvents(node) {
          // 鼠标按下
          node.on(Node.EventType.MOUSE_DOWN, evt => {
            // 鼠标右键
            if (evt.getButton() == EventMouse.BUTTON_RIGHT) {
              if (this.isDelete(evt.target)) {
                var mousePos = this.convertToNodeSpace(evt); // this.deleteTarget = event.target;

                window['BezierData'].setDeleteTarget(evt.target);
                window['EventListener'].emit("showDeleteBtn", mousePos);
              }

              return;
            }
          });
        } // 添加Canvas节点事件


        addCanvasTouchEvents(canvasNode) {
          if (canvasNode === void 0) {
            canvasNode = find("Canvas");
          }

          var target; // 鼠标按下

          canvasNode.on(Node.EventType.MOUSE_DOWN, evt => {
            // 鼠标左键
            if (evt.getButton() == EventMouse.BUTTON_LEFT) {
              evt.propagationStopped = true;
              target = evt.target; //创建坐标点,需要先把屏幕坐标转换到节点坐标下

              var mousePos = this.convertToNodeSpace(evt);
              if (!this.atDrawingArea(mousePos)) return;

              if (!this.isOperate) {
                window['EventListener'].emit("hideDeleteBtn", null);
              }

              console.log(" BUTTON_LEFT ", mousePos); // 二阶

              if (window['BezierData'].getBezierCurveType() == (_crd && BezierCurveType === void 0 ? (_reportPossibleCrUseOfBezierCurveType({
                error: Error()
              }), BezierCurveType) : BezierCurveType).SecondOrder) {
                window['BezierData'].createCurve(mousePos);
              } // 三阶


              if (window['BezierData'].getBezierCurveType() == (_crd && BezierCurveType === void 0 ? (_reportPossibleCrUseOfBezierCurveType({
                error: Error()
              }), BezierCurveType) : BezierCurveType).ThirdOrder) {
                window['BezierData'].createThirdOrderCurve(mousePos);
              }

              this.isMouseDown = true;
            }
          }); // 鼠标移动

          canvasNode.on(Node.EventType.MOUSE_MOVE, evt => {
            target = evt.target; //创建坐标点,需要先把屏幕坐标转换到节点坐标下

            var mousePos = this.convertToNodeSpace(evt);
            window['EventListener'].emit("setMouseLocation", mousePos); //鼠标按下并且有指定目标节点

            if (this.isMouseDown && this.moveTargetNode && this.isDragMove(mousePos, this.moveTargetNode)) {
              console.log("moveTargetNode.setPosition(mousePos);");
              this.moveTargetNode.setPosition(mousePos);
            }
          }); // 鼠标抬起

          canvasNode.on(Node.EventType.MOUSE_UP, evt => {
            target = evt.target;
            this.isMouseDown = false;
            this.moveTargetNode = null;
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=71b76d2c073d712226c64a385cb449ddebcbe1c0.js.map