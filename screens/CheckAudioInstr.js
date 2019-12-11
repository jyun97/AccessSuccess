import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Progress from 'react-native-progress';
import {withGlobalContext} from './Context'

class CheckAudioInstr extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedChoice: '', inputError: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
      this.props.navigation.navigate('RightSound');
  }

  render() {
    return(
		<View style={[styles.container, {backgroundColor: this.props.global.theme}, {alignItems: "center"}]}>
              <Text style={[styles.header, {color: this.props.global.textTheme}]}>Audio Test</Text>
              <Progress.Bar progress={0.89} width={300} height={10} />
              <Text style={[styles.header, {color: this.props.global.textTheme}]}>Part 2 Instructions {'\n'}</Text>
              <Text style={[styles.question, {color: this.props.global.textTheme}]}>The next two questions will ask you to listen to a sound and indicate if you can hear it comfortably. {'\n'}</Text>
              <Text style={[styles.question, {color: this.props.global.textTheme}]}>For this to be accurate, do NOT adjust your volume</Text>

              {/* <TouchableOpacity
                style={styles.back}
                onPress={() => this.props.navigation.navigate('SetVolume')}
              >
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity> */}

              <TouchableOpacity
                style={styles.next}
                onPress={() => this.handleSubmit()}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
         
            </View>
    )
  }
}
export default withGlobalContext(CheckAudioInstr);


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
    // position: 'absolute',
    // right: 20,
    // bottom: 50,
    // width: '25%',
    // height: '8%',
    // aspectRatio: 2/1,
    // borderWidth: 0.5,
    // borderRadius: 15,
    // backgroundColor: '#147efb',
    // overflow: 'hidden',
    // borderColor: '#147efb',
    // justifyContent: 'center',
    position: 'absolute',
    left: 115,
    bottom: 130,
    width: '40%',
    height: '8%',
    alignItems: 'center',
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
  }
});