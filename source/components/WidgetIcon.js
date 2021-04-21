import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

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
        width: 100,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        //margin: 25
    },
    img: {
        width: "80%",
        height: "80%"
    }
});

export default WidgetIcon;