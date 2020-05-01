"use strict";

var _DatoCmsSite = _interopRequireDefault(require("./DatoCmsSite"));

var _DatoCmsFaviconMetaTags = _interopRequireDefault(require("./DatoCmsFaviconMetaTags"));

var _DatoCmsGlobalSeo = _interopRequireDefault(require("./DatoCmsGlobalSeo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (context) {
  [_DatoCmsSite["default"], _DatoCmsFaviconMetaTags["default"], _DatoCmsGlobalSeo["default"]].forEach(function (fn) {
    return fn(context);
  });
};