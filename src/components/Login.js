import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../context/userProvider";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

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

const Login = (props) => {
  const { user, signOut, signInWithGoogle } = useContext(UserContext);
  return (
    <LoginContainer>
      <h1>Hello </h1>
      {user ? (
        <p>Hello, {user.displayName}</p>
      ) : (
        <p>Please choose a way to sign in below.</p>
      )}
      {user ? (
        <Button primary onClick={signOut}>
          Signout
        </Button>
      ) : (
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      )}
    </LoginContainer>
  );
};

export default Login;
