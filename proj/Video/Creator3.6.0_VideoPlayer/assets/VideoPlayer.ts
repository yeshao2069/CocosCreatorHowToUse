
import { _decorator, Component, Node, VideoPlayer, Label, LabelComponent, sys, log,
    } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('VideoPlayerCtl')
export class VideoPlayerCtl extends Component {
   
    @property(VideoPlayer)
    videoPlayer !: VideoPlayer;
    @property(Label)
    statusLabel !: Label;
    @property(Label)
    currentTime !: Label;
    @property(Label)
    resSwitchBtnLabel !: Label;
    @property(Node)
    controlButtons !: Node;
    @property(Node)
    keep_Ratio_Switch !: Node;
    @property(Node)
    playVideoArea !: Node;
    @property(Label)
    visibility !: Label;

    start () {
        // this.controlButtons.active = false;
        this.keep_Ratio_Switch.active = !(sys.isBrowser || sys.platform === sys.WECHAT_GAME);
        this.playVideoArea.on(Node.EventType.TOUCH_END, () => {
            this.videoPlayer.play();
        });
    }

    getStatus (event: any) {
        switch (event) {
            case VideoPlayer.EventType.PLAYING:
                return 'PLAYING';
            case VideoPlayer.EventType.PAUSED:
                return 'PAUSED';
            case VideoPlayer.EventType.STOPPED:
                return 'STOPPED';
            case VideoPlayer.EventType.COMPLETED:
                return 'COMPLETED';
            case VideoPlayer.EventType.META_LOADED:
                return 'META_LOADED';
            case VideoPlayer.EventType.CLICKED:
                return 'CLICKED';
            case VideoPlayer.EventType.READY_TO_PLAY:
                return 'READY_TO_PLAY';
            default:
                return 'NONE';
        }
    }

    onVideoPlayerEvent (sender: any, event: any) {
        this.statusLabel.string = 'Status: ' + this.getStatus(event);
        if (event === VideoPlayer.EventType.CLICKED) {
            if (this.videoPlayer.isPlaying) {
                this.videoPlayer.pause();
            } else {
                this.videoPlayer.play();
            }
        }
        else if (event === VideoPlayer.EventType.READY_TO_PLAY || event === VideoPlayer.EventType.META_LOADED) {
            this.controlButtons.active = true;
            this.playVideoArea.active = true;
        }
        else if (event === VideoPlayer.EventType.PLAYING) {
            this.playVideoArea.active = false;
        }
    }

    toggleFullscreen () {
        if (
            sys.isBrowser &&
            sys.browserType === sys.BROWSER_TYPE_MOBILE_QQ &&
            sys.browserVersion <= 7.2 &&
            /Nexus 6/.test(navigator.userAgent)
        ) {
            return log('May be crash, so prohibit full screen');
        }
        this.videoPlayer.fullScreenOnAwake = true;
    }

    toggleVisibility (event: any) {
        this.videoPlayer.node.active = !this.videoPlayer.node.active;
        this.playVideoArea.active = this.videoPlayer.node.active;
        this.visibility.string = 'Visibility: ' + this.videoPlayer.node.active;
    }

    keepRatioSwitch () {
        this.videoPlayer.keepAspectRatio = !this.videoPlayer.keepAspectRatio;
    }

    switchOnlineVideo () {
        this.videoPlayer.remoteURL = 'https://www.w3school.com.cn/i/movie.mp4';
        this.videoPlayer.resourceType = VideoPlayer.ResourceType.REMOTE;
        this.playVideoArea.active = true;
    }

    switchLoaclVide () {
        this.videoPlayer.resourceType = VideoPlayer.ResourceType.LOCAL;
        this.playVideoArea.active = true;
    }

    play () {
        this.videoPlayer.play();
        this.playVideoArea.active = false;
    }

    pause () {
        this.videoPlayer.pause();
    }

    stop () {
        this.videoPlayer.stop();
    }

    update () {
        if (this.currentTime && this.videoPlayer.currentTime >= 0) {
            this.currentTime.string = this.videoPlayer.currentTime.toFixed(2) + ' / ' + this.videoPlayer.duration.toFixed(2);
        }
    }
}
