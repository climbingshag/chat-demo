import React from "react";
import TopNavBar from "../containers/TopNavBar";
import { SignupButton, LoginButton } from "../containers/NavButtons";
import LoginForm from "../containers/LoginForm";
import { Authorized, NotAuthorized } from "../containers/AuthRedirects";

const Login = props => (
  <div>
    <NotAuthorized>
      <TopNavBar>
        <LoginButton disabled />
        <SignupButton />
      </TopNavBar>
      <LoginForm />
    </NotAuthorized>
  </div>
);

export default Login;
