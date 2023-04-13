import React, { useState, useEffect } from "react";
import './App.css';
import { db, storage} from './config/firebase';
import WB_LOGO2 from './Icons/WB_LOGO2.gif';
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
import MessageIcon from '@mui/icons-material/Message';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

//COMPONENTS:
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
    const [description, setDescription] = useState(" ");


    const [newProfilePic, setNewProfilePic] = useState("")
    const [ProfilePicUpload, setProfilePicUpload] = useState(null)


    //Returns url of the picture and gives the value to useState setNewProfilePic:
    const upLoadProfilePic = () => {
        if (ProfilePicUpload == null)
            return;
        const imageRef = ref(storage, `images/${ProfilePicUpload.name + v4() }`);
        uploadBytes(imageRef, ProfilePicUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setNewProfilePic(url);
                   // setIsProfilePicUploaded(true);

                })

            }
        )
    }

    //Lisa siia iga väli, et regada FireStores:
    // const handleAge = (event) => {
    //     setAge(event.target.value);
    // };


///handles "LOG IN" dialoq:
    const handleClose = () => {
        setOpen(false);
    };


///Handles the "LOG IN" button:
    const handleClickOpen = () => {
        setOpen(true);
    };


///Handles "SIGN UP" button and opens it:
    const handleClickOpen1 = () => {
        setOpen1(true);
    };

///Handles "CREATE" button in a dialog, where you create an account:
    const handleClose1 = () => {
        setOpen1(false);
    };

///Handles "EVENTS" button:
    const handleClickOpen2 = () => {
        setOpen2(true);
    };

///Handles EVENTS LIST dialog, where is "CANCEL" button:
    const handleClose2 = () => {
        setOpen2(false);
    };

///Handles "PROFILE" button:
    const handleClickOpen3 = () => {
        setOpen3(true);
    };

///Handles "PROFILE" dialog:
    const handleClose3 = () => {
        setOpen3(false);
    };



///Handles "LOG OUT" button:
    function logUserOut() {
        setUserIsLogged(false)
    }


///Getting info from Firestore:
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


    useEffect(() => {
        // Update the data (users. events) from Firestore
        fetchUsers();
        fetchEvents();
    }, []); //empty deps makes it run only once

    console.log(users)
    // console.log(events)


///Handles the "LOG IN" button, where it checks if email and password is filled and existing in Firestore:
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

///This part checks that when You click on SIGN UP button, you are storing all the data to Firestore after filling all the "create profile" fields:
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
                location: location1,
                description: description,
                profile_pic: newProfilePic,
            });
            console.log("Document written with ID: ", docRef.id);
            alert("Congratulations! You are signed up!");
        } catch (e) {
            console.error("Error adding document: ", e);
            alert("We had a problem. Try again.");

        }
    };



