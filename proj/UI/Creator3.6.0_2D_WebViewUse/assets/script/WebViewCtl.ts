
import { _decorator, Component, Node, Label, WebView, EditBox, __private } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WebViewCtl')
export class WebViewCtl extends Component {
    
    @property(Label)
    labelStatus !: Label;
    @property(WebView)
    webView !: WebView;
    @property(EditBox)
    url !: EditBox;

    onWebFinishLoad (sender: any, event:any) {
        var loadStatus = "";
        if (event === WebView.EventType.LOADED) {
            loadStatus = " is loaded!";
        } else if (event === WebView.EventType.LOADING) {
            loadStatus = " is loading!";
        } else if (event === WebView.EventType.ERROR) {
            loadStatus = ' load error!';
        }
        this.labelStatus.string = this.webView.url + loadStatus;
    }

    visitURL () {
        this.webView.url = this.url.string;
    }
}
