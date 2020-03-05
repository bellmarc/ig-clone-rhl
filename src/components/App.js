import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header.js";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../config";

//Initialize the Firebase app using Configuration:
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Setup Providers to support/access Auth library:
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (props.primary ? "palegreen" : "palevioletred")}};
  border: ${props =>
    props.primary ? "2px solid palegreen" : "2px solid palevioletred"};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5em all ease-out;

  &:hover {
    color: white;
    background-color: ${props =>
      props.primary ? "palegreen" : "palevioletred"};
  }
`;

function App(props) {
  const firebaseUser = firebaseAppAuth.currentUser;
  console.log(firebaseUser);

  // const { user, signOut, signInWithGoogle } = this.props;
  const { user, signOut, signInWithGoogle } = props;
  return (
    <div>
      <Header />
      <h1>Hello </h1>
      {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in below.</p>}
      {user ? (
        <Button primary onClick={signOut}>
          Signout
        </Button>
      ) : (
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      )}
      {/* <Button> Styled Button Component</Button>
      <Button primary> Primary Btn </Button> */}
    </div>
  );
}
//wrapped export of App using the withFirebaseAuth HOC
export default withFirebaseAuth({ providers, firebaseAppAuth })(App);
