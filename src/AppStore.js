import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import firebase from "firebase";
// import { reduxFirestore, firestoreReducer } from "redux-firestore";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-iZhyZTCiZE-h6DeTJJWxTSWIV-rSHCc",
  authDomain: "simple-chat-ce359.firebaseapp.com",
  databaseURL: "https://simple-chat-ce359.firebaseio.com",
  projectId: "simple-chat-ce359",
  storageBucket: "simple-chat-ce359.appspot.com",
  messagingSenderId: "952305134142"
};

const rrfConfig = {
  userProfile: "users",
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  // reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  // firestore: firestoreReducer // <- needed if using firestore
});

const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

function AppStore(WrappedComponent) {
  return props => (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );
}

export default AppStore;
