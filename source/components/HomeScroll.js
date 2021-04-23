import React, { useEffect, useState, useContext } from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import {ListContext} from '../context/ListContext.js';
import NumberBox from "./NumberBox";
import TodoItem from '../components/TodoItem.js';

import Colors from '../colors.js';

const HomeScroll = props => {
    const context = useContext(ListContext);
    const [scrollHere, setScrollHere] = useState(false);
    const [textJustify, setTextJustify] = useState("space-evenly");
    const [breakText, setBreakText] = useState("Nothing right now!");
    const {weather, list, scroll, setScroll} = props;
    let alertColor = Colors.brightGreen;

    useEffect(() => {
        if (context.numThings > 0) {
            setBreakText("Items for you today: ");
        } else {
            setBreakText("Nothing right now!");
        }
    })

    if (context.numThings >= 4 ) {
        alertColor = Colors.red;
    } else if (context.numThings >= 2) {
        alertColor = Colors.peach;
    } else if (context.numThings > 0) {
        alertColor = Colors.yellow;
    }

    function onSwipeUp(gestureState) {
        if (!weather && !list) {
            setScroll(true);
            setScrollHere(true);
            setTextJustify("flex-start");
        }
    }
    function onSwipeDown(gestureState) {
        if (!weather && !list) {
            setScroll(false);
            setScrollHere(false);
            setTextJustify("space-evenly");
        }
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    }

    return (
        <GestureRecognizer
            onSwipeUp={(state) => {onSwipeUp(state)}}
            onSwipeDown={(state) => {onSwipeDown(state)}}
            config={config}
            style={{flex: 1, width: "100%"}}
        >
        <View style={styles.main}>
            <View style={styles.bar}></View>
            <View style={[styles.textContainer, {justifyContent: textJustify}]}>
                { !scrollHere && <View style={styles.today}>
                    <Text style={[styles.bigText]} >Today:</Text>
                    <View style={styles.number}><NumberBox bgColor={alertColor}><Text>{context.numThings}</Text></NumberBox></View>
                </View>}
                {!scrollHere && <Text style={styles.caption}>Swipe up to see your daily breakdown...</Text>}
                {scrollHere && <View style={styles.spacer}></View>}
                {scrollHere && <Text style={styles.todayHeader}>{breakText}</Text>}
                {scrollHere && 
                    <View style={styles.breakContainer}>
                        <View style={styles.section}>
                            <Text style={styles.subheading}>On Your Checklist: </Text>
                            <View style={styles.ul}>
                                {context.items.map(item => <Text style={styles.ulItem} key={item.key}>--{item.text}</Text>)}
                            </View>
                        </View>
                        <View style={styles.section}>
                        <Text style={styles.subheading}>For Your Classes: </Text>
                        </View>
                    </View>}
            </View>
        </View>
        </GestureRecognizer>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: -20,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
      },
    bar: {
        backgroundColor: Colors.gray,
        height: 10,
        width: "45%",
        borderRadius: 10,
        margin: 10
    },
    textContainer: {
        flex: 1,
        //justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    today: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigText: {
        fontSize: 55
    },
    number: {
        margin: 20
    },
    caption: {
        color: 'gray',
        //fontFamily: 'Raleway'
    },
    breakContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    spacer: {
        width: "100%",
        height: 35
    },
    todayHeader: {
        fontSize: 35,
    },
    subheading: {
        fontSize: 20,
        fontWeight: '600'
    },
    ul: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    ulItem: {
        margin: 10
    }
});

export default HomeScroll;