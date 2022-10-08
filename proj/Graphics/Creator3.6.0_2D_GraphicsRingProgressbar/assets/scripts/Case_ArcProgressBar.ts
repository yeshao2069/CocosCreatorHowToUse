import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

import ArcProgressBar from "./ArcProgressBar";

@ccclass('CaseArcProgressBar')
export default class Case_ArcProgressBar extends Component {
    @property(ArcProgressBar)
    protected progressBar1: ArcProgressBar = null;
    @property(ArcProgressBar)
    protected progressBar2: ArcProgressBar = null;
    @property(ArcProgressBar)
    protected progressBar3: ArcProgressBar = null;
    @property(ArcProgressBar)
    protected progressBar4: ArcProgressBar = null;
    @property(ArcProgressBar)
    protected progressBar5: ArcProgressBar = null;
    public onLoad() {
        this.play(this.progressBar1);
        this.play(this.progressBar2);
        this.play(this.progressBar3);
        this.play(this.progressBar4);
        this.play(this.progressBar5);
    }
    public async play(progressBar: ArcProgressBar) {
        while (1) {
        progressBar.progress = 0;
        await progressBar.to(2.5, 1);
        }
    }
}