System.register([], function (_export, _context) {
  "use strict";

  var CjsLoader;
  return {
    setters: [],
    execute: function () {
      CjsLoader = class CjsLoader {
        constructor() {
          this._registry = {};
          this._moduleCache = {};
        }
        /**
         * Defines a CommonJS module.
         * @param id Module ID.
         * @param factory The factory.
         * @param resolveMap An object or a function returning object which records the module specifier resolve result.
         * The later is called as "deferred resolve map" and would be invocated right before CommonJS code execution.
         */


        define(id, factory, resolveMap) {
          this._registry[id] = {
            factory,
            resolveMap
          };
        }
        /**
         * Requires a CommonJS module.
         * @param id Module ID.
         * @returns The module's `module.exports`.
         */


        require(id) {
          return this._require(id);
        }

        throwInvalidWrapper(requestTarget, from) {
          throw new Error(`Module '${requestTarget}' imported from '${from}' is expected be an ESM-wrapped CommonJS module but it doesn't.`);
        }

        _require(id, parent) {
          const cachedModule = this._moduleCache[id];

          if (cachedModule) {
            return cachedModule.exports;
          }

          const module = {
            id,
            exports: {}
          };
          this._moduleCache[id] = module;

          this._tryModuleLoad(module, id);

          return module.exports;
        }

        _resolve(specifier, parent) {
          return this._resolveFromInfos(specifier, parent) || this._throwUnresolved(specifier, parent);
        }

        _resolveFromInfos(specifier, parent) {
          var _cjsInfos$parent$reso, _cjsInfos$parent;

          if (specifier in cjsInfos) {
            return specifier;
          }

          if (!parent) {
            return;
          }

          return (_cjsInfos$parent$reso = (_cjsInfos$parent = cjsInfos[parent]) == null ? void 0 : _cjsInfos$parent.resolveCache[specifier]) != null ? _cjsInfos$parent$reso : undefined;
        }

        _tryModuleLoad(module, id) {
          let threw = true;

          try {
            this._load(module, id);

            threw = false;
          } finally {
            if (threw) {
              delete this._moduleCache[id];
            }
          }
        }

        _load(module, id) {
          const {
            factory,
            resolveMap
          } = this._loadWrapper(id);

          const vendorRequire = this._createRequire(module);

          const require = resolveMap ? this._createRequireWithResolveMap(typeof resolveMap === 'function' ? resolveMap() : resolveMap, vendorRequire) : vendorRequire;

          factory(module.exports, require, module);
        }

        _loadWrapper(id) {
          if (id in this._registry) {
            return this._registry[id];
          } else {
            return this._loadExternalWrapper(id);
          }
        }

        _loadExternalWrapper(id) {
          return {
            factory: exports => {
              let path;

              try {
                path = URL.fileURLToPath(id);
              } catch (err) {
                throw new Error(`${id} is not a valid file URL`);
              }

              const extern = require(path);

              Object.assign(exports, extern);
            }
          };
        }

        _createRequire(module) {
          return specifier => this._require(specifier, module);
        }

        _createRequireWithResolveMap(requireMap, originalRequire) {
          return specifier => {
            const resolved = requireMap[specifier];

            if (resolved) {
              return originalRequire(resolved);
            } else {
              throw new Error('Unresolved specifier ' + specifier);
            }
          };
        }

        _throwUnresolved(specifier, parentUrl) {
          throw new Error(`Unable to resolve ${specifier} from ${parent}.`);
        }

      };

      _export("default", new CjsLoader());
    }
  };
});
//# sourceMappingURL=5d6edb63c95512b9351b1539b146578dcb49e89b.js.map