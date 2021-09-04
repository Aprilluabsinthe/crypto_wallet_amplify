import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable, TextInput, Alert, KeyboardAvoidingView, Platform} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';

const image = require( '../../../assets/images/exchange.png')

interface CoinExchangeProps{
    isBuy: boolean;

}

const CoinExchangeScreen=(props)=>{

    const [coinAmount, setCoinAmount] = useState('')
    const [coinUSDValue, setCoinUSDValue] = useState('')

    const maxUSD = 100000;



    const route = useRoute();

    const isBuy = route?.params?.isBuy;
    const coinData = route?.params?.coinData;


    useEffect(() =>{
        const amount = parseFloat(coinAmount)
        if (!amount && amount !== 0){
            setCoinAmount("");
            setCoinUSDValue("")
            return;
        }
        setCoinUSDValue((amount * coinData?.currentPrice).toString());
    }, [coinAmount]);

    useEffect(() =>{
        const amount = parseFloat(coinUSDValue)
        if (!amount && amount !== 0){
            setCoinAmount("");
            setCoinUSDValue("")
            return;
        }
        setCoinAmount((amount / coinData?.currentPrice).toString());
    }, [coinUSDValue]);

    const onPlaceorder= ()=>{
        if(isBuy && parseFloat(coinUSDValue) > maxUSD){
            Alert.alert('Error', `Not enough USD coins. You have Max ${maxUSD}`);
        }
        if(!isBuy && coinAmount > coinData.amount){
            Alert.alert('Error', `Not enough ${coinData.symbol} coins. You have Max: ${coinData.amount}`);
        }
    }


    return(
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100}
        >
            <Text style={styles.title}>
                {isBuy ? 'Buy' : 'Sell'}
                {" "}
                {coinData?.name}
            </Text>
            <Text style={styles.subtitle}>
                1 {coinData?.symbol}
                {' = '}
                $ {coinData?.currentPrice}
            </Text>
            <Image style={styles.image} source={image}/>

            <View style={styles.inputsContainer}>
                <View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="0"
                            keyboardType="decimal-pad"
                            value={coinAmount} onChangeText={setCoinAmount}
                        />
                        <Text>{coinData?.symbol}</Text>
                    </View>
                </View>

                <Text style={{fontSize:30, alignItems:'center',}}>=</Text>

                <View style={{flexDirection:'row'}}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="0"
                                   keyboardType="decimal-pad"
                                   value={coinUSDValue} onChangeText={setCoinUSDValue}
                        />
                        <Text>USD</Text>
                    </View>
                </View>
            </View>
            
            <Pressable style={styles.button} onPress={onPlaceorder}>
                <Text style={styles.buttonText}>Place Order</Text>
            </Pressable>

        </KeyboardAvoidingView>



    );
}

export default CoinExchangeScreen;