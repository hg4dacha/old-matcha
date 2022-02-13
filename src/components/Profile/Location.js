import { React, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import _markerIcon from '../../images/marker.png';
import Geolocation from './Geolocation';






const Location = ({ userLocation, setUserLocation, geolocationActivated,
                    setGeolocationActivated, setUserLocationDataError }) => {



    // const [center, setCenter] = useState({ lat: 48.862725, lng: 2.287592 })

    const markerIcon = new L.Icon({
        iconUrl: _markerIcon,
        iconSize: [30, 30],
        iconAnchor: [17, 46],
    });


    useEffect( () => {

        if (geolocationActivated)
        {
            const userLocationData = Geolocation();
            console.log(userLocationData)
        }

    }, [geolocationActivated])



    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {

        fetch("https://nominatim.openstreetmap.org/reverse?lat=48.862725&lon=2.287592&format=json&accept-language=fr-FR")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setItems(result);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
        getCity();

    }, [])

    const getCity = () => {
        if (error) {
            console.log(error.message);
        }
        else if (!isLoaded) {
            console.log('Chargement...');
        }
        else {
            console.log(items);
        }
    }




    return (
        <MapContainer
            center={userLocation}
            zoom={9}
            className='container-map-style'
        >
            <TileLayer
                url='https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=WzbI7kOa26WXiwQXx4jQ'
            />
            <Marker
                position={[ 48.862725, 2.287592]}
                icon={markerIcon}
            >
                <Popup>Votre position</Popup>
            </Marker>
        </MapContainer>
    )

}

export default Location


// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


// attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'

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


// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_