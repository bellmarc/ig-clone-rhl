import React, { useContext } from "react";
import Header from "./Header.js";
import Login from "./Login.js";
import { UserContext } from "../context/UserProvider.js";

function App(props) {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <Header />
      <Login />
      {/* <Button> Styled Button Component</Button>
      <Button primary> Primary Btn </Button> */}
    </div>
  );
}

export default App;
