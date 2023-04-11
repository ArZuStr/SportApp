import React from "react";
import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from '../config/firebase';

import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";

function CreateProfile() {




    async function addToFirebase() {

        try {
            const docRef = await addDoc(collection(db, "User"), {
                // name: newCity,
                // nbr: newCityNbr
            });
            // console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            // console.error("Error adding document: ", e);
        }
    }

return (<DialogContent>
    <DialogContentText>
        Please enter your email address and password to create an account.
    </DialogContentText>
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
        id="location"
        label="Location"
        type="Location"
        fullWidth
        variant="standard"
    />
</DialogContent>)
}

export default CreateProfile;