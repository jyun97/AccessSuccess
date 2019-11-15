import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';


class VisionQ1Instr extends React.Component {
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
      <View style={styles.container}>
              <Text style={styles.header}>Vision Test</Text>
              <Text style={styles.header}>Part 2 Instructions {'\n'}</Text>
              <Text style={styles.question}>In the following questions, you will be shown a circle with a number inside.
              Enter the number you see. If you are unsure, enter 0.  {'\n'} </Text>
              <Text style={styles.question}>If you would like to skip this section, click "Skip"</Text>

              <TouchableOpacity
                style={styles.skip}
                onPress={() => this.props.navigation.navigate('ResultsScreen')}
              >
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.back}
                onPress={() => this.props.navigation.navigate('OnOffLabel')}
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
export default VisionQ1Instr;


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
    alignItems: 'center',
    width: '40%',
    height: '8%',
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
  }
});
