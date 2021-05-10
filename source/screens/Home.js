import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Colors from '../colors.js';
import NavBar from '../components/NavBar.js';
import HomeHeader from '../components/HomeHeader.js';
import Nav from '../components/Nav.js';
import HomeScroll from '../components/HomeScroll.js';
import WidgetIcon from '../components/WidgetIcon.js';
import WeatherModal from '../components/WeatherModal.js';
import ChecklistModal from '../components/ChecklistModal.js';

const Home = props => {
    const [navOpen, setNavOpen] = useState(false);
    const startAlign = 'flex-start';
    const startPath = require('../../assets/bamhurger.png');
    const [requirePath, setRequirePath] = useState(startPath);
    const [align, setAlign] = useState(startAlign);
    const [weatherOpen, setWeatherOpen] = useState(false);
    const [listOpen, setListOpen] = useState(false);
    const [scrollOpen, setScrollOpen] = useState(false);

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
    const handleWeatherToggle = () => {
      setWeatherOpen(!weatherOpen);
    }
    const handleListToggle = () => {
      setListOpen(!listOpen);
    }

    return (
    <SafeAreaView style={styles.container}>
        {navOpen && <Nav open={navOpen} setOpen={setNavOpen} />}
        {weatherOpen && <WeatherModal barColor={Colors.peach} XClick={handleWeatherToggle} />}
        {listOpen && <ChecklistModal barColor={Colors.gray} XClick={handleListToggle} />}
      <View>
        <NavBar bgColor={Colors.mintGreen} handlePress={handlePress} requirePath={requirePath} align={align} />
      </View>
      <HomeHeader />
      {!scrollOpen && <View style={styles.widgetContainer} >
            <View style={styles.widgetInnerBox}>
                <TouchableOpacity onPress={handleListToggle}>
                  <WidgetIcon path={require('../../assets/check-icon.png')} bgColor={'white'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleWeatherToggle}>
                    <WidgetIcon path={require('../../assets/sun-icon.png')} bgColor={Colors.peach} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>{alert('Not Ready Yet')}}>
                  <WidgetIcon path={require('../../assets/clock-icon.png')} bgColor={Colors.gray} />
                </TouchableOpacity>
            </View>
        </View>}
      <HomeScroll weather={weatherOpen} list={listOpen} acroll={scrollOpen} setScroll={setScrollOpen} />
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
        maxHeight: 350,
        width: "110%",
        transform: [{ rotate: "-3deg" }],
        marginTop: -15,
        justifyContent: 'center'
    },
    widgetInnerBox: {
        transform: [{ rotate: "3deg" }],
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: "100%"
    } 
});

export default Home;