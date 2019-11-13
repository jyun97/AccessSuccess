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
    this.state = { results: ''};

    mapResults()
      .then((result) => {
        this.setState({results: result});
    })
      .catch(err => {
        console.log(err);
    })
  }

  render() {
		return(
            <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>

                <View style={{flex:1}}/>
                <Text style={styles.titleText}>Results</Text>

                <View style={styles.ImageContainer}>
                </View>
                    <Text style={styles.text}>{'\n'}Recommended accessibility setting(s) to turn on: </Text>
                    <Text style={styles.resultText}>{'\n'}{this.state.results}</Text>
                    
                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.buttonContainer}
                        onPress={() => this.props.navigation.navigate('HomeScreen')}>
                        {/* <Text style={styles.buttonText}>Click here to turn these settings on</Text> */}
                        <Text style={styles.buttonText}>Go back to home page</Text>
                    </TouchableOpacity>

                    <Text style={styles.baseText}>{'\n'}{'\n'}For more information on each accessibility setting, go to the Settings tab on the bottom of your screen!</Text>
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
    }
});