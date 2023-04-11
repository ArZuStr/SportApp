import React, {useState} from "react";
import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from '../config/firebase';

import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import DialogContent from "@mui/material/DialogContent";

function CreateProfile(props) {
    const [workout, setWorkout] = React.useState('volleyball');




    const handleChange = (event) => {
        setWorkout(event.target.value);
    };

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
        onChange={handleAge}
    />
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Workout Type</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={workout}
                label="Workout Type"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"Volleyball"}>Volleyball</MenuItem>
                <MenuItem value={"Basketball"}>Basketball</MenuItem>
                <MenuItem value={"Yoga"}>Yoga</MenuItem>
            </Select>
        </FormControl>
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