var React = require('react-native');
var PostAPI = require('../lib/PostAPI');
var PostsListView = require('../components/PostsListView');
var PostView = require('../components/PostView');
var { union, defer } = require('lodash');

var PostsList = React.createClass({

  getInitialState() {
    return {
      pageNumber: 1,
      posts: [],
      isFetching: false
    };
  },

  componentDidMount() {
    this.fetchPosts();
  },

  render() {
    var { posts } = this.state;

    return (
      <PostsListView
        fetchNextPage={this.fetchNextPage}
        navigateToPost={this.navigateToPost}
        {...this.state}
        {...this.props}
      />
    );
  },

  navigateToPost(post) {
    this.props.navigator.push({
      title: '',
      component: PostView,
      passProps: { post },
    });
  },

  fetchNextPage() {
    var { pageNumber } = this.state;

    this.setState({
      pageNumber: pageNumber + 1
    });

    defer(this.fetchPosts);
  },

  fetchPosts() {
    var { pageNumber, posts } = this.state;
    this.setState({ isFetching: true });

    console.log('Fetching posts: ', pageNumber);

    PostAPI.getPostsByPage(pageNumber).then((response) => {
      posts = union(posts, response.posts);
      this.setState({ posts: posts, isFetching: false });
    });
  }

});

module.exports = PostsList;