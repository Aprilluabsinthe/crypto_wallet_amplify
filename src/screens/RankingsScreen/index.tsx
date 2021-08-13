import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from "./styles";
import MarketCoin from "../../components/MarketCoin";
const image = require("../../../assets/images/market.png")
const ETH = require("../../../assets/images/ETH.png")
const BitCoin = require("../../../assets/images/bitcoinc.png")
const TezosCoin = require("../../../assets/images/tezosC.png")

const MarketCoins = [
    {
        "id" : 1,
        "name" : "ETH",
        "image": ETH,
        "symbol" : "USD",
        "valueChange24H" : 0.129,
        "valueUSD" : 11.29,
    },
    {
        "id" : 2,
        "name" : "Tezos",
        "image": TezosCoin,
        "symbol" : "USD",
        "valueChange24H" : 0.28,
        "valueUSD" : 129.01,
    },
    {
        "id" : 2,
        "name" : "BitCoin",
        "image": BitCoin,
        "symbol" : "USD",
        "valueChange24H" : -0.278,
        "valueUSD" : 371.99,
    },
]

const RankingsScreen=(props)=>{
    return(
        <View style={styles.root}>
            <FlatList
                style={{width:'100%'}}
                data = {MarketCoins}
                renderItem={({item}) => <MarketCoin MarketCoin={item} />}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponentStyle = {{alignItems:'center'}}
                ListHeaderComponent = {() => (
                    <>
                        <Image style={styles.image} source={image}/>
                        <Text style={styles.label}>Rankings</Text>
                    </>
                )}
            />
        </View>
    );
};

export default RankingsScreen;