var React = require('react-native');
var {
  Image,
  Text,
  TouchableHighlight,
  View
} = React;

var styles = require('../styles/modules/PostCell');

var PostCell = React.createClass({

  render() {
    var { post, onSelect } = this.props;

    return (
      <TouchableHighlight onPress={onSelect}>
        <View style={styles.container}>
          <Image
            source={{ uri: post.small_image_url }}
            style={styles.image}
            resizeMode="cover"
          />

          <View style={styles.textContainer}>
            <Text style={styles.titleText} lines={2}>
              {post.name}
            </Text>
            <Text style={styles.dateText} lines={2}>
              {post.published_at}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

});

module.exports = PostCell;