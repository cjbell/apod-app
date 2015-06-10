var React = require('react-native');
var PostCell = require('./PostCell');
var {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ListView
} = React;

var PostsListView = React.createClass({

  getInitialState() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  },

  componentWillUpdate(nextProps, nextState) {
    var { posts } = this.props;

    if (nextProps.posts.length != posts.length) {
      this.setState({
        dataSource: this.getDataSource(nextProps.posts)
      });
    }
  },

  getDataSource(posts) {
    return this.state.dataSource.cloneWithRows(posts);
  },

  renderRow(post) {
    var { navigateToPost } = this.props;

    return (
      <PostCell
        onSelect={() => navigateToPost(post)}
        post={post}
      />
    );
  },

  renderFooter() {
    var { fetchNextPage } = this.props;

    return (
      <View>
        <TouchableHighlight onPress={fetchNextPage}>
          <Text style={{ margin: 20, textAlign: 'center' }}>Load next page</Text>
        </TouchableHighlight>
      </View>
    );
  },

  render() {
    var { dataSource } = this.state;

    return (
      <View style={styles.container}>
        <ListView
          ref="listview"
          dataSource={dataSource}
          renderFooter={this.renderFooter}
          renderRow={this.renderRow}
          automaticallyAdjustContentInsets={true}
          keyboardDismissMode="onDrag"
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

module.exports = PostsListView;