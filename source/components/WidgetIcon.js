import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';

const WidgetIcon = props => {
    const {path, bgColor} = props;
    return (
        <View style={[styles.box, {backgroundColor: bgColor}]}>
            <Image style={styles.img} source={path} />
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 120,
        height: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        margin: 40
    },
    img: {
        width: "80%",
        height: "80%"
    }
});

export default WidgetIcon;