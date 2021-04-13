import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import {useDimensions} from '@react-native-community/hooks';

const NavBar = props => {
    const dimensions = useDimensions();
    
    const {bgColor, handlePress, requirePath, align} = props;

    
    const internalStyles = {width: dimensions.window.width, 
                            backgroundColor: bgColor,
                            justifyContent: align}

    return (
        <View style={[styles.nav, internalStyles]}>
            <TouchableHighlight onPress={handlePress} > 
                <Image style={styles.img} source={requirePath} />
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 85
    },
    img: {
        marginLeft: 15,
        marginRight: 15,
        height: 60,
        width: 60
    }
});

export default NavBar;