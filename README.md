## react-native-card-media
Card Media component for React Native.

![screenshot](images/screenshot.png)

## Installation

`npm install react-native-card-media --save`

## Usage
```javascript
const files5 = [
  `${path}kids_play_640.jpeg`,
  `${path}road_640.jpg`,
  `${path}women_640.jpeg`,
  `${path}sea_kids_640.jpeg`,
  `${path}temple_640.jpeg`,
];


<CardMedia
  style={{ height: 200 }}
  title="Title"
  titleStyle={{ fontSize: 24, fontWeight: '400', lineHeight: 32, color: '#fafafa' }}
  files={files5}
  onPress={() => this.onPress()}
  imageIconView={this.renderImageIconView}
  imageCountStyle={{ fontSize: 20, fontWeight: '500', lineHeight: 28, color: '#fafafa' }}
/>
```

## License
MIT
