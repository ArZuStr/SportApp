import React, {useState} from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';

function UserEventComponent(props) {

    return (
        <div>
            <Box sx={{ position: "relative", top: 0, right: 0 }}>
                {props.event.type.includes("basketball") && <SportsBasketballIcon sx={{ fontSize: 100, color:"#7C79FB", marginTop:"20px", backgroundColor: "white"}}  />}
                {props.event.type.includes("volleyball") && <SportsVolleyballIcon sx={{ fontSize: 100, color:"#00CED1", marginTop:"20px", backgroundColor: "white"}} />}
                {props.event.type.includes("discgolf") && <FiberSmartRecordIcon sx={{ fontSize: 100, color:"#FF4500", marginTop:"20px", backgroundColor: "white"}} />}
                {props.event.type.includes("workout") && <FitnessCenterIcon sx={{ fontSize: 100, color:"#FEFE33", marginTop:"20px", backgroundColor: "white"}} />}
                {props.event.type.includes("yoga") && <SelfImprovementIcon sx={{ fontSize: 100, color:"#00BFFF", marginTop:"20px", backgroundColor: "white"}} />}
            </Box>

            <Typography variant="h5" sx={{ textTransform: "uppercase", marginTop:"10px" }}> {props.event.title}</Typography><br/>
            <Typography variant="h6"> Where: {props.event.venue}</Typography><br/>
            <Typography variant="h6"> When: {props.event.date1} at {props.event.time1} </Typography><br/>
            <Typography variant="h6"> What: {props.event.description} </Typography><br/>

        </div>
    )
}
export default UserEventComponent;