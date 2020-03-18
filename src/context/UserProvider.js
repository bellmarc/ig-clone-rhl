import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../config";


export const UserContext = React.createContext();

//Initialize the Firebase app using Configuration:
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const firebaseAppAuth = firebaseApp.auth();

//Setup Providers to support/access Auth library:
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider()
};

function UserProvider(props) {
    const { user, signOut, signInWithGoogle } = props;

    return (
        <UserContext.Provider
        value={{
            user,
            signOut,
            signInWithGoogle
        }}
        >
        {props.children}
        </UserContext.Provider>
    )
}

//wrapped export of UP using the withFirebaseAuth HOC
export default withFirebaseAuth({ providers, firebaseAppAuth })(UserProvider)