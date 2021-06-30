// import React, {Component} from 'react';
// import L from 'leaflet'; 
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import markGreen from './Assets/mark-green.png';
// import markRed from './Assets/mark-red.png';
// import vanOrange from './Assets/van-orange2.png';





// class EloMap extends Component() {


//     state = {
//         greenIcon: {
//             lat: 35.787449,
//             lng: -78.6438197,
//           },
//           redIcon: {
//             lat: 35.774416,
//             lng: -78.633271,
//           },
//           orangeIcon: {
//             lat: 35.772790,
//             lng: -78.652305,
//           },
//           zoom: 13
//     }
        
    
//       greenIcon = L.icon({
//         iconUrl: markGreen,
//         // shadowUrl: leafShadow,
//         iconSize:     [38, 95], // size of the icon
//         // shadowSize:   [50, 64], // size of the shadow
//         iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//         // shadowAnchor: [4, 62],  // the same for the shadow
//         popupAnchor:  [-3, -76]
//       });
    
//       redIcon = L.icon({
//         iconUrl: markRed,
//         // shadowUrl: leafShadow,
//         iconSize:     [38, 95], // size of the icon
//         // shadowSize:   [50, 64], // size of the shadow
//         iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//         // shadowAnchor: [4, 62],  // the same for the shadow
//         popupAnchor:  [-3, -86]
//       });
    
//       orangeIcon = L.icon({
//         iconUrl: vanOrange,
//         // shadowUrl: leafShadow,
//         iconSize:     [38, 95], // size of the icon
//         // shadowSize:   [50, 64], // size of the shadow
//         iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//         // shadowAnchor: [4, 62],  // the same for the shadow
//         popupAnchor:  [-3, -86]
//       });

    
    


//         render() {
//             const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
//             const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
//             const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];

//                 return (
                        
//                             <MapContainer className="map" center={positionGreenIcon} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={positionGreenIcon} icon={this.grenIcon}>
//           <Popup>
//           I am a green leaf
//           </Popup>
//         </Marker>
//         <Marker position={positionRedIcon} icon={this.redIcon}>
//           <Popup>
//           I am a red leaf
//           </Popup>
//         </Marker>
//         <Marker position={positionOrangeIcon} icon={this.orangeIcon}>
//           <Popup>
//           I am an orange leaf
//           </Popup>
//         </Marker>
//       </MapContainer>
                        
//                         )
//                 }

// }




// export default EloMap; 