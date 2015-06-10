'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StatusBarIOS,
  Text,
  NavigatorIOS,
  StyleSheet
} = React;

var PostsList = require('./js/pages/PostsList');

var App = React.createClass({
  render() {
    StatusBarIOS.setStyle('light-content');

    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Latest Posts',
          component: PostsList,
        }}
        tintColor="#FFFFFF"
        barTintColor="#333333"
        titleTextColor="#FFFFFF"
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('apod', () => App);

module.exports = App;
