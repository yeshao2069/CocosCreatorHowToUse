
import { _decorator, Component, Node, ScrollView, Label, Button, instantiate,
    error, UITransform, Vec3, CCFloat } from 'cc';
import { Item } from './Item';
const { ccclass, property } = _decorator;

@ccclass('ListViewUse')
export class ListViewUse extends Component {
    
    @property(Node)
    itemTemplate !: Node;
    @property(ScrollView)
    scrollview !: ScrollView;
    @property(CCFloat)
    spawnCount: number = 0; // how many items we actually spawn
    @property(CCFloat)
    totalCount: number = 0; // how many items we need for the whole list
    @property(CCFloat)
    spacing: number = 0; // space between each item
    @property(CCFloat)
    bufferZone: number = 0; // when item is away from bufferZone, we relocate it
    @property(Label)
    lblScrollEvent !: Label;
    @property(Button)
    btnAddItem !: Button;
    @property(Button)
    btnRemoveItem !: Button;
    @property(Button)
    btnJumpToPosition !: Button;
    @property(Label)
    lblJumpPosition !: Label;
    @property(Label)
    lblTotalItems !: Label;
    
    content !: Node;
    items: Node[] = [];
    updateTimer: number = 0;
    updateInterval: number = 0;
    lastContentPosY: number = 0;

    onLoad () {
    	this.content = this.scrollview.content!;
        this.items = []; // array to store spawned items
    	this.initialize();
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
    }

    initialize () {
        this.content.getComponent(UITransform)!.height = this.totalCount * (this.itemTemplate.getComponent(UITransform)!.height + this.spacing) + this.spacing; // get total content height
    	for (let i = 0; i < this.spawnCount; ++i) { // spawn items, we only need to do this once
    		let item = instantiate(this.itemTemplate);
    		this.content.addChild(item);
    		item.setPosition(0, -item.getComponent(UITransform)!.height * (0.5 + i) - this.spacing * (i + 1));
    		item.getComponent(Item)!.initItem(i, i);
            this.items.push(item);
    	}
    }

    getPositionInView (item: Node) { // get item position in scrollview's node space
        let worldPos = item!.parent!.getComponent(UITransform)!.convertToWorldSpaceAR(item.position);
        let viewPos = this.scrollview.node.getComponent(UITransform)!.convertToNodeSpaceAR(worldPos);
        return viewPos;
    }

    update (dt: number) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return; // we don't need to do the math every frame
        this.updateTimer = 0;
        let items = this.items;
        let buffer = this.bufferZone;
        let isDown = this.scrollview!.content!.getPosition().y < this.lastContentPosY; // scrolling direction
        let offset = (this.itemTemplate.getComponent(UITransform)!.height + this.spacing) * items.length;
        for (let i = 0; i < items.length; ++i) {
            let viewPos = this.getPositionInView(items[i]);
            if (isDown) {
                // if away from buffer zone and not reaching top of content
                if (viewPos.y < -buffer && items[i].getPosition().y + offset < 0) {
                    let pos = items[i].getPosition();
                    pos.y += offset;
                    items[i].setPosition(pos);
                    let item = items[i].getComponent(Item)!;
                    let itemId = item.itemID - items.length; // update item id
                    item.updateItem(itemId);
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                if (viewPos.y > buffer && items[i].getPosition().y - offset > -this.content.getComponent(UITransform)!.height) {
                    let pos = items[i].getPosition();
                    pos.y -= offset;
                    items[i].setPosition(pos);
                    let item = items[i].getComponent(Item)!;
                    let itemId = item.itemID + items.length;
                    item.updateItem(itemId);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.scrollview.content!.getPosition().y;
        this.lblTotalItems.string = "Total Items: " + this.totalCount;
    }

    scrollEvent (sender: any, event: any) {
        switch(event) {
            case 0: 
               this.lblScrollEvent.string = "Scroll to Top"; 
               break;
            case 1: 
               this.lblScrollEvent.string = "Scroll to Bottom"; 
               break;
            case 2: 
               this.lblScrollEvent.string = "Scroll to Left"; 
               break;
            case 3: 
               this.lblScrollEvent.string = "Scroll to Right"; 
               break;
            case 4: 
               this.lblScrollEvent.string = "Scrolling"; 
               break;
            case 5: 
               this.lblScrollEvent.string = "Bounce Top"; 
               break;
            case 6: 
               this.lblScrollEvent.string = "Bounce bottom"; 
               break;
            case 7: 
               this.lblScrollEvent.string = "Bounce left"; 
               break;
            case 8: 
               this.lblScrollEvent.string = "Bounce right"; 
               break;
            case 9: 
               this.lblScrollEvent.string = "Auto scroll ended"; 
               break;
        }
    }

    addItem () {
        this.content.getComponent(UITransform)!.height = (this.totalCount + 1) * (this.itemTemplate.getComponent(UITransform)!.height + this.spacing) + this.spacing; // get total content height
        this.totalCount = this.totalCount + 1;
    }

    removeItem () {
        if (this.totalCount - 1 < 30) {
            error("can't remove item less than 30!");
            return;
        }

        this.content.getComponent(UITransform)!.height = (this.totalCount - 1) * (this.itemTemplate.getComponent(UITransform)!.height + this.spacing) + this.spacing; // get total content height
        this.totalCount = this.totalCount - 1;

        this.moveBottomItemToTop();
    }

    moveBottomItemToTop () {
        let offset = (this.itemTemplate.getComponent(UITransform)!.height + this.spacing) * this.items.length;
        let length = this.items.length;
        let item = this.getItemAtBottom();

        // whether need to move to top
        if (item.getPosition().y + offset < 0) {
            let pos = item.getPosition();
            pos.y += offset;
            item.setPosition(pos);
            let itemComp = item.getComponent(Item)!;
            let itemId = itemComp.itemID - length;
            itemComp.updateItem(itemId);
        }
    }

    getItemAtBottom () {
        let item = this.items[0];
        for (let i = 1; i < this.items.length; ++i) {
            if (item.getPosition().y > this.items[i].getPosition().y) {
                item = this.items[i];
            }
        }
        return item;
    }

    scrollToFixedPosition () {
        this.scrollview.scrollToOffset(new Vec3(0, 500, 0), 2);
    }
}
