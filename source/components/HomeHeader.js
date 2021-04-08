import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const HomeHeader = props => {
    return (
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
    );
}

const styles = StyleSheet.create({
    headerBox: {
        flexDirection: 'row',
        height: 200,
        width: '100%',
      },
      headerText: {
        //borderWidth: 2,
        //borderColor: 'black',
        height: '100%',
        flexGrow: 4,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonBox: {
        //borderWidth: 2,
        //borderColor: 'green',
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
        width: "50%",
        height: '50%'
      }
})

export default HomeHeader;