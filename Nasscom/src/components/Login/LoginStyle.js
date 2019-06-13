import {StyleSheet} from 'react-native';
const LoginStyle = StyleSheet.create({
txtInput:{
    paddingBottom:3,
    width: 310, 
    borderBottomWidth: 1, 
    borderBottomColor: 'grey',
    marginLeft:5,
},
touchOp1:{
    backgroundColor:'#e998af',
    height:45,
    width:300,
    borderRadius:40/2,
    justifyContent:'center',
    alignItems:'center'
},
touchOp2:{
    backgroundColor:'#0075b2',
    height:45,
    width:300,
    borderRadius:40/2,
    justifyContent:'center',
    alignItems:'center'
},
keyBrd:{
    flex:1
},
touchOp3:{
    backgroundColor:'#98002a',
    height:45,
    width:300,
    borderRadius:40/2,
    justifyContent:'center',
    alignItems:'center'
},
lgnTxt:{
    color: 'grey',
    fontSize:13,
},
innerView:{
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop:15
},
txt:{
    color:'white'
},
loginView:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:30
},
linkView:{
    justifyContent:'center',alignItems:'center',marginTop:15
},
line:{
    width: 55, 
    borderBottomWidth: 1, 
    borderBottomColor: 'grey'
},
lineView:{
    flexDirection: 'row', 
    marginTop: 15, 
    justifyContent: 'center', 
    alignItems: 'center'
}
});
export default LoginStyle;