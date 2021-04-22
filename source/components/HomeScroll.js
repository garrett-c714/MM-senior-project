import React, { useEffect, useState, useContext } from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import {ListContext} from '../context/ListContext.js';
import NumberBox from "./NumberBox";

import Colors from '../colors.js';

const HomeScroll = props => {
    const context = useContext(ListContext);
    let alertColor = Colors.brightGreen;

    if (context.numThings >= 4 ) {
        alertColor = Colors.red;
    } else if (context.numThings >= 2) {
        alertColor = Colors.peach;
    } else if (context.numThings > 0) {
        alertColor = Colors.yellow;
    }

    return (
        <View style={styles.main}>
            <View style={styles.bar}></View>
            <View style={styles.textContainer}>
                <View style={styles.today}>
                    <Text style={[styles.bigText]} >Today:</Text>
                    <View style={styles.number}><NumberBox bgColor={alertColor}><Text>{context.numThings}</Text></NumberBox></View>
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