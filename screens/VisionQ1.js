import React from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default function VisionQ1 ({ navigation }) {
	const [value, onChangeText] = React.useState('');

	return(
	<View>
    	<Text h1 style={{fontWeight: "bold"}}>Vision Test</Text>
    	<Text h2 style={{fontWeight: "bold"}}>Q1</Text>
    	<Text h2 style={{fontWeight: "bold"}}>What number do you see in the circle below?</Text>
    	<Image source={require('./images/plate1.png')} 
    	 style={{width: 400, height: 400}} />

    	<TextInput
		    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
		    onChangeText={text => onChangeText(text)}
		    value={value}
	    />
	    <Button onPress={() => navigation.navigate('VisionQ2')} title="Next" />
    </View>
    )
}
