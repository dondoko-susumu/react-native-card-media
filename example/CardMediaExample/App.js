import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


import {
  Card,
  COLOR,
  TYPO,
  Icon,
  IconToggle,
} from 'react-native-material-design';

import CardMedia from 'react-native-card-media';

const path = 'https://github.com/dondoko-susumu/react-native-card-media/blob/master/example/CardMediaExample/media/';
const files = [
  `${path}kids_play_640.jpeg?raw=true`,
  `${path}road_640.jpg?raw=true`,
  `${path}women_640.jpeg?raw=true`,
  `${path}sea_kids_640.jpeg?raw=true`,
  `${path}temple_640.jpeg?raw=true`,
];

export default class App extends Component {

  onPress() {
    console.log('on Press');
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
      <View style={styles.container}>
        <Card>
          <CardMedia
            style={{ height: 200 }}
            title="Title"
            titleStyle={[TYPO.paperFontHeadline, COLOR.paperGrey50]}
            files={files}
            onPress={() => this.onPress()}
            imageIconView={this.renderImageIconView}
            imageCountStyle={[TYPO.paperFontTitle, COLOR.paperGrey50]}
          />
          <Card.Body>
            <Text>
              Multiple image component for React Native
            </Text>
          </Card.Body>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
