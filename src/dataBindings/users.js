import { withFirebase, isEmpty } from "react-redux-firebase";
import { connect } from "react-redux";
import { withHandlers, withProps, pure, compose } from "recompose";
import withErrorToast from "../decorators/withErrorToast";
import emailToId from "../helpers/emailToId";

export const withCurrentUser = compose(
  withFirebase,
  connect(({ firebase: { profile, auth } }, state) => {
    return {
      currentUser: {
        profile: isEmpty(profile) ? null : profile,
        uid: isEmpty(auth) ? null : auth.uid
      }
    };
  })
);

export const withSearchForUserByEmailHandler = compose(
  withFirebase,
  withHandlers({
    handleSearchUsersByEmail: ({ firebase, userId }) => email =>
      firebase
        .database()
        .ref("userProfiles")
        .orderByChild("indexedEmail")
        .equalTo(emailToId(email))
        .once("value")
        .then(userProfileSnap => ({
          uid: userProfileSnap.key,
          profile: userProfileSnap.val()
        }))
  })
);
