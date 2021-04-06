import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Button, Text} from 'react-native';
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
});

export default Home;