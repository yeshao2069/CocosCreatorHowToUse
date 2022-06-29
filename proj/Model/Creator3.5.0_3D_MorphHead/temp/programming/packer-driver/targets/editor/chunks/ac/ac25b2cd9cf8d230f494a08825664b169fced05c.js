System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, CCFloat, Prefab, instantiate, find, Slider, Label, Layout, EventHandler, MeshRenderer, BYTEDANCE, EDITOR, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, executeInEditMode, MorphController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CCFloat = _cc.CCFloat;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      find = _cc.find;
      Slider = _cc.Slider;
      Label = _cc.Label;
      Layout = _cc.Layout;
      EventHandler = _cc.EventHandler;
      MeshRenderer = _cc.MeshRenderer;
    }, function (_ccEnv) {
      BYTEDANCE = _ccEnv.BYTEDANCE;
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ac40oR68hC5LPWp8iYh4Q8", "MorphController", undefined);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("MorphController", MorphController = (_dec = ccclass('MorphController'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Layout
      }), _dec4 = property({
        type: [CCFloat],
        range: [0, 1, 0.1],
        slide: true
      }), _dec(_class = executeInEditMode(_class = (_class2 = class MorphController extends Component {
        constructor(...args) {
          super(...args);
          this._weightsControl = [];
          this._modelComp = null;
          this._totalTargets = 0;

          _initializerDefineProperty(this, "controlItemPrfb", _descriptor, this);

          _initializerDefineProperty(this, "itemLayout", _descriptor2, this);
        }

        get weightsControl() {
          return this._weightsControl;
        }

        set weightsControl(value) {
          // undo时会每个元素进行数组的一次set，等待fix
          if (value.length != this._totalTargets) {
            return;
          }

          this._weightsControl = value;
          this.setWeights(this._weightsControl);
        }

        setWeights(weights) {
          if (weights.length === 0) {
            return;
          }

          for (let iSubMeshMorph = 0; iSubMeshMorph < this._morph.subMeshMorphs.length; ++iSubMeshMorph) {
            if (this._morph.subMeshMorphs[iSubMeshMorph]) {
              this._modelComp.setWeights(weights, iSubMeshMorph);
            }
          }
        }

        start() {
          this._modelComp = this.node.getComponent(MeshRenderer);

          if (!this._modelComp) {
            return;
          }

          const mesh = this._modelComp.mesh;

          if (!mesh) {
            return;
          }

          this._morph = mesh.struct.morph;

          if (!this._morph) {
            return;
          }

          if (this._morph.subMeshMorphs.length === 0) {
            // TODO submeshcount是0
            console.warn('submesh count is 0');
            return;
          }

          const firstNonNullSubMeshMorph = this._morph.subMeshMorphs.find(subMeshMorph => !!subMeshMorph);

          if (!firstNonNullSubMeshMorph) {
            // TODO 任何 submesh 都没有Morph
            console.warn(`all submesh don't have morph`);
            return;
          }

          if (!this._morph.subMeshMorphs.every(subMeshMorph => !subMeshMorph || subMeshMorph.targets.length === firstNonNullSubMeshMorph.targets.length)) {
            // TODO 每个 submesh 的target数量不一样
            console.warn(`not all submesh count are the same`);
          }

          const subMeshMorph = this._morph.subMeshMorphs[0];
          const nTargets = subMeshMorph ? subMeshMorph.targets.length : 0;
          this._totalTargets = nTargets;
          this.weightsControl = new Array(nTargets).fill(0);

          if (EDITOR) {
            cce.Node.emit('change', this.node); // @ts-ignore

            Editor.Message.broadcast('scene:change-node', this.node.uuid);
          }

          if (!EDITOR) {
            this.initUI();
          }
        }

        initUI() {
          for (let i = 0; i < this._totalTargets; i++) {
            var _find, _find2;

            let controlItem = instantiate(this.controlItemPrfb);
            controlItem.parent = this.itemLayout.node;
            let nameLabel = (_find = find('Name', controlItem)) == null ? void 0 : _find.getComponent(Label);

            if (nameLabel) {
              nameLabel.string = '' + i;
            }

            let slider = (_find2 = find('Slider', controlItem)) == null ? void 0 : _find2.getComponent(Slider);
            let sliderEventHandler = new EventHandler();
            sliderEventHandler.target = this.node;
            sliderEventHandler.handler = "onSliderChanged";
            sliderEventHandler.component = "MorphController";
            sliderEventHandler.customEventData = '' + i;
            slider == null ? void 0 : slider.slideEvents.push(sliderEventHandler);
          }
        }

        onSliderChanged(target, customEventData) {
          if (!BYTEDANCE) {
            console.log(target, customEventData);
          }

          let index = Number.parseInt(customEventData);
          this.weightsControl[index] = target.progress;
          this.weightsControl = this.weightsControl;
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "controlItemPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemLayout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "weightsControl", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "weightsControl"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac25b2cd9cf8d230f494a08825664b169fced05c.js.map