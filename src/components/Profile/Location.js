import { React, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";




const Location = (props) => {

    const [center, setCenter] = useState({ lat: 48.862725, lng: 2.287592 })

    const containerMapStyle = {
        height: '500px',
        width: '64%',
        zIndex: '50'
    }


    return (
        <MapContainer
            center={center}
            zoom={9}
            style={containerMapStyle}
        >
            <TileLayer
                url='https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=WzbI7kOa26WXiwQXx4jQ'
                // attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
        </MapContainer>
    )

}

export default Location


// "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   }