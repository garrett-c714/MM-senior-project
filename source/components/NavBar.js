import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDimensions} from '@react-native-community/hooks';

const NavBar = props => {
    const dimensions = useDimensions();
    return (<View style={[styles.nav, {width: dimensions.window.width}]}></View>);
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: 'blue',
        height: 65
    }
});

export default NavBar;