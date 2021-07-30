import React from 'react';
import {View , Text, Image} from'react-native';
import styles from './styles';
const image = require( '../../../assets/images/tezoscoin.png')

const HomeScreen=(props)=>{
    return(
        <View style={styles.root}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.header1} >Welcome To Tezos Wallet!</Text>
            <Text style={styles.header2} >Invest, Stake, Transfer and so on. Every thing you may need to play with Tezos</Text>
        </View>
    );
}

export default HomeScreen;