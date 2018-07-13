import React from "react";
import PropTypes from "prop-types";

const MessageThread = ({ messages, authorName, authorAvatar }) => (
  <div></div>
);

MessageThread.propTypes = {
  avatarLink: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  timeStamp: PropTypes.date.isRequired
};

export default Message;
