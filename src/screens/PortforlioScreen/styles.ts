import  {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
        flex:1,
        padding: 0,
        alignItems: "center",
        backgroundColor: '#ffffff',
    },
    image:{
        marginTop: "30%",
        height: '20%',
        aspectRatio: 1,
    },
    label:{
        fontSize: 18,
        fontWeight:"bold",
        color: '#626161'

    },
    balance:{
        fontSize: 36,
        fontWeight:"bold",
        color: '#371001'

    },
    balanceContainer:{
        marginVertical:20,
        width:"100%"
    },

});

export default styles;
