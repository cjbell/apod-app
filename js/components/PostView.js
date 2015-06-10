var React = require('react-native');
var {
  ScrollView,
  Text,
  View,
  Image
} = React;

var styles = require('../styles/modules/Post');

var PostView = React.createClass({

  render() {
    var { post } = this.props;

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 300 }}>
          <Image
            source={{ uri: post.small_image_url }}
            style={{ flex: 1 }}
            resizeMode="cover"
          />
        </View>

        <View style={styles.header}>
          <Text style={styles.titleText} lines={2}>
            {post.name}
          </Text>
          <Text style={styles.dateText} lines={1}>
            {post.published_at}
          </Text>
        </View>

        <View>
          <Text style={styles.descriptionText}>{post.description}</Text>

          <View style={styles.divider} />

          <Text style={styles.creditText}>{post.credit}</Text>
        </View>
      </ScrollView>
    );
  }

});

module.exports = PostView;