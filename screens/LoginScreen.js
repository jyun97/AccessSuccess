import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { widthPercentageToDP as wp} from "react-native-responsive-screen"; 

const people = [
    {
        id: "1",
        title: "Enya Chen",
    },
    {
        id: "2",
        title: "Jeremy Yun"
    },
    {
        id: "3",
        title: "Nick Helton"
    },
    {
        id: "4",
        title: "Rayka Devaprasad"
    }
];

function Item({title}) {
    return(
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View> 
    );
}

export default function App() {
    return (
      <SafeAreaView style={styles.container2}>
        <FlatList
          data={people}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }

// const LoginScreen = ({ navigation }) => (
//     <SafeAreaView style={{flex:1}}>
//         <View style={styles.container}>
//             <Text style={styles.baseText}>Please select your account.</Text>
//             <Button onPress={() => navigation.navigate('HomeScreen')} title="Brenda" />
//         </View>
//     </SafeAreaView>
//   )

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
    container2: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    }
});
// export default LoginScreen