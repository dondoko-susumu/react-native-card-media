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
    imageTouchable: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    files: [],
    title: '',
    showTitle: true,
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
      imageTouchable,
    } = this.props;

    return (
      <View style={[styles.cardMedia, style]}>
        {files.length === 1 &&
          <View style={[styles.cardMediaImages, style, { flexDirection: 'row' }]}>
            <TouchableWithoutFeedback 
              onPress={() => { onPress(0); }}
              disabled={!imageTouchable}>
              <Image
                source={{ uri: `${files[0]}` }}
                style={{ flex: 1 }}
              />
            </TouchableWithoutFeedback>
          </View>
        }
        {files.length === 2 &&
          <View style={[styles.cardMediaImages, style, { flexDirection: 'row' }]}>
            <TouchableWithoutFeedback 
              onPress={() => { onPress(0); }}
              disabled={!imageTouchable}>
              <Image
                source={{ uri: `${files[0]}` }}
                style={{ flex: 1 }}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback 
              onPress={() => { onPress(1); }}
              disabled={!imageTouchable}>
              <Image
                source={{ uri: `${files[1]}` }}
                style={{ flex: 1 }}
              />
            </TouchableWithoutFeedback>
          </View>
        }
        {files.length === 3 &&
          <View style={[styles.cardMediaImages, style, { flexDirection: 'row' }]}>
            <TouchableWithoutFeedback 
              onPress={() => { onPress(0); }}
              disabled={!imageTouchable}>
              <Image
                source={{ uri: `${files[0]}` }}
                style={{ flex: 2 }}
              />
            </TouchableWithoutFeedback>
            <View style={[style, { flex: 1, flexDirection: 'column' }]}>
              <TouchableWithoutFeedback 
                onPress={() => { onPress(1); }}
                disabled={!imageTouchable}>
                  <Image
                    source={{ uri: `${files[1]}` }}
                    style={{ flex: 1 }}
                  />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback 
                onPress={() => { onPress(2); }}
                disabled={!imageTouchable}>
                <Image
                  source={{ uri: `${files[2]}` }}
                  style={{ flex: 1 }}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
        }
        {files.length >= 4 &&
          <View style={[styles.cardMediaImages, style, { flexDirection: 'column' }]}>
            <View style={[style, { flex: 1, flexDirection: 'row' }]}>
              <TouchableWithoutFeedback 
                onPress={() => { onPress(0); }}
                disabled={!imageTouchable}>
                <Image
                  source={{ uri: `${files[0]}` }}
                  style={{ flex: 1 }}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback 
                onPress={() => { onPress(1); }}
                disabled={!imageTouchable}>
                <Image
                  source={{ uri: `${files[1]}` }}
                  style={{ flex: 1 }}
                />
              </TouchableWithoutFeedback>
            </View>
            <View style={[style, { flex: 1, flexDirection: 'row' }]}>
              <TouchableWithoutFeedback 
                onPress={() => { onPress(2); }}
                disabled={!imageTouchable}>
                <Image
                  source={{ uri: `${files[2]}` }}
                  style={{ flex: 1 }}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback 
                onPress={() => { onPress(3); }}
                disabled={!imageTouchable}>
                <Image
                  source={{ uri: `${files[3]}` }}
                  style={{ flex: 1 }}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
        }
        {files.length <= 4 && showTitle &&
          <View style={styles.overlay} pointerEvents='none'>
            <Text
              style={titleStyle}
              numberOfLines={1}
              ellipsizeMode={'tail'}
            >
              {title}
            </Text>
          </View>
        }
        {files.length > 4 && showTitle &&
          <View style={[styles.overlay, { flex: 1, flexDirection: 'row', justifyContent: 'space-between' }]} pointerEvents='none'>
            <Text
              style={[titleStyle, { flex: 1}]}
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
        }
        {files.length > 4 && !showTitle &&
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} pointerEvents='none'>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 10, right: 16 }}>
              {imageIconView && imageIconView()}
              <Text
                style={[imageCountStyle, styles.imageCount]}
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
  imageCount: {
    top: 4,
  },
});
