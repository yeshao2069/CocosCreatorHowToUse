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
          var isChecked = toggle.isChecked;

          if (isChecked) {
            var node = find('islands/Normal');

            if (node) {
              node.destroyAllChildren();
            }

            resources.load('staticObj', (err, prefab) => {
              if (err) {
                console.log("load prefab staticObj err: ", err);
                return;
              }

              var p = instantiate(prefab);
              p.parent = node;
              console.log(p);
            });
          } else {
            var _node = find('islands/Normal');

            if (_node) {
              _node.destroyAllChildren();
            }
          }
        }

        toggleGrass(toggle) {
          var isChecked = toggle.isChecked;

          if (isChecked) {
            var grassGroupNode = find('islands/Normal/staticObj/grassGroup');
            var islands = find('islands');
            var newNode = new Node('grass-static-node');
            newNode.parent = islands;
            BatchingUtility.batchStaticModel(grassGroupNode, newNode);
            console.log(newNode);
          } else {
            var node = find('islands/grass-static-node');

            if (node) {
              node.destroy();
            }
          }
        }

        toggleStone(toggle) {
          var isChecked = toggle.isChecked;

          if (isChecked) {
            var stoneGroupNode = find('islands/Normal/staticObj/stoneGroup');
            var islands = find('islands');
            var newNode = new Node('stone-static-node');
            newNode.parent = islands;
            BatchingUtility.batchStaticModel(stoneGroupNode, newNode);
            console.log(newNode);
          } else {
            var node = find('islands/stone-static-node');

            if (node) {
              node.destroy();
            }
          }
        }

        toggleTree(toggle) {
          var isChecked = toggle.isChecked;

          if (isChecked) {
            var treeGroupNode = find('islands/Normal/staticObj/treeGroup');
            var islands = find('islands');
            var newNode = new Node('tree-static-node');
            newNode.parent = islands;
            BatchingUtility.batchStaticModel(treeGroupNode, newNode);
            console.log(newNode);
          } else {
            var node = find('islands/tree-static-node');

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
//# sourceMappingURL=54349e9bf98da46e444ce8ec787b0a7164608645.js.map