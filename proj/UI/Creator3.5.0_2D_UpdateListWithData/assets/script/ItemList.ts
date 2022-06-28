import { _decorator, Component, Prefab, instantiate } from "cc";
import { Item } from "./Item";
import { ItemTemplate } from "./ItemTemplate";
const { ccclass, property } = _decorator;

@ccclass('ItemList')
export class ItemList extends Component {
    @property([Item])
    items: Item[] = [];
    @property(Prefab)
    itemPrefab: Prefab = null!;

    onLoad() {
        for (var i = 0; i < this.items.length; ++i) {
            var item = instantiate(this.itemPrefab);
            var data = this.items[i];
            this.node.addChild(item);
            item.getComponent(ItemTemplate)!.init(data);
        }
    }
}