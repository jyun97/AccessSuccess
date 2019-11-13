import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList,TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 

// const people = [
//     {
//         id: "1",
//         title: "Enya Chen",
//     },
//     {
//         id: "2",
//         title: "Jeremy Yun"
//     },
//     {
//         id: "3",
//         title: "Jeremy Yun"
//     },
//     {
//         id: "4",
//         title: "Rayka Devaprasad"
//     }
// ];

// function Item({title}) {
//     return(
//         <View style={styles.item}>
//             <Text style={styles.title}>{title}</Text>
//         </View> 
//     );
// }

// export default function App() {
//     const 
//     return (
//       <SafeAreaView style={styles.container2}>
//         <FlatList
//           data={people}
//           renderItem={({ item }) => <Item title={item.title} />}
//           keyExtractor={item => item.id}
//         />
//       </SafeAreaView>
//     );
//   }

const LoginScreen = ({ navigation }) => (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>

        <View style={{flex:1}}/>

        <Text style={styles.baseText}>Please select an account.</Text>
            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.buttonText}>Brenda</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.buttonText}>George</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.buttonText}>Jason</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.buttonText}>Jade</Text>
            </TouchableOpacity>

        <View style={{flex:2}}/>
        
    </View>
    </SafeAreaView>
  )

  const styles = StyleSheet.create({
    titleText: {
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        color: '#147efb',
    },
    baseText: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'ArialHebrew',
        marginLeft: wp("5%"),
        marginRight: wp("5%"),
        lineHeight:25,
        color: 'black',
        marginTop: 15,
        margin: 15
    },
    container: {
        width: '95%',
        height:'100%',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        borderColor: '#147efb',
        borderWidth: 1
    },
    buttonContainer: {
        width: '70%',
        aspectRatio: 4/1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: '#147efb',
        overflow: 'hidden',
        borderColor: '#147efb',
        margin: 20,
    },
    buttonText:{
        color: 'white',
        fontSize: 20
    }
});


// const styles = StyleSheet.create({
//     titleText: {
//         fontSize: 40,
//         textAlign: 'center',
//         fontFamily: 'ArialHebrew',
//         color: '#1EB3EA',
//     },
//     baseText: {
//         fontSize: 17,
//         textAlign: 'center',
//         fontFamily: 'ArialHebrew',
//         marginLeft: wp("5%"),
//         marginRight: wp("5%"),
//         lineHeight:25,
//         color: '#676363',
//         marginTop: 15,
//         margin: 15
//     },
//     container: {
//         width: '95%',
//         height:'100%',
//         alignItems: 'center',
//         marginTop: 10,
//         marginBottom: 10,
//         marginRight: 10,
//         marginLeft: 10,
//         borderColor: '#1EB3EA',
//         borderWidth: 1
//     },
//     container2: {
//         flex: 1,
//     },
//     item: {
//         backgroundColor: '#f9c2ff',
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//     },
//     title: {
//         fontSize: 32,
//     }
// });
export default LoginScreen

// import React, { Component } from 'react'
// import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
// class List extends Component {
//    state = {
//       names: [
//          {
//             id: 0,
//             name: 'Ben',
//          },
//          {
//             id: 1,
//             name: 'Susan',
//          },
//          {
//             id: 2,
//             name: 'Robert',
//          },
//          {
//             id: 3,
//             name: 'Mary',
//          }
//       ]
//    }
//    alertItemName = (item) => {
//       alert(item.name)
//    }

//    render() {
//       return (
//          <View>
//             {
//                this.state.names.map((item, index) => (
//                   <TouchableOpacity
//                      key = {item.id}
//                      style = {styles.container}
//                      onPress = {() => this.alertItemName(item)}>
//                      <Text style = {styles.text}>
//                         {item.name}
//                      </Text>
//                   </TouchableOpacity>
//                ))
//             }
//          </View>
//       )
//    }
// }
// export default List