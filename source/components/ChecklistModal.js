import React, {useContext} from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import {ListContext} from '../context/ListContext.js';

import TodoItem from './TodoItem.js';

import Colors from '../colors.js';


const ChecklistModal = props => {
    const context = useContext(ListContext);
    const {barColor, XClick} = props; 
    
    return (
        <View style={styles.biggerContainer}>
            <View style={styles.container}>
                <View style={[styles.bar, {backgroundColor: barColor}]}>
                    <TouchableWithoutFeedback onPress={XClick}><Image style={styles.Ximg} source={require('../../assets/x-icon.png')} /></TouchableWithoutFeedback>
                </View>
                <View style={styles.spacer}></View>
                <View style={styles.content}>
                    {context.items.map(item => <TodoItem key={item.key} text={item.text} color={item.color} />)}
                    <View style={styles.buttons}>
                        <View style={styles.plusButton}>
                            <Image style={styles.plusImg} source={require('../../assets/add-button.png')} />
                        </View>
                        <View style={styles.checkButton}>
                            <Image style={styles.checkImg} source={require('../../assets/checked-button.png')} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    biggerContainer: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999
    },
    container: {
        borderRadius: 25,
        width: 350,
        height: 500,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        borderColor: Colors.charcoal,
        borderWidth: 2
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height: 70
    },
    Ximg: {
        height: 50,
        width: 50,
        margin: 15
    },
    spacer: {
        width: "100%",
        height: 20
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        width: "100%",
        height: 100,
        marginTop: "auto",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    plusButton: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomLeftRadius: 25,
    },
    checkButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 25
    },
    plusImg: {
        height: 70,
        width: 70,
        margin: 20,
    },
    checkImg: {
        width: 50,
        height: 50
    }
});

export default ChecklistModal;