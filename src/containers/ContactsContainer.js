import React from "react";
import ProfileBar from "../containers/ProfileBar";
import ContactsList from "../containers/ContactsList";
import SearchForContact from "../containers/SearchForContact";
import Divider from "@material-ui/core/Divider";
import withErrorToast from "../decorators/withErrorToast";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import {
  withAddContactHandler,
  withCurrentUserContacts
} from "../dataBindings/contacts";
import { compose } from "recompose";
import PropTypes from "prop-types";

function contactAlreadyExists(contacts, newContact) {
  return contacts && contacts.find(contact => contact.uid === newContact.uid);
}

const styles = {
  title: {
    paddingTop: 10
  }
};

const ContactsContainer = props => {
  const handleSearchResult = result => {
    if (!result.uid) {
      props.showError("Contact not found");
      return false;
    }
    if (contactAlreadyExists(props.contacts, result)) {
      props.showError("You already have that contact");
      return false;
    }
    if (props.currentUser.uid === result.uid) {
      props.showError("You talking to yourself?");
      return false;
    }
    props.handleAddContact(result);
    props.showError(`${result.profile.email} added`);
    return true;
  };

  return (
    <div>
      <ProfileBar user={props.currentUser} />
      <Divider />
      <Typography
        className={props.classes.title}
        align="center"
        color="textSecondary"
        variant="display1"
      >
        Contacts
      </Typography>
      <SearchForContact
        handleSearchResult={handleSearchResult}
        autoFocus={!props.contacts || !props.contacts.length}
      />
      <ContactsList
        contacts={props.contacts}
        handleSelectContact={props.handleSelectContact}
        selectedContact={props.selectedContact}
      />
    </div>
  );
};

ContactsContainer.propTypes = {
  currentUser: PropTypes.object.isRequired,
  contacts: PropTypes.array,
  handleSelectContact: PropTypes.func.isRequired,
  handleAddContact: PropTypes.func.isRequired,
  selectedContact: PropTypes.object,
  showError: PropTypes.func.isRequired
};

export default compose(
  withStyles(styles),
  withCurrentUserContacts,
  withErrorToast,
  withAddContactHandler
)(ContactsContainer);
