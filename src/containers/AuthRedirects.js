import React from "react";
import { Redirect } from "react-router-dom";
import { withIsLoggedIn } from "../dataBindings/auth";

export const Authorized = withIsLoggedIn(props => {
  const noop = <div>{props.children}</div>;
  const getOut = <Redirect to="/" />;
  return props.isLoggedIn ? noop : getOut;
});

export const NotAuthorized = withIsLoggedIn(props => {
  const noop = <div>{props.children}</div>;
  const goInside = <Redirect to="/dashboard" />;
  return props.isLoggedIn ? goInside : noop;
});
