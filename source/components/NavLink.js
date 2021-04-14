import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const NavLink = props => {
    const {image, children, bottom} = props;
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={image} />
            <Text style={styles.text} >{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 40,
        width: 40,
        marginRight: 10
    },
     text: {
         color: 'white',
         fontSize: 28
     }
});

export default NavLink;