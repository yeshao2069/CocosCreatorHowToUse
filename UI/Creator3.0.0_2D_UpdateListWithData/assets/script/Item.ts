import { _decorator, Component, SpriteFrame } from "cc";
const { ccclass, property } = _decorator;

@ccclass('Item')
export class Item {
    @property
    id = 0;
    @property
    itemName = '';
    @property
    itemPrice = 0;
    @property(SpriteFrame)
    iconSF: SpriteFrame = null!;
}