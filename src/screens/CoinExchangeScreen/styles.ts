import  {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
        flex:1,
        padding: 20,
        alignItems: "center",
        backgroundColor: '#ffffff',
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:20,
    },
    subtitle:{
        fontSize:18,
        marginVertical:10,
        color:'#5f5f5f',
    },
    image:{
        height: 200,
        // width:50,
        // marginRight:10,
        // borderRadius:25,
        resizeMode:'contain',
    },
    inputsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center',
    },
    inputContainer:{
        // backgroundColor:'#992b2b',
        flexDirection:'row',
        justifyContent:'space-between',
        // width:'35%',
        borderWidth:1,
        borderColor:'#b1b1b1',
        padding: 15,
        // flex:1,
        margin:20,
        // flex: 1,
        alignItems: 'stretch',

    },
    button:{
        backgroundColor:'#50a5f1',
        marginTop:'auto',
        width:'100%',
        height:50,
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
    }

});

export default styles;
