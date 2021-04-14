import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Button, Text, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Colors from '../colors.js';
import NavBar from '../components/NavBar.js';
import HomeHeader from '../components/HomeHeader.js';
import Widgets from '../components/Widgets.js';
import Nav from '../components/Nav.js';
import Blur from '../components/Blur.js';

const Home = props => {
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
      <View>
        <NavBar bgColor={Colors.mintGreen} handlePress={handlePress} requirePath={requirePath} align={align} />
      </View>
      <HomeHeader />
      <Widgets />
      <View style={styles.main}>
        <Text>Hello World!</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
});

export default Home;