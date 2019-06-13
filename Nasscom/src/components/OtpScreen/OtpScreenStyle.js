import {StyleSheet} from 'react-native';
const OtpScreenStyle = StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:'#f8f8f8'
    },
    welcome:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
    },
    welcomeTxt:{
        fontSize:24,
        color:'black'
    },
    OtpView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
    },
    txtInputView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:70,
    },
    txtInput:{
        backgroundColor:'white',
        height:105,
        width:80,
        marginLeft:5,
        borderRadius:105/15
    },
    verify:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    keyBrd:{
        flex:1
    },
    verifyButton:{
        backgroundColor: '#efefef', 
        height: 55, 
        width: 240, 
        borderRadius: 55/5, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    innerView:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 20 
    },
    Otptext:{
        fontSize: 25, 
        fontWeight: 'bold', 
        color: 'black' 
    },
});
export default OtpScreenStyle;