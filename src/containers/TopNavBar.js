import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import get from "lodash/get";

const styles = {
  title: {
    flex: 1,
    textDecoration: "none",
    fontFamily:"Tahoma"
  },
  root: {
    marginBottom: 10
  }
};

const TopNavBar = props => (
  <div className={props.classes.root}>
    <AppBar position="static">
      <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              component={Link}
              to="/"
              className={props.classes.title}
            >
              Simple Chat
            </Typography>
            <div>{props.children}</div>
      </Toolbar>
    </AppBar>
  </div>
);

TopNavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopNavBar);
