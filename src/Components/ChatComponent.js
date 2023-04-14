import React, {useState} from "react";

import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import DialogContent from '@mui/material/DialogContent';





function ChatComponent(props){

    return (

        <Box sx={{ position: "relative", top: 0, right: 0 }}>

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
        </Box>


    );
}

export default ChatComponent;