import React from "react";
import PropTypes from "prop-types";

const Message = ({ authorName, timestamp, text }) => <div>{text}</div>;

Message.propTypes = {
  avatarLink: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  timeStamp: PropTypes.date.isRequired
};

export default Message;
