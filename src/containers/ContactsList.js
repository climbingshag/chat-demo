import React from "react";
import PropTypes from "prop-types";
import ProfileBar from "./ProfileBar";

const Contact = props => (
  <div onClick={() => props.handleSelectContact(props.contact)}>
    <ProfileBar
      user={props.contact}
    />
  </div>
);

const ContactsList = props =>
  !props.contacts ? null : (
    <div>
      <ul>
        {props.contacts.map(contact => (
          <Contact
            contact={contact}
            key={contact.uid}
            handleSelectContact={props.handleSelectContact}
          />
        ))}
      </ul>
    </div>
  );

ContactsList.propTypes = {
  contacts: PropTypes.array,
  handleSelectContact: PropTypes.func.isRequired
};

export default ContactsList;
