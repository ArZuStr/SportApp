import React, { useState, useEffect } from "react";
import './App.css';
import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

import {db} from './config/firebase';
import {collection, getDocs, addDoc} from "firebase/firestore";

// import NonUserEventComponent from "./Components/NonUserEventComponent.js"

// export default function FormDialog() {
//     const [open, setOpen] = React.useState(false);
//     const [open1, setOpen1] = React.useState(false);
//     const [users, setUsers] = useState([])
//     const handleClickOpen = () => {
//         fetchUsers();
//         setOpen(true);
//     };
// }

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

//kaisa comment
function Home(props) {

    // const [open, setOpen] = useState(false);
    // const [open1, setOpen1] = useState(false);
    // const [users, setUsers] = useState([]);
    // const [events, setEvents] = useState([]);




    // async function fetchUsers() {
    //     await getDocs(collection(db, 'User'))
    //         .then((querySnapshot) => {
    //             const newData = querySnapshot.docs
    //                 .map((doc) => ({...doc.data(), id: doc.id}));
    //             setUsers(newData);
    //             //console.log(newData);
    //         })
    // }

    // async function fetchEvents() {
    //     await getDocs(collection(db, 'Events'))
    //         .then((querySnapshot) => {
    //             const newData = querySnapshot.docs
    //                 .map((doc) => ({...doc.data(), id: doc.id}));
    //             setEvents(newData);
    //             //console.log(newData);
    //         })
    // }


    // useEffect(() => {
    //     // Update the data (users. events) from Firestore
    //     fetchUsers();
    //     fetchEvents();
    // }, []); //empty deps makes it run only once

    // console.log(users)
    // console.log(events)


    return (

        <div style={{ position: "relative", height: "100vh" }}>
        <MapContainer
            className="full-screen-map"
            center={[59.436962, 24.753574]}
            zoom={12}
            minZoom={3}
            maxZoom={19}
            maxBounds={[[-85.06, -180], [85.06, 180]]}
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />

            {props.events.length > 0 && props.events.map((event, index) => (
                <Marker
                    key={index}
                    position={[event.lat, event.long]}>
                    <Popup>
                        {event.venue}<br />
                    </Popup>
                </Marker>
            ))}
        </MapContainer>

        </div>
    );
}


export default Home;
