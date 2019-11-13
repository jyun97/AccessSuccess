import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 

const MagnifierScreen = ({ navigation }) => (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>

        <View style={{flex:1}}/>
            <Text style={styles.baseText}>{'\n'}Magnifier Description</Text>
                <View style={styles.midContainer}>
                    <ScrollView>
                    <Text style={styles.midText}>Use the phone’s camera to magnify surroundings</Text>
                    <Text style={styles.baseBold}> {'\n'}a. Auto-adjust exposure:</Text>
                    <Text style={styles.midText}> Adjust brightness and contrast based on ambient light settings</Text>
                    </ScrollView>
                </View>
        <View style={{flex:2}}/>
        
    </View>
    </SafeAreaView>
  )
const styles = StyleSheet.create({
    baseText: {
        fontSize: 27,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        marginLeft: wp("5%"),
        marginRight: wp("5%"),
        lineHeight:30,
        color: '#676363',
        marginTop: 0,
        margin: 10
    },
    baseBold: {
        color: 'white',
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
    },
    smallText: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        marginLeft: wp("5%"),
        marginRight: wp("5%"),
        lineHeight:30,
        color: '#676363',
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
    midContainer: {
        width: '90%',
        height: '60%',
        // aspectRatio: 4/4,
        // alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: '#147efb',
        overflow: 'hidden',
        borderColor: '#147efb',
        margin: 5,
    },
    midText:{
        color: 'white',
        fontSize: 20,
        margin: 10
    }
});

export default MagnifierScreen