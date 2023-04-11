import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";

function UserProfile(props) {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const userId = props.match.params.userId; // get the user ID from URL params
        db.collection("users").doc(userId)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setUser(doc.data());
                } else {
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    }, []);

    if (!user) {
        return <div>Loading user details...</div>;
    }

    return (
        <div>
            <h1>{user.name}'s Profile</h1>
            <p>Username: {user.username}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>


        </div>
    );
}

export default UserProfile;
