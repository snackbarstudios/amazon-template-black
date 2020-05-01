"use strict";

module.exports = function (_ref) {
  var actions = _ref.actions,
      schema = _ref.schema;
  actions.createTypes([schema.buildObjectType({
    name: 'DatoCmsGlobalSeo',
    extensions: {
      infer: false
    },
    fields: {
      siteName: 'String',
      titleSuffix: 'String',
      twitterAccount: 'String',
      facebookPageUrl: 'String',
      fallbackSeo: 'DatoCmsSeoField'
    }
  })]);
};