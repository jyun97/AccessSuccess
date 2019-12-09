import HomeScreen from './screens/HomeScreen'
import FirstScreen from './screens/FirstScreen'
import LoginScreen from './screens/LoginScreen'
import Settings from './screens/Settings'
import CreateAccount from './screens/CreateAccount'

import PreferenceInstr from './screens/PreferenceInstr'
import BoldText from './screens/BoldText'
import Contrast from './screens/Contrast'
import ReduceTransparency from './screens/ReduceTransparency'
import ButtonShape from './screens/ButtonShape'
import OnOffLabel from './screens/OnOffLabel'

import VisionQ1Instr from './screens/VisionQ1Instr'
import VisionQ1 from './screens/VisionQ1'
import VisionQ2 from './screens/VisionQ2'
import VisionQ3 from './screens/VisionQ3'
import VisionQ4 from './screens/VisionQ4'
import VisionQ5 from './screens/VisionQ5'
import VisionQ6 from './screens/VisionQ6'
import VisionQ7 from './screens/VisionQ7'
import VisionQ8 from './screens/VisionQ8'
import VisionQ9Instr from './screens/VisionQ9Instr'
import VisionQ9 from './screens/VisionQ9'

import AudioSkip from './screens/AudioSkip'
import CheckAudioInstr from './screens/CheckAudioInstr'
import SetVolumeInstr from './screens/SetVolumeInstr'
import SetVolume from './screens/SetVolume'
import RightSound from './screens/RightSound'
import LeftSound from './screens/LeftSound'

import ConfirmSubmit from './screens/ConfirmSubmit'

import ResultsScreen from './screens/ResultsScreen'
import PrevResults from './screens/PrevResults'
import ZoomScreen from './screens/ZoomScreen'
import MagnifierScreen from './screens/MagnifierScreen'
import DisplayScreen from './screens/DisplayScreen'
import ReduceScreen from './screens/ReduceScreen'
import IncreaseScreen from './screens/IncreaseScreen'
import DiffScreen from './screens/DiffScreen'
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {GlobalContextProvider} from './screens/Context'

console.disableYellowBox = true;

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
      headerTitle: 'Home',
      headerLeft: null
    }
  },
  PrevResults: {
    screen: PrevResults,
  },
  PreferenceInstr: {
    screen: PreferenceInstr,
  },
  BoldText: {
    screen: BoldText,
  },
  Contrast: {
    screen: Contrast,
  },
  ReduceTransparency: {
    screen: ReduceTransparency,
  },
  ButtonShape: {
    screen: ButtonShape,
  },
  OnOffLabel: {
    screen: OnOffLabel,
  },  
  VisionQ1Instr: {
    screen: VisionQ1Instr,
  },
  VisionQ1: {
    screen: VisionQ1,
  },
  VisionQ2: {
    screen: VisionQ2,
  },
  VisionQ3: {
    screen: VisionQ3,
  },
  VisionQ4: {
    screen: VisionQ4,
  },
  VisionQ5: {
    screen: VisionQ5,
  },
  VisionQ6: {
    screen: VisionQ6,
  },
  VisionQ7: {
    screen: VisionQ7,
  },
  VisionQ8: {
    screen: VisionQ8,
  },
  VisionQ9Instr: {
    screen: VisionQ9Instr,
  },
  VisionQ9: {
    screen: VisionQ9,
  },
  AudioSkip: {
    screen: AudioSkip,
  },
  SetVolumeInstr: {
    screen: SetVolumeInstr,
  },
  SetVolume: {
    screen: SetVolume,
  },
  CheckAudioInstr: {
    screen: CheckAudioInstr,
  },
  RightSound: {
    screen: RightSound,
  },
  LeftSound: {
    screen: LeftSound,
  },
  ConfirmSubmit: {
    screen: ConfirmSubmit,
  },
  ResultsScreen: {
    screen: ResultsScreen,
    navigationOptions: {
      headerLeft: null,
    }
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
  },
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: {
      headerLeft: null,
    }
  }
})


const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render () {
    return (
      <GlobalContextProvider>
        <AppContainer/>
      </GlobalContextProvider>
      )
  }
}