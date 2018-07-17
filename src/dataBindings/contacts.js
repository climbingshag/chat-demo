import { firebaseConnect, withFirebase, populate } from "react-redux-firebase";
import { connect } from "react-redux";
import { withHandlers, compose } from "recompose";
import { withCurrentUser } from "./users";
import values from "lodash/values";

const populates = [
  {
    child: "uid", // parameter to populate
    root: "userProfiles", // collection from which to gather children
    childAlias: "profile" // place result somewhere else on object
  }
];

export const withCurrentUserContacts = compose(
  withCurrentUser,
  // add firbase listeners
  firebaseConnect(({ currentUser }) => {
    return [
      {
        path: `userContacts/${currentUser.uid}/contacts`,
        populates
      }
    ];
  }),
  // Map state to props
  connect(({ firebase }, { currentUser }) => {
    return {
      contacts: values(
        populate(
          firebase,
          `userContacts/${currentUser.uid}/contacts`,
          populates
        )
      )
    };
  })
);

export const withAddContactHandler = compose(
  withCurrentUser,
  withFirebase,
  withHandlers({
    handleAddContact: ({ firebase, currentUser }) => contact => {
      // this is kinda dirty, but we add contact to both users, and create a new message thread
      firebase
        .database()
        .ref(`userContacts/${currentUser.uid}/contacts`)
        .push({ uid: contact.uid })
        .then(() =>
          firebase
            .database()
            .ref(`userContacts/${contact.uid}/contacts`)
            .push({ uid: currentUser.uid })
        )
        .then(() => {
          const users = {};
          users[currentUser.uid] = true;
          users[contact.uid] = true;
          return firebase
            .database()
            .ref(`messageThreads`)
            .push({ users, messages: {} });
        });
    }
  })
);
