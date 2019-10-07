import HomeScreen from './screens/HomeScreen'
import VisionQ1 from './screens/VisionQ1'
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
    headerTitle: 'Home'
    }
  },
  VisionQ1: {
    screen: VisionQ1,
    navigationOptions: {
      headerTitle: 'Vision Test Q1'
    }
  }
})

const App = createAppContainer(MainNavigator)

export default App