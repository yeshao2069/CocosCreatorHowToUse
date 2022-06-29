System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        cc.game.once(cc.Game.EVENT_ENGINE_INITED, function () {
          cc.js.mixin(cc.js.getClassByName('dragonBones.AttachUtil').prototype, {
            _syncAttachedNode() {
              if (!this._inited) return;
              const rootMatrix = this._armatureNode.worldMatrix;
              let boneInfos;

              const isCached = this._armatureDisplay.isAnimationCached();

              if (isCached && this._armatureDisplay) {
                boneInfos = this._armatureDisplay._curFrame && this._armatureDisplay._curFrame.boneInfos;
                if (!boneInfos) return;
              }

              const sockets = this._armatureDisplay.sockets;
              const socketNodes = this._armatureDisplay.socketNodes;
              const scale = new cc.Vec3();

              const matrixHandle = (node, boneMat) => {
                const tm = _tempMat4;
                tm.m00 = boneMat.a;
                tm.m01 = boneMat.b;
                tm.m04 = -boneMat.c;
                tm.m05 = -boneMat.d;
                tm.m12 = boneMat.tx;
                tm.m13 = boneMat.ty;

                if (!node._oldScale) {
                  // back origin scale info
                  node._oldScale = node.scale.clone();
                }

                scale.set(node._oldScale);
                node.matrix = _tempMat4;
                node.scale = scale.multiply(this._armatureNode.scale);
              };

              const bones = this._armature.getBones();

              for (let l = sockets.length - 1; l >= 0; l--) {
                const sock = sockets[l];
                const boneNode = sock.target;
                if (!boneNode) continue; // Node has been destroy

                if (!boneNode.isValid) {
                  socketNodes.delete(sock.path);
                  sockets.splice(l, 1);
                  continue;
                } // Bone has been destroy


                const bone = isCached ? boneInfos[sock.boneIndex] : bones[sock.boneIndex];
                if (!bone) continue; // if (!bone) {
                //     boneNode.removeFromParent();
                //     boneNode.destroy();
                //     socketNodes.delete(sock.path);
                //     sockets.splice(l, 1);
                //     continue;
                // }

                matrixHandle(boneNode, bone.globalTransformMatrix);
              }
            }

          });
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=8a63326026e18ee676605cfe544fe0d17abf9f84.js.map