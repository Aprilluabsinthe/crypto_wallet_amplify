import React from 'react';
import {View , Text, Image} from'react-native';
import styles from './styles';
// const image = require( '../../../assets/images/tezoscoin.png')

export interface AssetCoinProps{
    AssetCoin: {
    image: string,
    name: string,
    symbol: string,
    amount: number,
    valueUSD: number,
    }
}

const AssetCoin=(props: AssetCoinProps)=>{
    const {
        AssetCoin:{
            image,
            name,
            symbol,
            amount,
            valueUSD,
        },
    } = props;

    return(
        <View style={styles.root}>
            <View style={styles.left}>
                <Image style={styles.image} source = {image}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>


            <View style={{alignItems:'flex-end'}}>
                <Text style={styles.value}>${valueUSD}</Text>
                <Text style={styles.symbol}>{symbol} {amount}</Text>
            </View>
        </View>
    );
}

export default AssetCoin;