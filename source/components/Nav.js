import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Colors from '../colors.js';
import NavLink from './NavLink.js';

const Nav = props => {
    return (
        <View style={styles.bigBox}>
            <NavLink image={require('../../assets/house-icon.png')}><Text>Home</Text></NavLink>
            <NavLink image={require('../../assets/house-icon.png')}><Text>Classes</Text></NavLink>
            <NavLink style={styles.preferences} image={require('../../assets/settings-icon.png')}><Text>Preferences</Text></NavLink>
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
        left: 0,
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      preferences: {
          //MAKE IT GO TO THE BOTTOM
      }
});

export default Nav;