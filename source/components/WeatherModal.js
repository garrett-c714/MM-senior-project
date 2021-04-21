import React from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { useFonts } from 'expo-font';
import Colors from '../colors.js';

const Modal = props => {
    const dimensions = useDimensions();
    const {barColor, XClick} = props;
    
    return (
        <View style={styles.biggerContainer}>
            <View style={styles.container}>
                <View style={[styles.bar, {backgroundColor: barColor}]}>
                    <TouchableHighlight onPress={XClick}><Image style={styles.Ximg} source={require('../../assets/x-icon.png')} /></TouchableHighlight>
                </View>
                <View style={styles.head}>
                    <View style={styles.imgBox}>
                        <Image style={styles.img} source={require('../../assets/sun-icon-orange.png')} />
                        <Text style={styles.captions}>Sunny</Text>
                    </View>
                    <Text style={styles.bigText}>69°</Text> 
                </View>
                <View style={styles.barWrapper}><View style={styles.rectangle}></View></View>
                <View style={styles.body}>
                    <View style={styles.column}>
                        <Image style={styles.bodyImg} source={require('../../assets/thermo-icon.png')} />
                        <Image style={styles.bodyImg} source={require('../../assets/rain-icon.png')} />
                        <Image style={styles.bodyImg} source={require('../../assets/wind-icon.png')} />
                    </View>
                    <View style={styles.column}>
                        <View style={styles.dot}></View>
                        <View style={styles.dot}></View>
                        <View style={styles.dot}></View>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.bodyText}>
                            <Text style={{color: Colors.red}}>77</Text>
                            <Text>  /  </Text>
                            <Text style={{color: Colors.blue}}>55</Text>
                        </Text>
                        <Text style={styles.bodyText}>34%</Text>
                        <Text style={styles.bodyText}>4mph</Text>
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
    img: {
        width: 130,
        height: 130
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20
    },
    imgBox: {
        alignItems: 'center'
    },
    captions: {
        color: Colors.gray,
        margin: 5
    },
    bigText: {
        fontSize: 90,
        color: Colors.gray
    },
    rectangle: {
        backgroundColor: Colors.gray,
        height: 8,
        width: "75%",
        borderRadius: 10,
        margin: 10
    },
    barWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    column: {
        height: "100%",
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 80
    },
    bodyImg: {
        width: 50,
        height: 50
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: Colors.gray
    },
    bodyText: {
        fontSize: 20,
        color: Colors.gray
    }
});

export default Modal;