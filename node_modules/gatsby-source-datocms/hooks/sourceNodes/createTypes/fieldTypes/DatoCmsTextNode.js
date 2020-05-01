"use strict";

module.exports = function (_ref) {
  var entitiesRepo = _ref.entitiesRepo,
      actions = _ref.actions,
      schema = _ref.schema;
  actions.createTypes([// We're inferring as it's not our duty to add the childMarkdownRemark field
  // as it's added ex-post by gatsby-transform-remark!
  schema.buildObjectType({
    name: 'DatoCmsTextNode',
    extensions: {
      infer: true
    },
    fields: {},
    interfaces: ["Node"]
  })]);
};