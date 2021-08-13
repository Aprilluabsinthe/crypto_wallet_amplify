import React from 'react';
import {View , Text, Image} from'react-native';
import styles from './styles';
// const image = require( '../../../assets/images/tezoscoin.png')

export interface ProfolioCoinProps{
    MarketCoin: {
    image: string,
    name: string,
    symbol: string,
    valueChange24H: number,
    valueUSD: number,
    }
}

const ProfolioCoin=(props: ProfolioCoinProps)=>{
    const {
        MarketCoin:{
            image,
            name,
            symbol,
            valueChange24H,
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
                <Text style={{color: valueChange24H > 0 ? '#f10606' : '#4a9806'}}>
                    {valueChange24H > 0 && '+ '} {valueChange24H}</Text>
            </View>
        </View>
    );
}

export default ProfolioCoin;