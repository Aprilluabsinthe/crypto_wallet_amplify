import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
const image = require( '../../../assets/images/welcome.jpeg')
const buttonimage = require( '../../../assets/images/google-oauth-dark-475fe1c3fbaec72b36abbdd2ff36667d46769c7cef1db6a3b4723a968b86da2a.png')
const WelcomeScreen=()=>{
    const signInWithGoogle = () =>{

    }

    return(
        <View style={styles.root}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.header1} >Welcome To Tezos Wallet!</Text>
            <Text style={styles.header2} >Invest, Stake, Transfer and so on. Every thing you may need to play with Tezos</Text>
        <Pressable onPress={signInWithGoogle} style={styles.buttonContainer}>
            <Image style={styles.buttonImage} source={buttonimage}></Image>
        </Pressable>

        </View>
    );
}

export default WelcomeScreen;