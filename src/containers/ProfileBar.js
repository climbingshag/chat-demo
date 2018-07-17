import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import get from "lodash/get";

const styles = {
  avatar: {
    margin: 10
  },
  row: {
    display: "flex"
    // justifyContent: "left"
  },
  email: {
    paddingTop: 14
  }
};

const ProfileBar = props => {
  return !get(props, "user.profile") ? null : (
    <div className={props.classes.row}>
      <Avatar
        alt={`${props.user.profile.firstName} ${props.user.profile.lastName}`}
        src={props.user.profile.avatarUrl}
        className={props.classes.avatar}
      />
      <Typography
        className={props.classes.email}
        noWrap
        align="left"
        color="textSecondary"
        variant="headline"
      >
        {props.user.profile.email}
      </Typography>
    </div>
  );
};

ProfileBar.propTypes = {
  user: PropTypes.object,
  classes: PropTypes.object
};

export default withStyles(styles)(ProfileBar);
