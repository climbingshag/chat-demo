import React from "react";
import PropTypes from "prop-types";

const Contact = props => (
  <li onClick={() => props.handleSelectContact(props.contact.uid)}>
    {props.contact.email}
  </li>
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
  // handleSelectContact: PropTypes.func.isRequired
};

export default ContactsList;
