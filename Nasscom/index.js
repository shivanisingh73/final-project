/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from "mobx-react";
import Nasscom from './src/store/store'

const AppContainer=()=>
{
 return(
    <Provider store={Nasscom}>
    <App/>
    </Provider>
 )}



AppRegistry.registerComponent(appName, () => AppContainer);
