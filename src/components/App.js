import React, { useContext } from "react";
import styled from "styled-components";
import Header from "./Header.js";
import { UserContext } from "../context/UserProvider.js";


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
  const { user } = useContext(UserContext)
  console.log(user);

  return (
    <div>
      <Header />
      <h1>Hello </h1>
      {user ? <p>Hello, {user.displayName}</p> : <p>Please choose a way to sign in below.</p>}
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

export default App;
