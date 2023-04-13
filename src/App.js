import React, { useState, useEffect } from "react";
import './App.css';
// import { Routes, Route } from "react-router-dom";
import Map from "./Map"

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
import EventListComponent from "./EventListComponent";
import EventListComponentFullView from "./EventListComponentFullView";

import MessageIcon from '@mui/icons-material/Message';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import WB_LOGO1 from './Images/WB_LOGO1.png';
import WB_LOGO2 from './Images/WB_LOGO2.gif';

//kaisa comment
function App() {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [users, setUsers] = useState([]);
    const [userIsLogged, setUserIsLogged] = useState(true);

    const [events, setEvents] = useState([]);


    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    async function fetchUsers() {
        await getDocs(collection(db, 'User'))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setUsers(newData);
                //console.log(newData);
            })
    }

    async function fetchEvents() {
        await getDocs(collection(db, 'Events'))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setEvents(newData);
                //console.log(newData);
            })
    }

    function logUserOut() {
        setUserIsLogged(false)
    }

    useEffect(() => {
        // Update the data (users. events) from Firestore
        fetchUsers();
        fetchEvents();
    }, []); //empty deps makes it run only once

    console.log(users)
    console.log(events)


    return (

        <div style={{ position: "relative", height: "100vh" }}>

        <header>

            <Box sx={{
                position: "absolute",
                top: "80px",
                left: "420px",
                zIndex: "1000",
                display: "flex",
                flexDirection: "row",}}>

                    <Box id="SLOGAN" display="flex" flexDirection="row" justifyContent="flex-end" sx={{width:"100%"}}>
                        <p1>
                            Welcome to Workout Buddy – Join. Train. Repeat.
                        </p1>
                    </Box>
            </Box>

            {/*<Box sx={{*/}
            {/*    position: "absolute",*/}
            {/*    top: "100px",*/}
            {/*    left: "118px",*/}
            {/*    zIndex: "1000",*/}
            {/*    display: "flex",*/}
            {/*    flexDirection: "row",}}>*/}

            {/*    <img id="LOGO" src={WB_LOGO1}/>*/}

            {/*</Box>*/}

            <Box sx={{
                position: "absolute",
                top: "3px",
                left: "60px",
                zIndex: "1000",
                display: "flex",
                flexDirection: "row",}}>

                <img id="LOGO2" src={WB_LOGO2}/>
            </Box>

            <Box sx={{position: "absolute",
                top: "70px",
                right: "300px",
                zIndex: "1000",
                display: "flex",
                flexDirection: "row",}}>

                <Box id="aboutBox" display="flex" flexDirection="row" justifyContent="flex-end" sx={{width:"100%"}}>
                    <Button id="aboutButton" variant="contained" onClick={handleClickOpen}>
                        ABOUT
                    </Button>
                </Box>
            </Box>

            <Box sx={{position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: "1000",
                display: "flex",
                flexDirection: "row",}}>

                <Box id="loginBox" display="flex" flexDirection="row" justifyContent="flex-end" sx={{width:"100%"}}>
                    <Button id="loginButton" variant="contained" onClick={handleClickOpen}>
                        <AccountCircleIcon sx={{ fontSize: 40, color:"#e6ff00",marginRight:"15px"}}/> LOG IN
                    </Button>
                </Box>
            </Box>

            <Box sx={{position: "absolute",
                bottom: "10px",
                right: "10px",
                zIndex: "1000",
                display: "flex",
                flexDirection: "row",}}>

                <Box id="eventsBox" display="flex" flexDirection="row" justifyContent="flex-end" sx={{width:"100%"}}>
                    <Button id="eventsButton" variant="contained" onClick={handleClickOpen}>
                        <EmojiEventsIcon sx={{ fontSize: 40, color:"#e6ff00",marginRight:"15px"}}/> JOIN EVENT
                    </Button>
                </Box>
            </Box>

            <Box sx={{position: "absolute",
                bottom: "10px",
                left: "10px",
                zIndex: "1000",
                display: "flex",
                flexDirection: "row",}}>

                <Box id="chatBox" display="flex" flexDirection="row" justifyContent="flex-end">
                    <Button id="chatButton" variant="contained" onClick={handleClickOpen}>
                        CREATE EVENT <AddCircleIcon sx={{ fontSize: 40, color:"#e6ff00",marginLeft:"15px"}}/>
                    </Button>
                </Box>
            </Box>

        </header>

        <main>
            {/*<Routes>*/}
            {/*    <Route path="/" element={ <Map events={events}/> } />*/}
            {/*    /!*<Route path="events" element={ <Products/> } />*!/*/}
            {/*</Routes>*/}

            <Map events={events} userStatus={userIsLogged}/>
        </main>
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

            <Dialog open={open2} onClose={handleClose2} fullWidth maxWidth="100%">
                {/*<DialogTitle>Events</DialogTitle>*/}
                <DialogContent>
                    { userIsLogged === false &&
                        <EventListComponent events={events}/>
                    }
                    { userIsLogged === true &&
                        <EventListComponentFullView events={events}/>
                    }
                </DialogContent>
                {/*<DialogActions>*/}
                {/*    /!*<Button onClick={handleClose2}>Cancel</Button>*!/*/}
                {/*    /!*        <Button onClick={handleClose2}>Log in</Button>*!/*/}
                {/*</DialogActions>*/}
            </Dialog>


        </div>
    );
}


export default App;