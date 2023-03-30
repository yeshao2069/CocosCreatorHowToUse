import { _decorator, Component, Node, PhysicsSystem, Vec3, profiler } from "cc";
import { ProfilerManager } from "./ProfilerManager";
const { ccclass, property, menu } = _decorator;

@ccclass("GameConfig")
export class GameConfig extends Component {

    @property
    allowSleep = true;

    @property
    gravity = new Vec3(0, -20, 0);

    @property
    maxSubStep = 1;

    @property
    frameRate = 60;

    @property
    showStat = false;

    __preload () {
        PhysicsSystem.instance.allowSleep = this.allowSleep;
        PhysicsSystem.instance.gravity = this.gravity;
        PhysicsSystem.instance.maxSubSteps = this.maxSubStep;
        PhysicsSystem.instance.fixedTimeStep = 1 / this.frameRate;
    }

    start () {
        this.node.addComponent(ProfilerManager);
        if (!this.showStat) {
            if (profiler) profiler.hideStats();
        }
    }

    onDestroy () {
        PhysicsSystem.instance.allowSleep = true;
        PhysicsSystem.instance.maxSubSteps = 1;
        PhysicsSystem.instance.fixedTimeStep = 1 / 60;
        PhysicsSystem.instance.gravity = new Vec3(0, -10, 0);
    }
}
