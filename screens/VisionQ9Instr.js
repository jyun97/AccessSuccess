import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Progress from 'react-native-progress';
import {withGlobalContext} from './Context'


class VisionQ9Instr extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedChoice: '', inputError: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
      this.props.navigation.navigate('VisionQ9');
  }

  render() {
    return(
      <View style={[styles.container, {backgroundColor: this.props.global.theme}]}>
              <Text style={[styles.header, {color: this.props.global.textTheme}]}>Vision Test</Text>
              <Progress.Bar progress={0.77} width={300} height={10} />
              <Text style={[styles.header, {color: this.props.global.textTheme}]}>Part 2 Q14 Instructions {'\n'}</Text>
              <Text style={[styles.question, {color: this.props.global.textTheme}]}>In the next question, you will be shown a circle.
              Select what you see inside the circle from the given options. </Text>
              <TouchableOpacity
                style={styles.back}
                onPress={() => this.props.navigation.navigate('VisionQ8')}
              >
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>

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
export default withGlobalContext(VisionQ9Instr);


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
  }
});
