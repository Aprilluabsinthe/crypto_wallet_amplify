import React from 'react';
import{View,Text, Image, FlatList}from'react-native';
import styles from './styles'
const image = require("../../../assets/images/Saly-16.png");

const ProfileScreen=(props)=>{
    return(
        <View style={styles.root}>
            <Image style={styles.image} source={image} />
            <Text>It's a ProfileScreen Component</Text>
        </View>
    );
}

export default ProfileScreen;