import HomeScreen from './screens/HomeScreen'
import VisionQ1 from './screens/VisionQ1'
import VisionQ2 from './screens/VisionQ2'
import Settings from './screens/Settings'
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const MainNavigator = createStackNavigator({
  HomeScreen: {
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
  },
  VisionQ2: {
    screen: VisionQ2,
    navigationOptions: {
      headerTitle: 'Vision Test Q2'
    }
  }
})


const Tabs = createBottomTabNavigator({
  Main: {
    screen: MainNavigator
  },
  Settings: {
    screen: Settings
  }
});

const App = createAppContainer(Tabs)

export default App
