import  {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#fafafa',
        width:'95%',
        height:70,
        margin:10,
    },
    image:{
        height: 50,
        width: 50,
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
    symbol:{
        textAlign: "center",
        color:'#6d6c6c'
    },
    value:{
        fontSize:20,
        fontWeight:"bold",
        marginTop: 10,
        marginBottom: 5,
        color:"#94030b",
    }


});

export default styles;
