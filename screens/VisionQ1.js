import React from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default function VisionQ1 () {
	const [value, onChangeText] = React.useState('');

	return(
	<View>
    	<Text h1>Vision Test</Text>
    	<Text h2>Q1</Text>
    	<Text h2>What number do you see in the circle below?</Text>
    	<Image source={require('./images/plate1.png')} 
    	 style={{width: 400, height: 400}} />

    	<TextInput
		    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
		    onChangeText={text => onChangeText(text)}
		    value={value}
	    />
	    <Button onPress={() => navigation.navigate('VisionQ1')} title="Next" />
    </View>
    )
}

