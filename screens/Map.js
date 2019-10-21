import { storeAnswer, getAnswer } from '../screens/ResultStorage';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { stringLiteral } from '@babel/types';

export const mapResults = async() => {
  try {

    const keys = await AsyncStorage.getAllKeys();
    const results = await AsyncStorage.multiGet(keys);
    let totalBlind = 0;
  	let protanopia = 0;
  	let deuteranopia = 0;

    results.map(result => {
    	//Plate 1
        if (result[0] === "Q1" && result[1] !== "12") {
            totalBlind = totalBlind + 1;
        }
        //Plate 2
        else if (result[0] === "Q2" && result[1] !== "8") {
          	if (result[1] === "3") {
          		protanopia = protanopia + 1;
                deuteranopia = deuteranopia + 1;
          	}
          	else {
          		totalBlind = totalBlind + 1;
          	}
        }
       //Plate 3
        else if (result[0] === "Q3" && result[1] !== "5") {
          	if (result[1] === "2") {
          		protanopia = protanopia + 1;
                deuteranopia = deuteranopia + 1;
          	}
          	else {
          		totalBlind = totalBlind + 1;
          	}
        }
        //Plate 4
        else if (result[0] === "Q4" && result[1] !== "29") {
          	if (result[1] === "70") {
          		protanopia = protanopia + 1;
                deuteranopia = deuteranopia + 1;
          	}
          	else {
          		totalBlind = totalBlind + 1;
          	}
        }
        //Plate 5
        else if (result[0] === "Q5" && result[1] !== "74") {
          	if (result[1] === "21") {
          		protanopia = protanopia + 1;
                deuteranopia = deuteranopia + 1;
          	}
          	else {
          		totalBlind = totalBlind + 1;
          	}
        }
        //Plate 6
        else if (result[0] === "Q6" && result[1] !== "7") {
          	protanopia = protanopia + 1; 
            deuteranopia = deuteranopia + 1;
            totalBlind = totalBlind + 1;
        }
        //Plate 7
        else if (result[0] === "Q7" && result[1] !== "45") {
          	protanopia = protanopia + 1; 
            deuteranopia = deuteranopia + 1; 
            totalBlind = totalBlind + 1;
        }
        //Plate 8
        else if (result[0] === "Q8" && result[1] !== "2") {
          	protanopia = protanopia + 1; 
            deuteranopia = deuteranopia + 1; 
            totalBlind = totalBlind + 1;
        }
        //Plate 9 (only red-green color blind can see)
        else if (result[0] === "Q9" && result[1] === "2") {
          	protanopia = protanopia + 1;
            deuteranopia = deuteranopia + 1;
        }
        //Plate 10
        else if (result[0] === "Q10" && result[1] !== "16") {
          	protanopia = protanopia + 1; 
            deuteranopia = deuteranopia + 1;
            totalBlind = totalBlind + 1;
        }
        //Plate 11: number of lines
        else if (result[0] === "Q11" && result[1] !== "1") {
    		protanopia = protanopia + 1; 
            deuteranopia = deuteranopia + 1; 
            totalBlind = totalBlind + 1;
        }
        //Plate 12
        else if (result[0] === "Q12" && result[1] !== "35") {
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
        //Plate 13
        else if (result[0] === "Q13" && result[1] !== "96") {
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
        //Plate 14:
        //Choice 1: normal, Choice 2: protanopia, choice 3: deuteranopia, choice 4: total
        else if (result[0] === "Q14" && result[1] !== "1") {
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

    let rec = '';
    if (protanopia + deuteranopia + totalBlind === 0) {
        rec = 'No accessibility settings recommended';
    }
	else if (protanopia > deuteranopia && protanopia > totalBlind){
        rec = 'Color Filters -> Red/Green Filter [Protanopia]';
	}
	else if (deuteranopia > protanopia && deuteranopia > totalBlind){
        rec = 'Color Filters -> Green/Red Filter [Deuteranopia]';
	}
	else if (totalBlind > deuteranopia && totalBlind > protanopia){
        rec = 'Color Filters -> Graysale Filter';
	}
	else {
        // Inconclusive
		rec = 'Color results inconclusive. Try Color Filters -> Graysale Filter or retake test';
	}

    return rec;
    } catch (error) {
        console.log(error, "Could not fetch user results")
	}
}
