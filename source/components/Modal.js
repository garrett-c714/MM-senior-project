import React from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight} from 'react-native';
import { useFonts } from 'expo-font';
import Colors from '../colors.js';

const Modal = props => {
    const {barColor, XClick} = props;
    return (
        <View style={styles.container}>
            <View style={[styles.bar, {backgroundColor: barColor}]}>
                <TouchableHighlight><Image style={styles.img} source={require('../../assets/x-icon.png')} /></TouchableHighlight>
            </View>
            <View style={styles.main}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        width: 350,
        height: 500,
        backgroundColor: 'white',
        justifyContent: 'flex-start'
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height: 70
    },
    img: {
        height: 50,
        width: 50,
        margin: 15
    },
    main: {

    }
});

export default Modal;