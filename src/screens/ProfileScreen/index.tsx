import React, {useState} from 'react';
import {View, Text, Image, FlatList, Pressable} from 'react-native';
import styles from './styles'
const image = require("../../../assets/images/Saly-16.png");
const avatar = require("../../../assets/images/avatar.png");

const ProfileScreen=(props)=>{
    const [user , setUser] = useState({
        id: '1',
        name: "Di Lu",
        email: "dilu@andrew.cmu.edu",
        image: avatar,
        netWorth: 51129.22
    })

    const signOut = () =>{
        console.warn("Sign Out");
    }

    return(
        <View style={styles.root}>
            <Image style={styles.image} source={image} />
            <View style={styles.userContainer}>
                <View style={styles.left}>
                    <Image style={styles.avatar} source = {user.image}/>
                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
                </View>


                <View style={{alignItems:'flex-end'}}>
                    <Text style={styles.value}>${user.netWorth}</Text>
                </View>
            </View>
            <Pressable  style={{marginTop:'auto'}} onPress={signOut}>
                <Text style={styles.signOut}>Sign Out</Text>
            </Pressable>
        </View>
    );
}

export default ProfileScreen;