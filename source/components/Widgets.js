import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import WidgetIcon from './WidgetIcon.js';
import Colors from '../colors.js';

const Widgets = props => {
    return (
        <View style={styles.container} >
            <View style={styles.innerBox}>
                <WidgetIcon path={require('../../assets/sun-icon.png')} bgColor={Colors.peach} />
                <WidgetIcon path={require('../../assets/clock-icon.png')} bgColor={Colors.gray} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#29465B',
        flex: 1,
        width: "110%",
        transform: [{ rotate: "-3deg" }],
        marginTop: -15,
        justifyContent: 'center'
    },
    innerBox: {
        transform: [{ rotate: "3deg" }],
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    } 
});

export default Widgets;