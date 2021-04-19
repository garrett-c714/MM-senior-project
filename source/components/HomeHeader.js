import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';

const HomeHeader = props => {
  const image = require('../../assets/header-background.jpg');

    return (
      <View style={styles.headerBox}> 
        <ImageBackground source={ image } style={styles.headerText}>
            <Text style={[styles.welcome, styles.text]}>Welcome, Garrett!</Text>
            <Text style={[styles.text, styles.raleway]}>-- Wednesday, April 7th, 2021 --</Text>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    headerBox: {
        flexDirection: 'row',
        height: 180,
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