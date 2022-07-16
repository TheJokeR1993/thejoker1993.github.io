import React from 'react';
import GoogleLogout from 'react-google-login';


const clientId = '544762924259-fuqm9ip9q3vq40ool8jrp1s3e3ptjc17.apps.googleusercontent.com'

const LogOut=()=>{
  
  const responseGoogle = (response) => {
    console.log(response);
  }
  
return<div>
  <h2>sdf</h2>
      <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={responseGoogle}
    >
    </GoogleLogout>
</div>

  }

  export default LogOut