import React, {useState} from "react";
import moment from "moment";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import {addDoc, collection} from "firebase/firestore";
import {db} from "../config/firebase";
import Geocode from "react-geocode";


function EventListComponentFullView(props){
    const eventsList =props.events
    console.log(eventsList)

    Geocode.setApiKey("AIzaSyChbE9-TiyLNVuUFf8JWSZdMH5PpimKc8c");
    Geocode.setLanguage("en");
    // Geocode.setRegion("est");

    //CreateEvent const:
    const [title, setTitle]= useState("")
    const [location2, setLocation2]= useState("")
    const [date, setDate]= useState(0)
    const [time, setTime]= useState(0)
    const [description, setDescription]= useState("")
    const [lat, setLat]= useState("")
    const [lng, setLng]= useState("")
    const [type, setType]= useState([])


    const [open4, setOpen4] = useState(false);
    const handleClickOpen4 = () => {
        setOpen4(true);
    };
    const handleClose4 = () => {
        setOpen4(false);
    };


    async function addToFirebase2(ltd, lngt) {

        let data = {
            title: title,
            venue: location2,
            date1: moment(date).format("DD.MM.YYYY"),
            time1: time,
            description: description,
            lat: ltd,
            long: lngt,
            participants: 3,
            type:["yoga"]
        }

        console.log(data)
        try {
            const docRef = await addDoc(collection(db, "Events"), data);
            console.log("Document written with ID: ", docRef.id);


            setOpen4(false)
            window.location.reload()

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    async function handleCreate2() {

        await Geocode.fromAddress(location2).then(
            (response) => {
                const loc = response.results[0].geometry.location;
                console.log(loc);
                // setLat(loc.lat)
                // setLng(loc.lng)

                addToFirebase2(loc.lat, loc.lng);



            },
            (error) => {
                console.error(error);
            }
        );
        //setOpen4(false)


        // optionally, you can also navigate to a new page or update the UI after the user is created
    }

    console.log(lat)

    return (

        <div>
        <Box>
            <Typography variant="h4" sx={{marginBottom:"20px", margin:"30px"}}>
                <strong>EVENTS LIST</strong>
            </Typography>

            <Button variant="contained" size="large" sx={{marginLeft:"30px"}} onClick={handleClickOpen4}>CREATE AN EVENT</Button>

            <Grid container spacing={3}>
                { eventsList.map((event, index) => (
                    <Grid item sm={12} md={12} key={index} sx={{margin:"30px"}}>
                        <Paper elevation={4} sx={{mt:"30px", pl: "50px",  pr: "50px",  pb: "50px" }}>
                            <Box sx={{ position: "relative", top: 0, right: 0 }}>
                                {event.type.includes("basketball") && <SportsBasketballIcon sx={{ fontSize: 300, color:"#7c79fb",marginLeft:"80%", marginTop:"-70px", backgroundColor: "white"}}  />}
                                {event.type.includes("volleyball") && <SportsVolleyballIcon sx={{ fontSize: 300, color:"#00ced1",marginLeft:"80%", marginTop:"-70px", backgroundColor: "white"}} />}
                                {event.type.includes("discgolf") && <FiberSmartRecordIcon sx={{ fontSize: 300, color:"#ff4500",marginLeft:"80%", marginTop:"-70px", backgroundColor: "white"}} />}
                                {event.type.includes("workout") && <FitnessCenterIcon sx={{ fontSize: 300, color:"#fefe33",marginLeft:"80%", marginTop:"-70px", backgroundColor: "white"}} />}
                                {event.type.includes("yoga") && <SelfImprovementIcon sx={{ fontSize: 300, color:"#00bfff",marginLeft:"80%", marginTop:"-70px", backgroundColor: "white"}} />}
                            </Box>
                            <Typography variant="h2" sx={{ textTransform: "uppercase", marginTop:"-110px" }}>{event.title} </Typography>
                            <br />
                            <Typography variant="h4">Venue: {event.venue} </Typography>
                            <br />
                            <Typography variant="h4">Date: {event.date1} </Typography>
                            <Typography variant="h4">Time: {event.time1} </Typography>
                            <br />
                            <Typography variant="h5" sx={{ fontStyle: "italic", m: 1 }}>Description: {event.description} </Typography>
                            <Button variant="contained" size="large">JOIN!</Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>)

    <Dialog open={open4} onClose={handleClose4}>
        <DialogTitle>Create an Event</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                type="title"
                fullWidth
                variant="standard"
                onChange={(event) => {setTitle(event.target.value)}}/>

            <TextField
                autoFocus
                margin="dense"
                id="venue"
                label="Location"
                type="venue"
                fullWidth
                variant="standard"
                onChange={(event) => {setLocation2(event.target.value)}}/>

            <TextField
                autoFocus
                margin="dense"
                id="date1"
                type="date"
                fullWidth
                variant="standard"
                onChange={(event) => {setDate(event.target.value)}}/>

            <TextField
                autoFocus
                margin="dense"
                id="time1"
                type="time"
                fullWidth
                variant="standard"
                onChange={(event) => {setTime(event.target.value)}}/>

            <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Description"
                type="description"
                fullWidth
                variant="standard"
                onChange={(event) => {setDescription(event.target.value)}}/>

            <TextField
                autoFocus
                margin="dense"
                id="type"
                label="Type"
                type="select"
                fullWidth
                variant="standard"
                onChange={(event) => {setType([event.target.value])}}
            >

            </TextField>


                <DialogActions>
                    <Button onClick={handleClose4}>Cancel</Button>
                    <Button onClick={handleCreate2}>Create</Button>
                </DialogActions>
        </DialogContent>
    </Dialog>
        </div>
    );
}

export default EventListComponentFullView;
