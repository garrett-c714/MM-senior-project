import React from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight} from 'react-native';

import Colors from '../colors.js';

const TodoItem = props => {
    const text = "Test Item";
    const color = Colors.blue;
    
    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    }
});

export default TodoItem;