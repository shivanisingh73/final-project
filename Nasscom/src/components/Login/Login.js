/**
 * @author : Vipin Sharma
 * @description : Login Screen 
 */

import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  Keyboard,  
  TouchableWithoutFeedback
} from 'react-native';
import LoginStyle from './LoginStyle';
import  {observer,inject}  from 'mobx-react';


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

@inject("store")
@observer

export default class Login extends Component {



 componentDidMount(){
     this.props.store.hash_generate();
   
  }



  constructor() {
    super()
    this.state = {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      emailValidate: false,
      validateEmail: false,
      email:''


    }
  }


  onLayout = (e) => {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
      x: e.nativeEvent.layout.x,
      y: e.nativeEvent.layout.y,
    })
  }
  validate = (value) => {

  this.setState({
    email:value
  })
   

  }



  render() {
      
    return (
      <DismissKeyboard>
      <KeyboardAvoidingView behavior="padding" style={LoginStyle.keyBrd}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 6 }} onLayout={this.onLayout}>
          <Image source={require('../../assets/image/Splash_Screen.jpeg')} style={{ width: this.state.width, height: this.state.height }} />
        </View>
        <View style={{ flex: 4 }}>
          <View style={LoginStyle.innerView}>
            <Text style={LoginStyle.lgnTxt}>Login with your E-mail or Nasscom account</Text>
          </View>
          <View style={{ marginLeft: 40, marginTop: 20 }}>
            <TextInput placeholder="Email" placeholderTextColor="grey" returnKeyType='next' keyboardType='email-address' onChangeText={(text) => this.validate(text)} style={LoginStyle.txtInput}></TextInput>
          </View>
          <View style={LoginStyle.loginView}>
            <TouchableOpacity style={[LoginStyle.touchOp1, this.state.emailValidate ? LoginStyle.touchOp3 : null]} onPress={() => this.props.store.generateOTP(this.state.email,this)}>
                            <Text style={LoginStyle.txt}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={LoginStyle.lineView}>
            <View style={LoginStyle.line}></View>
            <Text style={{ color: 'grey' }}> or </Text>
            <View style={LoginStyle.line}></View>
          </View>
          <View style={LoginStyle.linkView}>
            <TouchableOpacity style={LoginStyle.touchOp2} onPress={() => this.props.navigation.navigate('web')}>
              <Text style={LoginStyle.txt}>Login with Linkedin</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      </DismissKeyboard>
    );
  }
  
}