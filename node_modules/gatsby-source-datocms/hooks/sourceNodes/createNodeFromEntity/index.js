"use strict";

var buildItemTypeNode = require('./itemType');

var buildFieldNode = require('./field');

var buildUploadNode = require('./upload');

var buildItemNode = require('./item');

var buildSiteNode = require('./site');

var BUILDERS = {
  item_type: buildItemTypeNode,
  field: buildFieldNode,
  upload: buildUploadNode,
  item: buildItemNode,
  site: buildSiteNode
};

module.exports = function (entity, context) {
  if (!BUILDERS[entity.type]) {
    console.log("Don't know how to build entity of type '".concat(entity.type, "'!"));
    return;
  }

  var result = BUILDERS[entity.type](entity, context);
  var nodesToCreate = Array.isArray(result) ? result : [result];
  nodesToCreate.map(function (node) {
    context.actions.createNode(node);
  });
};