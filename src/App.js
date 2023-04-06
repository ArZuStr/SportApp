import React, { useState } from "react";
import './App.css';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import {db} from './config/firebase';
import {collection, getDocs, addDoc} from "firebase/firestore";


export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
 const [users, setUsers] = useState([])
    const handleClickOpen = () => {
        fetchUsers();

        setOpen(true);
    };

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import NonUserEventComponent from "./Components/NonUserEventComponent.js"


//kaisa comment
function App() {

        const [open, setOpen] = useState(false);

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };


  return (
    <div className="App">
      <header className="App-header">
      </header>

        <main>
            <Grid item xs={12} md={6}>
                <Button
                    id="div"
                    variant="contained"
                    sx={{ padding: "10px", margin: "30px" }}
                    onClick={handleOpen}> EVENTS </Button>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Event Details</DialogTitle>
                    <DialogContent>
                        <NonUserEventComponent />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </main>
    </div>
  );
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    async function fetchUsers() {
        await getDocs(collection(db, 'User'))
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id: doc.id}));
            setUsers(newData);
            console.log(newData);
        })
    }

    console.log(users)

    return (

        <Box sx={{width:"100%"}}>
            <Box display="flex" flexDirection="row" justifyContent="flex-end" sx={{width:"100%"}}>
                <Button variant="outlined" onClick={handleClickOpen}>
                   LOG IN
                </Button>
                <Button variant="outlined" onClick={handleClickOpen1}>
                    SIGN UP
                </Button>
            </Box>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Log in</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
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

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Log in</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={open1} onClose={handleClose1}>
                <DialogTitle>Create an account</DialogTitle>
                <DialogContent>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose1}>Cancel</Button>
                    <Button onClick={handleClose1}>Create</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}


export default App;
