import React, { Component } from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet, Keyboard, TouchableOpacity,
    TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, Alert } from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 
import { StackNavigator } from 'react-navigation';
import { storeAnswer } from '../screens/ResultStorage';
import { mapResults } from '../screens/Map';

class ResultsScreen extends React.Component {
  constructor(props) {
      super(props);
      test = mapResults();
      this.state = { results: test };
    //   console.log("~~~~~~~~~~~~~");
    //   console.log(this.state.results);
  }

  render() {
		return(
            <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>

                <View style={{flex:1}}/>
                <Text style={styles.titleText}>Results</Text>

                <View style={styles.ImageContainer}>
                </View>
                    <Text style={styles.text}>{'\n'}Accessibility setting(s) to turn on recommendation: </Text>
                    <Text style={styles.resultText}>{'\n'}1 . Red/Green Filter [Protanopia] </Text>
                    
                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Click here to turn these settings on</Text>
                    </TouchableOpacity>

                    <Text style={styles.baseText}>{'\n'}{'\n'}{'\n'}For more information on each accessibility setting, go to the Settings tab on the bottom of your screen!</Text>
                <View style={{flex:2}}/>
                
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
        color: '#1EB3EA',
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
        color: '#676363',
        marginTop: 15,
        margin: 15,
    },
    container: {
        width: '95%',
        height:'100%',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        borderColor: '#1EB3EA',
        borderWidth: 1
    },
    buttonContainer: {
        width: '70%',
        aspectRatio: 4/1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: '#1EB3EA',
        overflow: 'hidden',
        borderColor: '#1EB3EA',
        margin: 20,
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});