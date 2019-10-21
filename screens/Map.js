import { storeAnswer, getAnswer } from '../screens/ResultStorage';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { stringLiteral } from '@babel/types';

export const mapResults = async() => {
// export const mapResult = () => {
	try {

    const keys = await AsyncStorage.getAllKeys();
    const results = await AsyncStorage.multiGet(keys);
    const total_blind = 0;
	const red_green = 0;
	const protanopia = 0;
	const deuteranopia = 0;
	const totalBlind = 0;

    results.map(result => {
    	//Plate 1
      if (result[0] === "Q1" && result[1] !== "12") {
      	total_blind = total_blind + 1;
      }
      //Plate 2
      else if (result[0] === "Q2" && result[1] !== "8") {
      	if (result[1] === "3") {
      		red_green = red_green + 1;
      	}
      	else {
      		total_blind = total_blind + 1;
      	}
      }
      //Plate 3
     	else if (result[0] === "Q3" && result[1] !== "5") {
      	if (result[1] === "2") {
      		//red-green blind
      	}
      	else {
      		total_blind = total_blind + 1;
      	}
      }
      //Plate 4
      else if (result[0] === "Q4" && result[1] !== "29") {
      	if (result[1] === "70") {
      		//red-green blind
      	}
      	else {
      		total_blind = total_blind + 1;
      	}
      }
      //Plate 5
      else if (result[0] === "Q5" && result[1] !== "74") {
      	if (result[1] === "21") {
      		//red-green blind
      	}
      	else {
      		total_blind = total_blind + 1;
      	}
      }
      //Plate 6
      else if (result[0] === "Q6" && result[1] !== "7") {
      		//could be red-green or total color blind
      }
      //Plate 7
      else if (result[0] === "Q7" && result[1] !== "45") {
      		//could be red-green or total color blind
      }
      //Plate 8
      else if (result[0] === "Q8" && result[1] !== "2") {
      		//could be red-green or total color blind
      }
      //Plate 9 (only red-green color blind can see)
      else if (result[0] === "Q9" && result[1] === "2") {
      		//red-green color blind
      }
      //Plate 10
      else if (result[0] === "Q10" && result[1] !== "16") {
      		//could be red-green or total color blind
      }
      //Plate 11: number of lines
      else if (result[0] === "Q11" && result[1] !== "1") {
			  //could be red-green or total color blind
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
			totalBlind += 1;
      	}
      }
      //Plate 14: two lines
      else if (result[0] === "Q14" && result[1] !== "2") {
      	if (result[1] === "1-purple") {
			protanopia = protanopia + 1;
      	}
      	else if (result[1] === "1-red") {
			deuteranopia = deuteranopia + 1;
      	}
      	else {
			totalBlind = totalBlind + 1;
      	}      
      }
	})
	
	if(protanopia > deuteranopia && protanopia > totalBlind){
		return "Red/Green Filter [Protanopia]";
	}
	else if(deuteranopia > protanopia && deuteranopia > totalBlind){
		return "Green/Red Filter [Deuteranopia]";
	}
	else if(totalBlind > deuteranopia && totalBlind > protanopia){
		return "Total Color Blind";
	}
	else{
		return "Inconclusive"
	}

    } catch (error) {
        console.log(error, "Could not fetch user results")
	}
}
