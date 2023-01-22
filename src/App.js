import React, { Component } from 'react';
//import {BrowserRouter , Route,Switch } from "react-router-dom"

import {GoogleLoginButton ,FacebookLoginButton} from "react-social-login-buttons"
import{LoginSocialGoogle ,LoginSocialFacebook} from "reactjs-social-login"


class App extends Component {
  render() {

  
   


   
    return (
      <div>
    


      <LoginSocialGoogle
          client_id=''
        
          discoveryDocs='claims_supported'
          access_type='offline'
          onResolve={({provider,data})=>{
            console.log(provider,data);
          }}
          onReject={(err)=>{
            console.log(err)
          }}
>
  <GoogleLoginButton/>
  
</LoginSocialGoogle>

<LoginSocialFacebook
      appId=''
      onResolve={(response)=>{
        console.log(response);
        

      }}
      onReject={(error)=>{
        console.log(error);
      }}
      >
        <FacebookLoginButton/>
      </LoginSocialFacebook>


       </div>
    );
  }   
 

}

export default App;
