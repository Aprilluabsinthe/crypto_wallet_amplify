import  {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
        flex:1,
        padding: 20,
        alignItems: "center",
        backgroundColor: '#ffffff',
    },
    image:{
        // marginTop: "30%",
        height: 50,
        width: 50,
        marginVertical: 10,
        marginRight: 10,
        borderRadius: 25,
    },
    topContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#fafafa',
        height:50,
        margin:10,
        width:"100%",
    },
    left:{
        flexDirection:'row',
        alignItems:'center',
    },
    right:{
        flexDirection:"row",
    },
    name:{
        fontSize:18,
        fontWeight:"bold",
        marginBottom: 5,
    },
    label:{
        fontSize:15,
        // fontWeight:"bold",
        marginBottom: 5,
        color:"#646363",
    },
    value:{
        fontSize:18,
        fontWeight:"bold",
    },
    symbol:{
        fontSize:13,
        color:'#6d6c6c'
    },
    currentPriceContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
    },
    valueContainer:{
        alignItems:"center",
        marginHorizontal:5
    },
    change:{
        fontSize:15,
    },
    row:{
        flexDirection:'row',
        height:'10%',
        justifyContent:'space-between',
    },
    button:{
        flex: 1,
        margin: 5,
        height: 30,
        borderRadius: 30,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
    }

});

export default styles;
