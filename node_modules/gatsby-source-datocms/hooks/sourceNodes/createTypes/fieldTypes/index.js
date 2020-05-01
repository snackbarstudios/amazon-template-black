"use strict";

var _DatoCmsColorField = _interopRequireDefault(require("./DatoCmsColorField"));

var _DatoCmsFileField = _interopRequireDefault(require("./DatoCmsFileField"));

var _DatoCmsLatLonField = _interopRequireDefault(require("./DatoCmsLatLonField"));

var _DatoCmsMetaField = _interopRequireDefault(require("./DatoCmsMetaField"));

var _DatoCmsSeoField = _interopRequireDefault(require("./DatoCmsSeoField"));

var _DatoCmsSeoMetaTags = _interopRequireDefault(require("./DatoCmsSeoMetaTags"));

var _DatoCmsVideoField = _interopRequireDefault(require("./DatoCmsVideoField"));

var _DatoCmsTextNode = _interopRequireDefault(require("./DatoCmsTextNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (context) {
  [_DatoCmsColorField["default"], _DatoCmsFileField["default"], _DatoCmsLatLonField["default"], _DatoCmsMetaField["default"], _DatoCmsSeoField["default"], _DatoCmsSeoMetaTags["default"], _DatoCmsVideoField["default"], _DatoCmsTextNode["default"]].forEach(function (fn) {
    return fn(context);
  });
};