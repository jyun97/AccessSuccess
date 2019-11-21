import React, { Component } from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet, Keyboard, TouchableOpacity, Alert,
	TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, ProgressViewIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { getAnswer, storeAnswer } from '../screens/ResultStorage';
import AsyncStorage from '@react-native-community/async-storage';

class CreateAccount extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = { name: '', password1: '', password2: '', inputError: ''};
  	this.handleAnswer = this.handleAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAnswer(name) {
    this.setState({ name });
  }

  handlePassword1(password1){
    this.setState({ password1 });
  }

  handlePassword2(password2){
    this.setState({ password2 });
  }

  fetchAllItems = async ()  => {
    const keys = await AsyncStorage.getAllKeys();
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
  	if (this.state.name.trim() === '' || this.state.password2.trim == '' || this.state.password1.trim == '') {
      this.setState(() => ({ inputError: "Please fill out all fields." }));
    }
    else if(this.state.password1 !== this.state.password2){
      Alert.alert(
        'Alert',
        'Passwords do not match, please make sure they are the same.',
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      )
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

      var updatedName = this.state.name + "pass"
      storeAnswer(updatedName, this.state.password2);

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
                            maxLength={20}
                            padding={10}
                            textAlign={'center'}
                            justifyContent={'center'}
                            onChangeText={name => this.handleAnswer(name)}
                            />

                            <TextInput
                            placeholder="Enter password"
                            maxLength={20}
                            style={styles.input}
                            secureTextEntry={true}
                            padding={10}
                            textAlign={'center'}
                            justifyContent={'center'}
                            onChangeText={password1 => this.handlePassword1(password1)}
                            />

                            <TextInput
                            placeholder="Confirm password"
                            maxLength={20}
                            style={styles.input}
                            secureTextEntry={true}
                            padding={10}
                            textAlign={'center'}
                            justifyContent={'center'}
                            onChangeText={password2 => this.handlePassword2(password2)}
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
  	bottom: -20, // add scrollviews to every thing
  	fontSize: 25,
  },
  cancel: {
  	position: 'absolute',
    left: -25,
    bottom: -200,
    width: '25%',
    height: '15%',
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
    bottom: -200,
    width: '25%',
    height: '15%',
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
  passStyle:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});
