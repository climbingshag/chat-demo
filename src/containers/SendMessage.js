import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

export class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleSubmit = event => {
    event.preventDefault();
    const text = this.state.text;
    this.props.handleSendText( text );
    this.setState({ text: "" });
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
          id="text"
          autoFocus
          placeholder="Send a message"
          fullWidth
          onBlur={this.props.handleSubmit}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

SendMessage.propTypes = {
  handleSendText: PropTypes.func.isRequired
};

export default SendMessage;
