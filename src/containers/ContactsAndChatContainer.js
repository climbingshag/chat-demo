import React from "react";
import PropTypes from "prop-types";
import ContactsContainer from "../containers/ContactsContainer";
import { withCurrentUser } from "../dataBindings/users";
import Paper from "@material-ui/core/Paper";

const ContactsAndChatContainer = props => (
  <Paper>
    <ContactsContainer {...props} />
  </Paper>
);

ContactsAndChatContainer.propTypes = {
  currentUser: PropTypes.object
};

export default withCurrentUser(ContactsAndChatContainer);
