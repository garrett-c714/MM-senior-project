import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Button, Text, Image, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Colors from '../colors.js';
import NavBar from '../components/NavBar.js';
import HomeHeader from '../components/HomeHeader.js';
import Widgets from '../components/Widgets.js';
import Nav from '../components/Nav.js';
import HomeScroll from '../components/HomeScroll.js';
import Blur from '../components/Blur.js';
import WeatherModal from '../components/WeatherModal.js';  
import WidgetIcon from '../components/WidgetIcon.js';

const Home = props => {
    const [navOpen, setNavOpen] = useState(false);
    const startAlign = 'flex-start';
    const startPath = require('../../assets/bamhurger.png');
    const [requirePath, setRequirePath] = useState(startPath);
    const [align, setAlign] = useState(startAlign);
    const [weatherOpen, setWeatherOpen] = useState(false);

    const handlePress = () => {
      align === startAlign ? setAlign('flex-end') : setAlign(startAlign);
      requirePath === startPath ? setRequirePath(require('../../assets/x-icon.png')) : setRequirePath(startPath);
      setNavOpen(!navOpen);
    }
    const handleWeatherToggle = () => {
      setWeatherOpen(!weatherOpen);
    }

    return (
    <SafeAreaView style={styles.container}>
        {navOpen && <Nav />}
        {weatherOpen && <WeatherModal barColor={Colors.peach} XClick={handleWeatherToggle} />}
      <View>
        <NavBar bgColor={Colors.mintGreen} handlePress={handlePress} requirePath={requirePath} align={align} />
      </View>
      <HomeHeader />
      <View style={styles.widgetContainer} >
            <View style={styles.widgetInnerBox}>
                <TouchableHighlight onPress={handleWeatherToggle}>
                    <WidgetIcon path={require('../../assets/sun-icon.png')} bgColor={Colors.peach} />
                </TouchableHighlight>
                <WidgetIcon path={require('../../assets/clock-icon.png')} bgColor={Colors.gray} />
            </View>
        </View>
      <HomeScroll />
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
      widgetContainer: {
        backgroundColor: '#29465B',
        flex: 1,
        width: "110%",
        transform: [{ rotate: "-3deg" }],
        marginTop: -15,
        justifyContent: 'center'
    },
    widgetInnerBox: {
        transform: [{ rotate: "3deg" }],
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    } 
});

export default Home;