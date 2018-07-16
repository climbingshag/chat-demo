import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withSearchForUserByEmailHandler } from "../dataBindings/users";
import PropTypes from "prop-types";

export const SearchForContact = props => <div />;

SearchForContact.propTypes = {
  handleSearchUsersByEmail: PropTypes.func.isRequired,
  onSearchResult: PropTypes.func.isRequired
};

export default withSearchForUserByEmailHandler(SearchForContact);
