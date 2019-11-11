import React from 'react';
import { Text, View, Image, TextInput, Button, ProgressViewIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    <View style={{alignItems:"center"}}>
    	<Text h1 style={{fontWeight: "bold"}}>Vision Test</Text>
    	<Text h2 style={{fontWeight: "bold"}}>Q3</Text>
        <ProgressViewIOS progressTintColor="red" progress={0.14}/>
    	<Text h2 style={{fontWeight: "bold"}}>Which do you prefer?</Text>
        <MultipleChoice/>
	    <Button onPress={() => navigation.navigate('ButtonShape')} title="Next" />
    </View>
    )
}