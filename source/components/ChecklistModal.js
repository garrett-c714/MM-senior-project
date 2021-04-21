import React from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight} from 'react-native';

import Colors from '../colors.js';


const ChecklistModal = props => {
    const {barColor, XClick} = props; 
    return (
        <View style={styles.biggerContainer}>
            <View style={styles.container}>
                <View style={[styles.bar, {backgroundColor: barColor}]}>
                    <TouchableHighlight onPress={XClick}><Image style={styles.Ximg} source={require('../../assets/x-icon.png')} /></TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    biggerContainer: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999
    },
    container: {
        borderRadius: 25,
        width: 350,
        height: 500,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        borderColor: Colors.charcoal,
        borderWidth: 2
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height: 70
    },
    Ximg: {
        height: 50,
        width: 50,
        margin: 15
    },
});

export default ChecklistModal;