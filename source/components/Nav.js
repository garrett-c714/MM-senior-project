import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Colors from '../colors.js';

const Nav = props => {
    return (
        <View style={styles.bigBox}>
      
        </View>
    );
}

const styles = StyleSheet.create({
    bigBox: {
        zIndex: 2,
        backgroundColor: Colors.charcoal,
        height: '100%',
        width: '80%',
        position: 'absolute',
        left: 0
      }
});

export default Nav;