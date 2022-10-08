
import { _decorator, Component, js, Node, Label, Layout, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GetScriptFunction')
export class GetScriptFunction extends Component {

    @property(Node)
    testNode !: Node;
    @property(Label)
    testLabel !: Label;
    @property(Layout)
    testLayout !: Layout;

    onLoad () {

        let myMap = new Map(); // 保存总数据的map
        let privateFuncMap = new Map(); // 私有
        let publicFuncMap = new Map(); // 非私有
        let unsortFuncMap = new Map(); // 未分类
        let propFuncMap = new Map(); // __props__获取的方法

        let components = this.testNode['_components'];
        for(let i=0; i<components.length; i++){
            // 获取类名
            let className = js.getClassName(components[i]);
            const script = js.getClassByName(className);

            // new script.prototype.constructor()['__proto__']  == script.prototype
            const scriptPrototype = script.prototype;
            let val1 = [];
            let val2 = [];
            let val3 = [];
            for(var k in scriptPrototype){
                val1.push(k);
                if(k[0] == '_'){
                    val2.push(k);
                } else {
                    val3.push(k);
                }
            }
            unsortFuncMap.set(className, val1);
            privateFuncMap.set(className, val2);
            publicFuncMap.set(className, val3);
            propFuncMap.set(className, script['__props__']);
        }

        // 信息存入map
        myMap.set('Private Function', privateFuncMap);
        myMap.set('Public Function', publicFuncMap);
        myMap.set('Unsort Function', unsortFuncMap);
        myMap.set('Prop Function', propFuncMap);

        // console.log(myMap);

        // this.testLabel.string += `Private Function\n`;
        
        // privateFuncMap.forEach((v) => {
        //     this.testLabel.string += v + ", ";
        // });
        // this.testLabel.string += `\n`;

        // this.testLabel.string += `Public Function\n`;
        // publicFuncMap.forEach((v) => {
        //     this.testLabel.string += v + ", ";
        // });
        // this.testLabel.string += `\n`;

        // this.testLabel.string += `Unsort Function\n`;
        // unsortFuncMap.forEach((v) => {
        //     this.testLabel.string += v + ", ";
        // });
        // this.testLabel.string += `\n`;

        // this.testLabel.string += `Prop Function\n`;
        // propFuncMap.forEach((v) => {
        //     this.testLabel.string += v + ", ";
        // });

        // this.testLabel.updateRenderData(true);
        // this.testLayout.updateLayout();
    }
}

