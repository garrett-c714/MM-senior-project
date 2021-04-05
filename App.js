import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NavBar from './source/components/NavBar.js';

export default function App() {
  const startPhrase = "Hello World!";
  const [textContent, setTextContent] = useState(startPhrase);
  const handlePress = () => {
    textContent === startPhrase ? setTextContent(":)") : setTextContent(startPhrase);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <NavBar />
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
