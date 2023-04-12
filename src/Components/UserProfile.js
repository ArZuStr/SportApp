import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";

function UserProfile(props) {

    return (
        <div>
            <h1>{props.user.name}'s Profile</h1>
            <p>Username: {props.user.username}</p>
            <p>Age: {props.user.age}</p>
            <p>Email: {props.user.email}</p>
            <p>Location: {props.user.location}</p>


        </div>
    );
}

export default UserProfile;
