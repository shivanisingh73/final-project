import React, { Component } from 'react';
import {
   
    WebView,
    Modal
    
} from 'react-native';
import {  StackActions, NavigationActions } from 'react-navigation'; 
import {observer, inject } from 'mobx-react';

@inject("store")
@observer

export default class Web extends Component {
 
    state={
        url:'',
        modalVisible:true,
        
       
    }
    _onNavigationStateChange=(webViewState)=>
    {
    if(webViewState.url.substring(0,53)==='https://com.kelltontech.nilf2018.linkedin.oauth/oauth')
    {  
        this.setState({
            url : webViewState.url.substring(59,webViewState.url.length)
        })
      this.props.store.access(this.state.url)
     if(webViewState.url=='https://com.kelltontech.nilf2018.linkedin.oauth/oauth?code='+this.state.url)
     {
      this.hide()
       
    }
   
   
  
    }
}

    hide(){
        this.setState({
          
            modalVisible:false,
            
        })
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'pitch' })
            ]
  }))
    }


   
render() {
    return (
        <Modal
        animationType={'slide'}
        visible={this.state.modalVisible}
        onRequestClose={this.hide.bind(this)}
        transparent
      >
        <WebView source={{uri :'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=818yckh1ioxpdc&redirect_uri=https://com.kelltontech.nilf2018.linkedin.oauth/oauth&scope=r_liteprofile' }}  startInLoadingState={this.state.modalVisible}  onNavigationStateChange={this._onNavigationStateChange.bind(this)}/>
        </Modal>  
    );

}
 
}