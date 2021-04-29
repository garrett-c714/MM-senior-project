import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';

import Colors from '../colors.js';

const ClassPanel = props => {
    const {info} = props;

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.name}>{info.name}</Text>
            </View>
            <View style={styles.right}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.peach,
        width: '90%',
        height: 200,
        margin: 15,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    left: {
        flex: 1,
        flexGrow: 2,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        padding: 10
    },
    right: {
        flex: 1,
        flexGrow: 1,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25
    },
    name: {
        color: 'white',
        fontSize: 40
    }
});

export default ClassPanel;