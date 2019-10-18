import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.heading}>Welcome, Brenda!</Text>
  
        <Button style={styles.buttons}onPress={() => navigation.navigate('VisionQ1')} title="Take vision test" />
        <Button title="View previous results" />
    </View>
  )


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  heading: {
  	fontWeight: 'bold',
  	fontSize: 20, 
  	textAlign: 'center',
  	marginTop: 50
  },
  buttons: {
  	marginTop: 90
  }
})

export default HomeScreen