import React, { Component } from "react";
import MessageThread from "../components/MessageThread";
import ProfileBar from "../containers/ProfileBar";
import SendMessage from "../containers/SendMessage";
import {
  withMessageThreads,
  withSendMessageHandler
} from "../dataBindings/messages";
import PropTypes from "prop-types";
import { compose } from "recompose";
import memoize from "lodash/memoize";

class ChatContainer extends Component {
  handleSendText = text => {
    return this.props.handleSendMessage({
      text,
      author: this.props.currentUser,
      messageThreadId: this.getSelectedContactMessageThread(this.props).uid
    });
  };
  getSelectedContactMessageThread = memoize(props => {
    console.log("THREADZ", props.messageThreads);
    console.log("SC", props.selectedContact);
    if (!props.selectedContact || !props.messageThreads) return null;
    
    return props.messageThreads.find(
      mt => mt.thread.users[props.selectedContact.uid]
    );
  });
  render() {
    const selectedMessageThread = this.getSelectedContactMessageThread(
      this.props
    );
    console.log("SMT", selectedMessageThread);
    return !this.props.selectedContact || !selectedMessageThread ? null : (
      <div>
        <ProfileBar user={this.props.selectedContact} />
        <MessageThread
          messageThread={selectedMessageThread}
          currentUser={this.props.currentUser}
        />;
        <SendMessage handleSendText={this.handleSendText} />
      </div>
    );
  }
}

ChatContainer.propTypes = {
  currentUser: PropTypes.object.isRequired,
  selectedContact: PropTypes.object,
  messageThreads: PropTypes.array,
  handleSendMessage: PropTypes.func.isRequired
};

export default compose(
  withMessageThreads,
  withSendMessageHandler
)(ChatContainer);
