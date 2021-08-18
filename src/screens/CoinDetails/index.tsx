import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {AntDesign} from "@expo/vector-icons";
import PercentageChange from "../../components/PercentageChange";

const image = require( '../../../assets/images/tezoscoinimage.png')

const CoinDetailsScreen=(props)=>{
    const [coinData, setCoinData] = useState({
        id:'1',
        name:'Tezos',
        image:image,
        symbol:'TEZ',
        currentPrice: 1018.11,
        valueChange24H:-1.129,
        valueChange1D:+2.129,
        valueChange7D:+5.529,
        amount: 2,

    })

    const onBuy = () =>{

    }

    const onSell = () =>{

    }

    return(
        <View style={styles.root}>
            <View style={styles.topContainer}>
                <View style={styles.left}>
                    <Image style={styles.image} source = {coinData.image}/>
                    <View>
                        <Text style={styles.name}>{coinData.name}</Text>
                        <Text style={styles.symbol}>{coinData.symbol}</Text>
                    </View>
                </View>


                <View style={{alignItems:'flex-end'}}>
                    <AntDesign name="staro" size={24} color="black" />
                </View>
            </View>

            <View style={styles.currentPriceContainer}>
                <View style = {styles.valueContainer}>
                    <Text style ={styles.label}> Current Price </Text>
                    <Text style ={styles.value}>{coinData.currentPrice}</Text>
                </View>

                <View style={{flexDirection:'row',
                    width:"55%",
                    justifyContent:'space-between',}}>
                    <View style = {styles.valueContainer}>
                        <Text style ={styles.label}> 1 Hour</Text>
                        <PercentageChange style ={styles.change} value = {coinData.valueChange24H} />
                    </View>

                    <View style = {styles.valueContainer}>
                        <Text style ={styles.label}> 1 Day </Text>
                        <PercentageChange style ={styles.change} value = {coinData.valueChange1D} />
                    </View>

                    <View style = {styles.valueContainer}>
                        <Text style ={styles.label}> 7 Days </Text>
                        <PercentageChange style ={styles.change} value = {coinData.valueChange7D} />
                    </View>
                </View>
            </View>

            <View style = {[styles.row, {marginTop:'auto'}]}>
                <Pressable
                    style = {[styles.button,{backgroundColor:'#0a5f03'}]}
                    onPress = {onBuy} >
                    <Text style = {styles.buttonText}>Buy</Text>
                </Pressable>

                <Pressable
                    style = {[styles.button,{backgroundColor:'#99111c'}]}
                    onPress = {onSell} >
                    <Text style = {styles.buttonText}>Sell</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default CoinDetailsScreen;