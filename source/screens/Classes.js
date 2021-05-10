import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, SafeAreaView, Button, ScrollView, TouchableWithoutFeedback} from 'react-native';

import NavBar from '../components/NavBar';
import Nav from '../components/Nav.js';
import ClassPanel from '../components/ClassPanel.js';
import ClassInput from '../components/ClassInput.js';

import Colors from '../colors.js';

const Classes = props => {
    const [navOpen, setNavOpen] = useState(false);
    const startAlign = 'flex-start';
    const startPath = require('../../assets/bamhurger.png');
    const [requirePath, setRequirePath] = useState(startPath);
    const [align, setAlign] = useState(startAlign);

    const [formOpen, setFormOpen] = useState(false);


    useEffect(() => {
        if (navOpen === true) {
          setAlign('flex-end');
          setRequirePath(require('../../assets/x-icon.png'));
        } else {
          setAlign(startAlign);
          setRequirePath(startPath);
        }
      }, [navOpen]);

    const handlePress = () => {
      setNavOpen(!navOpen);
    }

    const handleAddTap = () => {
        setFormOpen(!formOpen);
    }

    /*Temp*/
    const info = {
        name: 'AP Calculus BC',
        room: '300'
    }

    /* ---- */

    return (
    <SafeAreaView style={styles.container}>
        {navOpen && <Nav />}
        <NavBar bgColor={Colors.mintGreen} handlePress={handlePress} requirePath={requirePath} align={align} />
        <View style={styles.main}>
            {formOpen && <ClassInput />}
            <ClassPanel info={info} />
            <View style={styles.plusView}>
                <TouchableWithoutFeedback onPress={handleAddTap} >
                    <Image style={styles.plusImg} source={require('../../assets/add-button.png')} />
                </TouchableWithoutFeedback>
            </View>
        </View>
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    plusView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 150,
        marginTop: 'auto',
    },
    plusImg: {
        width: 100,
        height: 100
    }
});

export default Classes;