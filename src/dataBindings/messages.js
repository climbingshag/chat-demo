import { firebaseConnect, withFirebase } from "react-redux-firebase";
import { connect } from "react-redux";
import { withHandlers, pure, compose } from "recompose";
import { withUserId } from "./auth";
import withErrorToast  from "../decorators/withErrorToast";
import get from 'lodash/get';
import firebase from "firebase";

export const withContacts = compose(
  withUserId,
  firebaseConnect(({ contactId }) => [
    { path: `messageThreads/${userId}/contacts` }
  ]),
  // Map state to props
  connect(({ firebase: { data } , userId }) => ({
    contacts: get(data, `userContacts/${userId}/contacts`)
  })),
  pure
)