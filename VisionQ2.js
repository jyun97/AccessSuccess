import React, { Component } from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet, Keyboard, TouchableOpacity,
	TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { storeAnswer } from '../screens/ResultStorage';
import { mapResults } from '../screens/Map';

class VisionQ2 extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = { answer: '', inputError: '' };
  	this.handleAnswer = this.handleAnswer.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
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
      storeAnswer("Q2", this.state.answer);
      mapResults();
  		this.props.navigation.navigate('VisionQ11');
    }
	}

  render() {
		return(
		  <KeyboardAvoidingView
		  	behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
	    	<SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <Text style={styles.header}>Vision Test</Text>
              <Text style={styles.question}>Q2. What number do you see in the circle below?</Text>
              <Image
              	source={require('./images/plate2.png')} 
    	  				style={styles.image}
    	  			/>

              <TextInput
  							placeholder="Enter number"
                style={styles.input}
                keyboardType={'numeric'}
                onChangeText={answer => this.handleAnswer(answer)}
              />
              {!!this.state.inputError && (
          			<Text style={styles.error}>{this.state.inputError}</Text>
        			)}

              <TouchableOpacity
              	style={styles.back}
              	onPress={() => this.props.navigation.navigate('HomeScreen')}
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
export default VisionQ2;


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
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  input: {
  	height: 60,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 100,
    textAlign: 'center',
    fontSize: 30,
  },
  error: {
  	color: "red",
  	position: 'absolute',
  	bottom: 145,
  	fontSize: 25,
  },
  back: {
  	position: 'absolute',
    bottom: 20,
    left: 10,
    width: '20%',
    aspectRatio: 2/1,
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#1EB3EA',
    overflow: 'hidden',
    borderColor: '#1EB3EA',
    margin: 20,
  },
  next: {
  	position: 'absolute',
    bottom: 20,
    right: 10,
    width: '20%',
    aspectRatio: 2/1,
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#1EB3EA',
    overflow: 'hidden',
    borderColor: '#1EB3EA',
    margin: 20,
  },
  buttonText:{
  	textAlign: 'center',
    color: 'white',
    fontSize: 25,
  }
});