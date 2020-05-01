"use strict";

var dateType = {
  type: 'Date',
  extensions: {
    dateformat: {}
  }
};

module.exports = function (_ref) {
  var actions = _ref.actions,
      schema = _ref.schema;
  actions.createTypes([schema.buildObjectType({
    name: 'DatoCmsMetaField',
    extensions: {
      infer: false
    },
    fields: {
      createdAt: dateType,
      updatedAt: dateType,
      publishedAt: dateType,
      firstPublishedAt: dateType,
      isValid: 'Boolean',
      status: 'String'
    }
  })]);
};