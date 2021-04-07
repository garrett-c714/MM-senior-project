import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Button, Text, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar from '../components/NavBar.js';

const Home = props => {
    const startPhrase = "Hello World!";
    const [textContent, setTextContent] = useState(startPhrase);
    
    const handlePress = () => {
        textContent === startPhrase ? setTextContent(":)") : setTextContent(startPhrase);
    }

    return (
    <SafeAreaView style={styles.container}>
      <View>
        <NavBar bgColor={'dodgerblue'} />
      </View>
      <View style={styles.headerBox}> 
        <View style={styles.headerText}>
            <Text style={styles.welcome}>Welcome, Garrett!</Text>
            <Text>-- Wednesday, April 7th, 2021 --</Text>
        </View>
        <View style={styles.buttonBox}>
          <Image style={styles.img} source={require('../../assets/bamhurger.png')} />
          <Image style={styles.img} source={require('../../assets/bamhurger.png')} />
        </View>
      </View>
      <View style={styles.main}>
        <Text>{textContent}</Text>
        <Button onPress={handlePress} title="Click Me!" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerBox: {
        //backgroundColor: 'purple',
        flexDirection: 'row',
        height: 200,
        width: '100%',
        //borderColor: 'purple',
        //borderWidth: 4
      },
      headerText: {
        borderWidth: 2,
        borderColor: 'black',
        height: '100%',
        flexGrow: 4,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonBox: {
        borderWidth: 2,
        borderColor: 'green',
        flexGrow: 3,
        backgroundColor: 'black',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      welcome: {
        fontSize: 50,
        fontFamily: 'Arial',
      },
      img: {
        width: 10,
        height: 10
      }
});

export default Home;