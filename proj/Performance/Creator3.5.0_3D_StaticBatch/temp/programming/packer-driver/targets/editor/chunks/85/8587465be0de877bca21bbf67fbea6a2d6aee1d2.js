System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, find, BatchingUtility, resources, instantiate, _dec, _class, _crd, ccclass, property, TestStaticBatch;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      find = _cc.find;
      BatchingUtility = _cc.BatchingUtility;
      resources = _cc.resources;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e470EgiXdDDZD2fs1eZF6/", "TestStaticBatch", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestStaticBatch", TestStaticBatch = (_dec = ccclass('TestStaticBatch'), _dec(_class = class TestStaticBatch extends Component {
        toggleEnable(toggle) {
          let isChecked = toggle.isChecked;

          if (isChecked) {
            let node = find('islands/Normal');

            if (node) {
              node.destroyAllChildren();
            }

            resources.load('staticObj', (err, prefab) => {
              if (err) {
                console.log("load prefab staticObj err: ", err);
                return;
              }

              let p = instantiate(prefab);
              p.parent = node;
              console.log(p);
            });
          } else {
            let node = find('islands/Normal');

            if (node) {
              node.destroyAllChildren();
            }
          }
        }

        toggleGrass(toggle) {
          let isChecked = toggle.isChecked;

          if (isChecked) {
            let grassGroupNode = find('islands/Normal/staticObj/grassGroup');
            let islands = find('islands');
            let newNode = new Node('grass-static-node');
            newNode.parent = islands;
            BatchingUtility.batchStaticModel(grassGroupNode, newNode);
            console.log(newNode);
          } else {
            let node = find('islands/grass-static-node');

            if (node) {
              node.destroy();
            }
          }
        }

        toggleStone(toggle) {
          let isChecked = toggle.isChecked;

          if (isChecked) {
            let stoneGroupNode = find('islands/Normal/staticObj/stoneGroup');
            let islands = find('islands');
            let newNode = new Node('stone-static-node');
            newNode.parent = islands;
            BatchingUtility.batchStaticModel(stoneGroupNode, newNode);
            console.log(newNode);
          } else {
            let node = find('islands/stone-static-node');

            if (node) {
              node.destroy();
            }
          }
        }

        toggleTree(toggle) {
          let isChecked = toggle.isChecked;

          if (isChecked) {
            let treeGroupNode = find('islands/Normal/staticObj/treeGroup');
            let islands = find('islands');
            let newNode = new Node('tree-static-node');
            newNode.parent = islands;
            BatchingUtility.batchStaticModel(treeGroupNode, newNode);
            console.log(newNode);
          } else {
            let node = find('islands/tree-static-node');

            if (node) {
              node.destroy();
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8587465be0de877bca21bbf67fbea6a2d6aee1d2.js.map