"use strict";

var getBase64 = require('../utils/getBase64');

var getTracedSVG = require('../utils/getTracedSVG');

module.exports = function (_ref) {
  var actions = _ref.actions,
      schema = _ref.schema,
      store = _ref.store,
      cacheDir = _ref.cacheDir;
  actions.createTypes([schema.buildObjectType({
    name: 'DatoCmsFluid',
    extensions: {
      infer: false
    },
    fields: {
      base64: {
        type: 'String',
        resolve: function resolve(image) {
          return getBase64(image, cacheDir);
        }
      },
      tracedSVG: {
        type: 'String',
        resolve: function resolve(image) {
          return getTracedSVG(image, cacheDir);
        }
      },
      aspectRatio: 'Float!',
      width: 'Int',
      height: 'Int',
      src: 'String!',
      srcSet: 'String!',
      sizes: 'String!'
    }
  })]);
};