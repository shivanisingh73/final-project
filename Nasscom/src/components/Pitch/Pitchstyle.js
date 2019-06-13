import {StyleSheet,Dimensions} from 'react-native';

const Pitchstyle = StyleSheet.create({
    parentcontainer:{
        padding:10,
        flex:98,
        width:Dimensions.get('window').width
    },
    welcomeview:{
        paddingTop:10,
        justifyContent:'center',
        alignItems:'center',
    },
    welcometext:{
        fontSize:20,
        color:'black',
        fontWeight:'bold'
    },
    pitchimg:{
        width:'100%'
    },
    pitchtext:{
        fontWeight:'bold',
        fontSize:15,
        color:'black'
    },
    breifpitchtext:{
        color:'black'
    },
    submit:{
        backgroundColor:'#00bfff',
        borderRadius:30,
        height:40,
        justifyContent:'center',
        alignItems:'center'
      },
      submitText:{
          marginTop:20,
          color:'#fff',
          height:'100%'
      }
})

export default Pitchstyle;