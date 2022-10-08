
import { _decorator, Component, Node, CCFloat, CCBoolean, Graphics, Color, Vec2, find, view, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Doodle')
export class Doodle extends Component {
    
    @property(CCFloat)
    reactivity: number = 0.5;
    @property(CCBoolean)
    debug: boolean = false;

    _graphics !: Graphics;
    nodes: any[] = [];
    ripples: any[] = [];
    mouse: Vec2 = new Vec2();
    color : Color = new Color();
    cycle: number = 0;
    input: boolean = false;

    onEnable () {
        this._graphics = this.getComponent(Graphics)!;

        this.nodes = [];
        this.ripples = [];
        this.mouse.x = 0, this.mouse.y = 0;
        this.color.r = 0, this.color.g = 0, this.color.b = 0, this.color.a = 255;
        this.cycle = 90;

        this.createBezierNodes();

        let canvas = find('Canvas')!;
        const that = this;
        canvas.on(Node.EventType.TOUCH_START, function (touch: EventTouch, event: any) {
            let touchPos = touch.getUILocation();
            let winSize = view.getFrameSize();
            touchPos.subtract2f(winSize.width / 2, winSize.height /2);
            that.mouse = touchPos;
            that.addRipple();
        }, this);
        canvas.on(Node.EventType.TOUCH_END, function () {
            that.input = false;
        }, this);
    }

    createBezierNodes () {
        this.updateColorCycle();

        for(var quantity = 0, len = 6; quantity < len; quantity++) {  
            var theta = Math.PI * 2 * quantity / len;

            var x = 0 * Math.cos(theta);
            var y = 0 * Math.sin(theta);
            
            this.nodes.push({
                x: x,
                y: y,
                vx: 0,
                vy: 0,
                lastX: x,
                lastY: y,
                min: 150,
                max: 250,
                disturb: 150,
                orbit: 20,
                angle: Math.random() * Math.PI * 2,
                speed: 0.05 + Math.random() * 0.05,                              
                theta: theta
            });    
        }
    }

    addRipple () {
        this.input = true;
        if (this.ripples.length === 0) {
            this.updateColorCycle();

            this.ripples.push({
                x: this.mouse.x,
                y: this.mouse.y,
                reactivity: 0,
                fade: 1.0
            });
        }
    }

    updateColorCycle () {
        this.cycle = Math.min(this.cycle + this.reactivity + 0.3, 100) !== 100 ? this.cycle += this.reactivity + 0.3 : 0;
        
        let color = this.color;
        color.r = ~~(Math.sin(0.3 * this.cycle + 0) * 127 + 128);
        color.g = ~~(Math.sin(0.3 * this.cycle + 2) * 127 + 128);
        color.b = ~~( Math.sin(0.3 * this.cycle + 4) * 127 + 128);
    }

    update (dt: number) {
        let nodes = this.nodes;
        let ripples = this.ripples;
        var ease = 0.01, friction = 0.98;
        
        for (var index = 0; index < ripples.length; index++) {
            var ripple = ripples[index];
            ripple.reactivity += 5;
            ripple.fade -= 0.05;
            if (ripple.fade <= 0.0) {
                ripples.splice(index, 1);
            }   
        }
    
        [].forEach.call(nodes, (node: any, index: number) => {

            node.lastX += (node.disturb * Math.cos(node.theta) - node.lastX) * 0.08;
            node.lastY += (node.disturb * Math.sin(node.theta) - node.lastY) * 0.08;
            
            // Motion
            node.x += ((node.lastX + Math.cos(node.angle) * node.orbit) - node.x) * 0.08;
            node.y += ((node.lastY + Math.sin(node.angle) * node.orbit) - node.y) * 0.08;

            // Ease
            node.vx += (node.min - node.disturb) * ease;
        
            // Friction
            node.vx *= friction;
            
            node.disturb += node.vx;
            
            if (this.input) {
                node.disturb += (node.max - node.disturb) * this.reactivity;
            }
                                                     
            node.angle += node.speed;
        });

        this.render();
    }

    render () {
        let nodes = this.nodes;
        let ripples = this.ripples;
        let graphics = this._graphics;
        let color = this.color;
    
        var currentIndex, nextIndex, xc, yc;
        color.a = this.debug ? 255 : 255/2;

        graphics.clear();
                        
        [].forEach.call(nodes, (node, index) => {
    
            currentIndex = nodes[nodes.length - 1];
            nextIndex = nodes[0];
                
            xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.5;
            yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.5;
        
            let strokeColor = new Color();
            Color.fromHEX(strokeColor, this.debug ? '#a9a9a9' : '#e5e5e5');
            strokeColor.a = this.debug ? 255 : 255/2;
            graphics.strokeColor = strokeColor;

            graphics.fillColor = color;
            graphics.lineWidth = this.debug ? 1 : 5;

            graphics.moveTo(xc, yc);
            
            // Draw through N points
            for(var N = 0; N < nodes.length; N++) {
                currentIndex = nodes[N];
                nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
                
                xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.5;
                yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.5;
            
                graphics.quadraticCurveTo(currentIndex.x, currentIndex.y, xc, yc);
                
            }

            this.debug ? null : graphics.fill();
            graphics.stroke();
                        
            graphics.lineWidth = 1;
            graphics.lineCap = Graphics.LineCap.ROUND;
            graphics.lineJoin = Graphics.LineJoin.ROUND;
            graphics.strokeColor.fromHEX('#a9a9a9');
            graphics.fillColor.fromHEX('#a9a9a9');
            
            // Draw through N points
            for(var N = 0; N < nodes.length; N++) {
                
                // First anchor
                currentIndex = nodes[N];
                nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
                
                xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.8;
                yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.8;
                
                graphics.moveTo(xc, yc);
                
                // Second anchor
                currentIndex = nextIndex;
                nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2]; 
                
                xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.2;
                yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.2;
                
                graphics.lineTo(xc, yc);
                graphics.stroke();
                
                // First anchor
                currentIndex = nodes[N];
                nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
                
                xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.8;
                yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.8;
                
                graphics.circle(xc, yc, 2);
                graphics.fill();
            
                // Second anchor
                currentIndex = nextIndex;
                nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2]; 
                
                xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.2;
                yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.2;
                
                graphics.circle(xc, yc, 2);
                graphics.fill();
                
            }

        });
        
        for(var index = 0; index < ripples.length; index++) {
        
            var ripple = ripples[index];
            
            let fillColor = new Color();
            Color.fromHEX(fillColor, '#ffffff');
            fillColor.a = ripple.fade * 255;
            graphics.fillColor = fillColor;
            
            graphics.circle(ripple.x, ripple.y, ripple.reactivity);
            graphics.fill();
        }
                    
    }
}
