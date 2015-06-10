var variables = require('./variables');
var { assign } = require('lodash');

var baseHeadingStyles = {
  fontFamily: "Courier"
};

module.exports.primaryTitle = assign({
  fontSize: 16,
  color: variables.primaryColor
}, baseHeadingStyles);

module.exports.secondaryTitle = assign({
  fontSize: 14,
  color: variables.secondaryColor
}, baseHeadingStyles);

module.exports.bodyText = {
  fontFamily: "Helvetica",
  fontSize: 15,
  color: variables.secondaryColor,
  lineHeight: 20
};

