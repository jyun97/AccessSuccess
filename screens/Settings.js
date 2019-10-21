import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 
// import Constants from 'expo-constants';

// const DATA = [
//   {
//     title: 'Text Size Features',
//     data: ['Zoom', 'Magnifier', 'Display & Text Size'],
//   },
//   {
//     title: 'Color Features',
//     data: ['Reduce Transparency', 'Increase Contrast', 'Differentiate without Color'],
//   }
// ];

// function Item({ title }) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// }

export default function Settings({navigation}) {
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <View style={{flex:1}}/>
  //     <SectionList
  //       sections={DATA}
  //       keyExtractor={(item, index) => item + index}
  //       renderItem={({ item }) => <Item title={item} />}
  //       renderSectionHeader={({ section: { title } }) => (
  //         <Text style={styles.header}>{title}</Text>
  //       )}
  //     />
  //      <View style={{flex:2}}/>
  //   </SafeAreaView>
  // );

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
  
        <View style={{flex:1}}/>
        {/* <Text style={styles.titleText}>Accessibility Settings Descriptions</Text> */}
  
        <Text style={styles.baseText}> Text Size Features </Text>
            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('ZoomScreen')}>
                <Text style={styles.buttonText}>Zoom</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('MagnifierScreen')}>
                <Text style={styles.buttonText}>Magnifier</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('DisplayScreen')}>
                <Text style={styles.buttonText}>Display & Text Size</Text>
            </TouchableOpacity>
  
        <Text style={styles.baseText}> {'\n'} Color Features </Text>
            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('ReduceScreen')}>
                <Text style={styles.buttonText}>Reduce Transparency</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('IncreaseScreen')}>
                <Text style={styles.buttonText}>Increase Contrast</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('DiffScreen')}>
                <Text style={styles.buttonText}>Differentiate without Color</Text>
            </TouchableOpacity>
        <View style={{flex:2}}/>
        
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText: {
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'ArialHebrew',
      color: '#1EB3EA',
  },
  baseText: {
      fontSize: 23,
      textAlign: 'center',
      fontFamily: 'ArialHebrew',
      marginLeft: wp("5%"),
      marginRight: wp("5%"),
      lineHeight:25,
      color: '#676363',
      marginTop: 15,
  },
  container: {
      width: '95%',
      height:'100%',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
      marginRight: 10,
      marginLeft: 10,
      borderColor: '#1EB3EA',
      borderWidth: 1
  },
  ImageContainer: {
      aspectRatio: 1,
      width: '35%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15
  },
  buttonContainer: {
      width: '70%',
      aspectRatio: 4/1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.5,
      borderRadius: 15,
      backgroundColor: '#1EB3EA',
      overflow: 'hidden',
      borderColor: '#1EB3EA',
      margin: 5,
  },
  buttonText:{
      color: 'white',
      fontSize: 20
  }
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 10,
//     marginHorizontal: 16,
//   },
//   item: {
//     backgroundColor: '#1EB3EA',
//     padding: 20,
//     marginVertical: 8,     
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 0.5,
//     borderRadius: 15,
//     backgroundColor: '#1EB3EA',
//     overflow: 'hidden',
//     borderColor: '#1EB3EA',
//     margin: 10,   
//   },
//   header: {
//     textAlign: 'center',
//     fontSize: 30,
//     fontFamily: 'ArialHebrew',
//     color: '#676363',
//     marginTop: 20

//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontFamily: 'ArialHebrew',
//     color: 'white',
//   },
// });