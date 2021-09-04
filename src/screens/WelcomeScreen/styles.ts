import  {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
        flex:1,
        padding: 20,
        alignItems: "center",
        backgroundColor: '#ffffff',
    },
    image:{
        marginTop: "30%",
        height: '30%',
        borderRadius:10,
        borderColor:'#d91818',
        borderWidth:2,
        aspectRatio: 1,
    },
    header1:{
        fontSize: 25,
        fontWeight:"bold",
        marginTop: 50,
        marginBottom: 20,
    },
    header2:{
        fontSize: 18,
        textAlign: "center",
        color:'#414141'
    },

    buttonImage:{
        height: 60,
        resizeMode:'contain',
    },
    buttonContainer:{
        marginTop: "auto",
        marginBottom: 50
    }
});

export default styles;
