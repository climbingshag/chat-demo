import { Link } from "react-router-dom";

import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withLogoutHandler } from "../dataBindings/auth";

export const LogoutButton = withLogoutHandler(props => (
  <Button color="inherit" onClick={props.handleLogout}>
    Logout
  </Button>
));

export class LoginButton extends Component {
  render() {
    return (
      <Button color="inherit" component={Link} to="/login">
        Login
      </Button>
    );
  }
}

export class SignupButton extends Component {
  render() {
    return (
      <Button color="inherit" component={Link} to="/signup">
        Signup
      </Button>
    );
  }
}
