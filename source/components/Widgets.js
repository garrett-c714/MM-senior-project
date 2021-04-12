import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';

const Widgets = props => {
    return (
        <View style={styles.container} >
            <Text>This is dumb</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#29465B',
        flex: 1,
        width: "100%",
        transform: [{ skewX: "45deg" }]
    }
});

export default Widgets;