import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from "./styles";
import AssetCoin from "../../components/AssetCoin";
const image = require("../../../assets/images/tezoscoin.png")
const availableImage = require("../../../assets/images/Available.png")
const pendingImage = require("../../../assets/images/pending.png")
const stakedImage = require("../../../assets/images/letterS.png")

const AssetCoins = [
    {
        "id" : 1,
        "name" : "Staked",
        "image": stakedImage,
        "symbol" : "USD",
        "amount" : 11.29,
        "valueUSD" : 11.29,
    },
    {
        "id" : 2,
        "name" : "Available",
        "image": availableImage,
        "symbol" : "USD",
        "amount" : 129.01,
        "valueUSD" : 129.01,
    },
    {
        "id" : 2,
        "name" : "Pending",
        "image": pendingImage,
        "symbol" : "USD",
        "amount" : 371.99,
        "valueUSD" : 371.99,
    },
    {
        "id" : 1,
        "name" : "Staked",
        "image": stakedImage,
        "symbol" : "USD",
        "amount" : 11.29,
        "valueUSD" : 11.29,
    },
    {
        "id" : 2,
        "name" : "Available",
        "image": availableImage,
        "symbol" : "USD",
        "amount" : 129.01,
        "valueUSD" : 129.01,
    },
    {
        "id" : 2,
        "name" : "Pending",
        "image": pendingImage,
        "symbol" : "USD",
        "amount" : 371.99,
        "valueUSD" : 371.99,
    },
]

const PortforlioScreen=(props)=>{
    return(
        <View style={styles.root}>
            <FlatList
                style={{width:'100%'}}
                data = {AssetCoins}
                renderItem={({item}) => <AssetCoin AssetCoin={item} />}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponentStyle = {{alignItems:'center'}}
                ListHeaderComponent = {() => (
                    <>
                        <Image style={styles.image} source={image}/>
                        <View style={styles.balanceContainer}>
                            <Text style={styles.label}>Your Assets and Balance:</Text>
                            <Text style={styles.balance}>$511.29</Text>
                        </View>
                    </>
                )}
            />
        </View>
    );
};

export default PortforlioScreen;