import  {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
        flex:1,
        padding: 0,
        alignItems: "center",
        backgroundColor: '#ffffff',
    },
    image:{
        height: 175,
        resizeMode:"contain",
        backgroundColor:"white",
        marginTop: "20%",
    },
    userContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#f8f7f7',
        width:'95%',
        height:80,
        margin:10,
        marginVertical:10,
    },
    avatar:{
        height: 75,
        width: 75,
        backgroundColor:"white",
        borderRadius: 50,
        marginRight: 10,
    },
    left:{
        flexDirection:'row',
        alignItems:'center',
    },
    right:{
        flexDirection:"row",

    },
    name:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom: 5,
    },
    email:{
        fontSize:18,
        marginBottom: 5,
    },
    symbol:{
        textAlign: "center",
        color:'#6d6c6c'
    },
    value:{
        fontSize:18,
        fontWeight:"bold",
        marginTop: 20,
        marginBottom: 5,
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
    signOut:{
        fontWeight:"bold",
        fontSize:20,
        marginVertical:"20%",
        backgroundColor:'#91b7ef',
        color: '#011a40'
    },

});

export default styles;
