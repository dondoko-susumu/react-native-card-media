import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Icon,
  COLOR,
  TYPO,
} from 'react-native-material-design';

export default class CardMedia extends Component {

  static propTypes = {
    style: PropTypes.object,
    files: PropTypes.array,
    title: PropTypes.string,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    style: {},
    files: [],
    title: '',
  };

  render() {
    const {
      style,
      title,
      files,
      onPress,
    } = this.props;

    return (
      <View style={[styles.cardMedia, style]}>
        {files.length === 1 &&
          <View style={[styles.cardMediaImages, style, { flexDirection: 'row' }]}>
            <Image
              source={{ uri: `${files[0]}` }}
              style={{ flex: 1 }}
            />
          </View>
        }
        {files.length === 2 &&
          <View style={[styles.cardMediaImages, style, { flexDirection: 'row' }]}>
            <Image
              source={{ uri: `${files[0]}` }}
              style={{ flex: 1 }}
            />
            <Image
              source={{ uri: `${files[1]}` }}
              style={{ flex: 1 }}
            />
          </View>
        }
        {files.length === 3 &&
          <View style={[styles.cardMediaImages, style, { flexDirection: 'row' }]}>
            <Image
              source={{ uri: `${files[0]}` }}
              style={{ flex: 2 }}
            />
            <View style={[style, { flex: 1, flexDirection: 'column' }]}>
              <Image
                source={{ uri: `${files[1]}` }}
                style={{ flex: 1 }}
              />
              <Image
                source={{ uri: `${files[2]}` }}
                style={{ flex: 1 }}
              />
            </View>
          </View>
        }
        {files.length >= 4 &&
          <View style={[styles.cardMediaImages, style, { flexDirection: 'column' }]}>
            <View style={[style, { flex: 1, flexDirection: 'row' }]}>
              <Image
                source={{ uri: `${files[0]}` }}
                style={{ flex: 1 }}
              />
              <Image
                source={{ uri: `${files[1]}` }}
                style={{ flex: 1 }}
              />
            </View>
            <View style={[style, { flex: 1, flexDirection: 'row' }]}>
              <Image
                source={{ uri: `${files[2]}` }}
                style={{ flex: 1 }}
              />
              <Image
                source={{ uri: `${files[3]}` }}
                style={{ flex: 1 }}
              />
            </View>
          </View>
        }
        {files.length <= 4 &&
          <View style={styles.overlay}>
            <Text
              style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}
              numberOfLines={1}
              ellipsizeMode={'tail'}
              onPress={onPress}
            >
              {title}
            </Text>
          </View>
        }
        {files.length > 4 &&
          <View style={[styles.overlay, { flex: 1, flexDirection: 'row', justifyContent: 'space-between' }]}>
            <Text
              style={[TYPO.paperFontHeadline, COLOR.paperGrey50, { flex: 1 }]}
              numberOfLines={1}
              ellipsizeMode={'tail'}
              onPress={onPress}
            >
              {title}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name="image"
                color="#fafafa"
                size={24}
                style={styles.imageIcon}
              />
              <Text
                style={[TYPO.paperFontTitle, COLOR.paperGrey50, styles.imageCount]}
              >
                {files.length}
              </Text>
            </View>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardMedia: {
    position: 'relative',
  },
  cardMediaImages: {
    position: 'absolute',
    left: -16,
    right: -16,
  },
  overlay: {
    position: 'absolute',
    left: -16,
    right: -16,
    bottom: 0,
    paddingTop: 24,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'rgba(0,0,0,.35)',
  },
  ovaerlayMoreImages: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.35)',
  },
  imageCount: {
    top: 4,
  },
  imageIcon: {
    top: 6,
  },
});
