import React, {useState} from "react";
import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from '../config/firebase';

import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";

function CreateProfile() {
    const [age, setAge] = useState(0);
    const [email1, setEmail1] = useState(" ");
    const [lastName1, setLastName1] = useState(" ");
    const [location1, setLocation1] = useState(" ");
    const [name, setName] = useState(" ");
    const [preference, setPreference] = useState(" ");
    const [username, setUserName] = useState(" ");
    const [password1, setPassword1] = useState(" ");
    const [loggedUser1, setLoggedUser1] = useState({})



    async function addToFirebase() {
        try {
            const docRef = await addDoc(collection(db, "User"), {
                username: username,
                email: email1,
                password: password1,
                name: name,
                lastName: lastName1,
                age: age,
                preference: preference,
                location: location1
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

return (

    <DialogContent>
    <DialogContentText>
        Please enter your email address and password to create an account.
    </DialogContentText>
    <TextField
        autoFocus
        margin="dense"
        id="username"
        label="Username"
        type="text"
        fullWidth
        variant="standard"
    />
    <TextField
        autoFocus
        margin="dense"
        id="email"
        label="Email Address"
        type="email"
        fullWidth
        variant="standard"
    />
    <TextField
        autoFocus
        margin="dense"
        id="password"
        label="Password"
        type="password"
        fullWidth
        variant="standard"
    />
    <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Name"
        type="name"
        fullWidth
        variant="standard"
    />
    <TextField
        autoFocus
        margin="dense"
        id="lname"
        label="Lastname"
        type="lastname"
        fullWidth
        variant="standard"
    />
    <TextField
        autoFocus
        margin="dense"
        id="age"
        label="Age"
        type="number"
        fullWidth
        variant="standard"
    />
    <TextField
        autoFocus
        margin="dense"
        id="preference"
        label="Preference"
        type="checkbox"
        fullWidth
        variant="standard"
    />
    <TextField
        autoFocus
        margin="dense"
        id="location"
        label="Location"
        type="Location"
        fullWidth
        variant="standard"
    />
</DialogContent>)
}

export default CreateProfile;