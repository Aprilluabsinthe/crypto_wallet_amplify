import React from 'react';
import {View , Text, Image} from'react-native';
import styles from './styles';
// const image = require( '../../../assets/images/tezoscoin.png')

export interface UserRankingItemProps{
    User: {
        image: string,
        name: string,
        netWorth: number,
    },
    place:number,
}

const UserRankingItem=(props: UserRankingItemProps)=>{
    const {
        User:{
            image,
            name,
            netWorth,
        },
        place
    } = props;

    return(
        <View style={styles.root}>
            <View style={styles.left}>
                <Text style={styles.place}>{place}</Text>
                <Image style={styles.image} source = {image}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>


            <View style={{alignItems:'flex-end'}}>
                <Text style={styles.value}>${netWorth}</Text>
            </View>
        </View>
    );
}

export default UserRankingItem;