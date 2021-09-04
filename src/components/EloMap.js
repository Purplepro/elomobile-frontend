import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { Icon } from 'leaflet';


 const EloMap = () => {         
        return <MapContainer center={[37.431572, -78.656891]} zoom={12} className="leaflet-container">
            <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

    

        </MapContainer>;
}

export default EloMap;