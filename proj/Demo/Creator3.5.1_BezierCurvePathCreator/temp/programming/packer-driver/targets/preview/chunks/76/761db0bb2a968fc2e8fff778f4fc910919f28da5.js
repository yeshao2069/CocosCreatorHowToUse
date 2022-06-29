System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, Label, Color, Graphics, EditBox, EventMouse, UITransform, Size, sys, Vec3, tween, view, Ident, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, DrawBezier;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIdent(extras) {
    _reporterNs.report("Ident", "./Enums", _context.meta, extras);
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
      Label = _cc.Label;
      Color = _cc.Color;
      Graphics = _cc.Graphics;
      EditBox = _cc.EditBox;
      EventMouse = _cc.EventMouse;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      sys = _cc.sys;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      view = _cc.view;
    }, function (_unresolved_2) {
      Ident = _unresolved_2.Ident;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c1aeFLOLRFrrQU9tFTJ/Kg", "drawBezier", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DrawBezier", DrawBezier = (_dec = ccclass('DrawBezier'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Label), _dec(_class = (_class2 = class DrawBezier extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "graphicsNode", _descriptor, this);

          _initializerDefineProperty(this, "box", _descriptor2, this);

          _initializerDefineProperty(this, "point", _descriptor3, this);

          _initializerDefineProperty(this, "control", _descriptor4, this);

          _initializerDefineProperty(this, "bezierColor", _descriptor5, this);

          _initializerDefineProperty(this, "lineColor", _descriptor6, this);

          _initializerDefineProperty(this, "infoWindow", _descriptor7, this);

          _initializerDefineProperty(this, "paper", _descriptor8, this);

          _initializerDefineProperty(this, "msg", _descriptor9, this);

          _initializerDefineProperty(this, "timeInfo", _descriptor10, this);

          _initializerDefineProperty(this, "deleteBtn", _descriptor11, this);

          _initializerDefineProperty(this, "mouseLocation", _descriptor12, this);

          this.isStartRun = false;
          this.resolution = {};
          this.prveRunTime = 0;
          this.prvePointCount = 0;
          this.currentRunTime = 0;
          this.actionLists = [];
        }

        onLoad() {
          this.init();
          window['EventListener'].on("setMouseLocation", this.setMouseLocation.bind(this));
          window['EventListener'].on("showDeleteBtn", this.showDeleteBtn.bind(this));
          window['EventListener'].on("hideDeleteBtn", this.hideDeleteBtn.bind(this));
        }

        init() {
          this.infoWindow.getComponent(UITransform).priority = 10;
          this.notice = this.infoWindow.getChildByName("notice").getComponent(Label);
          this.fileInputBox = this.infoWindow.getChildByName("Input").getChildByName("fileEditBox").getComponent(EditBox);
          var controlPanel = this.node.getChildByName("controlPanel");
          this.moveBtn = controlPanel.getChildByName("moveBtn");
          this.smoothnessInputBox = controlPanel.getChildByName("smoothnessInput").getChildByName("EditBox").getComponent(EditBox);
          this.runTimeInputBox = controlPanel.getChildByName("runTimeInput").getChildByName("EditBox").getComponent(EditBox);
          this.resolutionWidthInputBox = controlPanel.getChildByName("resolution").getChildByName("width").getComponent(EditBox);
          this.resolutionHeightInputBox = controlPanel.getChildByName("resolution").getChildByName("height").getComponent(EditBox);
          this.initGraphics();
          this.initNodeEvents();
          this.hideInfoWindow();
          this.addDeleteBtnEvents();
          this.initResolution();
          window['BezierData'].init(this.point, this.control, this.node);
          window['BezierData'].setBezierCurveRunTime(Number(this.runTimeInputBox.string));
          window['BezierData'].saveBezierPath();
        }

        update(dt) {
          window['NodeEvents'].setOperateStatus(!this.deleteBtn.active);
          this.drawBezierAll();

          if (this.isStartRun) {
            this.setCountTimeLabel(dt);
          }
        }

        initResolution() {
          this.resolution = window['BezierData'].getResolution();
          this.resolutionWidthInputBox.string = this.resolution.width;
          this.resolutionHeightInputBox.string = this.resolution.height;
          this.setPaperSize();
        }

        initGraphics() {
          this.ctx = this.graphicsNode.getComponent(Graphics);
          this.ctx.lineWidth = 2;
        }

        initNodeEvents() {
          window['NodeEvents'].addCanvasTouchEvents();
          this.box.ident = (_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).window;
          this.moveBtn.ident = (_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).window;
          this.moveBtn.parent.ident = (_crd && Ident === void 0 ? (_reportPossibleCrUseOfIdent({
            error: Error()
          }), Ident) : Ident).window;
          window['NodeEvents'].addDragEvents(this.box);
          window['NodeEvents'].addDragEvents(this.moveBtn, this.moveBtn.parent);
          this.addHideEvents(this.moveBtn.parent);
        }

        drawBezierAll() {
          this.ctx.clear();
          var bezierLists = window['BezierData'].getBezierCurveLists();

          for (var i = 0, len = bezierLists.length; i < len; i++) {
            var curve = bezierLists[i];
            var n = Object.keys(curve).length;

            if (n == 3) {
              this.drawBezier(curve.start.position, curve.control.position, curve.end.position);
            }

            if (n == 4) {
              this.drawThirdOrderBezier(curve.start.position, curve.control1.position, curve.control2.position, curve.end.position);
            }
          }
        }

        drawBezier(sPos, cPos, ePos) {
          // 因为坐标转换问题，需要在原本保存的节点坐标进行处理
          var startPos = sPos.clone();
          var controlPos = cPos.clone();
          var endPos = ePos.clone();
          var addSize = new Size();
          startPos.set(startPos.x + addSize.width / 2, startPos.y + addSize.height / 2, startPos.z);
          controlPos.set(controlPos.x + addSize.width / 2, controlPos.y + addSize.height / 2, controlPos.z);
          endPos.set(endPos.x + addSize.width / 2, endPos.y + addSize.height / 2, endPos.z);
          this.ctx.moveTo(startPos.x, startPos.y);
          this.ctx.strokeColor = this.bezierColor;
          this.ctx.quadraticCurveTo(controlPos.x, controlPos.y, endPos.x, endPos.y);
          this.ctx.stroke();
          this.ctx.moveTo(endPos.x, endPos.y);
          this.ctx.strokeColor = this.lineColor;
          this.ctx.lineTo(controlPos.x, controlPos.y);
          this.ctx.stroke();
        }

        drawThirdOrderBezier(sPos, cPos1, cPos2, ePos) {
          // 因为坐标转换问题，需要在原本保存的节点坐标进行处理
          var startPos = sPos.clone();
          var controlPos1 = cPos1.clone();
          var controlPos2 = cPos2.clone();
          var endPos = ePos.clone();
          var addSize = view.getVisibleSize();
          startPos.set(startPos.x + addSize.width / 2, startPos.y + addSize.height / 2, startPos.z);
          controlPos1.set(controlPos1.x + addSize.width / 2, controlPos1.y + addSize.height / 2, controlPos1.z);
          controlPos2.set(controlPos2.x + addSize.width / 2, controlPos2.y + addSize.height / 2, controlPos2.z);
          endPos.set(endPos.x + addSize.width / 2, endPos.y + addSize.height / 2, endPos.z);
          this.ctx.moveTo(startPos.x, startPos.y);
          this.ctx.strokeColor = this.bezierColor;
          this.ctx.bezierCurveTo(controlPos1.x, controlPos1.y, controlPos2.x, controlPos2.y, endPos.x, endPos.y);
          this.ctx.stroke();
          this.ctx.moveTo(startPos.x, startPos.y);
          this.ctx.strokeColor = this.lineColor;
          this.ctx.lineTo(controlPos1.x, controlPos1.y);
          this.ctx.stroke();
          this.ctx.moveTo(endPos.x, endPos.y);
          this.ctx.lineTo(controlPos2.x, controlPos2.y);
          this.ctx.stroke();
        }

        addHideEvents(node) {
          node.on(Node.EventType.MOUSE_MOVE, evt => {
            this.hideMouseLocation();
          });
        }

        convertToNodeSpace(event) {
          return this.node.getComponent(UITransform).convertToNodeSpaceAR(event.getUILocation());
        }

        addDeleteBtnEvents() {
          this.deleteBtn.on(Node.EventType.MOUSE_DOWN, evt => {
            evt.stopPropagation();

            if (evt.getButton() == EventMouse.BUTTON_LEFT) {
              if (window['BezierData'].isLastCurve()) {
                this.showMsg("不能删除最后一个曲线!!");
                return;
              }

              this.hideDeleteBtn();
              window['BezierData'].deletePoint(); //删除坐标点

              window['BezierData'].saveBezierPath(); //保存坐标点
            }
          });
        }

        save() {
          if (this.fileInputBox.string == "") {
            this.setNoitce("文件名不能为空!");
            return;
          }

          this.setNoitce('');
          this.computeBezierActions();
          this.saveBezierPathToJson(this.fileInputBox.string);
        }

        saveBezierPathToJson(name) {
          if (sys.isBrowser) {
            var datas = JSON.stringify(window['BezierData'].getBezierCurveData());
            var textFileAsBlob = new Blob([datas], {
              type: 'application/json'
            });
            var downloadLink = document.createElement("a");
            downloadLink.download = name;
            downloadLink.innerHTML = "Download File";

            if (window.webkitURL != null) {
              downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            } else {
              downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
              downloadLink.onclick = destroyClickedElement;
              downloadLink.style.display = "none";
              document.body.appendChild(downloadLink);
            }

            downloadLink.click();
          }
        }

        computeBezierActions() {
          var bezierCurveData = window['BezierData'].getBezierCurveData();
          this.actionLists = [];

          for (var i = 0, len = bezierCurveData.points.length; i < len; i++) {
            var point = bezierCurveData.points[i];
            var time = point.length / bezierCurveData.length * bezierCurveData.time;
            point.time = time;
            var toAction = {
              time: time,
              pos: new Vec3(point.x, point.y, 0)
            };
            this.actionLists.push(toAction);
          }
        }

        playMoveAnimation() {
          this.computeBezierActions();
          this.startCountTime();
          var t = tween(this.box);

          for (var i = 0; i < this.actionLists.length; i++) {
            var time = this.actionLists[i].time;
            var pos = this.actionLists[i].pos;
            t.to(time, {
              position: pos
            });
          }

          t.call(() => {
            this.stopCountTime();
            console.timeEnd("time");
          }).start();
        }

        setResolution(str, event, ident) {
          console.log(str, event, ident);
          var num = Number(str);

          if (str == "" || isNaN(num)) {
            this.showMsg("分辨率只能填写数字！！！");
            event.string = this.resolution[ident];
            return;
          }

          this.resolution[ident] = num;
          window['BezierData'].setResolution(this.resolution.width, this.resolution.height);
          this.setPaperSize();
          window['BezierData'].init(this.point, this.control, this.node);
        }

        setPaperSize() {
          var paperSize = new Size(this.resolution.width, this.resolution.height);
          this.paper.getComponent(UITransform).setContentSize(paperSize);
        }

        setRunTime(str) {
          var num = Number(str);

          if (str == "" || isNaN(num)) {
            this.showMsg("运行时间只能填写数字！！！");
            this.runTimeInputBox.string = (this.prveRunTime || 2).toString();
            return;
          }

          this.prveRunTime = num;
          window['BezierData'].setBezierCurveRunTime(num);
        }

        setCurveSmoothness(str) {
          console.log(str);
          var num = Number(str);

          if (str == "" || isNaN(num)) {
            this.showMsg("曲线平滑度只能填写数字！！！");
            this.smoothnessInputBox.string = (this.prvePointCount || 100).toString();
            return;
          }

          if (num < 0 || num > 1000) {
            this.showMsg("曲线平滑度取值范围在 0 - 1000！");
            this.smoothnessInputBox.string = (this.prvePointCount || 100).toString();
            return;
          }

          this.prvePointCount = num;
          window['BezierData'].setPointCount(num);
        }

        play() {
          window['BezierData'].saveBezierPath(); //保存坐标点

          this.playMoveAnimation();
        }

        showInfoWindow() {
          this.infoWindow.active = true;
          this.setNoitce('');
        }

        hideInfoWindow() {
          this.infoWindow.active = false;
        }

        setNoitce(str) {
          this.notice.string = str;
        }

        showMsg(msg) {
          this.msg.active = true;
          this.msg.getComponent(Label).string = msg;
          setTimeout(() => {
            if (this.msg) {
              this.msg.active = false;
            }
          }, 1000);
        }

        startCountTime() {
          this.isStartRun = true;
          this.timeInfo.string = '0';
          this.currentRunTime = 0;
        }

        stopCountTime() {
          this.isStartRun = false;
        }

        setCountTimeLabel(dt) {
          this.currentRunTime = this.currentRunTime + dt;
          this.timeInfo.string = "run time: " + this.currentRunTime.toFixed(2) + "s";
        }

        showDeleteBtn(pos) {
          this.deleteBtn.active = true;
          this.deleteBtn.setPosition(pos);
        }

        hideDeleteBtn() {
          this.deleteBtn.active = false;
        }

        setMouseLocation(pos) {
          this.mouseLocation.node.active = true;
          this.mouseLocation.node.setPosition(pos);
          this.mouseLocation.string = "x:" + pos.x.toFixed(0) + " y:" + pos.y.toFixed(0);
        }

        hideMouseLocation() {
          this.mouseLocation.node.active = false;
        }

        setCurveType(event) {
          console.log(event);
          window['BezierData'].setBezierCurveType(event.node._name);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "graphicsNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "box", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "point", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "control", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bezierColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 0, 0);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lineColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 255, 255);
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "infoWindow", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "paper", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "msg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "timeInfo", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "deleteBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "mouseLocation", [_dec11], {
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
//# sourceMappingURL=761db0bb2a968fc2e8fff778f4fc910919f28da5.js.map