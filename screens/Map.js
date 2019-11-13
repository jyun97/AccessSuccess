import { storeAnswer, getAnswer } from '../screens/ResultStorage';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { stringLiteral } from '@babel/types';

export const mapResults = async() => {
  try {
    getAnswer("Brenda")
    const keys = await AsyncStorage.getAllKeys();
    const results = await AsyncStorage.multiGet(keys);
    let totalBlind = 0;
  	let protanopia = 0;
  	let deuteranopia = 0;
    let tritanopia = 0;

    results.map(result => {
        //Plate 1
        if (result[0] === "Q1" && result[1] !== "8") {
            if (result[1] === "3") {
          		  protanopia = protanopia + 1;
                deuteranopia = deuteranopia + 1;
          	}
          	else {
          		  totalBlind = totalBlind + 1;
          	}
        }
        //Plate 2
        else if (result[0] === "Q2" && result[1] !== "5") {
          	if (result[1] === "2") {
          		protanopia = protanopia + 1;
                deuteranopia = deuteranopia + 1;
          	}
          	else {
          		totalBlind = totalBlind + 1;
          	}
        }
        //Plate 3
        else if (result[0] === "Q3" && result[1] !== "74") {
          	if (result[1] === "21") {
          		protanopia = protanopia + 1;
                deuteranopia = deuteranopia + 1;
          	}
          	else {
          		totalBlind = totalBlind + 1;
          	}
        }
        //Plate 4
        else if (result[0] === "Q4" && result[1] !== "45") {
            protanopia = protanopia + 1; 
            deuteranopia = deuteranopia + 1; 
            totalBlind = totalBlind + 1;
        }
        //Plate 5
        else if (result[0] === "Q5" && result[1] !== "2") {
            protanopia = protanopia + 1; 
            deuteranopia = deuteranopia + 1; 
            totalBlind = totalBlind + 1;
        }
        //Plate 6
        else if (result[0] === "Q6" && result[1] !== "7") {
          	tritanopia = tritanopia + 1;
        }
        //Plate 7
        else if (result[0] === "Q7" && result[1] !== "35") {
          	if (result[1] === "5") {
    			protanopia = protanopia + 1;
          	}
          	else if (result[1] === "3") {
    			deuteranopia = deuteranopia + 1;
          	}
          	else {
    			totalBlind = totalBlind + 1;
          	} 		
        }
        //Plate 8
        else if (result[0] === "Q8" && result[1] !== "96") {
          	if (result[1] === "6") {
    			protanopia = protanopia + 1;
          	}
          	else if (result[1] === "9") {
    			deuteranopia = deuteranopia + 1;
          	}
          	else {
    			totalBlind = totalBlind + 1;
          	}
        }
        //Plate 9:
        //Choice 1: normal, Choice 2: protanopia, choice 3: deuteranopia, choice 4: total
        else if (result[0] === "Q9" && result[1] !== "1") {
          	if (result[1] === "2") {
    			     protanopia = protanopia + 1;
          	}
          	else if (result[1] === "3") {
    			     deuteranopia = deuteranopia + 1;
          	}
            else if (result[1] === "4") {
                totalBlind = totalBlind + 1;
          	}      
        }
	})

    //Clear answers so test can be retaken
    await AsyncStorage.removeItem("Q1")
    await AsyncStorage.removeItem("Q2")
    await AsyncStorage.removeItem("Q3")
    await AsyncStorage.removeItem("Q4")
    await AsyncStorage.removeItem("Q5")
    await AsyncStorage.removeItem("Q6")
    await AsyncStorage.removeItem("Q7")
    await AsyncStorage.removeItem("Q8")
    await AsyncStorage.removeItem("Q9")

    let rec = '';
    if (protanopia + deuteranopia + tritanopia + totalBlind === 0) {
          rec = 'No accessibility settings recommended';
    }
  	else if (protanopia > deuteranopia && protanopia > tritanopia && protanopia > totalBlind){
          rec = 'Color Filters -> Red/Green Filter [Protanopia]';
  	}
  	else if (deuteranopia > protanopia && deuteranopia > tritanopia && deuteranopia > totalBlind){
          rec = 'Color Filters -> Green/Red Filter [Deuteranopia]';
  	}
    else if (tritanopia > protanopia && tritanopia > deuteranopia && tritanopia > totalBlind) {
          rec = 'Color Filters -> Blue/Yellow Filter [Tritanopia]';
    }
  	else if (totalBlind > deuteranopia && totalBlind > protanopia && totalBlind > tritanopia){
          rec = 'Color Filters -> Graysale Filter';
  	}
  	else {
  		rec = 'Color results inconclusive. Try Color Filters -> Graysale Filter or retake test';
  	}

    //Get username and store recommendation to user
    const user = await AsyncStorage.getItem("user");
    storeAnswer(user, rec)
    return rec;

  } catch (error) {
        console.log(error, "Could not fetch user results")
	}
}
