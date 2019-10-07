import React from 'react'
import { Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View>
        <Text>Welcome, Brenda!</Text>
        <Button onPress={() => navigation.navigate('VisionQ1')} title="Take vision test" />
    </View>
  )

export default HomeScreen