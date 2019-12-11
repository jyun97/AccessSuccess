import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Progress from 'react-native-progress';
import {withGlobalContext} from './Context'


class PreferenceInstr extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedChoice: '', inputError: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
      this.props.navigation.navigate('BoldText');
  }

  render() {
    return(
      <View style={[styles.container, {backgroundColor: this.props.global.theme}, {alignItems: "center"}]}>
              <Text style={[styles.header, {color: this.props.global.textTheme}]}>Vision Test</Text>
              <Progress.Bar progress={0} width={300} height={10} />
              <Text style={styles.header}>Part 1 Instructions {'\n'}</Text>
              <Text style={[styles.question, {color: this.props.global.textTheme}]}>In the following questions, you will be shown two images of different settings.
              Select the one you prefer. {'\n'}</Text>
              <Text style={styles.question}>If you would like to skip this section, click "Skip"</Text>

              <TouchableOpacity
                style={styles.skip}
                onPress={() => this.props.navigation.navigate('VisionQ1Instr')}
              >
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                style={styles.back}
                onPress={() => this.props.navigation.navigate('HomeScreen')}
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
export default withGlobalContext(PreferenceInstr);


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