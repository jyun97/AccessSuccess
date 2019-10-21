import HomeScreen from './screens/HomeScreen'
import FirstScreen from './screens/FirstScreen'
import LoginScreen from './screens/LoginScreen'
import Settings from './screens/Settings'
import BoldText from './screens/BoldText'
import VisionQ1 from './screens/VisionQ1'
import VisionQ2 from './screens/VisionQ2'
import VisionQ11 from './screens/VisionQ11'
import ResultsScreen from './screens/ResultsScreen'
import ZoomScreen from './screens/ZoomScreen'
import MagnifierScreen from './screens/MagnifierScreen'
import DisplayScreen from './screens/DisplayScreen'
import ReduceScreen from './screens/ReduceScreen'
import IncreaseScreen from './screens/IncreaseScreen'
import DiffScreen from './screens/DiffScreen'
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const MainNavigator = createStackNavigator({
  FirstScreen: {
    screen: FirstScreen,
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Login'
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      headerTitle: 'Settings'
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
    headerTitle: 'Home'
    }
  },
  BoldText: {
    screen: BoldText,
    navigationOptions: {
      headerTitle: 'BoldText'
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
  },
  VisionQ11: {
    screen: VisionQ11,
    navigationOptions: {
      headerTitle: 'Vision Test Q11'
    }
  },
  ResultsScreen: {
    screen: ResultsScreen,
  },
  ZoomScreen: {
    screen: ZoomScreen,
  },
  MagnifierScreen: {
    screen: MagnifierScreen,
  },
  DisplayScreen: {
    screen: DisplayScreen,
  },
  ReduceScreen: {
    screen: ReduceScreen,
  },
  IncreaseScreen: {
    screen: IncreaseScreen,
  },
  DiffScreen: {
    screen: DiffScreen,
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
