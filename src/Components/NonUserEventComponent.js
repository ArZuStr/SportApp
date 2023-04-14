import React, {useState} from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

function NonUserEventComponent(props) {

    return (
        <div>
            <Box sx={{ position: "relative", top: 0, right: 0 }}>
                {props.event.type.includes("Basketball") && <SportsBasketballIcon sx={{ fontSize: 100, color:"#7C79FB", backgroundColor: "white"}} />}
                {props.event.type.includes("Volleyball") && <SportsVolleyballIcon sx={{ fontSize: 100, color:"#00CED1", backgroundColor: "white"}} />}
                {props.event.type.includes("Discgolf") && <FiberSmartRecordIcon sx={{ fontSize: 100, color:"#FF4500", backgroundColor: "white"}} />}
                {props.event.type.includes("Workout") && <FitnessCenterIcon sx={{ fontSize: 100, color:"#FEFE33", backgroundColor: "white"}} />}
                {props.event.type.includes("Yoga") && <SelfImprovementIcon sx={{ fontSize: 100, color:"#00bfff", backgroundColor: "white"}} />}
                {props.event.type.includes("Running") && <DirectionsRunIcon sx={{ fontSize: 100, color:"#ff0000", backgroundColor: "white"}} />}
            </Box>
            <Typography variant="h6" sx={{ textTransform: "uppercase", marginTop:"10px" }}>
                {props.event.title}
            </Typography>
            <Typography variant="subtitle1">
                <Box component="span" sx={{ fontWeight: 'bold' }}>Location:</Box> {props.event.venue}
            </Typography>
            <Typography variant="subtitle1">
                <Box component="span" sx={{ fontWeight: 'bold' }}>Date:</Box> {props.event.date1}
            </Typography>
            <Typography variant="subtitle1">
                <Box component="span" sx={{ fontWeight: 'bold' }}>Description:</Box> {props.event.description}
            </Typography>



            <Button variant="contained" size="large">
                SIGN UP TO JOIN!
            </Button>
        </div>

    )
}

export default NonUserEventComponent;