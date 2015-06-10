var React = require('react-native');
var { StyleSheet } = React;
var { assign } = require('lodash');

var {
  primaryTitle,
  secondaryTitle
} = require('../base');

module.exports = StyleSheet.create({

  container: {
    height: 400,
    backgroundColor: '#FFFFFF',
  },

  textContainer: {
    padding: 30,
  },

  image: {
    flex: 1
  },

  titleText: assign({
    textAlign: "center"
  }, primaryTitle),

  dateText: assign({
    textAlign: "center",
    marginTop: 5
  }, secondaryTitle)
});