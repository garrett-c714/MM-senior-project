import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {useDimensions} from '@react-native-community/hooks';

const NavBar = props => {
    const dimensions = useDimensions();
    const {bgColor} = props;
    return (
    <View style={[styles.nav, {width: dimensions.window.width, backgroundColor: bgColor}]}>
        <Image style={styles.img} source={require('../../assets/bamhurger.png')} />
    </View>);
}

const styles = StyleSheet.create({
    nav: {
        //backgroundColor: 'blue',
        height: 65
    },
    img: {
        height: 60,
        width: 60
    }
});

export default NavBar;