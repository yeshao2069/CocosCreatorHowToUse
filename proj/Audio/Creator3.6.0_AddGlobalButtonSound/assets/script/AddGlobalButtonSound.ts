import { _decorator, Component, Node, AudioClip, Button, EventTouch, EventHandler } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('AddGlobalButtonSound')
export default class AddGlobalButtonSound extends Component {
    @property(AudioClip)
    audio: AudioClip | null = null;

    onLoad () {

        // @ts-ignore
        Button.prototype._onTouchEnded = (event: EventTouch) => {
            this.audio!.play();

            let self = (event.target as Node)!.getComponent(Button)!;
            if (!self.interactable || !self.enabledInHierarchy) return;

            if ((self as any)._pressed) {
                EventHandler.emitEvents(self.clickEvents, event);
                this.node.emit('click', this);
            }
            (self as any)._pressed = false;
            (self as any)._updateState();
            if (event) {
                event.propagationStopped = true;
            }
        }
    }
}
