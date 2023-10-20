import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
  } from 'react-leaflet';
import L from 'leaflet';


const Map = () => {

    const icon = new L.Icon({
        iconUrl: './img/iconMark.png',
        iconSize: [25, 25],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    })

    const [offres, setOffres] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3002/data/offres.json")
            .then((response) => response.json())
            .then(data => setOffres(data))
    }, []);

  return (

    <>
    <div className = "mapContainer">
        <div>
            <MapContainer className="mapCont" center={[51.505, -0.09]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                offres.map((offre) => {                             
                    return (
                    <Marker key={offre.id} position={offre.coordinates} icon={icon}>
                        <Popup key={offre.id}>
                        {offre.location}<br />{offre.prix}
                        </Popup>
                    </Marker>);
                })
            }
            </MapContainer>
        </div>
    </div>
  </>
    )
}

export default Map