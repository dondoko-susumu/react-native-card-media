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
  titleStyle={[TYPO.paperFontHeadline, COLOR.paperGrey50]}
  files={files5}
  onPress={() => this.onPress()}
  imageIconView={this.renderImageIconView}
  imageCountStyle={[TYPO.paperFontTitle, COLOR.paperGrey50]}
/>
```

## License
MIT
