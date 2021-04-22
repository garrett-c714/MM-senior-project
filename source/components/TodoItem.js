import React, { useState, useContext } from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';

import {ListContext} from '../context/ListContext.js';

import Colors from '../colors.js';

const TodoItem = props => {
    const context = useContext(ListContext);
    const {text, color, num} = props;
    const radioPathInit = require('../../assets/radio-icon.png');
    const [radioPath, setRadioPath] = useState(radioPathInit);

    const swapRadio = () => {
        radioPath === radioPathInit ? setRadioPath(require('../../assets/radio-filled.png')) : setRadioPath(radioPathInit);
    }

    const handleTrashClick = () => {
        context.removeItem(num);
    }
    
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={ swapRadio } >
                <Image style={styles.radio} source={radioPath} />
            </TouchableWithoutFeedback>
            <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.text, styles.textWidth]}>{text}</Text>
            <View style={[styles.colorDot, {backgroundColor: color}]}></View>
            <Text style={styles.text}>|</Text>
            <TouchableHighlight onPress={handleTrashClick} >
                <Image style={styles.trash} source={require('../../assets/trash-icon.png')} />
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "90%",
        height: 60,
        margin: 0
    },
    radio: {
        height: 25,
        width: 25,
        marginLeft: 10
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    textWidth: {
        width: 130
    },
    colorDot: {
        height: 30,
        width: 30,
        borderRadius: 25
    },
    trash: {
        height: 30,
        width: 30,
        marginRight: 10
    }
});

export default TodoItem;