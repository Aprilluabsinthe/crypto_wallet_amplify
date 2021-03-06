import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import PercentageChange from "../PercentageChange";
import{ useNavigation }from'@react-navigation/native';

// const image = require( '../../../assets/images/tezoscoin.png')

export interface AssetCoinProps{
    MarketCoin: {
    image: string,
    name: string,
    symbol: string,
    valueChange24H: number,
    valueUSD: number,
    }
}

const AssetCoin=(props: AssetCoinProps)=>{
    const {
        MarketCoin:{
            image,
            name,
            symbol,
            valueChange24H,
            valueUSD,
        },
    } = props;

    const navigation = useNavigation();


    return(
        <Pressable style={styles.root} onPress={()=>navigation.navigate('CoinDetails')}>
            <View style={styles.left}>
                <Image style={styles.image} source = {{uri: image}}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>


            <View style={{alignItems:'flex-end'}}>
                <Text style={styles.value}>${valueUSD}</Text>
                <PercentageChange value={valueChange24H} />

                {/*<Text style={{color: valueChange24H > 0 ? '#f10606' : '#4a9806'}}>*/}
                {/*    {valueChange24H > 0 && '+ '} {valueChange24H}*/}
                {/*</Text>*/}
            </View>
        </Pressable>
    );
}

export default AssetCoin;