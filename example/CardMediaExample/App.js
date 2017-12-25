/* @flow */

import React, { Component } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';


import {
  Card,
  Icon,
} from 'react-native-material-design';

import CardMedia from 'react-native-card-media';

const path = 'https://raw.githubusercontent.com/dondoko-susumu/react-native-card-media/master/example/CardMediaExample/media/';
const files1 = [
  `${path}kids_play_640.jpeg`,
];

const files2 = [
  `${path}kids_play_640.jpeg`,
  `${path}sea_kids_640.jpeg`,
];

const files3 = [
  `${path}kids_play_640.jpeg`,
  `${path}temple_640.jpeg`,
  `${path}road_640.jpg`,
];

const files4 = [
  `${path}kids_play_640.jpeg`,
  `${path}road_640.jpg`,
  `${path}women_640.jpeg`,
  `${path}sea_kids_640.jpeg`,
];

const files5 = [
  `${path}kids_play_640.jpeg`,
  `${path}road_640.jpg`,
  `${path}women_640.jpeg`,
  `${path}sea_kids_640.jpeg`,
  `${path}temple_640.jpeg`,
];

export default class App extends Component<{}> {

  onPress() {
    Alert.alert('onPress');
  }

  renderImageIconView() {
    return (
      <Icon
        name="image"
        color="#fafafa"
        size={24}
        style={{ top: 6 }}
      />
    );
  }

  render() {
    return (
      <View style={styles.scene}>
        <ScrollView>
          <View style={styles.container}>
            <Card style={styles.cardStyle}>
              <CardMedia
                style={{ height: 200 }}
                title="Title"
                titleStyle={{ fontSize: 24, fontWeight: '400', lineHeight: 32, color: '#fafafa' }}
                files={files1}
                onPress={() => this.onPress()}
              />
              <Card.Body>
                <Text>
                  Multiple image component for React Native
                </Text>
              </Card.Body>
            </Card>
            <Card style={styles.cardStyle}>
              <CardMedia
                style={{ height: 200 }}
                title="Title"
                titleStyle={{ fontSize: 24, fontWeight: '400', lineHeight: 32, color: '#fafafa' }}
                files={files2}
                onPress={() => this.onPress()}
                titleTouchable={false}
                imageTouchable={false}
              />
              <Card.Body>
                <Text>
                  disabled titleTouchable & imageTouchable
                </Text>
              </Card.Body>
            </Card>
            <Card style={styles.cardStyle}>
              <CardMedia
                style={{ height: 200 }}
                title="Title"
                titleStyle={{ fontSize: 24, fontWeight: '400', lineHeight: 32, color: '#fafafa' }}
                files={files3}
                onPress={() => this.onPress()}
                imageTouchable={false}
              />
              <Card.Body>
                <Text>
                  disabled imageTouchable.
                </Text>
              </Card.Body>
            </Card>
            <Card style={styles.cardStyle}>
              <CardMedia
                style={{ height: 200 }}
                title="Title"
                titleStyle={{ fontSize: 24, fontWeight: '400', lineHeight: 32, color: '#fafafa' }}
                files={files4}
                onPress={() => this.onPress()}
              />
              <Card.Body>
                <Text>
                  Multiple image component for React Native
                </Text>
              </Card.Body>
            </Card>
            <Card style={styles.cardStyle}>
              <CardMedia
                style={{ height: 200 }}
                title="Title"
                titleStyle={{ fontSize: 24, fontWeight: '400', lineHeight: 32, color: '#fafafa' }}
                files={files5}
                onPress={() => this.onPress()}
                imageIconView={this.renderImageIconView}
                imageCountStyle={{ fontSize: 20, fontWeight: '500', lineHeight: 28, color: '#fafafa' }}
              />
              <Card.Body>
                <Text>
                  Multiple image component for React Native.
                </Text>
              </Card.Body>
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardStyle: {
    width: 320,
  },
});
