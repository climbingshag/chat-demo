import { withFirebase, isEmpty } from "react-redux-firebase";
import { connect } from "react-redux";
import { withHandlers, compose } from "recompose";
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
    handleSearchForUserByEmail: ({ firebase, userId }) => email =>
      firebase
        .database()
        .ref("userProfiles")
        .orderByChild("indexedEmail")
        .equalTo(emailToId(email))
        .once("value")
        .then(userProfileSnap => {
          const value = userProfileSnap.val();
          if (!value) return { profile: null, uid: null };
          const uid = Object.keys(value)[0];
          const profile = value[uid];
          return { profile, uid };
        })
  })
);
