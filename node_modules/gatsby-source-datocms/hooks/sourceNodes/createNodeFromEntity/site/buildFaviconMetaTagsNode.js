"use strict";

var buildNode = require('../utils/buildNode');

var _require = require('datocms-client'),
    faviconTagsBuilder = _require.faviconTagsBuilder;

module.exports = function buildFaviconMetaTagsNode(siteNode, entitiesRepo) {
  return buildNode('DatoCmsFaviconMetaTags', siteNode.id, function (node) {
    node.tags = faviconTagsBuilder(entitiesRepo);
  });
};