import { firebaseConnect, withFirebase, populate } from "react-redux-firebase";
import { connect } from "react-redux";
import { withHandlers, pure, compose } from "recompose";
import { withCurrentUser } from "./users";
import get from "lodash/get";
import firebase from "firebase";

export const withCurrentUserContacts = compose(
  withCurrentUser,
  firebaseConnect(({ currentUser }) => {
    return [
      {
        path: `userContacts/${currentUser.uid}/contacts`,
        populate: [{ child: "profile", root: "userProfiles" }]
      }
    ];
  }),
  // Map state to props
  connect(({ firebase: { data } }, { currentUser }) => {
    return {
      contacts: populate(firebase, "contacts", [
        { child: "profile", root: "userProfiles" }
      ])
    };
  })
);

export const withAddContactHandler = compose(
  // Get project path from firebase based on params prop (route params from react-router)
  withCurrentUser,
  withFirebase,
  withHandlers({
    handleAddContact: ({ firebase, currentUser }) => contactId => {
      firebase
        .database()
        .ref(`userContacts/${currentUser.uid}/contacts`)
        .push({ uid: contactId, profile: contactId });
    }
  })
);
