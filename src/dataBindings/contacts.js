import { firebaseConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { withHandlers, pure, compose } from "recompose";
import withErrorToast  from "../decorators/withErrorToast";
import get from 'lodash/get';

const withContacts = compose(
  // Get project path from firebase based on params prop (route params from react-router)
  firebaseConnect(({ params: { projectname } }) => [
    { path: `projects/${projectname}` }
  ]),
  // Map state to props
  connect(({ firebase: { data } }, { params: { projectname } }) => ({
    project: data.projects && data.projects[projectname]
    // project: get(data, `projects.${projectname}`) // lodash's get can be used for convience
  })),
  pure
)

const withAddContactHandler = compose(
  // Get project path from firebase based on params prop (route params from react-router)
  firebaseConnect(({ params: { projectname } }) => [
    { path: `projects/${projectname}` }
  ]),
  // Map state to props
  connect(({ firebase: { data } }, { params: { projectname } }) => ({
    project: data.projects && data.projects[projectname]
    // project: get(data, `projects.${projectname}`) // lodash's get can be used for convience
  })),
  pure
)

const withSearchContactHandler = compose(
  firebaseConnect((email) => [
    { path: `users/email/${email}` }
  ]),
  // Map state to props
  connect(({ firebase: { data } }) => {
    console.log("DATAZ", data)
    return contact: data 
  }),
  pure
)