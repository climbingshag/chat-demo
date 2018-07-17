import React from "react";
import TopNavBar from "../containers/TopNavBar";
import { LoginButton, SignupButton } from "../containers/NavButtons";
import SignupForm from "../containers/SignupForm";
import { NotAuthorized } from "../containers/AuthRedirects";

const Signup = props => (
  <div>
    <NotAuthorized>
      <TopNavBar>
        <LoginButton />
        <SignupButton disabled />
      </TopNavBar>
      <SignupForm />
    </NotAuthorized>
  </div>
);

export default Signup;
