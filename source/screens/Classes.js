import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, SafeAreaView, Button, ScrollView} from 'react-native';
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

    const [rory, setRory] = useState([]);
    const [roryKey, setRoryKey] = useState(0);

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

    const roryPress= () => {
        const num = Number.parseInt(Math.random()*3+1, 10);
        let imgSource;
        switch(num) {
            case 1:
                imgSource = require('../../assets/rory-1.jpg');
                break;
            case 2:
                imgSource = require('../../assets/rory-2.jpg');
                break;
            default:
                imgSource = require('../../assets/rory-3.jpg');
        }
        const newRory = {
            source: imgSource,
            key: roryKey
        };
        setRory([...rory, newRory]);
        setRoryKey(roryKey+1);
    }

    return (
    <SafeAreaView style={styles.container}>
        {navOpen && <Nav />}
        <NavBar bgColor={Colors.mintGreen} handlePress={handlePress} requirePath={requirePath} align={align} />
        <View style={styles.main}>
            <View style={styles.temp}>
                <Text style={styles.tempText}>Classes are a feature currently in the works...</Text>
                <Button onPress={roryPress} style={styles.button} title='Click for Surpise :)' />
            </View>
            <ScrollView>
                {rory.map(r => <Image key={r.key} source={r.source} style={styles.image} />)}
            </ScrollView>
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
        backgroundColor: 'purple',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    temp: {
        backgroundColor: 'white',
        justifyContent:'space-evenly',
        alignItems: 'center',
        height: 200,
        width: 400
    },
    tempText: {
        fontSize: 20,
        fontWeight: '600'
    },
    image: {
        width: 300,
        height: 150
    }
});

export default Classes;