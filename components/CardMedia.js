/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  style: StyleObj,
  files: Array<string>,
  title: string,
  showTitle:boolean,
  titleStyle?: StyleObj,
  onPress?: () => mixed,
  imageIconView?: () => mixed,
  imageCountStyle?: StyleObj,
  titleTouchable: boolean,
  imageTouchable: boolean,
};

export default class CardMedia extends Component<Props> {

  static propTypes = {
    style: PropTypes.any,
    files: PropTypes.array.isRequired,
    title: PropTypes.string,
    showTitle: PropTypes.bool,
    titleStyle: PropTypes.any,
    onPress: PropTypes.func,
    imageIconView: PropTypes.func,
    imageCountStyle: PropTypes.any,
    titleTouchable: PropTypes.bool,
    imageTouchable: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    files: [],
    title: '',
    showTitle: true,
    titleTouchable: true,
    imageTouchable: true,
  };

  render() {
    const {
      style,
      title,
      showTitle,
      titleStyle,
      files,
      onPress,
      imageIconView,
      imageCountStyle,
      titleTouchable,
      imageTouchable,
    } = this.props;

    return (
      <View style={[styles.cardMedia, style]}>
        {files.length === 1 &&
          <TouchableWithoutFeedback onPress={onPress} disabled={!imageTouchable}>
            <View style={[styles.cardMediaImages, style, { flexDirection: 'row' }]}>
              <Image
                source={{ uri: `${files[0]}` }}
                style={{ flex: 1 }}
              />
            </View>
          </TouchableWithoutFeedback>
        }
        {files.length === 2 &&
          <TouchableWithoutFeedback onPress={onPress} disabled={!imageTouchable}>
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
          </TouchableWithoutFeedback>
        }
        {files.length === 3 &&
          <TouchableWithoutFeedback onPress={onPress} disabled={!imageTouchable}>
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
          </TouchableWithoutFeedback>
        }
        {files.length >= 4 &&
          <TouchableWithoutFeedback onPress={onPress} disabled={!imageTouchable}>
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
          </TouchableWithoutFeedback>
        }
        {files.length <= 4 && showTitle &&
          <TouchableWithoutFeedback onPress={onPress} disabled={!titleTouchable}>
            <View style={styles.overlay}>
              <Text
                style={titleStyle}
                numberOfLines={1}
                ellipsizeMode={'tail'}
              >
                {title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        }
        {files.length > 4 && showTitle &&
          <TouchableWithoutFeedback onPress={onPress} disabled={!titleTouchable}>
            <View style={[styles.overlay, { flex: 1, flexDirection: 'row', justifyContent: 'space-between' }]}>
              <Text
                style={[titleStyle, { flex: 1 }]}
                numberOfLines={1}
                ellipsizeMode={'tail'}
              >
                {title}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                {imageIconView && imageIconView()}
                <Text
                  style={[imageCountStyle, styles.imageCount]}
                >
                  {files.length}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        }
        {files.length > 4 && !showTitle &&
          <TouchableWithoutFeedback onPress={onPress} disabled={!titleTouchable}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', position: 'absolute', bottom: 10, right: 16 }}>
                {imageIconView && imageIconView()}
                <Text
                  style={[imageCountStyle, styles.imageCount]}
                >
                  {files.length}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
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
  imageCount: {
    top: 4,
  },
});
