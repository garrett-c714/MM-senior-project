import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { useFonts } from 'expo-font';

const NumberBox = props => {
    const [loaded] = useFonts({
        Raleway: require('../../assets/Fonts/Raleway-Regular.ttf')
    });

    const {bgColor, children} = props;

    if (!loaded) {
        return null;
    }
    return (
        <View style={[styles.box, {backgroundColor: bgColor}]}>
            <View style={styles.center}><Text style={styles.text}>{children}</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: 80,
        height: 80,
    },
    text: {
        fontFamily: 'Raleway',
        fontSize: 60,
        color: 'white'
    },
    center: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default NumberBox;