import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native'


//Call this function to store user test answers
export const storeAnswer = async (key, answer) => {
  AsyncStorage.setItem(key, answer);
}

//Call this to retrieve user test answers
export const getAnswer = async (key) => {
	try {
    const answer = await AsyncStorage.getItem(key);
    if (answer !== null) { 
    	return answer;
    }
  } catch (error) {
    console.log('Error fetching user answers', error);
  }
}

