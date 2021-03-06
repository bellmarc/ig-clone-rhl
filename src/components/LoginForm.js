import React from "react";
import styled from "styled-components";

const LoginFormWrapper = styled.form`
  margin: auto;
`;
const SignInEmailInput = styled(InputAlt)`
  margin: 8px auto;
  width: 100%;
`;
const SignInPasswordInput = styled(InputAlt)`
  margin: 8px auto;
  width: 100%;
`;
const SignInBtn = styled(Button)`
  margin: 8px auto;
  width: 100%;
`;
const FirstNameInput = styled(Input)`
  margin: 8px auto;
  width: 100%;
`;
const LastNameInput = styled(Input)`
  margin: 8px auto;
  width: 100%;
`;
const EmailInput = styled(Input)`
  margin: 8px auto;
  width: 100%;
`;
const PasswordInput = styled(Input)`
  margin: 8px auto;
  width: 100%;
`;
const ConfirmInput = styled(Input)`
  margin: 8px auto;
  width: 100%;
`;
const SignUpBtn = styled(Button)`
  margin: 8px auto;
  width: 100%;
`;

const LoginForm = ()=> {
    return (
        <LoginFormWrapper>
        {/* Email Input & Password here */}
        <SignInEmailInput
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <SignInPasswordInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
        </LoginFormWrapper>
        // Sign Up Or Login Button ternary option
    )
}

export default LoginForm;
