import { withFirebase } from "react-redux-firebase";
import { connect } from "react-redux";
import { withHandlers, withProps, pure, compose } from "recompose";
import withErrorToast  from "../decorators/withErrorToast";
import { isEmpty } from "react-redux-firebase";

export const withSignupHandler = compose(
  withErrorToast, // adds props.showError
  withFirebase, // add props.firebase 
  // Handlers
  withHandlers({
    handleSignup: ({ firebase, showError }) => creds => {
      firebase
        .createUser(creds)
        .then(res => {
          return res;
        })
        .catch(err => {
          showError(err.message)
        });
    }
  }),
  pure // shallow equals comparison on props (prevent unessesary re-renders)
);

export const withIsLoggedIn = compose(
    withFirebase,
    connect(({ firebase: { auth } }) => ({ isLoggedIn: !isEmpty(auth) }))
  )

export const withLoginHandler = compose(
  withErrorToast, // adds props.showError
  withFirebase, // add props.firebase 
  // Handlers
  withHandlers({
    handleLogin: ({ firebase, showError }) => creds => {
      firebase
        .login(creds)
        .then(res => {
          return res;
        })
        .catch(err => {
          showError(err.message)
        });
    }
  }),
  pure // shallow equals comparison on props (prevent unessesary re-renders)
);

export const withLogoutHandler = compose(
  withErrorToast, // adds props.showError
  withFirebase, // add props.firebase 
  // Handlers
  withHandlers({
    handleLogout: ({ firebase, showError }) => () => {
      console.log("Loggin out")
      firebase
        .logout()
        .then(res => {
          return res;
        })
        .catch(err => {
          showError(err.message)
        });
    }
  }),
  pure // shallow equals comparison on props (prevent unessesary re-renders)
);