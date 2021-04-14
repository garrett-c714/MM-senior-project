import React from 'react';
import {View, StyleSheet} from 'react-native';

const Blur = props => {
    return (
        <View style={styles.view}>

        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        height: "100%",
        width: "100%",
        backgroundColor: 'black',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2
    }
});

export default Blur;