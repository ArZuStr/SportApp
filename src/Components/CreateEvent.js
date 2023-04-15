import React, {useState} from "react";
import moment from "moment";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from '@mui/material/DialogActions';
import {addDoc, collection} from "firebase/firestore";
import {db} from "../config/firebase";
import Geocode from "react-geocode";
import MenuItem from "@mui/material/MenuItem";


function CreateEvent(props) {

    Geocode.setApiKey("AIzaSyChbE9-TiyLNVuUFf8JWSZdMH5PpimKc8c");
    Geocode.setLanguage("en");
    // Geocode.setRegion("est");

    //CreateEvent const:
    const [title, setTitle]= useState("")
    const [location2, setLocation2]= useState("")
    const [city, setCity]= useState("")
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
            venue: location2 + " " + city,
            date1: moment(date).format("DD.MM.YYYY"),
            time1: time,
            description: description,
            lat: ltd,
            long: lngt,
            participants: 3,
            type: type
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
        let loc = location2 + ", " + city

        await Geocode.fromAddress(loc).then(
            (response) => {
                const loc = response.results[0].geometry.location;
                console.log(loc);
                addToFirebase2(loc.lat, loc.lng);
            },
            (error) => {
                console.error(error);
            }
        );
    }


    return (
            <Box>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setTitle(event.target.value)}}/>

                <TextField
                    autoFocus
                    margin="dense"
                    id="venue"
                    label="Address"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setLocation2(event.target.value)}}/>

                <TextField
                    autoFocus
                    margin="dense"
                    id="venue"
                    label="City"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setCity(event.target.value)}}/>
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
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setDescription(event.target.value)}}/>

                <TextField
                    autoFocus
                    margin="dense"
                    id="type"
                    label="Type"
                    select
                    fullWidth
                    variant="standard"
                    onChange={(event) => {setType([event.target.value])}}
                >
                    <MenuItem value={"Volleyball"}>Volleyball</MenuItem>
                    <MenuItem value={"Basketball"}>Basketball</MenuItem>
                    <MenuItem value={"Yoga"}>Yoga</MenuItem>
                    <MenuItem value={"Discgolf"}>Discgolf</MenuItem>
                    <MenuItem value={"Workout"}>Workout</MenuItem>
                    <MenuItem value={"Running"}>Running</MenuItem>

                </TextField>


                <DialogActions>
                    <Button onClick={handleClose4}>Cancel</Button>
                    <Button onClick={handleCreate2}>Create</Button>
                </DialogActions>
            </Box>

)}
export default CreateEvent;