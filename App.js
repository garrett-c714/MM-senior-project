import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const [textContent, setTextContent] = useState("Ella is stoopid...");
  const handlePress = () => {
    textContent === "Ella is stoopid..." ? setTextContent(":)") : setTextContent("Ella is stoopid...");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>{textContent}</Text>
      <Button onPress={handlePress} title="Click Me!" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
