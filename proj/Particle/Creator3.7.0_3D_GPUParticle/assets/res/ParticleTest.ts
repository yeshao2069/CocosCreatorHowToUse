import { _decorator, Component, Node, Prefab, instantiate, LabelComponent, EditBoxComponent, profiler } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TestParticle')
export class TestParticle extends Component {
    @property(Prefab)
    particleCPU: Prefab = null;
    @property(Prefab)
    particleGPU: Prefab = null;
    @property(Node)
    cpuParticleRootNode: Node = null;
    @property(Node)
    gpuParticleRootNode: Node = null;
    @property(LabelComponent)
    numLabel: LabelComponent = null;

    @property(EditBoxComponent)
    gpuParticleNumInput: EditBoxComponent = null;
    @property(EditBoxComponent)
    cpuParticleNumInput: EditBoxComponent = null;

    private _particleNum = 0;
    private _cpuParticleNum = 0;
    private _gpuParticleNum = 0;

    get particleNum() {
        return this._particleNum;
    }

    set particleNum(value: number) {
        this._particleNum = value;
        this.numLabel.string = "发射器数量："+this._particleNum;
    }

    get cpuParticleNum() {
        return this._cpuParticleNum;
    }

    set cpuParticleNum(value: number) {
        this._cpuParticleNum = value;
        this.cpuParticleNumInput.string = value.toString();
        this.particleNum = this._cpuParticleNum + this._gpuParticleNum;
    }

    get gpuParticleNum() {
        return this._gpuParticleNum;
    }

    set gpuParticleNum(value: number) {
        this._gpuParticleNum = value;
        this.gpuParticleNumInput.string = value.toString();
        this.particleNum = this._cpuParticleNum + this._gpuParticleNum;
    }

    start () {
        this.updateCPUParticleNum(10);
        this.gpuParticleNum = 0;
        if (!profiler._stats) {
            profiler.showStats();
        }
    }

    randomPositionX () {
        return (Math.random() - 0.5) * 20;
    }

    randomPositionY () {
        return (Math.random() - 0.5) * 10;
    }

    addCPU () {
        this.updateCPUParticleNum(this.cpuParticleNum + 5);
    }

    addGPU () {
        this.updateGPUParticleNum(this.gpuParticleNum + 5);
    }

    clearCPU() {
        this.cpuParticleRootNode.removeAllChildren();
        this.cpuParticleNum = 0;
    }

    clearGPU() {
        this.gpuParticleRootNode.removeAllChildren();
        this.gpuParticleNum = 0;
    }

    clear () {
        this.cpuParticleRootNode.removeAllChildren();
        this.gpuParticleRootNode.removeAllChildren();
        this.cpuParticleNum = 0;
        this.gpuParticleNum = 0;
        this.particleNum = 0;
    }

    updateCPUParticleNum(num: number) {
        if (this.cpuParticleNum === num) {
            return;
        }

        if (num < 0) {num = 0;}

        if (num % 2 !== 0) {
            num = num + 1;  // 一个prefab有两个粒子，需要偶数
        }

        // add
        if (num > this.cpuParticleNum) {
            const addNum = Math.ceil((num - this.cpuParticleNum) / 2);
            for (let i = 0; i < addNum; i++) {
                const x = this.randomPositionX();
                const y = this.randomPositionY();
                let node = instantiate(this.particleCPU);
                this.cpuParticleRootNode.addChild(node);
                node.setPosition(x, y, 0);
            }
        } else { // delete
            const deleteNum = Math.ceil((this.cpuParticleNum - num) / 2);
            for (let i = 0; i < deleteNum; i++) {
                const node = this.cpuParticleRootNode.children[this.cpuParticleRootNode.children.length - 1 - i];
                node.destroy();
            }
        }

        this.cpuParticleNum = num;
    }

    updateGPUParticleNum(num: number) {
        if (this.gpuParticleNum === num) {
            return;
        }

        if (num < 0) {num = 0;}

        if (num % 2 !== 0) {
            num = num + 1;  // 一个prefab有两个粒子，需要偶数
        }

        // add
        if (num > this.gpuParticleNum) {
            const addNum = Math.ceil((num - this.gpuParticleNum) / 2);
            for (let i = 0; i < addNum; i++) {
                const x = this.randomPositionX();
                const y = this.randomPositionY();
                let node = instantiate(this.particleGPU);
                this.gpuParticleRootNode.addChild(node);
                node.setPosition(x, y, 0);
            }
        } else { // delete
            const deleteNum = Math.ceil((this.gpuParticleNum - num) / 2);
            for (let i = 0; i < deleteNum; i++) {
                const node = this.gpuParticleRootNode.children[this.gpuParticleRootNode.children.length - 1 - i];
                node.destroy();
            }
        }

        this.gpuParticleNum = num;
    }

    onGPUParticleNumInputEnd() {
        const num = Number.parseInt(this.gpuParticleNumInput.string);
        this.updateGPUParticleNum(num);
    }

    onCPUParticleNumInputEnd() {
        const num = Number.parseInt(this.cpuParticleNumInput.string);
        this.updateCPUParticleNum(num);
    }
}
