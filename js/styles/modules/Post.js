var React = require('react-native');
var { StyleSheet } = React;
var { assign } = require('lodash');

var {
  primaryTitle,
  secondaryTitle,
  bodyText
} = require('../base');

module.exports = StyleSheet.create({

  header: {
    padding: 30,
  },

  titleText: assign({
    textAlign: "center"
  }, primaryTitle),

  dateText: assign({
    textAlign: "center",
    marginTop: 5
  }, secondaryTitle),

  descriptionText: bodyText,

  creditText: assign(bodyText, {
    marginTop: 10
  }),

  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#ccc'
  }

});