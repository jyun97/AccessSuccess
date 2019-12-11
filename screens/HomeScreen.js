
import React from 'react';
import { Text, TouchableOpacity, View, Button, Alert, SafeAreaView, StyleSheet, Image} from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExpandableSettings from './ExpandableSettings'
import { storeAnswer, getAnswer } from '../screens/ResultStorage';
import { StackActions, NavigationActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {withGlobalContext} from './Context'


class HomeScreenModule extends React.Component {
    async componentDidMount(){
        const user = await getAnswer("currentUser")
        this.setState({userName: user})
    }

    constructor(props) {
      super(props);
      this.state = { userName: ''};
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

   resetStack(){
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'FirstScreen' })],
      });

    this.props.navigation.dispatch(resetAction);
   }

   deleteAlert(){
        Alert.alert(
            'Alert',
            'Are you sure you want to delete your account?',
            [
            {text: 'OK', onPress: () => this.deleteAccount()},
            {text: 'Cancel', style: 'cancel'},
            ],
            { cancelable: false }
        )
   }

   async deleteAccount(){
        const accounts = await AsyncStorage.getItem("existingAccounts");
        var temp = accounts;

        if(temp != null){
            if(temp.indexOf(temp) !== -1){
                temp = temp.replace(this.state.userName, '');
            }
            storeAnswer("existingAccounts", temp);
        }

        const username = await AsyncStorage.getItem("currentUser");
        this.removeItemValue(JSON.stringify(username));
        var name = username + "pass"; //make sure this works
        this.removeItemValue(name);

        const keys = await AsyncStorage.getAllKeys();
        console.log(keys)

        this.resetStack();
   }

    render() {
          return(
            <SafeAreaView style={{flex:1}}>
            <View style={[styles.container, {backgroundColor: this.props.global.theme}]}>
        
                <View style={{flex:1}}/>
                <Text style={[styles.titleText, {color: this.props.global.textTheme}]}>Welcome {this.state.userName}!</Text>
        
                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.buttonContainer}
                        onPress={() => this.props.navigation.navigate('PreferenceInstr')}>
                        <Text style={styles.buttonText}>Take test</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.buttonContainer}
                        onPress={() => this.props.navigation.navigate('PrevResults')}>
                        <Text style={styles.buttonText}>View previous results</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.toggle}
                        onPress={() => this.props.global.toggleTheme()}>
                        <Text style={styles.buttonText}>Toggle Light/Dark Mode</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.logout}
                        onPress={() => this.resetStack()}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6}
                        style={styles.delete}
                        onPress={() => this.deleteAlert()}>
                        <Text style={styles.logoutText}>Delete Account</Text>
                    </TouchableOpacity>
                <View style={{flex:2}}/>
                
            </View>
            </SafeAreaView>
        )
    }
  }
  
  const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        color: 'black',
        marginBottom: 15,
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
    container: {
        width: '95%',
        height:'100%',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        //borderColor: '#147efb',
        //borderWidth: 1
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
    },
    logout:{
        width: '50%',
        height: '7%',
        aspectRatio: 5/1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: 'red',
        overflow: 'hidden',
        borderColor: 'red',
        margin: 20,
        bottom: -100
    },
    logoutText:{
        color: 'white',
        fontSize: 17
    },
    toggle:{
        width: '50%',
        height: '8%',
        aspectRatio: 5/1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: '#838383',
        borderColor: '#838383',
        overflow: 'hidden',
        margin: 20,
        bottom: -20
    },
    delete:{
        width: '50%',
        height: '7%',
        aspectRatio: 5/1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: 'black',
        overflow: 'hidden',
        borderColor: 'grey',
        borderWidth: 1.5,
        margin: 20,
        bottom: -70
    },
});

const HomeScreen = createBottomTabNavigator({
  Main: {
    screen: withGlobalContext(HomeScreenModule)
},
Settings: {
    screen: withGlobalContext(ExpandableSettings)
}
});

export default HomeScreen