import { useDimensions } from '@react-native-community/hooks';
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Colors from '../colors.js';
import NavLink from './NavLink.js';
import {Link} from 'react-router-native';

const Nav = props => {
    const dimensions = useDimensions();

    const {open, setOpen} = props;

    function onSwipeLeft(gestureState) {
        setOpen(!open);
    }
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    }

    return (
        <View style={[styles.bigBox, {height: dimensions.screen.height}]}>
            <GestureRecognizer
                style={{flex: 1, width: "100%"}}
                onSwipeLeft={(state) => {onSwipeLeft(state)}}
            >
            <View style={styles.dumb}></View>
            <Link to='/' style={styles.link}>
                <NavLink image={require('../../assets/house-icon.png')}><Text>Home</Text></NavLink>
            </Link>
            <Link to='/classes' style={styles.link}>
                <NavLink image={require('../../assets/cap-icon.png')}><Text>Classes</Text></NavLink>
            </Link>
            <View style={styles.bottom}>
                <NavLink bottom={true} image={require('../../assets/settings-icon.png')}><Text>Preferences</Text></NavLink>
            </View>
            </GestureRecognizer>
        </View>
    );
}

const styles = StyleSheet.create({
    bigBox: {
        zIndex: 4,
        backgroundColor: Colors.charcoal,
        width: '80%',
        position: 'absolute',
        left: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      bottom: {
          flexDirection: 'row',
          marginTop: 'auto',
          alignItems: 'center'
      },
      topLinks: {
          width: "100%",
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: 'purple',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40
      },
      dumb: {
          height: 40,
          width: "100%"
      },
      link: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
      }
});

export default Nav;