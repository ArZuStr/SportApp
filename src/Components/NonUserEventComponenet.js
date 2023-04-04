import React, {useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


// function AlertDialog() {
//     const [open, setOpen] = React.useState(false);
//
//     const handleClickOpen = () => {
//         setOpen(true);
//     };
//
//     const handleClose = () => {
//         setOpen(false);
//     };


    return (
        <div>
            {/*<Button variant="outlined" onClick={handleClickOpen}>*/}
            {/*    Open alert dialog*/}
            {/*</Button>*/}
            {/*<Dialog*/}
            {/*    open={open}*/}
            {/*    onClose={handleClose}*/}
            {/*    aria-labelledby="alert-dialog-title"*/}
            {/*    aria-describedby="alert-dialog-description"*/}
            {/*>*/}

                <DialogTitle id="event-dialog-title">
                    {"VOLLEYBALL"}
                </DialogTitle>

                {/*<span className="material-icons-outlined">              //events icon is coming here*/}
                {/*        sports_volleyball*/}
                {/*</span>*/}

                <DialogContent>
                    <DialogContentText id="event-dialog-description">
                        Description:
                        Date: 25.04.2023
                        Time: 18:00
                        Participants: 5
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleJoinEvent}>JOIN</Button>
                    </Button>
                </DialogActions>
            {/*</Dialog>*/}
        </div>
    );
}
