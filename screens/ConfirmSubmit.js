import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Progress from 'react-native-progress';
import {withGlobalContext} from './Context';
import SafeAreaView from 'react-native-safe-area-view';


class ConfirmSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedChoice: '', inputError: ''};
  }

  render() {
    return(
      <View style={[styles.container, {backgroundColor: this.props.global.theme}, {alignItems: "center"}]}>
              <Text style={[styles.header, {color: this.props.global.textTheme}]}>Final Submit</Text>
              <Progress.Bar progress={1} width={300} height={10} />
              <Text style={[styles.question, {color: this.props.global.textTheme}]}>You have finished all the tests. If you are ready to submit your results, click "Submit"{'\n'} </Text>
              <Text style={styles.question}>If you would like to go back and fix anything, click "Back"</Text>

              <TouchableOpacity
                style={styles.skip}
                onPress={() => this.props.navigation.navigate('ResultsScreen')}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                style={styles.back}
                onPress={() => this.props.navigation.navigate('LeftSound')}
              >
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity> */}
    	</View>
    )
  }
}
export default withGlobalContext(ConfirmSubmit);


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
    backgroundColor: 'red',
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
  buttonText:{
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  }
});
