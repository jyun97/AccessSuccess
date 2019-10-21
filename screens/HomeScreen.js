// import React from 'react'
// import { Text, View, Button, StyleSheet } from 'react-native';
// import { stringLiteral } from '@babel/types';

// const HomeScreen = ({ navigation }) => (

//     <View style={styles.container}>
//         <Text style={styles.heading}>Welcome Brenda!</Text>
  
//         <Button style={styles.buttons}onPress={() => navigation.navigate('BoldText')} title="Take vision test" />
//         <Button title="View previous results" />
//     </View>
//   )


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center'
//   },
//   heading: {
//   	fontWeight: 'bold',
//   	fontSize: 20, 
//   	textAlign: 'center',
//   	marginTop: 50
//   },
//   buttons: {
//   	marginTop: 90
//   }
// })

// export default HomeScreen

import React from 'react';
import { Text, TouchableOpacity, View, Button, SafeAreaView, StyleSheet, Image} from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Settings from './Settings'

const HomeScreenModule = ({ navigation }) => (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>

        <View style={{flex:1}}/>
        <Text style={styles.titleText}>Welcome Brenda!</Text>

            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('BoldText')}>
                <Text style={styles.buttonText}>Take vision test</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.buttonText}>View previous results</Text>
            </TouchableOpacity>
        <View style={{flex:2}}/>
        
    </View>
    </SafeAreaView>
  )
const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        color: '#676363',
        marginBottom: 15,
    },
    baseText: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        marginLeft: wp("5%"),
        marginRight: wp("5%"),
        lineHeight:25,
        color: '#676363',
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
        fontSize: 20
    }
});

const HomeScreen = createBottomTabNavigator({
  Main: {
    screen: HomeScreenModule
  },
  Settings: {
    screen: Settings
  }
});

export default HomeScreen