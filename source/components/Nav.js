import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Colors from '../colors.js';
import NavLink from './NavLink.js';

const Nav = props => {
    return (
        <View style={styles.bigBox}>
            <NavLink image={require('../../assets/house-icon.png')}><Text>Home</Text></NavLink>
            <NavLink image={require('../../assets/cap-icon.png')}><Text>Classes</Text></NavLink>
            <View style={styles.bottom}>
                <NavLink bottom={true} image={require('../../assets/settings-icon.png')}><Text>Preferences</Text></NavLink>
            </View>
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
      bottom: {
          marginTop: 'auto'
      }
});

export default Nav;