import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";


import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import Button from "@mui/material/Button";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

function EventListComponent(props){
    const eventsList =props.events

    console.log(eventsList)

    return (
        <Box >

            <Typography variant="h4" sx={{marginBottom:"20px", margin:"30px", fontSize: '30px' }}>
                <strong>EVENTS LIST</strong>
            </Typography>

            <Grid container spacing={3}>
                { eventsList.map((event, index) => (
                    <Grid item sm={12} md={12} key={index} sx={{margin:"30px"}}>
                        <Paper elevation={4} sx={{mt:"30px", pl: "50px",  pr: "50px",  pb: "50px" }}>
                            <Box sx={{ position: "relative", top: 0, right: 0 }}>
                                {event.type.includes("Basketball") && <SportsBasketballIcon sx={{ fontSize: 300, color:"#7c79fb",marginLeft:"80%", marginTop:"-70px", backgroundColor: "white"}}  />}
                                {event.type.includes("Volleyball") && <SportsVolleyballIcon sx={{ fontSize: 300, color:"#00ced1",marginLeft:"80%", marginTop:"-70px", backgroundColor: "white"}} />}
                                {event.type.includes("Discgolf") && <FiberSmartRecordIcon sx={{ fontSize: 300, color:"#ff4500",marginLeft:"80%", marginTop:"-70px", backgroundColor: "white"}} />}
                                {event.type.includes("Workout") && <FitnessCenterIcon sx={{ fontSize: 300, color:"#fefe33",marginLeft:"80%", marginTop:"-70px", backgroundColor: "white"}} />}
                                {event.type.includes("Yoga") && <SelfImprovementIcon sx={{ fontSize: 300, color:"#00bfff",marginLeft:"80%", marginTop:"-70px", backgroundColor: "white"}} />}
                                {event.type.includes("Running") && <DirectionsRunIcon sx={{ fontSize: 300, color:"#ff0000", marginLeft:"80%", marginTop:"-70px", backgroundColor: "white"}} />}

                            </Box>
                            <Typography variant="h2" sx={{ textTransform: "uppercase", marginTop:"-110px" }}>{event.title} </Typography>
                            <br />
                            <Typography variant="h4">Location: {event.venue} </Typography>
                            <br />
                            <Typography variant="h4">Date: {event.date1} </Typography>
                            <br />
                            <Typography variant="h5" sx={{ fontStyle: "italic", m: 1 }}>Description: {event.description} </Typography>
                            <br />
                            <Button variant="contained" id="dialogButton" size="large">SIGN UP TO JOIN!</Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default EventListComponent;