///This function is to manage "create" button that creates new user with a profile:
    function handleCreate() {

        // Check if email, password, and name fields are not empty
        if (email1.trim() === '' || password1.trim() === '' || name.trim() === '') {
            alert('Email, password, and name fields are required');
            return;
        }

        // Check if email is valid
        if (!email1.includes('@')) {
            alert('Email address is not valid');
            return;
        }

        // Check if password is at least 8 characters long and contains a mix of letters, numbers, and symbols
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!passwordRegex.test(password1)) {
            alert('Password must be at least 8 characters long and contain a mix of letters, numbers, and symbols');
            return;
        }


        //If all correct, sends info to database:
        const foundObject1 = {
            email: email1,
            username: username,
            password: password1,
            name: name,
            lastName: lastName1,
            age: age,
            preference: preference,
            location: location1,
            description: description,
            profile_pic: newProfilePic,

        };

        //adds info to Firestore
        addToFirebase();


        //changes the states:
        setUserIsLogged(true);
        setLoggedUser(foundObject1);
        setOpen1(false);

        // optionally, you can also navigate to a new page or update the UI after the user is created
    }






    return (

        <div style={{ position: "relative", height: "100vh" }}>

        <header>
            <Box sx={{
                position: "absolute",
                top: "0px",
                left: "60px",
                zIndex: "1000",
                display: "flex",
                flexDirection: "row",}}>

                <img id="LOGO2" src={WB_LOGO2}/>

            </Box>
            <Box sx={{position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: "1000",
                display: "flex",
                flexDirection: "row",}}>
                <Box id="loginBox" display="flex" flexDirection="row" justifyContent="flex-end" sx={{width:"100%"}}>
                    { userIsLogged === false && <Button id="loginButton" variant="contained" onClick={handleClickOpen}>
                        <AccountCircleIcon sx={{ fontSize: 40, color:"#e6ff00",marginRight:"15px"}}/>
                       LOG IN
                    </Button>}

                    { userIsLogged === true && <Button  id="loginButton" variant="contained" onClick={logUserOut}>
                        <AccountCircleIcon sx={{ fontSize: 40, color:"#e6ff00",marginRight:"15px"}}/>
                        LOG OUT
                    </Button>}


                    { userIsLogged === true && <Button  id="loginButton" variant="contained" onClick={handleClickOpen3}>
                        <AccountCircleIcon sx={{ fontSize: 40, color:"#e6ff00",marginRight:"15px"}}/>

                        PROFILE
                        {/*<Link to="/users/:userId">Profile</Link>*/}
                    </Button>}

                    { userIsLogged === false &&<Button id="loginButton" variant="contained" onClick={handleClickOpen1}>
                        <AccountCircleIcon sx={{ fontSize: 40, color:"#e6ff00",marginRight:"15px"}}/>

                        SIGN UP
                    </Button>}
                </Box>
            </Box>

            <Box            sx={{position: "absolute",
                            bottom: "10px",
                            right: "10px",
                            zIndex: "1000",
                            display: "flex",
                            flexDirection: "row",}}>

                <Box id="eventsBox" display="flex" flexDirection="row" justifyContent="flex-end" sx={{width:"100%"}}>
                    <Button id="eventsButton" variant="contained" onClick={handleClickOpen2}>
                        <EmojiEventsIcon sx={{ fontSize: 40, color:"#e6ff00",marginRight:"15px"}}/>
                           JOIN EVENTS
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
                        CREATE EVENTS <MessageIcon sx={{ fontSize: 40, color:"#e6ff00",marginLeft:"15px"}}/>
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
                <Button id="dialogButton" onClick={handleLogIn}>Log in</Button>
            </DialogActions>
        </Dialog>
        <Dialog open={open1} PaperProps={{style: {backgroundColor: '#fdf8f8',},}} onClose={handleClose1}>
            <DialogTitle>CREATE PROFILE</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    SIGN UP TO CREATE AND JOIN EVENTS!
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
                    required
                    id="filled-required"
                    margin="dense"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setEmail1(event.target.value)}}

                />
                <TextField
                    required
                    id="filled-required"
                    margin="dense"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setPassword1(event.target.value)}}

                />
                <TextField
                    required
                    id="filled-required"
                    margin="dense"
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
                        <MenuItem value={"Walking"}>Walking</MenuItem>
                        <MenuItem value={"Running"}>Running</MenuItem>
                        <MenuItem value={"Volleyball"}>Volleyball</MenuItem>
                        <MenuItem value={"Basketball"}>Basketball</MenuItem>
                        <MenuItem value={"Yoga"}>Yoga</MenuItem>
                        <MenuItem value={"Discgolf"}>Discgolf</MenuItem>

                    </Select>

                </FormControl>
                <TextField
                    autoFocus
                    margin="dense"
                    id="description"
                    label="Description"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setDescription(event.target.value)}}

                />
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
                <label htmlFor="profilePic">Profile picture:</label>
                <input placeholder="Profile picture" type="file" id="profilePic"
                       onChange={(e) => setProfilePicUpload(e.target.files[0])} />
                <br />
                <Button variant="contained" id="uploadButton" size="small" sx={{marginLeft:"30px", marginTop:"20px"}} onClick={upLoadProfilePic}>
                    Upload picture
                </Button>
            </DialogContent>
            <DialogActions>
                <Button id="dialogButton" variant="contained" conClick={handleCreate}>Create</Button>
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
                    <Button id="dialogButton" variant="contained" onClick={handleClose2}>Cancel</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={open3} onClose={handleClose3}  maxWidth="70%" PaperProps={{style: {backgroundColor: '#202020'}}} >
                <DialogTitle></DialogTitle>
                <DialogContent>
                    {Object.keys(loggedUser).length > 0 && <UserProfile user={loggedUser}/>}
                </DialogContent>
                <DialogActions>
                    <Button  id="dialogButton" variant="contained" onClick={handleClose3}>Cancel</Button>
                </DialogActions>
            </Dialog>


        </div>
    );
}


export default App;
