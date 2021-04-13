import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';

const WidgetIcon = props => {
    const {path, bgColor} = props;
    const source = require(`../../assets/sun-icon.png`);
    return (
        <View style={[styles.box, {backgroundColor: bgColor}]}>
            <Image style={styles.img} source={source} />
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 120,
        height: 120,
        transform: [{ rotate: "3deg" }],
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: "80%",
        height: "80%"
    }
});

export default WidgetIcon;