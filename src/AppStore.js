import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import firebase from "firebase";
import appReducer from "./ducks";

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
  userProfile: "userProfiles"
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore();

const middleware = [
  // This is where you add other middleware like redux-observable
];

const enhancers = [];

const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  app: appReducer
  // firestore: firestoreReducer // <- needed if using firestore
});

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    reactReduxFirebase(firebase, rrfConfig),
    ...enhancers
  )
);

store.asyncReducers = {};

// if (module.hot) {
//   module.hot.accept("./reducers", () => {
//     const reducers = require("./reducers").default;
//     store.replaceReducer(reducers(store.asyncReducers));
//   });
// }

function AppStore(WrappedComponent) {
  return props => (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );
}

export default AppStore;
