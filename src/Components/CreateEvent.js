import React from "react";
import TextField from "@mui/material/TextField";
import DialogContent from '@mui/material/DialogContent';


function CreateEvent(props) {


    return (
   <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title for your event"
            type="title"
            fullWidth
            variant="standard" />

        <TextField
            autoFocus
            margin="dense"
            id="venue"
            label="Location"
            type="venue"
            fullWidth
            variant="standard" />

        <TextField
            autoFocus
            margin="dense"
            id="date1"
            label="Date"
            type="date"
            fullWidth
            variant="standard"  />

        <TextField
            autoFocus
            margin="dense"
            id="time1"
            label="Time"
            type="time"
            fullWidth
            variant="standard"/>

        <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description of the event"
            type="description"
            fullWidth
            variant="standard"/>
   </DialogContent>

)}
export default CreateEvent;