import React from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet, ProgressViewIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';

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
        }
    }

    render(){
        return(
            <View>
                <SelectButton 
                    source={require('./images/ReduceTransparencyOff.png')}
                    choiceID={1}
                    activeState={this.state.selectedChoice}
                    changeAnswer={(newAnswer) => this.onAnswerChange(newAnswer)}
                />
                <SelectButton 
                    source={require('./images/ReduceTransparencyOn.png')}
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
                    style={{width: 250, height: 250, borderWidth: 3, borderColor: "#1EB3EA", resizeMode: "contain"}}
                    />
                </TouchableOpacity>
            );
        }
        return(
            <TouchableOpacity onPress ={() => this.handleChange()}>
                <Image source={this.props.source}
                style={{width: 250, height: 250, resizeMode: "contain"}}
                />
            </TouchableOpacity>
        );
    }
}

export default function ReduceTransparency ({ navigation }) {
    const [value, onChangeText] = React.useState('');

    return(
    <SafeAreaView style={{alignItems:"center"}}>
        <Text style={styles.header}>Vision Test</Text>
        <ProgressViewIOS progressTintColor="red" progress={0.14}/>
        <Text style={styles.question}>Q3. Select the screen you prefer.</Text>
        <MultipleChoice/>

        <View style={styles.rowContainer}>

            <TouchableOpacity activeOpacity={0.6}
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('Contrast')}>
                    <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={0.6}
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('ButtonShape')}>
                    <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

        </View>
        

    </SafeAreaView>
    )
}

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
        width: '50%',
        aspectRatio: 6/3.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: '#1EB3EA',
        overflow: 'hidden',
        borderColor: '#1EB3EA',
        margin: 20,
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