import React from "react";
import { MapContainer,TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"
export const MapView = () =>{
    //latitud y lonitud
    // aloritmo del mapa
    return<MapContainer center={[-34.5475159,-58.446622]} zoom={17}  scrollWheelZoom={false}> 
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

    </MapContainer>
        
    
}