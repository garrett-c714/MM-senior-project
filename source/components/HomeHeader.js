import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground, TouchableHighlight, Alert} from 'react-native';

const getDate = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const date = new Date();
  const number = date.getDate();
  let suffix = "";


  switch(number.toString().substring(number.toString().length - 1)) {
      case "1":
          suffix = "st";
          break;
      case "2":
          suffix = "nd";
          break;
      case "3":
          suffix = "rd";
          break;
      default: 
          suffix = "th"
          break;
  }

  return(`${days[date.getDay()]}, ${months[date.getMonth()]} ${number}${suffix}, ${date.getFullYear()}`);
}

const HomeHeader = props => {
  const image = require('../../assets/header-background.jpg');
  const [date, setDate] = useState("");
  const [name, setName] = useState("[User]");

  useEffect(() => {
    setDate(getDate());
  }, []);

  const handleNamePress = () => {
    Alert.prompt("Who Are You?", "Enter Your Name", text=> {setName(text)});
  }

  return (
      <View style={styles.headerBox}> 
        <ImageBackground source={ image } style={styles.headerText}>
            <TouchableHighlight onPress={handleNamePress}>
              <Text style={[styles.welcome, styles.text]}>Welcome, {name}!</Text>
            </TouchableHighlight>
            <Text style={[styles.text, styles.raleway]}>-- {date} --</Text>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    headerBox: {
        flexDirection: 'row',
        height: 220,
        width: '100%',
      },
      headerText: {
        height: '100%',
        flexGrow: 4,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: 'white'
      },
      welcome: {
        fontSize: 40,
      }
})

export default HomeHeader;