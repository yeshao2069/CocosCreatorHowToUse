
import { _decorator, Component, ParticleSystem2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ParticleCtrl')
export class ParticleCtrl extends Component {

    @property(ParticleSystem2D)
    particle !: ParticleSystem2D;

    toggleParticlePlay () {
        var myParticle = this.particle;
        if (myParticle.particleCount > 0) {
            myParticle.stopSystem();
        } else {
            myParticle.resetSystem();
        }
    }
}

