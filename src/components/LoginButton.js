import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-wrapper">
      <div className="intro">
        <h1>Press the Log In button if you wish to continue.</h1>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    </div>
  );
};

export default LoginButton;
