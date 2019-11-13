import React from 'react';
import { Text, TouchableOpacity, View, Button, SafeAreaView, StyleSheet, Image} from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 

const FirstScreen = ({ navigation }) => (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>

        <View style={{flex:1}}/>
        <Text style={styles.titleText}>Access Success</Text>

        <View style={styles.ImageContainer}>
            <Image
                style={{flex:1, height: undefined, width: "100%"}}
                source={require('./assets/logo.png')}
                resizeMode="cover"
            /> 
        </View>

        <Text style={styles.baseText}> Welcome to Access Success, the application that finds custom accessibility settings for you!</Text>
            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.buttonText}>Pick an existing account</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('FirstScreen')}>
                <Text style={styles.buttonText}>Create a new account</Text>
            </TouchableOpacity>
        <View style={{flex:2}}/>
        
    </View>
    </SafeAreaView>
  )
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
        borderColor: '#147efb',
        borderWidth: 1
    },
    ImageContainer: {
        aspectRatio: 1,
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
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

export default FirstScreen