## About me

If you have found your way here, you probably either know me, or I'm looking for a job and you are here checking out my github account.  Until recently, my personal github account only contained work from 2014, which I removed.  Most all of the work I've submitted over the past 4 years has been under the organization I've been working for. 

I'm a full-stack developer working predominantly in node back-end and React.js front-end.


## Summary of intent
This repo is the result of a take-home assignment for a job opportunity I was applying for.  It was only supposed to take a half-day, but I did take more than that, as I wanted more practice in React. The task was to create a chat application that could send messages to another user in real-time.

## Early design decisions

I don't like pull interfaces or long-polling as much as push interfaces. I decided right away that I wanted to use some sort of sockets for sending chat updates to the front-end.  I picked firebase as a backing store because it had push capability built-in, and I could focus on the front-end application without having to worry about building an API.  I found the [react-redux-firebase](https://github.com/prescottprue/react-redux-firebase) library to interface firebase with react and redux.  It did not have full functionality for firestore yet (populations come to mind), so I stuck with firebase.

My React project at work started in late 2016, and a lot had changed in React since then.  We used a starter repo for that project, with a lot of libraries included.  I wanted to use [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) as a starting location, and choose my other libraries from there.

I also wanted to try the [ducks](https://github.com/erikras/ducks-modular-redux) proposal for organizing my redux actions/types/reducers.

For most of my presentational components, I used [material-ui](https://github.com/mui-org/material-ui), mostly because I don't have much interest in designing a drop-down and the like from scratch if I don't have to.

## Implementation

Most of the work ended up being in reverse-engineering the react-redux-firebase library and designing the firebase data schemas. The react-redux-firebase library is pretty interesting, although maybe not the best documented.  There are interesting parallels between a redux store and a firebase data store.  Both act as one large document to store app data (although firebase does call the top-level properties collections).  Firebase allows subscribing to changes in a node in the tree, and even subscribing to a query (which allows for more normalized data storage).  The react-redux-firebase library takes care of handling the subscriptions to the firebase store and pushing updates to a redux store, which can then be connected to react components.

## Lessons learned

I probably wouldn't ever choose firebase as a "database" for a production product, but it was fun to play with.  I largely followed the patterns from the react-redux-firebase examples when implementing this project, but I had a few issues with some of the patterns.  The main issue was that this implementation doesn't use redux actions to broadcast events from components, instead it uses HOCs connected to copmonents to directly call action handlers that update the firebase store.  It may just be habit, but I like to see those redux actions dispatched when a ui event occurs.

This pattern did enable me to keep almost all functional logic out of the react components, which I thought had a nice, clean look. I believe the only stateful components are the ones for the forms.

In the end, I only got to make one "duck".  But at least there's one.

I did get to built an app from the ground-up, and got to choose each library myself, which was good practice.  This app was also heavy on the HOCs, which was also good practice.

## Still to do

1. Finish styling
2. Normalize messages in the data-store.
3. TESTS
4. Introduce Flow for data-types.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


