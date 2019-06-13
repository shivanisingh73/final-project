import React, {Component} from 'react';
import styles from './Pitchstyle';
import {View, Text, Image, TextInput, Button, TouchableOpacity,
StatusBar,  Keyboard,  
TouchableWithoutFeedback} from 'react-native';
import {observer, inject } from 'mobx-react';


const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  


@inject("store")
@observer
export default class Pitch extends Component{


    state={
        count:0
    }

    static navigationOptions = ({navigation})=>({
        header: null
    })

    changecount=(value)=>{
        var length = value.length.toString();
        // console.warn('length',length)
        this.setState({count:length})
    }

    render(){
        return(
            <DismissKeyboard>
            <View style={{flex:100}}>
            <View style={styles.parentcontainer}>
            <StatusBar barStyle="light-content" />
                <View style={styles.welcomeview}>
                    <Text style={styles.welcometext}> Welcome! {this.props.store.name.localizedFirstName}   </Text>
                </View>
                <View style={{height:150, paddingTop:20}}>
                   <Image
                   style={{width:'100%',height:'100%'}}
                   source={require('../../assets/image/Pitch.png')}
                   />
                </View>
                <View style={{paddingTop:20}}>
                    <Text style={styles.pitchtext}>Now it's your time to pitch.</Text>
                </View>
                <View style={{paddingTop:20}}>
                    <Text style={styles.breifpitchtext}>Write a brief pitch for other attendees to see. </Text>
                </View>
                <View style={{paddingTop:20,flexDirection:'row'}}>
                    <Text style={{flex:1, color:'black',fontWeight:'bold'}}>Pitch</Text>
                    <Text style={{flex:1,color:'black',position:'absolute', right:0 , bottom:0, fontWeight:'bold'}}>{this.state.count}{'/140'}  </Text>
                </View>
                <View style={{marginTop:10 , height:100}}>
                    <TextInput
                    autoFocus={true}
                    maxLength={140}
                    multiline={true}
                    scrollEnabled={true}
                    onChangeText={value => this.changecount(value) }
                    style={{backgroundColor:'lightgrey',borderRadius:5, height:'100%',textAlignVertical: 'top'}}
                    />
                </View>
                <View style={{marginTop:20}}>
                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('OfferScreen')}
                    style={styles.submit}
                    underlayColor='#fff'>
                <Text style={styles.submitText}>Start Matchmaking</Text>
                </TouchableOpacity>
                </View>
                </View>
                <View style={{backgroundColor:'crimson',width:'100%',flex:2, justifyContent:'center',
        alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:10}}>NASSCOM Events App powered by Kellton Tech</Text>
                </View>
            </View>
            </DismissKeyboard>
        );
    }
}
