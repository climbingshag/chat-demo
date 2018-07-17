import { firebaseConnect, withFirebase, populate } from "react-redux-firebase";
import { connect } from "react-redux";
import { withHandlers, compose } from "recompose";
import { withCurrentUser } from "./users";
import mapObjectListToArray from "../helpers/mapObjectListToArray";

const messageThreadPopulates = [
  {
    child: "messages", // parameter to populate
    root: "messages" // collection from which to gather children
  }
];

export const withMessageThreads = compose(
  withCurrentUser,
  // add firbase listeners
  firebaseConnect(({ currentUser }) => {
    return [
      {
        path: `messageThreads`,
        queryParams: ["orderBy=users", `isEqual=${currentUser.uid}`],
        messageThreadPopulates
      }
    ];
  }),
  // Map state to props
  connect(({ firebase }, { currentUser }) => {
    const messageThreads = mapObjectListToArray(
        populate(firebase, `messageThreads`, messageThreadPopulates),
        "thread"
      );
    messageThreads.forEach(mt => {
        mt.thread.messages = mapObjectListToArray(
          mt.thread.messages,
          "message"
        );
      })
    return {
      messageThreads 
    };
  })
);

export const withSendMessageHandler = compose(
  // Get project path from firebase based on params prop (route params from react-router)
  withCurrentUser,
  withFirebase,
  withHandlers({
    handleSendMessage: ({ firebase, currentUser }) => ({
      text,
      messageThreadId
    }) => {
      firebase
        .database()
        .ref(`messageThreads/${messageThreadId}/messages`)
        .push({
          author: currentUser,
          text,
          timestamp: Date.now()
        });
    }
  })
);
