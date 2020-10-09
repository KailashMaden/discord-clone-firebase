import React from 'react';
import { auth, provider } from '../server/firebase';
import { Button } from '@material-ui/core';
import discordImg from '../img/discord.png';

import './Login.css';

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={discordImg} alt="discord" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
