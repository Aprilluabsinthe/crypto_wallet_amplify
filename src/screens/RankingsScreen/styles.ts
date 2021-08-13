import  {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
        flex:1,
        padding: 0,
        alignItems: "center",
        backgroundColor: '#ffffff',
    },
    image:{
        backgroundColor: '#ffffff',
        alignContent: "center",
        marginTop: "20%",
        height: "40%",
        aspectRatio: 1,
    },
    label:{
        fontSize: 18,
        fontWeight:"bold",

    },
    balance:{
        fontSize: 36,
        fontWeight:"bold",
        color: '#371001'
    },
    balanceContainer:{
        marginVertical:20,
        width:"90%"
    },


});

export default styles;
