import React, {useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function NonUserEventComponent() {
//     const [open, setOpen] = React.useState(false);
//
//     const handleClickOpen = () => {
//         setOpen(true);
//     };
//
//     const handleJoinEvent = () => {
//         setOpen(true);
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
                        Description: <br />
                        Date: <br />
                        Time: <br />
                        Participants: <br />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button id="div"
                            variant="contained"
                            sx={{ padding: "10px", margin: "30px" }}>JOIN</Button>
                </DialogActions>
            {/*</Dialog>*/}
        </div>
    )
}

export default NonUserEventComponent;