import React, { Component } from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet, Keyboard, TouchableOpacity,
	TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, ProgressViewIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { getAnswer, storeAnswer } from '../screens/ResultStorage';
import AsyncStorage from '@react-native-community/async-storage';

class CreateAccount extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = { name: '', password: '', inputError: ''};
  	this.handleAnswer = this.handleAnswer.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAnswer(name) {
    this.setState({ name });
  }

  handlePassword(password){
    this.setState({ password });
  }

  fetchAllItems = async ()  => {
    const keys = await AsyncStorage.getAllKeys();
    // console.log(keys)
  }
  
  async removeItemValue(key) {
    try{
      await AsyncStorage.removeItem(key);
      return true;
    }
    catch(exception){
      return false;
    }
  }

  async handleSubmit() {
  	if (this.state.name.trim() === '' || this.state.password.trim == '') {
      this.setState(() => ({ inputError: "Please fill out both fields." }));
    }
    else {
      this.setState(() => ({ inputError: null }));
      storeAnswer("currentUser", this.state.name);
    
      const accountList = await AsyncStorage.getItem("existingAccounts");

      var accounts = [];
      if(accountList != null){
        accounts = accountList
      }
      accounts = accounts + " " + [this.state.name]

      storeAnswer("existingAccounts", accounts);

      // var dict = []
      // var userDict = []
      // var prevResults = []

      // userDict.push({
      //   key: "prevResults",
      //   value: prevResults
      // })
      // userDict.push({
      //   key: "password",
      //   value: this.state.password
      // })

      // dict.push({
      //   key: this.state.answer,
      //   value: this.state.password
      // })
      // obj = JSON.stringify(dict)

      // storeAnswer(this.state.answer, obj)
      // storeAnswer(this.state.name, this.state.password)
      this.props.navigation.navigate('HomeScreen');
    }
   }

  render() {
		return(
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >

	        <SafeAreaView style={{flex:1}}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inner}>
                            <Text style={styles.header}> {'\n'} Create Account {'\n'}</Text>

                            <TextInput
                            placeholder="Enter name"
                            style={styles.input}
                            keyboardType={'number-pad'}
                            padding={10}
                            textAlign={'center'}
                            justifyContent={'center'}
                            onChangeText={name => this.handleAnswer(name)}
                            />

                            <TextInput
                            placeholder="Enter password"
                            style={styles.input}
                            keyboardType={'number-pad'}
                            padding={10}
                            textAlign={'center'}
                            justifyContent={'center'}
                            onChangeText={password => this.handlePassword(password)}
                            />

                            {!!this.state.inputError && (<Text style={styles.error}>{this.state.inputError}</Text>)}
                
                            <TouchableOpacity
                                style={styles .cancel}
                                onPress={() => this.props.navigation.navigate('FirstScreen')}>

                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.submit}
                                onPress={() => this.props.navigation.navigate('LoginScreen')}
                                onPress={() => this.handleSubmit()}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>
         
       	 		            </View>
    			        </TouchableWithoutFeedback>
                    </View>
				</SafeAreaView>
	        </KeyboardAvoidingView>
	  )
  }
}
export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
  inner: {
	justifyContent: 'flex-end',
    alignItems: 'center',
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'ArialHebrew',
    color: '#147efb',
  },
  subtext: {
  	fontWeight: 'bold',
  	fontSize: 25
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
  cancel: {
  	position: 'absolute',
    left: -25,
    bottom: -250,
    width: '25%',
    height: '20%',
    aspectRatio: 2/1,
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#147efb',
    overflow: 'hidden',
    borderColor: '#147efb',
    justifyContent: 'center',
  },
  submit: {
  	position: 'absolute',
    right: -25,
    bottom: 0,
    width: '25%',
    height: '20%',
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
    fontSize: 20,
  },
});
