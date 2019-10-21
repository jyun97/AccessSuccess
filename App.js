import HomeScreen from './screens/HomeScreen'
import FirstScreen from './screens/FirstScreen'
import LoginScreen from './screens/LoginScreen'
import Settings from './screens/Settings'
import BoldText from './screens/BoldText'
import Contrast from './screens/Contrast'
import ReduceTransparency from './screens/ReduceTransparency'
import ButtonShape from './screens/ButtonShape'
import OnOffLabel from './screens/OnOffLabel'
import VisionQ1 from './screens/VisionQ1'
import VisionQ2 from './screens/VisionQ2'
import VisionQ3 from './screens/VisionQ3'
import VisionQ4 from './screens/VisionQ4'
import VisionQ5 from './screens/VisionQ5'
import VisionQ6 from './screens/VisionQ6'
import VisionQ7 from './screens/VisionQ7'
import VisionQ8 from './screens/VisionQ8'
import VisionQ9 from './screens/VisionQ9'
import VisionQ10 from './screens/VisionQ10'
import VisionQ11 from './screens/VisionQ11'
import VisionQ12 from './screens/VisionQ12'
import VisionQ13 from './screens/VisionQ13'
import VisionQ14 from './screens/VisionQ14'

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
  Contrast: {
    screen: Contrast,
    navigationOptions: {
      headerTitle: 'Contrast'
    }
  },
  ReduceTransparency: {
    screen: ReduceTransparency,
    navigationOptions: {
      headerTitle: 'Transparent'
    }
  },
  ButtonShape: {
    screen: ButtonShape,
    navigationOptions: {
      headerTitle: 'ButtonShape'
    }
  },
  OnOffLabel: {
    screen: OnOffLabel,
    navigationOptions: {
      headerTitle: 'OnOffLabel'
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
  VisionQ3: {
    screen: VisionQ3,
    navigationOptions: {
      headerTitle: 'Vision Test Q3'
    }
  },
  VisionQ4: {
    screen: VisionQ4,
    navigationOptions: {
      headerTitle: 'Vision Test Q4'
    }
  },
  VisionQ5: {
    screen: VisionQ5,
    navigationOptions: {
      headerTitle: 'Vision Test Q5'
    }
  },
  VisionQ6: {
    screen: VisionQ6,
    navigationOptions: {
      headerTitle: 'Vision Test Q6'
    }
  },
  VisionQ7: {
    screen: VisionQ7,
    navigationOptions: {
      headerTitle: 'Vision Test Q7'
    }
  },
  VisionQ8: {
    screen: VisionQ8,
    navigationOptions: {
      headerTitle: 'Vision Test Q8'
    }
  },
  VisionQ9: {
    screen: VisionQ9,
    navigationOptions: {
      headerTitle: 'Vision Test Q9'
    }
  },
  VisionQ10: {
    screen: VisionQ10,
    navigationOptions: {
      headerTitle: 'Vision Test Q10'
    }
  },
  VisionQ11: {
    screen: VisionQ11,
    navigationOptions: {
      headerTitle: 'Vision Test Q11'
    }
  },
  VisionQ12: {
    screen: VisionQ12,
    navigationOptions: {
      headerTitle: 'Vision Test Q12'
    }
  },
  VisionQ13: {
    screen: VisionQ13,
    navigationOptions: {
      headerTitle: 'Vision Test Q13'
    }
  },
  VisionQ14: {
    screen: VisionQ14,
    navigationOptions: {
      headerTitle: 'Vision Test Q14'
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
