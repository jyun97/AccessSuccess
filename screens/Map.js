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
    let tritanopia = 0;

    let rec = [];

    results.map(result => {
        //Bold
        if (result[0] === "bold" && result[1] === "2") {
           rec.push("bold")
        }

        //Contrast
        if (result[0] === "contrast" && result[1] === "2") {
           rec.push("contrast")
        }

        //ReduceTransparency
        if (result[0] === "trans" && result[1] === "2") {
           rec.push("trans")
        }

        //ButtonShape
        if (result[0] === "button" && result[1] === "2") {
           rec.push("button")
        }

        //OnOffLabel
        if (result[0] === "onOff" && result[1] === "2") {
           rec.push("onOff")
        }

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
    await AsyncStorage.removeItem("bold")
    await AsyncStorage.removeItem("contrast")
    await AsyncStorage.removeItem("trans")
    await AsyncStorage.removeItem("button")
    await AsyncStorage.removeItem("onOff")
    await AsyncStorage.removeItem("Q1")
    await AsyncStorage.removeItem("Q2")
    await AsyncStorage.removeItem("Q3")
    await AsyncStorage.removeItem("Q4")
    await AsyncStorage.removeItem("Q5")
    await AsyncStorage.removeItem("Q6")
    await AsyncStorage.removeItem("Q7")
    await AsyncStorage.removeItem("Q8")
    await AsyncStorage.removeItem("Q9")

    if (protanopia + deuteranopia + tritanopia + totalBlind === 0) {
          rec.push('N');
    }
  	else if (protanopia > deuteranopia && protanopia > tritanopia && protanopia > totalBlind){
          rec.push('P');
  	}
  	else if (deuteranopia > protanopia && deuteranopia > tritanopia && deuteranopia > totalBlind){
          rec.push('D');
  	}
    else if (tritanopia > protanopia && tritanopia > deuteranopia && tritanopia > totalBlind) {
          rec.push('T');
    }
  	else if (totalBlind > deuteranopia && totalBlind > protanopia && totalBlind > tritanopia){
          rec.push('G');
  	}
  	else {
  		rec.push('I');
  	}

    //Get username and store recommendation to user
    const username = await AsyncStorage.getItem("currentUser");
    storeAnswer(JSON.stringify(username), JSON.stringify(rec));
    // console.log(rec)
    return rec;
  } catch (error) {
        console.log(error, "Could not fetch user results")
	}
}
