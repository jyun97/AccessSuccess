import React, { Component } from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet, Keyboard, TouchableOpacity,
    TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, Alert, ScrollView } from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 
import { StackNavigator } from 'react-navigation';
import { storeAnswer } from '../screens/ResultStorage';
import { mapResults } from '../screens/Map';
import Accordion from 'react-native-collapsible/Accordion';
import AsyncStorage from '@react-native-community/async-storage';
import {withGlobalContext} from './Context'


const DICT = 
{ 
  'N': 
  { 
    title: 'No accessibility settings recommended',
    description: "",
    steps: [],
  },
  'P': 
  { 
    title: 'Red/Green Color Filter for Protanopia',
    description: 'Changes screen colors to make it easier to differentiate between colors for those with red color deficiencies (Protanopia)',
    steps: ['1. Settings > Accessibility > Display & Text Size > Color Filters',
    '2. Slide to turn on Color Filters and select Red/Green Filter']
  },
  'D': 
  { 
    title: 'Green/Red Color Filter for Deuteranopia',
    description: 'Changes screen colors to make it easier to differentiate between colors for those with green color deficiencies (Deuteranopia)',
    steps: ['1. Settings > Accessibility > Display & Text Size > Color Filters',
    '2. Slide to turn on Color Filters and select Green/Red Filter']
  },
  'T': 
  { 
    title: 'Blue/Yellow Color Filter for Tritanopia',
    description: 'Changes screen colors to make it easier to differentiate between colors for those with blue/yellow color deficiencies (Tritanopia)',
    steps: ['1. Settings > Accessibility > Display & Text Size > Color Filters',
    '2. Slide to turn on Color Filters and select Blue/Yellow Filter']
  },
  'G': 
  { 
    title: 'Grayscale Color Filter',
    description: 'Changes screen display to gray instead of color for those with total colorblindness',
    steps: ['1. Settings > Accessibility > Display & Text Size > Color Filters',
    '2. Slide to turn on Color Filters and select Grayscale']
  },
  'bold': 
  { 
    title: 'Bold Text',
    description: 'Displays text in boldface characters for increased legibility',
    steps: ['1. Settings > Accessibility > Display & Text Size',
    '2. Slide to turn on Bold Text']
  },
  'contrast': 
  { 
    title: 'Increase Contrast',
    description: 'Increase color contrast between app foreground and background colors. This setting improves the contrast and legibility by altering color and text styling',
    steps: ['1. Settings > Accessibility > Display & Text Size',
    '2. Slide to turn on Increase Contrast']
  },
  'trans': 
  { 
    title: 'Reduce Transparency',
    description: 'Improve color contrast between app foreground and background colors. Reduces transparency and blurs on some backgrounds',
    steps: ['1. Settings > Accessibility > Display & Text Size',
    '2. Slide to turn on Reduce Transparency']
  },
  'button': 
  { 
    title: 'Button Shapes',
    description: 'Underlines text you can tap.',
    steps: ['1. Settings > Accessibility > Display & Text Size',
    '2. Slide to turn on Button Shapes']
  },
  'onOff': 
  { 
    title: 'On/Off Labels',
    description: 'Adds shapes on On/Off labels to make it clear what’s on and off. Indicates switches turned on with “1” and switches turned off with \'0\'',
    steps: ['1. Settings > Accessibility > Display & Text Size',
    '2. Slide to turn on On/Off Labels']
  },
}


class PrevResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  noRecs: false, inconcl: false, loading: false, recs: [], activeSections: [], };
    this.getResults();
  }

  async getResults() {
    const username = await AsyncStorage.getItem("currentUser");
    const prevResults = await AsyncStorage.getItem(JSON.stringify(username));
    //Not taken test yet
    if (prevResults === null) {
      this.setState({noRecs: true});
      this.state.recs.push("N");
      this.setState({loading: true});
    }
    //Else load prev results
    else {
        let count = 0
        JSON.parse(prevResults).map((result) => {
        if (result == "N" && count == 0) {
            this.setState({noRecs: true});
        }
        else if (result == "I" && count == 0) {
            this.setState({inconcl: true});
        }
        let match = DICT[result]
        this.state.recs.push(match)
        this.setState({loading: true})  
        count = count + 1 
      })  
    }
  }

   _renderHeader = rec => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{rec.title}</Text>
      </View>
    );
  };

  _renderContent = rec => {
    return (
      <View styles={{flex:1}}>
          <View style={[styles.container, {backgroundColor: this.props.global.theme}]}>
              <Text style={styles.descriptionText}>{rec.description}</Text>
              <Text style={styles.descriptionText}>To turn on:</Text>
                {
                  rec.steps.map(item => 
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
    const {loading} = this.state
    const {noRecs} = this.state
    const {inconcl} = this.state
		return(
      <SafeAreaView style={{flex:1}}>
      {
        loading &&
            
            <View style={[styles.container, {backgroundColor: this.props.global.theme}]}>
            <ScrollView>

                <View style={{flex:1}}/>
                <Text style={styles.titleText}>Previous Test Recommendations</Text>

                <View style={styles.ImageContainer}>
                </View>
                    {
                        noRecs &&
                        <Text style={[styles.resultText, {color: this.props.global.textTheme}]}>{'\n'}No accessibility settings recommended.</Text>
                    }
                    {
                        inconcl &&
                        <Text style={[styles.resultText, {color: this.props.global.textTheme}]}>{'\n'}Test results inconclusive. We recommend retaking the test.</Text>
                    }
                    {
                        noRecs === false && inconcl === false &&
                      <View>
                      <Text style={[styles.text, {color: this.props.global.textTheme}]}>{'\n'}Recommended accessibility setting(s) to turn on: </Text>
                      <Accordion
                          sections={this.state.recs}
                          activeSections={this.state.activeSections}
                          renderHeader={this._renderHeader}
                          renderContent={this._renderContent}
                          onChange={this._updateSections}
                      />
                      </View>
                    }
                    
                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.buttonContainer}
                        onPress={() => this.props.navigation.navigate('HomeScreen')}>
                        {/* <Text style={styles.buttonText}>Click here to turn these settings on</Text> */}
                        <Text style={styles.buttonText}>Go back to home page</Text>
                    </TouchableOpacity>

                    <Text style={styles.baseText}>{'\n'}{'\n'}For more information on each accessibility setting, go to the Settings tab on the bottom of your screen!</Text>
                <View style={{flex:2}}/>
            </ScrollView>
            </View>
           
          }
           </SafeAreaView>
	  )
  }
}
export default withGlobalContext(PrevResults);

const styles = StyleSheet.create({
    titleText: {
        fontSize: 35,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        color: '#147efb',
    },
    text:{
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        marginLeft: wp("5%"),
        marginRight: wp("5%"),
        lineHeight:25,
        color: '#000000',
        marginTop: 15,
        margin: 15
    },
    resultText:{
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        marginLeft: wp("5%"),
        marginRight: wp("5%"),
        lineHeight:25,
        color: '#000000',
        marginTop: 15,
        margin: 15
    },
    baseText: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        marginLeft: wp("5%"),
        marginRight: wp("5%"),
        lineHeight:25,
        color: 'black',
        marginTop: 15,
        margin: 15,
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
    container: {
        width: '95%',
        height:'100%',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        borderColor: '#147efb',
        borderWidth: 1
    },
    buttonContainer: {
        width: '70%',
        aspectRatio: 4/1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: '#147efb',
        overflow: 'hidden',
        borderColor: '#147efb',
        margin: 20,
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },

});