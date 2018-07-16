import React, { Component } from "react";
import MessageThread from "../containers/MessageThread";
import ChatContainer from "../containers/ChatContainer";
import { LogoutButton } from "../containers/NavButtons";
import PropTypes from "prop-types";

const ChatContainer = props =>
  !props.contact ? null : (
    <div>
      <ProfileBar user={props.contact} />
      <MessageThread
        messageThread={props.contactThread}
        currentUserId={props.currentUserId}
      />
      <SendMessage
        messageThread={props.contactThread}
        currentUserId={props.currentUserId}
        contactId={props.contactId}
      />
    </div>
  );

ChatContainer.propTypes = {
  currentUserId: PropTypes.string.required,
  contact: PropTypes.object,
  messageThread: PropTypes.object
};

export default ChatContainer;
