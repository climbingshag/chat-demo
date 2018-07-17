import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";

const MessageThread = props => {
  return !props.messageThread ? null : (
    <div>
      <ul>
        {props.messageThread.thread.messages.map(message => (
          <Message message={message.message} key={message.uid} />
        ))}
      </ul>
    </div>
  );
};

MessageThread.propTypes = {
  messageThread: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
};

export default MessageThread;
