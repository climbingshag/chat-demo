import React from "react";
import ProfileBar from "../containers/ProfileBar";
import ContactsList from "../containers/ContactsList";
import SearchForContact from "../containers/SearchForContact";
import Divider from "@material-ui/core/Divider";

import {
  withAddContactHandler,
  withCurrentUserContacts
} from "../dataBindings/contacts";
import PropTypes from "prop-types";

const ContactsContainer = props => (
  <div>
    <ProfileBar user={props.currentUser} />
    <Divider />
    <SearchForContact onFoundContact={props.handleAddContact} />
    <ContactsList
      contacts={props.contacts}
      handleSelectContact={props.handleSelectContact}
      selectedContact={props.selectedContact}
    />
  </div>
);

ContactsContainer.propTypes = {
  currentUser: PropTypes.object.isRequired,
  contacts: PropTypes.array,
  // handleSelectContact: PropTypes.func.isRequired,
  handleAddContact: PropTypes.func.isRequired,
  // selectedContact: PropTypes.object
};

export default withCurrentUserContacts(
  withAddContactHandler(ContactsContainer)
);
