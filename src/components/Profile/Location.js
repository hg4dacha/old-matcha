import { React, useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import _markerIcon from '../../images/marker.png';
// import Geolocation from './Geolocation';






const Location = ({ userLocation, setUserLocation, geolocationActivated,
setGeolocationActivated, setUserLocationDataError, updateErrorAlert }) => {


    const markerIcon = new L.Icon({
        iconUrl: _markerIcon,
        iconSize: [30, 30],
        iconAnchor: [17, 46],
    });

    const mapRef = useRef();

// _-_-_-_-_-_-_-_-_- GEOLOCATION -_-_-_-_-_-_-_-_-_

    // ON SUCCESS ↓↓↓
    const onSuccess = theResult => {
        setUserLocation({ lat: theResult.coords.latitude, lng: theResult.coords.longitude });
        setGeolocationActivated(false);
        setUserLocationDataError({ error: false, msg: "" });
        mapRef.current.flyTo(
            [theResult.coords.latitude, theResult.coords.longitude],
            9,
            {animate: true}
        )
    }
    // ON ERROR ↓↓↓
    const onError = theError => {
        theError.message === 'User denied Geolocation' ?
        setUserLocationDataError({ error: true, msg: "Vous devez autoriser l'accès à votre position" }) :
        setUserLocationDataError({ error: true, msg: "Une erreur est survenue" }) ;
        setGeolocationActivated(false);
        updateErrorAlert();
    }
    // ENABLE GEOLOCATION ↓↓↓
    useEffect( () => {

        if (geolocationActivated)
        {
            if ( !("geolocation" in navigator) )
            {
                setUserLocationDataError({ error: true, msg: "Votre navigateur ne prend pas en charge la géolocalisation." });
                setGeolocationActivated(false);
                updateErrorAlert();
            }
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }

    }, [geolocationActivated])

// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);


    // useEffect(() => {

    //     fetch("https://nominatim.openstreetmap.org/reverse?lat=48.862725&lon=2.287592&format=json&accept-language=fr-FR")
    //     .then(res => res.json())
    //     .then(
    //     (result) => {
    //         setIsLoaded(true);
    //         setItems(result);
    //     },
    //     (error) => {
    //         setIsLoaded(true);
    //         setError(error);
    //     })
    //     getCity();

    // }, [])

    // const getCity = () => {
    //     if (error) {
    //         console.log(error.message);
    //     }
    //     else if (!isLoaded) {
    //         console.log('Chargement...');
    //     }
    //     else {
    //         console.log(items);
    //     }
    // }




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
                position={userLocation}
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