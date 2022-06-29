System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, instantiate, isValid, PrefabPoolUtil, _crd;

  _export("PrefabPoolUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      isValid = _cc.isValid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f06b3k9FIJMH7E80mH6xD+V", "PrefabPoolUtil", undefined);

      _export("PrefabPoolUtil", PrefabPoolUtil = class PrefabPoolUtil {
        /**
         * get a entity with pool name
         * @param poolName the pool name
         * @param time  optional, the time when recover, in seconds
         */
        static getItemByPoolName(poolName, prefab, time) {
          if (this._pool[poolName] == null) {
            this._pool[poolName] = [];
          }

          var pool = this._pool[poolName];
          var node = null;

          if (pool.length > 0) {
            node = pool.pop();
          } else {
            node = instantiate(prefab);
          }

          if (time != null) {
            // delay recover node with pool name
            setTimeout(() => {
              if (isValid(node)) {
                node.parent = null;
                this.recoverItemByPoolName(poolName, node);
              }
            }, time * 1000);
          }

          return node;
        }
        /**
         * recover a entity with pool name
         * @param poolName the pool name
         * @param entity  the node need to recover
         */


        static recoverItemByPoolName(poolName, entity, removeFromParent) {
          if (this._pool == null) return;
          var pool = this._pool[poolName];
          var index = pool.indexOf(entity);

          if (index == -1) {
            if (removeFromParent) entity.removeFromParent();
            pool.push(entity);
          }
        }

        static clear(poolName) {
          delete this._pool[poolName];
        }

      });

      PrefabPoolUtil._pool = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e4a956336503cca0bc7e4c0cdc60c45d6c9ec2f8.js.map