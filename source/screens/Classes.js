import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, Image, Text, SafeAreaView, Button, ScrollView, TouchableWithoutFeedback} from 'react-native';

import NavBar from '../components/NavBar';
import Nav from '../components/Nav.js';
import ClassPanel from '../components/ClassPanel.js';
import ClassInput from '../components/ClassInput.js';


import {ClassContext} from '../context/ClassContext.js';
import Colors from '../colors.js';

const Classes = props => {
    const [navOpen, setNavOpen] = useState(false);
    const startAlign = 'flex-start';
    const startPath = require('../../assets/bamhurger.png');
    const [requirePath, setRequirePath] = useState(startPath);
    const [align, setAlign] = useState(startAlign);

    const context = useContext(ClassContext);
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
        {navOpen && <Nav open={navOpen} setOpen={setNavOpen} />}
        <NavBar bgColor={Colors.mintGreen} handlePress={handlePress} requirePath={requirePath} align={align} />
        <View style={styles.main}>
            {formOpen && <ClassInput open={formOpen} setOpen={setFormOpen} />}
            {/* <ClassPanel info={info} /> */}
            <ScrollView style={styles.scrollView} >
                {context.classes.map(c => <ClassPanel info={{name: c.name, room: c.room}} key={c.key} />)}
            </ScrollView>
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
    scrollView: {
        width: "100%",
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