import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, ButtonAlt } from "../components/styledComponents";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const SignUpBtn = styled(ButtonAlt)``;
const ButtonContainer= styled.div`
    margin: auto;
    margin-bottom: 100px;
`;

const SignInBtn = styled(Button)`
    margin-top: 24px
`;

const ButtonLink = styled(Link)`
    margin: 8px auto 8px auto
    text-decoration: none;
    width: 100%;
`;

export default function Login() {
    return (
        <LoginContainer>
            <ButtonContainer>
                <ButtonLink>
                    <SignUpBtn>Sign Up</SignUpBtn>
                </ButtonLink>
                <ButtonLink>
                    <SignInBtn>Sign In</SignInBtn>
                </ButtonLink>
            </ButtonContainer>
        </LoginContainer>
    )
}
