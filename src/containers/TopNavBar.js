import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = {
  title: {
    flex: 1,
    textDecoration: "none"
  }
};

const TopNavBar = props => (
  <div>
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
