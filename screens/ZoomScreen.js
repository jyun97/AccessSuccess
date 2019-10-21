import React from 'react';
import { Text, TouchableOpacity, View, Button, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 
import BoldText from './BoldText';

const ZoomScreen = ({ navigation }) => (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>

        <View style={{flex:1}}/>
            <Text style={styles.baseText}>{'\n'}Zoom Description</Text>
            <Text style={styles.smallText}>Please scroll down for all of the description.</Text>
                <View style={styles.midContainer}>
                    <ScrollView>
                    <Text style={styles.midText}>Magnify the entire screen by double-tapping with 3 fingers to zoom in and out</Text>
                    <Text style={styles.baseBold}> {'\n'}a. Follow Focus:</Text>
                    <Text style={styles.midText}> Moves the Zoom window to follow along as you type</Text>

                    <Text style={styles.baseBold}> {'\n'}b. Smart Typing (appears once you turn on Follow Focus):</Text>
                    <Text style={styles.midText}> Moves the Zoom window when the keyboard appears so that the text is zoomed but the keyboard is not</Text>

                    <Text style={styles.baseBold}> {'\n'}c. Keyboard Shortcuts: </Text>
                    <Text style={styles.midText}> Different keyboard shortcuts to easily change the Zoom level and move the Zoom window around</Text>

                    <Text style={styles.baseBold}> {'\n'}d. Zoom Controller:</Text>
                    <Text style={styles.midText}> Turn on the Zoom Controller which allows you to drag, tap, and slide it to adjust the zoom level. You can also set what single-tap, double-tap, and triple-tap will do, and set the Controller’s color and opacity when idle</Text>
                    
                    <Text style={styles.baseBold}> {'\n'}e. Zoom Region:</Text>
                    <Text style={styles.midText}> Change zoom between full screen or just a window</Text>
                    
                    <Text style={styles.baseBold}> {'\n'}f. Zoom Filter:</Text>
                    <Text style={styles.midText}> Change the display to inverted, grayscale, grayscale inverted, or low light within the zoomed-in area</Text>
                    
                    <Text style={styles.baseBold}> {'\n'}g. Maximum Zoom Level:</Text>
                    <Text style={styles.midText}> Set the max zoom level anywhere from 1.2x to 15.0x</Text>
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

export default ZoomScreen