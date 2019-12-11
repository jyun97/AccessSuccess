import React from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet, ProgressViewIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import { storeAnswer } from '../screens/ResultStorage';
import * as Progress from 'react-native-progress';
import {withGlobalContext} from './Context'


class MultipleChoice extends React.Component{
    constructor (){
        super()
        this.state = {selectedChoice: null};
    }

    onAnswerChange(choiceNum){
        if(this.state.selectedChoice === choiceNum){
            this.setState({selectedChoice: null})
        }
        else{
            this.setState({selectedChoice: choiceNum})
            storeAnswer("button", JSON.stringify(choiceNum))
        }
    }

    render(){
        return(
            <View>
                <SelectButton 
                    source={require('./images/ButtonShapeOff.png')}
                    choiceID={1}
                    activeState={this.state.selectedChoice}
                    changeAnswer={(newAnswer) => this.onAnswerChange(newAnswer)}
                />
                <SelectButton 
                    source={require('./images/ButtonShapeOn.png')}
                    choiceID={2}
                    activeState={this.state.selectedChoice}
                    changeAnswer={(newAnswer) => this.onAnswerChange(newAnswer)}
                />
            </View>
        );
    }
}

class SelectButton extends React.Component{
    constructor (props) {
        super(props)
    }
    handleChange(){
        let choiceNum = this.props.choiceID;
        this.props.changeAnswer(choiceNum);
    }
    render(){
        if(this.props.activeState === this.props.choiceID){
            return(
                <TouchableOpacity onPress ={() => this.handleChange()}>
                    <Image source={this.props.source}
                    style={{width: 200, height: 100, borderWidth: 3, borderColor: "#1EB3EA", resizeMode: "contain"}}
                    />
                </TouchableOpacity>
            );
        }
        return(
            <TouchableOpacity onPress ={() => this.handleChange()}>
                <Image source={this.props.source}
                style={{width: 200, height: 100, resizeMode: "contain"}}
                />
            </TouchableOpacity>
        );
    }
}

class ButtonShape extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return(
    <SafeAreaView style={[{alignItems:"center"}, {backgroundColor: this.props.global.theme}]}>
        <Text style={[styles.header, {color: this.props.global.textTheme}]}>Vision Test</Text>
        <Progress.Bar progress={0.18} width={300} height={10} />
        <Text style={[styles.question, {color: this.props.global.textTheme}]}>Q4. Select the option you prefer. </Text>
        <MultipleChoice/>

        <View style={styles.rowContainer}>

            {/* <TouchableOpacity activeOpacity={0.6}
                    style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('ReduceTransparency')}>
                    <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity> */}
            
            <TouchableOpacity activeOpacity={0.6}
                    style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('OnOffLabel')}>
                    <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

        </View>



    </SafeAreaView>
    )
    }


}

export default withGlobalContext(ButtonShape)
const styles = StyleSheet.create({
    titleText: {
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        color: '#1EB3EA',
    },
    baseText: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        marginLeft: wp("5%"),
        marginRight: wp("5%"),
        lineHeight:25,
        color: '#676363',
        marginTop: 15,
        margin: 15
    },
    buttonContainer: {
        width: '60%',
        aspectRatio: 4/2,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: '#147efb',
        overflow: 'hidden',
        borderColor: '#147efb',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 65
    },
    buttonText:{
        color: 'white',
        fontSize: 25
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        textDecorationLine: 'underline'
    },
    question: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    }
});