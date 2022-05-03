import React from 'react';
import GoogleLogin from 'react-google-login';
import{RefreshToken } from './RefreshToken'

const clientId = '544762924259-fuqm9ip9q3vq40ool8jrp1s3e3ptjc17.apps.googleusercontent.com'

const LogIn=()=>{
  
  const responseS = (response) => {
    console.log('[Login Success] currentUser:',response.profileObj);
    console.log(response)
    RefreshToken(response)
  }
  const responseF = (response) => {
    console.log('[Login Failed] response:',response);
  }
  
return<div>
    <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={responseS}
    onFailure={responseF}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
  />
</div>

  }

  export default LogIn
