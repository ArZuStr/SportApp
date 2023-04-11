import React, {useState} from "react";
import './App.css';
import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet'
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import NonUserEventComponent from "./Components/NonUserEventComponent";
import UserEventComponent from "./Components/UserEventComponent";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

//kaisa comment
function Map(props) {

    const [userIsLogged, setUserIsLogged] = useState(true);

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
                    <Popup className="kaisa-popup">

                        {props.userStatus === false &&
                            <NonUserEventComponent event={event} />
                        }
                        {props.userStatus === true &&
                            <UserEventComponent event={event} />
                        }


                    </Popup>
                </Marker>
            ))}
        </MapContainer>
        </div>
    );
}


export default Map;
