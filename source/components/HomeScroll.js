import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import Colors from '../colors.js';
import NumberBox from "./NumberBox";

const HomeScroll = props => {
    const [loaded, setLoaded] = useState(true);

    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.main}>
            <View style={styles.bar}></View>
            <View style={styles.textContainer}>
                <View style={styles.today}>
                    <Text style={[styles.bigText]} >Today:</Text>
                    <View style={styles.number}><NumberBox bgColor={Colors.red}><Text>4</Text></NumberBox></View>
                </View>
                <Text style={styles.caption}>Swipe up to see your daily breakdown...</Text>
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
        marginTop: -20,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
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
        justifyContent: 'space-evenly',
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
    number: {
        margin: 20
    },
    caption: {
        color: 'gray',
        //fontFamily: 'Raleway'
    }
});

export default HomeScroll;