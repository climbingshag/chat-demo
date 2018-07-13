import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withSignupHandler } from "../dataBindings/auth";

const styles = {
  form: {
    maxWidth: 500,
    display: "flex",
    flexDirection: "column"
  },
  textInput: {},
  submitButton: {},
  root: {
    margin: "auto",
    width: 300
  },
  title: {
    fontSize: "2em",
    paddingTop: 30,
    textAlign: "center"
  }
};

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.handelSignup({ email, password });
  };

  handleChange = ({ target: { id, value } }) =>
    this.setState({
      [id]: value
    });

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="title" color="inherit" className={classes.title}>
          Signup
        </Typography>
        <form
          autoComplete="off"
          onSubmit={this.handleSubmit}
          className={classes.form}
        >
          <TextField
            autoFocus
            onChange={this.handleChange}
            label="Email"
            id="email"
            required
            margin="normal"
            className={classes.textInput}
          />
          <TextField
            type="password"
            onChange={this.handleChange}
            required
            id="password"
            label="Password"
            margin="normal"
            className={classes.textInput}
          />
          <Button
            type="submit"
            size="large"
            variant="outlined"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default withSignupHandler(withStyles(styles)(SignupForm));
