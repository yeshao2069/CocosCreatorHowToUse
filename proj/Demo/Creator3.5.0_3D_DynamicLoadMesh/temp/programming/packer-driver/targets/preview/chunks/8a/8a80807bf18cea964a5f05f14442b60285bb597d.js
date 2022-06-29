System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, assetManager, MeshRenderer, Node, Prefab, Label, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, DynamicLoadMesh;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      assetManager = _cc.assetManager;
      MeshRenderer = _cc.MeshRenderer;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b98aeCw5BtEMoz254CwHKks", "DynamicLoadMesh", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", DynamicLoadMesh = (_dec = ccclass('DynamicLoadMesh'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Label), _dec5 = property(Label), _dec(_class = (_class2 = class DynamicLoadMesh extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "testNode", _descriptor, this);

          _initializerDefineProperty(this, "testPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "uuidLabel", _descriptor3, this);

          _initializerDefineProperty(this, "nameLabel", _descriptor4, this);

          this._prefabMeshUUIDS = [];
          this._prefabMeshNames = [];
        }

        // 记录FBX模型的mesh的name
        start() {
          this.initConfig();
        }

        initConfig() {
          if (this.testPrefab) {
            var prefab = this.testPrefab;
            var prefabData = prefab.data; // 获取到预制体的data数据

            if (!prefabData) return;
            var prefabChildren = prefabData.children; // 获取到预制体的子节点数组

            var prefabChildrenCount = prefabChildren.length;

            for (var i = 0; i < prefabChildrenCount; i++) {
              var node = prefabChildren[i];
              var name = node.name; // 手动剔除一些无用的 mesh

              if (name === 'Dice' || name === 'Dragon_Blank') {} else {
                this._prefabMeshNames.push(name);

                var mesh = node.getComponent(MeshRenderer).mesh;
                var meshUUID = mesh['_uuid'];

                this._prefabMeshUUIDS.push(meshUUID);
              } // console.log(name,meshUUID);

            }
          }
        }

        onClickRandom() {
          var index = Math.round(Math.random() * (this._prefabMeshUUIDS.length - 1));
          var uuid = this._prefabMeshUUIDS[index];
          var name = this._prefabMeshNames[index];
          console.log(index);
          assetManager.loadAny(uuid, (err, mesh) => {
            if (err) {
              console.log(err);
              return;
            }

            this.uuidLabel.string = '当前的UUID是:' + uuid;
            this.nameLabel.string = '当前的Mesh是:' + name;
            this.testNode.getComponent(MeshRenderer).mesh = mesh;
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "testNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "testPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "uuidLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a80807bf18cea964a5f05f14442b60285bb597d.js.map