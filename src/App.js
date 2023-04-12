import React, { useState, useEffect } from "react";
import './App.css';
import {db} from './config/firebase';
import {collection, getDocs, addDoc} from "firebase/firestore";

// import { Routes, Route } from "react-router-dom";
//import { BrowserRouter as Routes, Router, Route } from "react-router-dom";


//import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";




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

    //CreateProfile const (SIGN UP):
    const [age, setAge] = useState(0);
    const [email1, setEmail1] = useState(" ");
    const [lastName1, setLastName1] = useState(" ");
    const [location1, setLocation1] = useState(" ");
    const [name, setName] = useState(" ");
    const [preference, setPreference] = useState(" ");
    const [username, setUserName] = useState(" ");
    const [password1, setPassword1] = useState(" ");
    const [loggedUser1, setLoggedUser1] = useState({ })

    //const [workout, setWorkout] = React.useState(" ");

/*

    const handleWorkout = (event) => {
        setWorkout(event.target.value);
    };
*/


    //Lisa siia iga väli, et regada FireStores
    // const handleAge = (event) => {
    //     setAge(event.target.value);
    // };



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


    async function addToFirebase() {
        try {
            const docRef = await addDoc(collection(db, "User"), {
                email: email1,
                password: password1,
                username: username,
                name: name,
                lastName: lastName1,
                age: age,
                preference: preference,
                location: location1
            });
            console.log("Document written with ID: ", docRef.id);
            alert("Congratulations! You are signed up!");
        } catch (e) {
            console.error("Error adding document: ", e);
            alert("We had a problem. Try again.");

        }
    };
    function handleCreate() {

        addToFirebase();

        const foundObject1 = {
            email: email1,
            username: username,
            password: password1,
            name: name,
            lastName: lastName1,
            age: age,
            preference: preference,
            location: location1

        };


        setUserIsLogged(true);
        setLoggedUser(foundObject1)
        setOpen1(false);



        // optionally, you can also navigate to a new page or update the UI after the user is created
    }


    useEffect(() => {
        // Update the data (users. events) from Firestore
        fetchUsers();
        fetchEvents();
    }, []); //empty deps makes it run only once

    console.log(users)
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
                    </Button>}

                    <Button variant="contained" onClick={handleClickOpen2}>
                        EVENTS
                    </Button>
                </Box>
            </Box>
        </header>

        <main>
            <Map events={events}/>
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
                    onChange={(event) => {setUserName(event.target.value)}}

                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setEmail1(event.target.value)}}

                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setPassword1(event.target.value)}}

                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="name"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setName(event.target.value)}}

                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="lname"
                    label="Lastname"
                    type="lastname"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setLastName1(event.target.value)}}

                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="age"
                    label="Age"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setAge(event.target.value)}}
                />
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Workout Type</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={preference}
                        label="Workout Type"

                        onChange={(event) => {setPreference(event.target.value)}}

                    >
                        <MenuItem value={"Volleyball"}>Volleyball</MenuItem>
                        <MenuItem value={"Basketball"}>Basketball</MenuItem>
                        <MenuItem value={"Yoga"}>Yoga</MenuItem>
                        <MenuItem value={"Discgolf"}>Discgolf</MenuItem>
                        <MenuItem value={"Workout"}>Workout</MenuItem>

                    </Select>
                </FormControl>
                <TextField
                    autoFocus
                    margin="dense"
                    id="location"
                    label="Location"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setLocation1(event.target.value)}}

                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCreate}>Create</Button>
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
