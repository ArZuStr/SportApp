import React, { useState, useEffect } from "react";
import './App.css';
import {db} from './config/firebase';
import {collection, getDocs, addDoc} from "firebase/firestore";

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


import EventListComponent from "./Components/EventListComponent";
import EventListComponentFullView from "./Components/EventListComponentFullView";
import UserProfile from "./Components/UserProfile";
import Map from "./Map"



//kaisa comment
function App() {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [users, setUsers] = useState([]);
    const [userIsLogged, setUserIsLogged] = useState(false);
    const [events, setEvents] = useState([]);
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [loggedUser, setLoggedUser] = useState({})

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

    const handleClickOpen3 = () => {
        setOpen3(true);
    };

    const handleClose3 = () => {
        setOpen3(false);
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


    function handleLogIn() {
        //console.log(email)
        //console.log(password)

        const foundObject = users.find(obj => {
            return obj.email === email && obj.password === password;
        });



        // if (Object.keys(foundObject).length > 0 ) {
        if (typeof foundObject === 'undefined') {
            setUserIsLogged(false);
            alert("email or password wrong");
            //setOpen(false);

        } else {
            setUserIsLogged(true);
            setOpen(false) ; //closes the login dialog
            setLoggedUser(foundObject);
        }

      //  console.log(foundObject)

    }

    useEffect(() => {
        // Update the data (users. events) from Firestore
        fetchUsers();
        fetchEvents();
    }, []); //empty deps makes it run only once

    // console.log(users)
    // console.log(events)


    return (

        <div style={{ position: "relative", height: "100vh" }}>

        <header>
            <Box sx={{position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: "1000",
                display: "flex",
                flexDirection: "row",}}>
                <Box display="flex" flexDirection="row" justifyContent="flex-end" sx={{width:"100%"}}>
                    { userIsLogged === false && <Button variant="contained" onClick={handleClickOpen}>
                       LOG IN
                    </Button>}
                    { userIsLogged === true && <Button variant="contained" onClick={logUserOut}>
                        LOG OUT
                    </Button>}

                    { userIsLogged === true && <Button variant="contained" onClick={handleClickOpen3}>
                        PROFILE
                        {/*<Link to="/users/:userId">Profile</Link>*/}
                    </Button>}

                    { userIsLogged === false &&<Button variant="contained" onClick={handleClickOpen1}>
                        SIGN UP
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
                        ⊕ PROFILE
                    </Button>
                </Box>
            </Box>

                    {/*<Button variant="contained" onClick={handleClickOpen2}>*/}
                    {/*    EVENTS*/}
                        <Box sx={{position: "absolute",
                            bottom: "10px",
                            right: "10px",
                            zIndex: "1000",
                            display: "flex",
                            flexDirection: "row",}}>

                            <Box id="eventsBox" display="flex" flexDirection="row" justifyContent="flex-end" sx={{width:"100%"}}>
                                <Button id="eventsButton" variant="contained" onClick={handleClickOpen2}>
                                    ⇦ EVENTS
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
                        MESSAGES ✏
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
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={(e) => setPassword(e.target.value)}

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
                {/*<Button onClick={handleClose}>Cancel</Button>*/}
                <Button onClick={handleLogIn}>Log in</Button>
            </DialogActions>
        </Dialog>
        <Dialog open={open1} onClose={handleClose1}>
            <DialogTitle>Create an account</DialogTitle>






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
                <DialogActions>
                    <Button onClick={handleClose2}>Cancel</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={open3} onClose={handleClose3} fullWidth maxWidth="100%">
                <DialogTitle>Profile</DialogTitle>
                <DialogContent>
                    {Object.keys(loggedUser).length > 0 && <UserProfile user={loggedUser}/>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose3}>Cancel</Button>
                </DialogActions>
            </Dialog>


        </div>
    );
}


export default App;
