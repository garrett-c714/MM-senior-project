import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { useFonts } from 'expo-font';
import Colors from '../colors.js';
import NumberBox from "./NumberBox";

const HomeScroll = props => {
    const [loaded] = useFonts({
        Oswald: require('../../assets/Fonts/Oswald-Regular.ttf'),
        Raleway: require('../../assets/Fonts/Raleway-Regular.ttf')
    });


    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.main}>
            <View style={styles.bar}></View>
            <View style={styles.textContainer}>
                <View style={styles.today}>
                    <Text style={[styles.bigText, styles.oswald]} >Today:</Text>
                    <View style={styles.number}><NumberBox bgColor={Colors.red}><Text>4</Text></NumberBox></View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: -15
      },
    bar: {
        backgroundColor: Colors.gray,
        height: 10,
        width: "45%",
        borderRadius: 10,
        margin: 10
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    today: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigText: {
        fontSize: 55
    },
    raleway: {
        fontFamily: 'Raleway'
    },
    oswald: {
        fontFamily: 'Oswald'
    },
    number: {
        margin: 20
    }
});

export default HomeScroll;