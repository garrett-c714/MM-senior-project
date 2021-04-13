import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import WidgetIcon from './WidgetIcon.js';
import Colors from '../colors.js';
import colors from '../colors.js';

const Widgets = props => {
    return (
        <View style={styles.container} >
            <WidgetIcon bgColor={Colors.peach} />
            <WidgetIcon bgColor={Colors.gray} />
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }   
});

export default Widgets;