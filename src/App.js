import React, { useState } from "react";
import './App.css';

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
}


export default App;
