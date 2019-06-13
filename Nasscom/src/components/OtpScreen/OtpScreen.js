/**
 * @author : Vipin Sharma
 * @description : OTP Screen 
 */

import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,  
    TouchableWithoutFeedback
} from 'react-native';
import OtpScreeenStyle from './OtpScreenStyle';
import  {observer,inject}  from 'mobx-react';

import { ScrollView } from 'react-native-gesture-handler';


const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  


@inject("store")
@observer


@inject("store")
@observer
export default class OtpScreen extends Component {
   

    matchOtp=()=>{
        const finalValue = this.props.store.value1 + this.props.store.value2 + this.props.store.value3 + this.props.store.value4
        console.warn(finalValue)
        console.warn("otp- " + this.props.store.otp_res.data.otp)
        if (this.props.store.otp_res.data.otp == finalValue) {
            alert ('otp verified.')
        }
        else{
            alert('wrong')
        }
    }
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableOpacity
                onPress={() => navigation.goBack()} >
                <Text style={{fontSize:20, marginLeft: 15, color:'black'}}>Cancel</Text>
            </TouchableOpacity>
        ),
    })
    
   render() {
        return (
            <DismissKeyboard>
            <SafeAreaView style={OtpScreeenStyle.container}>
                <View>
                    <View style={OtpScreeenStyle.welcome}>
                        <Text style={OtpScreeenStyle.welcomeTxt}>Welcome!</Text>
                    </View>
                    <View style={OtpScreeenStyle.OtpView}>
                        <Text style={{ color: 'grey' }}>An OTP has been sent to</Text>
                        <Text style={{ color: 'grey' }}>{this.props.navigation.state.params.email1}</Text>
                    </View>
                </View>
                <KeyboardAvoidingView behavior="padding" style={OtpScreeenStyle.keyBrd}>
                 <ScrollView>
                 
                    <View style={OtpScreeenStyle.txtInputView}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={OtpScreeenStyle.Otptext}> Enter OTP  </Text>
                        </View>
                        <View style={OtpScreeenStyle.innerView}>
                            <TextInput
                            ref="input_1"
                            style={OtpScreeenStyle.txtInput}
                            keyboardType='numeric'
                            textAlign={'center'}
                            value={this.props.store.value1}
                            numberOfLines={1}
                            onChangeText={value => {
                                this.props.store.value1=value
                                if (value) {
                                    this.refs.input_2.focus()
                                };
                            }}
                            maxLength={1}
                           ></TextInput>
                            <TextInput
                             ref="input_2"  
                             style={OtpScreeenStyle.txtInput}
                             keyboardType='numeric'
                             value={this.props.store.value2}
                             numberOfLines={1}
                             textAlign={'center'}
                             onChangeText={value => {
                                 this.props.store.value2 = value
                                 if (value)
                                   {
                                     this.refs.input_3.focus();
                                    } 
                                     else if(value.length===0)
                                    {
                                        this.refs.input_1.focus();
                                    }
                             }}
                             maxLength={1}
                            ></TextInput>
                            <TextInput
                            ref="input_3"  
                            style={OtpScreeenStyle.txtInput}
                            keyboardType='numeric'
                            value={this.props.store.value3}
                            numberOfLines={1}
                            textAlign={'center'}
                            onChangeText={value => {
                                this.props.store.value3 = value
                                if (value) {
                                    this.refs.input_4.focus();
                                }
                                else if(value.length===0){
                                    this.refs.input_2.focus();
                                }
                            }}
                            maxLength={1}
                          ></TextInput>
                            <TextInput
                            ref="input_4"    
                            style={OtpScreeenStyle.txtInput}
                            keyboardType='numeric'
                            textAlign={'center'}
                            value={this.props.store.value4}
                            numberOfLines={1}
                            onChangeText={value => {
                                this.props.store.value4 = value
                                if(value.length===0){
                                    this.refs.input_3.focus();
                                }
                            }}
                            maxLength={1}
                            ></TextInput>
                        </View>
                    </View>
                    <View style={OtpScreeenStyle.verify} >
                        <TouchableOpacity style={OtpScreeenStyle.verifyButton} >
                            <Text style={{ color: 'white', fontWeight: 'bold',fontSize:18 }}>  Verify   </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 33, }}>
                            <Text style={{ fontSize: 14, color: 'black', textDecorationLine: 'underline' }}>Resend OTP</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView> 
                </KeyboardAvoidingView>
            </SafeAreaView>
            </DismissKeyboard>
        );
    }
}