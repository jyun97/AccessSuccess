import React, { Component } from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet, Keyboard, TouchableOpacity,
    TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, Alert, ScrollView } from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 
import { StackNavigator } from 'react-navigation';
import { storeAnswer } from '../screens/ResultStorage';
import { mapResults } from '../screens/Map';
import Accordion from 'react-native-collapsible/Accordion';

const DICT = 
{ 
  'N': 
  { 
    title: 'No accessibility settings recommended',
    description: undefined,
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
}

const RECS = []

class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [], activeSections: [] };

    mapResults()
      .then((result) => {
        this.setState({results: result});
    })
      .catch(err => {
        console.log(err);
    })
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
          <View style={styles.container}>
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
        this.state.results.map( rec => {
            let match = DICT[rec]
            RECS.push(match)
        })

		return(
            <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
            <ScrollView>

                <View style={{flex:1}}/>
                <Text style={styles.titleText}>Results</Text>

                <View style={styles.ImageContainer}>
                </View>
                    <Text style={styles.text}>{'\n'}Recommended accessibility setting(s) to turn on: </Text>

                      <Accordion
                          sections={RECS}
                          activeSections={this.state.activeSections}
                          renderHeader={this._renderHeader}
                          renderContent={this._renderContent}
                          onChange={this._updateSections}
                      />
                    
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
            </SafeAreaView>
	  )
  }
}
export default ResultsScreen;

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