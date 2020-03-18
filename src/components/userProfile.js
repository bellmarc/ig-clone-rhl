import React from "react";


const userProfile= (props) => {
function writeUserData(userId, displayName, email, photoURL) {
    firebase.database().ref("users/" + userId).set({
        displayName: name,
        email: email,
        profileImg: photoURL
    });
}

    return (
        <div>
            Test User Info from firebase to MongoDB
        </div>
    )
}


export default userProfile


