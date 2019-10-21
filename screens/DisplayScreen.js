import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 

const DisplayScreen = ({ navigation }) => (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>

        <View style={{flex:1}}/>
            <Text style={styles.baseText}>{'\n'}Display & Text Size Description</Text>
            <Text style={styles.smallText}>Please scroll down for all of the description.</Text>
                <View style={styles.midContainer}>
                    <ScrollView>
                    <Text style={styles.baseBold}> {'\n'}a. Bold text:</Text>
                    <Text style={styles.midText}>Bolds the text</Text>

                    <Text style={styles.baseBold}> {'\n'}b. Larger text: </Text>
                    <Text style={styles.midText}>Allows you to adjust text size</Text>

                    <Text style={styles.baseBold}> {'\n'}c. Button Shapes: </Text>
                    <Text style={styles.midText}> Underlines text you can tap</Text>

                    <Text style={styles.baseBold}> {'\n'}d. On/off labels: </Text>
                    <Text style={styles.midText}> Adds shapes on On/Off labels to make it clear what’s on and off. Indicates switches turned on with “1” and switches turned off with “0”</Text>
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
        borderColor: '#1EB3EA',
        borderWidth: 1
    },
    midContainer: {
        width: '90%',
        height: '90%',
        // aspectRatio: 4/4,
        // alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: '#1EB3EA',
        overflow: 'hidden',
        borderColor: '#1EB3EA',
        margin: 5,
    },
    midText:{
        color: 'white',
        fontSize: 20,
        margin: 10
    }
});

export default DisplayScreen