import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground, TouchableHighlight} from 'react-native';
import WidgetIcon from './WidgetIcon.js';
import Colors from '../colors.js';

const Widgets = props => {
    const {weatherOpen, weatherToggle} = props;

    return (
        <View style={styles.widgetContainer} >
            <View style={styles.widgetInnerBox}>
                <TouchableHighlight onPress={weatherToggle}>
                    <WidgetIcon path={require('../../assets/sun-icon.png')} bgColor={Colors.peach} />
                </TouchableHighlight>
                <WidgetIcon path={require('../../assets/clock-icon.png')} bgColor={Colors.gray} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    widgetContainer: {
        backgroundColor: '#29465B',
        flex: 1,
        width: "110%",
        transform: [{ rotate: "-3deg" }],
        marginTop: -15,
        justifyContent: 'center'
    },
    widgetInnerBox: {
        transform: [{ rotate: "3deg" }],
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    } 
});

export default Widgets;