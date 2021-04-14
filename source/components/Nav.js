import { useDimensions } from '@react-native-community/hooks';
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Colors from '../colors.js';
import NavLink from './NavLink.js';

const Nav = props => {
    const dimensions = useDimensions();

    return (
        <View style={[styles.bigBox, {height: dimensions.screen.height}]}>
            {/* <View style={styles.topLinks} > */}
                <View style={styles.dumb}></View>
                <NavLink image={require('../../assets/house-icon.png')}><Text>Home</Text></NavLink>
                <NavLink image={require('../../assets/cap-icon.png')}><Text>Classes</Text></NavLink>
            {/* </View> */}
            <View style={styles.bottom}>
                <NavLink bottom={true} image={require('../../assets/settings-icon.png')}><Text>Preferences</Text></NavLink>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bigBox: {
        zIndex: 4,
        backgroundColor: Colors.charcoal,
        //height: '120%',
        width: '80%',
        position: 'absolute',
        left: 0,
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      bottom: {
          flexDirection: 'row',
          marginTop: 'auto',
          alignItems: 'center'
      },
      topLinks: {
          width: "100%",
          flexDirection: 'row',
          //justifyContent: 'center'
          backgroundColor: 'purple',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40
      },
      dumb: {
          height: 40,
          width: "100%"
      }
});

export default Nav;