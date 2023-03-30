
import { _decorator, Component, Node, CCFloat, Prefab, PageView,
    Label, instantiate, Vec3, Color, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PageViewCtl')
export class PageViewCtl extends Component {
    
    @property(CCFloat)
    curNum : number = 3;
    @property(CCFloat)
    curTotal : number = 10;
    @property(Prefab)
    pageTemple !: Prefab;
    @property(PageView)
    target !: PageView;
    @property(Label)
    label !: Label;

    _createPage () {
        var page = instantiate(this.pageTemple);
        page.setPosition(new Vec3());
        var color = new Color();
        color.r = Math.floor(Math.random() * 255);
        color.g = Math.floor(Math.random() * 255);
        color.b = Math.floor(Math.random() * 255);
        page.getComponent(Sprite)!.color = color;
        return page;
    }

    onLoad () {
        // 设置的当前页面为 1
        this.target.setCurrentPageIndex(0);
    }

    update () {
        // 当前页面索引
        this.label.string = "第" + (this.target.getCurrentPageIndex() + 1) + "页";
    }

    // 返回首页
    onJumpHome () {
        // 第二个参数为滚动所需时间，默认值为 0.3 秒
        this.target.scrollToPage(0);
    }

    // 添加页面
    plusPage (callback: any) {
        if (this.curNum > this.curTotal) {
            return;
        }
        this.curNum++;
        if (callback) {
            callback();
        }
    }

    // 减少页面
    lessPageNum (callback: any) {
        if (this.curNum <= 0) {
            return;
        }
        this.curNum--;
        if (callback) {
            callback();
        }
    }

    // 添加页面
    onAddPage () {
        this.plusPage(() => {
            this.target.addPage(this._createPage());
        });
    }

    // 插入当前页面
    onInsertPage () {
        this.plusPage(() => {
            this.target.insertPage(this._createPage(), this.target.getCurrentPageIndex());
        });
    }

    // 移除最后一个页面
    onRemovePage () {
        this.lessPageNum(() => {
            var pages = this.target.getPages();
            this.target.removePage(pages[pages.length - 1]);
        });
    }

    // 移除当前页面
    onRemovePageAtIndex () {
        this.lessPageNum(() => {
            this.target.removePageAtIndex(this.target.getCurrentPageIndex());
        });
    }

    // 移除所有页面
    onRemoveAllPage () {
        this.target.removeAllPages();
        this.curNum = 0;
    }

    // 监听事件
    onPageEvent (sender: any, eventType: any) {
        // 翻页事件
        if (eventType !== PageView.EventType.PAGE_TURNING) {
            return;
        }
        console.log("当前所在的页面索引:" + sender.getCurrentPageIndex());
    }
}
