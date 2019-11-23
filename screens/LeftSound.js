import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { StackNavigator } from 'react-navigation';
import { storeAnswer } from '../screens/ResultStorage';

let Sound = require('react-native-sound');

class RightSound extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selectedChoice: '', inputError: '', playing: false};
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handlePress = this.handlePress.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);

	}

	componentDidMount() {
		music = new Sound('testSound.mp3', Sound.MAIN_BUNDLE, (error) => {
			if (error) {
				console.log('failed to load the sound', error);
			}
			console.log('test')
			
			/* Play the sound with an onEnd callback
			whoosh.play((success) => {
				if (success) {
					console.log('successfully finished playing');
				} else {
					console.log('playback failed due to audio decoding errors');
				}
			});*/
		
		});
	}
	  
  	handlePress() {
		if (music && this.state.playing === false) {
			music.setNumberOfLoops(-1); //Loops util stop
			music.play();
			this.setState({playing: true})
		}
		else if(music && this.state.playing === true){
			music.stop();
			this.setState({playing: false})
		}
  	}

	handleHear() {
        if(music && this.state.playing == true){
			music.stop();
			this.setState({playing: false})
		}
		storeAnswer("MonoAudio", "true");
    	this.props.navigation.navigate('PreferenceInstr');
	}
	  
  	handleNext() {
        if(music && this.state.playing == true){
			music.stop();
			this.setState({playing: false})
		}
		storeAnswer("MonoAudio", "false");
    	this.props.navigation.navigate('PreferenceInstr');
  	}
    
    handleBack() {
        if(music && this.state.playing == true){
			music.stop();
			this.setState({playing: false})
		}
        this.props.navigation.navigate('RightSound');
  	}
  	render() {
    	return(
            <View style={styles.container}>
                <Text style={styles.header}>Audio Test</Text>
                <Text style={styles.question}>Press the "Play Sound" button and do NOT adjust your volume{'\n'}</Text>
                <Text style={styles.question}>Click "Next" if you can still hear the sound comfortably{'\n'}</Text>
                <Text style={styles.question}>If you can't hear it without adjusting your sound, then click "Can't Hear Comfortably" {'\n'}</Text>
                <TouchableOpacity
                    style={styles.play}
                    onPress={() => this.handlePress()}
                >
                    <PlayButton isPlaying={this.state.playing}/>
                </TouchableOpacity>

				<TouchableOpacity
                    style={styles.hear}
                    onPress={() => this.handleHear()}
                >
					<Text style={styles.buttonText}>Can't Hear Comfortably</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.back}
                    onPress={() => this.handleBack()}
                >

                    <Text style={styles.buttonText}>Back</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.next}
                    onPress={() => this.handleNext()}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

class PlayButton extends Component {
    constructor (props) {
        super(props)
    }
    render(){
        if(this.props.isPlaying === true){
            return(
                <Text style={styles.buttonText}>
                    Stop Playing
                </Text>
            );
        }
        return(
            <Text style={styles.buttonText}>
               Play Sound
            </Text>
        );
    }
}

export default RightSound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    textDecorationLine: 'underline'
  },
  question: {
    textAlign: 'center',
    fontSize: 25,
  },
  skip: {
    position: 'absolute',
    left: 115,
    bottom: 250,
    height: '8%',
    alignItems: 'center',
    width: '40%',
    aspectRatio: 2/1,
    borderWidth: 3,
    borderRadius: 15,
    backgroundColor: 'black',
    overflow: 'hidden',
    borderColor: '#147efb',
    justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    left: 20,
    bottom: 50,
    width: '25%',
    height: '8%',
    aspectRatio: 2/1,
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#147efb',
    overflow: 'hidden',
    borderColor: '#147efb',
    justifyContent: 'center',
  },
  next: {
    position: 'absolute',
    right: 20,
    bottom: 50,
    width: '25%',
    height: '8%',
    aspectRatio: 2/1,
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#147efb',
    overflow: 'hidden',
    borderColor: '#147efb',
    justifyContent: 'center',
  },
  buttonText:{
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
  play: {
    position: 'absolute',
    left: 115,
    bottom: 340,
    height: '8%',
    alignItems: 'center',
    width: '40%',
    aspectRatio: 2/1,
    borderWidth: 3,
    borderRadius: 15,
    backgroundColor: 'black',
    overflow: 'hidden',
    borderColor: '#147efb',
    justifyContent: 'center',
  },
  hear: {
    position: 'absolute',
    left: 115,
    bottom: 240,
    height: '10%',
    alignItems: 'center',
    width: '40%',
    aspectRatio: 2/1,
    borderWidth: 3,
    borderRadius: 15,
    backgroundColor: 'black',
    overflow: 'hidden',
    borderColor: '#147efb',
    justifyContent: 'center',
  }
});