import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {useDimensions} from '@react-native-community/hooks';

const NavBar = props => {
    const dimensions = useDimensions();
    return (
    <View style={[styles.nav, {width: dimensions.window.width}]}>
        <Image source={require('../../assets/bamhurger.png')} />
    </View>);
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: 'blue',
        height: 65
    }
});

export default NavBar;