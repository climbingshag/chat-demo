import React from "react";
import PropTypes from "prop-types";
import ContactsContainer from "../containers/ContactsContainer";
import ChatContainer from "../containers/ChatContainer";
import { withCurrentUser } from "../dataBindings/users";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import { connect } from "react-redux";
import {
  selectContact,
  getSelectedContact,
  deselectContact
} from "../ducks/contacts";
import { withStyles } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const styles = {
  deskContacts: {
    display: "inline-flex",
    width: "49%",
    maxWidth: "500px"
  },
  deskChat: {
    display: "inline-flex",
    width: "49%"
  },
  mobileContacts: {},
  mobileChat: {}
};

const DesktopContainer = props => {
  const { classes, ...restProps } = props;

  return (
    <Paper>
      <div className={props.classes.deskContacts}>
        <Paper>
          <ContactsContainer {...restProps} />
        </Paper>
      </div>
      <div className={props.classes.deskChat}>
        <Paper>
          <ChatContainer {...restProps} />
        </Paper>
      </div>
    </Paper>
  );
};

const MobileContainer = props => {
  const { classes, ...restProps } = props;
  if (!props.selectedContact)
    return (
      <Paper>
        <div>
          <Paper>
            <ContactsContainer {...restProps} />
          </Paper>
        </div>
      </Paper>
    );
  return (
    <Paper>
      <div>
        <Button onClick={props.handleDeselectContact} >
        Back to Contacts
        </Button>
        <Paper>
          <ChatContainer {...restProps} />
        </Paper>
      </div>
    </Paper>
  );
};

const ContactsAndChatContainer = props => {
  if (isWidthUp("md", props.width)) {
    return <DesktopContainer {...props} />;
  }
  return <MobileContainer {...props} />;
};

ContactsAndChatContainer.propTypes = {
  currentUser: PropTypes.object,
  classes: PropTypes.object,
  selectedContact: PropTypes.object,
  handleSelectContact: PropTypes.func.isRequired,
  handleDeselectContact: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleSelectContact: contact => dispatch(selectContact(contact)),
  handleDeselectContact: contact => dispatch(deselectContact(contact))
});

const mapStateToProps = state => ({
  selectedContact: getSelectedContact(state)
});

export default compose(
  withCurrentUser,
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(ContactsAndChatContainer);
