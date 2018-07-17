import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment"

const Message = props => (
  <div>
    {props.message.author.profile.email} on <Moment date={props.message.timestamp} format="M/DD H:mm"/> 
      <div>
        {props.message.text}
      </div>
  </div>
);

Message.propTypes = {
  message: PropTypes.object.isRequired
};

export default Message;
