System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, Ident, BezierCurveType;

  _export({
    Ident: void 0,
    BezierCurveType: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5f289KQcKpGjavN4Rrlf6On", "Enums", undefined);

      (function (Ident) {
        Ident[Ident["point"] = 0] = "point";
        Ident[Ident["control"] = 1] = "control";
        Ident[Ident["window"] = 2] = "window";
      })(Ident || _export("Ident", Ident = {}));

      (function (BezierCurveType) {
        BezierCurveType[BezierCurveType["SecondOrder"] = 2] = "SecondOrder";
        BezierCurveType[BezierCurveType["ThirdOrder"] = 3] = "ThirdOrder";
      })(BezierCurveType || _export("BezierCurveType", BezierCurveType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f8515f6b8911d15352df8fa5d980b8c1e25e3d8f.js.map