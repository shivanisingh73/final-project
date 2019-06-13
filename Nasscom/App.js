/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Login from './src/components/Login/Login'
import OtpScreen from './src/components/OtpScreen/OtpScreen';
import Pitch from './src/components/Pitch/Pitch';
import MyApp from './src/Routes/app-routes'
import OfferScreen from './src/components/OfferScreen/OfferScreen';
import Looking from './src/components/LookingFor/Looking';


export default class App extends Component {
  
  render() {
    return ( 
        // <Login/>
        // <OtpScreen/>
        // <Pitch/>
        // <OfferScreen/>
        // <MyApp/>
        <Looking/>
    );
  }
}


