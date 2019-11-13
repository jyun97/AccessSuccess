import React, { Component } from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet, Keyboard, TouchableOpacity,
  TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { storeAnswer, getAnswer } from '../screens/ResultStorage';


class VisionQ9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedChoice: '', inputError: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onAnswerChange(choiceNum){
    if(this.state.selectedChoice === choiceNum){
      this.setState({selectedChoice: ''})
    }
    else{
      this.setState({selectedChoice: choiceNum})
    }
  }

  handleSubmit() {
    if (this.state.selectedChoice.trim() === '') {
      this.setState(() => ({ inputError: "Please select a choice." }));
    }
    else {
      this.setState(() => ({ inputError: null }));
      storeAnswer("Q9", this.state.selectedChoice);
      this.props.navigation.navigate('ResultsScreen');
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
              <Text style={styles.question}>Q14. How many lines can you trace in the circle below?</Text>
              <Image
                source={require('./images/plate9.png')} 
                style={styles.image}
              />
               <Text style={styles.subtext}>Choose one of the following:</Text>

              <SelectButton 
                source={require('./images/Q9_Choice1.png')}
                choiceID={'1'}
                activeState={this.state.selectedChoice}
                changeAnswer={(newAnswer) => this.onAnswerChange(newAnswer)}
              />
              <SelectButton 
                  source={require('./images/Q9_Choice2.png')}
                  choiceID={'2'}
                  activeState={this.state.selectedChoice}
                  changeAnswer={(newAnswer) => this.onAnswerChange(newAnswer)}
              />
              <SelectButton 
                  source={require('./images/Q9_Choice3.png')}
                  choiceID={'3'}
                  activeState={this.state.selectedChoice}
                  changeAnswer={(newAnswer) => this.onAnswerChange(newAnswer)}
              />
              <SelectButton 
                  source={require('./images/Q9_Choice4.png')}
                  choiceID={'4'}
                  activeState={this.state.selectedChoice}
                  changeAnswer={(newAnswer) => this.onAnswerChange(newAnswer)}
              />

              {!!this.state.inputError && (
                <Text style={styles.error}>{this.state.inputError}</Text>
              )}
   
              <TouchableOpacity
                style={styles.back}
                onPress={() => this.props.navigation.navigate('VisionQ9Instr')}
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
export default VisionQ9;


class SelectButton extends React.Component{
    constructor (props) {
        super(props)
    }
    handleChange(){
        let choiceNum = this.props.choiceID;
        this.props.changeAnswer(choiceNum);
    }
    render(){
        if(this.props.activeState === this.props.choiceID){
            return(
                <TouchableOpacity onPress ={() => this.handleChange()}>
                    <Image source={this.props.source}
                    style={{width: 300, height: 35, borderWidth: 3, borderColor: "#1EB3EA"}}
                    />
                </TouchableOpacity>
            );
        }
        return(
            <TouchableOpacity onPress ={() => this.handleChange()}>
                <Image source={this.props.source}
                style={{width: 300, height: 35}}
                />
            </TouchableOpacity>
        );
    }
}

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
    fontSize: 25,
    marginTop: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
  error: {
    color: "red",
    position: 'absolute',
    bottom: 170,
    fontSize: 25,
  },
  back: {
    position: 'absolute',
    left: 20,
    bottom: -50,
    width: '25%',
    height: '10%',
    aspectRatio: 2/1,
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#1EB3EA',
    overflow: 'hidden',
    borderColor: '#1EB3EA',
    justifyContent: 'center',
  },
  next: {
    position: 'absolute',
    right: 20,
    bottom: 50,
    width: '25%',
    height: '10%',
    aspectRatio: 2/1,
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#1EB3EA',
    overflow: 'hidden',
    borderColor: '#1EB3EA',
    justifyContent: 'center',
  },
  buttonText:{
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  }
});