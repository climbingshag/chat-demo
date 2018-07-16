import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withSignupHandler } from "../dataBindings/auth";
import pick from "lodash/pick";

const styles = {
  form: {
    maxWidth: 500,
    display: "flex",
    flexDirection: "column"
  },
  textInput: {},
  root: {
    margin: "auto",
    width: 300
  },
  title: {
    fontSize: "2em",
    paddingTop: 10,
    textAlign: "center"
  }
};

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", firstName: "", lastName: "", avatarUrl: "" };
  }

  handleSubmit = e => {
    e.preventDefault();
    const creds = pick(this.state,["email", "password" ]);
    const profile = pick(this.state,["email", "firstName", "lastName", "avatarUrl" ]);
    profile.avatarUrl = profile.avatarUrl || "https://cdn1.thr.com/sites/default/files/imagecache/portrait_300x450/2011/06/nicolas_cage_2011_a_p.jpg";
    this.props.handleSignup(creds, profile);
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
            onChange={this.handleChange}
            required
            id="firstName"
            label="First Name"
            margin="normal"
            className={classes.textInput}
          />
          <TextField
            onChange={this.handleChange}
            required
            id="lastName"
            label="Last Name"
            margin="normal"
            className={classes.textInput}
          />
          <TextField
            onChange={this.handleChange}
            id="avatarUrl"
            label="Avatar URL (optional)"
            margin="normal"
            helperText="e.g., http://cdn.avatars.com/nick_cage.jpg"
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
            color="secondary"
            variant="raised"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default withSignupHandler(withStyles(styles)(SignupForm));
