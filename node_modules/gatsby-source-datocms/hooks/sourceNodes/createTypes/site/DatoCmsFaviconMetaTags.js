"use strict";

module.exports = function (_ref) {
  var actions = _ref.actions,
      schema = _ref.schema;
  actions.createTypes([schema.buildObjectType({
    name: 'DatoCmsFaviconMetaTags',
    extensions: {
      infer: false
    },
    fields: {
      tags: 'JSON'
    },
    interfaces: ["Node"]
  })]);
};