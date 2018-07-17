import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withSearchForUserByEmailHandler } from "../dataBindings/users";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSearchIcon = styled(SearchIcon)`
  padding-top: 4px;
`;

export class SearchForContact extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  handleSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const self = this;
    // this is so wrong. Use some redux-* async library
    this.props
      .handleSearchForUserByEmail(email)
      .then(self.props.handleSearchResult)
      .then(added => {
        if (added) self.setState({ email: "" });
      });
  };

  handleChange = ({ target: { id, value } }) =>
    this.setState({
      [id]: value
    });

  handleKeyPress = event => {
    if (event.key === "Enter") this.handleSubmit(event);
  };

  render() {
    return (
      <div>
        <TextField
          id="email"
          autoFocus={this.props.autoFocus}
          placeholder="Enter email to add new contact"
          fullWidth
          value={this.state.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" component={StyledSearchIcon}>
                <div />
              </InputAdornment>
            )
          }}
          onBlur={this.props.handleSubmit}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

SearchForContact.propTypes = {
  autoFocus: PropTypes.bool,
  handleSearchResult: PropTypes.func.isRequired,
  handleSearchForUserByEmail: PropTypes.func.isRequired
};

export default withSearchForUserByEmailHandler(SearchForContact);
