import React, {useEffect, useState, useContext} from 'react';
import {View, StyleSheet, Text, Image, TextInput, Button, TouchableOpacity} from 'react-native';

import {ClassContext} from '../context/ClassContext.js';

import Colors from '../colors.js';

const ClassInput = props => {
    const {open, setOpen} = props;
    const [name, onChangeName] = useState("");
    const [number, onChangeNumber] = useState("");
    const context = useContext(ClassContext);

    const handleSubmit = () => {
        const newClass = {
            name: name,
            room: number,
            key: context.number
        };
        context.addClass(newClass);
        onChangeName("");
        onChangeNumber("");
        setOpen(!open);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={[styles.input, styles.name]}
                    value={name}
                    onChangeText={onChangeName}
                    placeholder='Class Name....'
                />
                <TextInput style={[styles.input, styles.room]} 
                    keyboardType='numeric'
                    value={number}
                    onChangeText={onChangeNumber}
                    placeholder='Room Number....'
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <View style={styles.submitButton}>
                            <Text style={styles.submitText}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputContainer: {
        height: 150,
        width: 400,
        borderRadius: 15,
        backgroundColor: Colors.gray,
        width: "80%",
        margin: 15,
        justifyContent: 'flex-start'
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        borderWidth: 1,
        maxWidth: "50%"
    },
    buttonContainer: {
        marginTop: 'auto',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    submitButton: {
        backgroundColor: Colors.blue,
        height: 40,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    submitText: {
        color: 'white',
        padding: 2,
        fontSize: 20
    }
});

export default ClassInput;