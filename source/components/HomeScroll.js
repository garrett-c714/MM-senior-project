import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Colors from '../colors.js';

const HomeScroll = props => {
    return (
        <View style={styles.main}>
            <View style={styles.bar}></View>
            <Text>Hello World!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: -10
      },
    bar: {
        backgroundColor: Colors.gray,
        height: 10,
        width: "45%",
    }
});

export default HomeScroll;