import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 
import Accordion from 'react-native-collapsible/Accordion';

const styles = StyleSheet.create({
  titleText: {
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'ArialHebrew',
      color: '#1EB3EA',
  },
  baseText: {
      fontSize: 15,
      fontFamily: 'ArialHebrew',
      marginLeft: wp("5%"),
      marginRight: wp("5%"),
      lineHeight:25,
      color: '#676363',
      marginTop: 15,
  },
  descriptionText: {
      fontSize: 18,
      fontFamily: 'ArialHebrew',
      marginLeft: wp("5%"),
      marginRight: wp("5%"),
      lineHeight:25,
      color: '#676363',
      marginTop: 15,
  },
  boldText: {
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'ArialHebrew',
      marginLeft: wp("5%"),
      marginRight: wp("5%"),
      lineHeight:25,
      color: '#676363',
      marginTop: 15,
  },
  container: {
    marginVertical: 10,
      borderColor: '#1EB3EA',
      marginBottom: 10,
      flex:1
  },
  ImageContainer: {
      aspectRatio: 1,
      width: '35%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15
  },
  buttonContainer: {
      alignItems: 'center',
      backgroundColor: '#1EB3EA',
      padding: 25,
      marginVertical: 5,
  },
  buttonText:{
      color: 'white',
      fontSize: 20
  }
});

const SECTIONS = [
  {
    title: 'Zoom',
    description: 'Magnify the entire screen by double-tapping with 3 fingers to zoom in and out',
    content: ['a. Follow Focus:',
    'Moves the Zoom window to follow along as you type', 
    'b. Smart Typing (appears once you turn on Follow Focus):',
    'Moves the Zoom window when the keyboard appears so that the text is zoomed but the keyboard is not',
    'c. Keyboard Shortcuts:',
    'Different keyboard shortcuts to easily change the Zoom level and move the Zoom window around',
    'd. Zoom Controller:',
    'Turn on the Zoom Controller which allows you to drag, tap, and slide it to adjust the zoom level. You can also set what single-tap, double-tap, and triple-tap will do, and set the Controller’s color and opacity when idle',
    'e. Zoom Region:',
    'Change zoom between full screen or just a window',
    'f. Zoom Filter:',
    'Change the display to inverted, grayscale, grayscale inverted, or low light within the zoomed-in area',
    'g. Maximum Zoom Level:',
     'Set the max zoom level anywhere from 1.2x to 15.0x']
   },
   {
    title: 'Magnifier',
    description: 'Use the phone’s camera to magnify surroundings',
    content: ['a. Auto-adjust exposure:',
    'Adjust brightness and contrast based on ambient light settings']
   },
   {
    title: 'Display & Text Size',
    description: 'If you have color blindness or other vision challenges, you can customize the display settings to make the screen easier to see',
    content: ['a. Bold Text:',
    'Adjust brightness and contrast based on ambient light settings',
    'Larger text:',
    'Allows you to adjust text size',
    'Button Shapes',
    'Underlines text you can tap',
    'On/off labels',
    'Adds shapes on On/Off labels to make it clear what’s on and off. Indicates switches turned on with “1” and switches turned off with \'0\'']
   },
   {
    title: 'Reduce Transparency',
    description: 'Improve color contrast between app foreground and background colors. Reduces transparency and blurs on some backgrounds',
    content: []
   },
   {
    title: 'Increase Contrast',
    description: 'Increase color contrast between app foreground and background colors. This setting improves the contrast and legibility by altering color and text styling',
    content: []
   },
   {
    title: 'Differentiate without Color',
    description: 'Replaces user interface items that rely solely on color to convey information with alternatives',
    content: []
   },
   {
    title: 'Smart Invert',
    description: 'Reverses the colors of the display (except for images, media, and some apps that use dark color styles',
    content: []
   },
   {
    title: 'Classic invert',
    description: 'Reverse the colors of the display',
    content: []  
   },
   {
    title: 'Color Filters',
    description: 'Used to differentiate colors by users who are color blind and aid users who have difficulty reading text on the display. Tap a filter to apply it. To adjust the intensity or hue, drag the sliders',
    content: []
   },
];

export default class Settings extends Component{
 state = {
    activeSections: [],
  };

  _renderHeader = section => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View styles={{flex:1}}>
      <View style={styles.container}>
      <Text style={styles.descriptionText}>{section.description}</Text>
      {
        section.content.map(item => 
          item[1]==='.' ? <Text style={styles.boldText}>{item}</Text> : <Text style={styles.baseText}>{item}</Text>
        )
      }
      </View>
      </View>
          );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <ScrollView >
          <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </ScrollView>
  );
  } 
}