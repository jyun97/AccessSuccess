import React from 'react';
import { Text, TouchableOpacity, View, Button, SafeAreaView, StyleSheet, Alert, AlertIOS} from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 
import { storeAnswer, getAnswer } from '../screens/ResultStorage';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import {withGlobalContext} from './Context'


class LoginScreen extends React.Component {
    async componentDidMount(){
        const accounts = await AsyncStorage.getItem("existingAccounts");
    
        if(accounts == null){
            this.setState({ noAccounts: 1 })
        }
        else{
            var list = accounts.split(" ")
            list = list.filter(v=>v!='');
    
            if(list == null || list == ""){
                this.setState({ noAccounts: 1 })
            }
            else{
                this.setState({accountList: list})
            }
        }
    }

    constructor(props) {
      super(props);
      this.state = { accountList: [], noAccounts: 0, pass: '' };
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

    async handleSubmit(password, data){
        data = data.replace(/['"]+/g, '');
        var name = data + "pass"
        const realPassword = await AsyncStorage.getItem(name);

        if(realPassword == null){
            Alert.alert(
                'Alert',
                'Something went wrong.',
                [
                  {text: 'OK', onPress: () => this.props.navigation.navigate('FirstScreen')},
                ],
                { cancelable: false }
			  )
			  
			  
        }
        else{
			var realPass = realPassword.replace(/['"]+/g, '');
			// this.removeItemValue("existingAccounts");

            if(realPassword !== password){
                Alert.alert(
                    'Alert',
                    'Passwords do not match, please make sure they are the same.',
                    [
                      {text: 'OK', onPress: () => this.confirmPassword(data)},
                    ],
                    { cancelable: false }
                  )
            }
            else{
                data = data.replace(/['"]+/g, '');
                storeAnswer("currentUser", data);
                this.props.navigation.navigate('HomeScreen');
            }
        }
    }

    async confirmPassword(data){
        // const keys = await AsyncStorage.getAllKeys();
        // console.log(keys)

        Alert.prompt(
            'Please enter your password',
            '',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Submit',
                onPress: (password) => this.handleSubmit(password, data),
              },
            ],
            'secure-text'
          );
    }

    displayText(){
        if(this.state.noAccounts == 0){
            return <Text style={styles.baseText}>Please select an account.</Text>
        }
    }

    accList(){
        if(this.state.noAccounts == 1){
            return(
                <View style={styles.innerContainer}>
                    <Text style={styles.baseText}>No accounts created on this device yet.</Text>
                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.buttonContainer}
                        onPress={() => this.props.navigation.navigate('CreateAccount')}>
                        <Text style={styles.buttonText}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else{
            return this.state.accountList.map((data) => {
                return(
                    <View style={styles.innerContainer}>
                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.buttonContainer}
                        onPress={() => this.confirmPassword(JSON.stringify(data))}>
                        <Text style={styles.buttonText}>{data}</Text>
                    </TouchableOpacity>
                    </View>
                )
            })
        }
    }
  
    render() {
        return(
        <SafeAreaView style={{flex:1}}>
            <View style={[styles.container, {backgroundColor: this.props.global.theme}]}>
                <ScrollView>
                    <View style={{flex:1}}/>
                            {this.displayText()}
                            {this.accList()}
                    <View style={{flex:2}}/>
                </ScrollView>
            </View>

        </SafeAreaView>
      )
    }
  }
  
  const styles = StyleSheet.create({
    titleText: {
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        color: '#147efb',
    },
    baseText: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        marginLeft: wp("5%"),
        marginRight: wp("5%"),
        lineHeight:25,
        color: 'black',
        marginTop: 15,
        margin: 15
    },
    innerContainer:{
        alignItems: 'center',
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
        fontSize: 20
    }
});
export default withGlobalContext(LoginScreen)
