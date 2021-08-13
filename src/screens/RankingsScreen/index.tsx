import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from "./styles";
import UserRankingItem from "../../components/UserRankingItem";
const image = require("../../../assets/images/market.png")
const user1 = require("../../../assets/images/user1.jpeg")
const user2 = require("../../../assets/images/user2.png")
const user3 = require("../../../assets/images/user3.png")
const user4 = require("../../../assets/images/user4.jpeg")
const user5 = require("../../../assets/images/user5.png")

const UserRankingItems = [
    {
        "id" : 1,
        "name" : "USER1",
        "image": user1,
        "netWorth" : 1129.01,
    },
    {
        "id" : 2,
        "name" : "USER2",
        "image": user2,
        "netWorth" : 628.17,
    },
    {
        "id" : 3,
        "name" : "USER3",
        "image": user3,
        "netWorth" : 511.29,
    },
    {
        "id" : 4,
        "name" : "USER4",
        "image": user4,
        "netWorth" : 429.14,
    },
    {
        "id" : 5,
        "name" : "USER5",
        "image": user5,
        "netWorth" : 371.99,
    },
]

const RankingsScreen=(props)=>{
    return(
        <View style={styles.root}>
            <FlatList
                style={{width:'100%'}}
                data = {UserRankingItems}
                renderItem={({item,index}) => <UserRankingItem User={item} place={index+1}/>}
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