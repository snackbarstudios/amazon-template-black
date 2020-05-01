"use strict";

var item = require('./item');

var upload = require('./upload');

var site = require('./site');

var schema = require('./schema');

var gatsbyImage = require('./gatsbyImage');

var fieldTypes = require('./fieldTypes');

module.exports = function (context) {
  [gatsbyImage, fieldTypes, item, upload, site, schema].forEach(function (fn) {
    return fn(context);
  });
};