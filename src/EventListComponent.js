import React from "react";
import StyledCard from "./card";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";



function EventListComponent(props){
    const eventsList =props.events



    console.log(eventsList)

    return (
        <Box>

            <Typography variant="h4">
                <strong>EVENTS LIST</strong>
            </Typography>

            <Grid container spacing={3}>

                { eventsList.map((event, index) => (
                    <Grid item sm={12} md={6} key={index}>
                        {/*<StyledCard*/}

                        {/*    type={}*/}
                        {/*    venue= {}*/}
                        {/*    address={}*/}
                        {/*    date={}*/}
                        {/*    description={}*/}
                        {/*    iconPerformance={icon1}*/}
                        {/*/>*/}
                        <Paper elevation={5}>
                            <Typography variant="h2">{event.venue} </Typography>
                            <Typography variant="body">{event.description} </Typography>
                        </Paper>

                    </Grid>
                ))}

            </Grid>
        </Box>
    );
}

export default EventListComponent;
