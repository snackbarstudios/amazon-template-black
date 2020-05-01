"use strict";

module.exports = function (_ref) {
  var actions = _ref.actions,
      schema = _ref.schema;
  actions.createTypes([schema.buildObjectType({
    name: 'DatoCmsLatLonField',
    extensions: {
      infer: false
    },
    fields: {
      latitude: 'Float',
      longitude: 'Float'
    }
  })]);
};