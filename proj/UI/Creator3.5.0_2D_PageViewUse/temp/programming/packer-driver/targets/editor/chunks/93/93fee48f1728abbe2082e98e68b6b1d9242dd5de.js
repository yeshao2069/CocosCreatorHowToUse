System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, CCFloat, Prefab, PageView, Label, instantiate, Vec3, Color, Sprite, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, PageViewCtl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CCFloat = _cc.CCFloat;
      Prefab = _cc.Prefab;
      PageView = _cc.PageView;
      Label = _cc.Label;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      Color = _cc.Color;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec3c8toZgVCSonPRWAQIMz4", "PageViewCtl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PageViewCtl", PageViewCtl = (_dec = ccclass('PageViewCtl'), _dec2 = property(CCFloat), _dec3 = property(CCFloat), _dec4 = property(Prefab), _dec5 = property(PageView), _dec6 = property(Label), _dec(_class = (_class2 = class PageViewCtl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "curNum", _descriptor, this);

          _initializerDefineProperty(this, "curTotal", _descriptor2, this);

          _initializerDefineProperty(this, "pageTemple", _descriptor3, this);

          _initializerDefineProperty(this, "target", _descriptor4, this);

          _initializerDefineProperty(this, "label", _descriptor5, this);
        }

        _createPage() {
          var page = instantiate(this.pageTemple);
          page.setPosition(new Vec3());
          var color = new Color();
          color.r = Math.floor(Math.random() * 255);
          color.g = Math.floor(Math.random() * 255);
          color.b = Math.floor(Math.random() * 255);
          page.getComponent(Sprite).color = color;
          return page;
        }

        onLoad() {
          // 设置的当前页面为 1
          this.target.setCurrentPageIndex(0);
        }

        update() {
          // 当前页面索引
          this.label.string = "第" + (this.target.getCurrentPageIndex() + 1) + "页";
        } // 返回首页


        onJumpHome() {
          // 第二个参数为滚动所需时间，默认值为 0.3 秒
          this.target.scrollToPage(0);
        } // 添加页面


        plusPage(callback) {
          if (this.curNum > this.curTotal) {
            return;
          }

          this.curNum++;

          if (callback) {
            callback();
          }
        } // 减少页面


        lessPageNum(callback) {
          if (this.curNum <= 0) {
            return;
          }

          this.curNum--;

          if (callback) {
            callback();
          }
        } // 添加页面


        onAddPage() {
          this.plusPage(() => {
            this.target.addPage(this._createPage());
          });
        } // 插入当前页面


        onInsertPage() {
          this.plusPage(() => {
            this.target.insertPage(this._createPage(), this.target.getCurrentPageIndex());
          });
        } // 移除最后一个页面


        onRemovePage() {
          this.lessPageNum(() => {
            var pages = this.target.getPages();
            this.target.removePage(pages[pages.length - 1]);
          });
        } // 移除当前页面


        onRemovePageAtIndex() {
          this.lessPageNum(() => {
            this.target.removePageAtIndex(this.target.getCurrentPageIndex());
          });
        } // 移除所有页面


        onRemoveAllPage() {
          this.target.removeAllPages();
          this.curNum = 0;
        } // 监听事件


        onPageEvent(sender, eventType) {
          // 翻页事件
          if (eventType !== PageView.EventType.PAGE_TURNING) {
            return;
          }

          console.log("当前所在的页面索引:" + sender.getCurrentPageIndex());
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "curNum", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "curTotal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pageTemple", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec6], {
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
//# sourceMappingURL=93fee48f1728abbe2082e98e68b6b1d9242dd5de.js.map