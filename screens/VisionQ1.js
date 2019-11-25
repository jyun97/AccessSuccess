import React, { Component } from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet, Keyboard, TouchableOpacity,
	TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, ProgressViewIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { storeAnswer } from '../screens/ResultStorage';
import {withGlobalContext} from './Context'


class VisionQ1 extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = { answer: '', inputError: '' };
  	this.handleAnswer = this.handleAnswer.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAnswer(answer) {
  	this.setState({ answer });
  }

  handleSubmit() {
  	if (this.state.answer.trim() === '') {
      this.setState(() => ({ inputError: "Please fill out this field." }));
    }
    else {
      this.setState(() => ({ inputError: null }));
      storeAnswer("Q1", this.state.answer);
  		this.props.navigation.navigate('VisionQ2');
    }
	}

  render() {
		return(
		  <KeyboardAvoidingView
		  	behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
	    	<SafeAreaView style={[styles.container, {backgroundColor: this.props.global.theme}]}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <Text style={[styles.header, {color: this.props.global.textTheme}]}>Vision Test</Text>
              <ProgressViewIOS progressTintColor="red" progress={0.36}/>
              <Text style={[styles.question, {color: this.props.global.textTheme}]}>Q1. What number do you see in the circle below?</Text>
              <Text style={[styles.subtext, {color: this.props.global.textTheme}]}>(If you are unsure, enter 0)</Text>
              <Image
              	source={require('./images/plate1.png')} 
    	  				style={styles.image}
    	  			/>

              <TextInput
  							placeholder="Enter number"
                style={[styles.input, {borderColor: this.props.global.textTheme} , {color: this.props.global.textTheme}]}
                keyboardType={'number-pad'}
                padding={10}
                textAlign={'center'}
                justifyContent={'center'}
                onChangeText={answer => this.handleAnswer(answer)}
              />
              {!!this.state.inputError && (
          			<Text style={styles.error}>{this.state.inputError}</Text>
        			)}

              <TouchableOpacity
              	style={styles.back}
              	onPress={() => this.props.navigation.navigate('VisionQ1Instr')}
              >
              	<Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>

              <TouchableOpacity
              	style={styles.next}
              	onPress={() => this.handleSubmit()}
              >
              	<Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
         
       	 		</View>
    			</TouchableWithoutFeedback>
				</SafeAreaView>
	    </KeyboardAvoidingView>
	  )
  }
}
export default withGlobalContext(VisionQ1);


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	inner: {
		justifyContent: 'flex-end',
    alignItems: 'center',
	},
  header: {
  	textAlign: 'center',
  	fontWeight: 'bold',
  	fontSize: 25,
  	textDecorationLine: 'underline'
  },
  question: {
  	textAlign: 'center',
  	fontWeight: 'bold',
  	fontSize: 30,
  },
  subtext: {
  	fontWeight: 'bold',
  	fontSize: 25
  },
  image: {
    width: 300,
    height: 300,
  },
  input: {
  	height: 60,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 30,
  },
  error: {
  	color: "red",
  	position: 'absolute',
  	bottom: 80,
  	fontSize: 25,
  },
  back: {
  	position: 'absolute',
    left: 20,
    bottom: -30,
    width: '25%',
    height: '10%',
    aspectRatio: 2/1,
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#147efb',
    overflow: 'hidden',
    borderColor: '#147efb',
    justifyContent: 'center',
  },
  next: {
  	position: 'absolute',
    right: 20,
    bottom: -30,
    width: '25%',
    height: '10%',
    aspectRatio: 2/1,
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#147efb',
    overflow: 'hidden',
    borderColor: '#147efb',
    justifyContent: 'center',
  },
  buttonText:{
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 25,
  },
});
