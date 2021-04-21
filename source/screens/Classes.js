import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, SafeAreaView} from 'react-native';
import NavBar from '../components/NavBar';
import Nav from '../components/Nav.js';
import WeatherModal from '../components/WeatherModal.js';
import Colors from '../colors.js';

const Classes = props => {
    const [navOpen, setNavOpen] = useState(false);
    const startAlign = 'flex-start';
    const startPath = require('../../assets/bamhurger.png');
    const [requirePath, setRequirePath] = useState(startPath);
    const [align, setAlign] = useState(startAlign);

    const handlePress = () => {
      align === startAlign ? setAlign('flex-end') : setAlign(startAlign);
      requirePath === startPath ? setRequirePath(require('../../assets/x-icon.png')) : setRequirePath(startPath);
      setNavOpen(!navOpen);
    }

    return (
    <SafeAreaView style={styles.container}>
        {navOpen && <Nav />}
        <NavBar bgColor={Colors.mintGreen} handlePress={handlePress} requirePath={requirePath} align={align} />
        <View style={styles.main}></View>
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Classes;