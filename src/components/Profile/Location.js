import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import _markerIcon from '../../images/marker.png';
// import getCityFromCoordinates from './getCityFromCoordinates';






const Location = ({ userLocation, setUserLocation, geolocationActivated,
setGeolocationActivated, setUserLocationDataError, updateErrorAlert, zoom }) => {


    const markerIcon = new L.Icon({
        iconUrl: _markerIcon,
        iconSize: [30, 30],
        iconAnchor: [17, 46],
    });

    const [map, setMap] = useState(null);

    // _-_-_-_-_-_-_-_-_- GEOLOCATION -_-_-_-_-_-_-_-_-_

    // ON SUCCESS ↓↓↓
    const onSuccess = theResult => {
        setTemporaryCoordinates({ lat: theResult.coords.latitude, lng: theResult.coords.longitude });
        // setUserLocation({ lat: theResult.coords.latitude, lng: theResult.coords.longitude });
        // setGeolocationActivated(false);
        // setUserLocationDataError({ error: false, msg: "" });
        // map && map.flyTo([theResult.coords.latitude, theResult.coords.longitude], 9);
        setGetCity(true);
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



    // _-_-_-_-_-_-_-_-_- GET CITY -_-_-_-_-_-_-_-_-_

    const [items, setItems] = useState(null);
    const [temporaryCoordinates, setTemporaryCoordinates] = useState({ lat: '0', lng: '0' });
    const [getCity, setGetCity] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);


    // AJAX CALL ↓↓↓
    useEffect(() => {

        if (getCity)
        {
            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${temporaryCoordinates.lat}&lon=${temporaryCoordinates.lng}&format=json&accept-language=fr-FR`)
            // fetch(`https://nominatim.openstreetmap.org/reverse?lat=${userLocation.lat}&lon=${userLocation.lng}&format=json&accept-language=fr-FR`)
            .then(res => res.json())
            .then(
            (result) => {
                setItems(result);
                setIsLoaded(true);
            },
            (error) => {
                setError(error);
                setIsLoaded(true);
            })
            setGetCity(false);
        }

    }, [getCity])

    // RESULT AJAX CALL ↓↓↓
    useEffect(() => {

        if (isLoaded)
        {
            if (error)
            {
                console.log(error);
                setError(null);
                setItems(null);
                setIsLoaded(false);
            }
            else if (items)
            {
                // TOTAL SUCCESS ↓↓↓
                setUserLocation({
                    lat: temporaryCoordinates.lat,
                    lng: temporaryCoordinates.lng,
                    city: items.address.city,
                    state: items.address.state,
                    country: items.address.country
                });
                map && map.flyTo([temporaryCoordinates.lat, temporaryCoordinates.lng], 9);

                setGeolocationActivated(false);
                setUserLocationDataError({ error: false, msg: "" });
                setIsLoaded(false);
                setItems(null);
                setError(null);
            }
        }

    }, [isLoaded])

    // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_



    return (
        <MapContainer
            center={[ userLocation.lat, userLocation.lng ]}
            zoom={zoom}
            className='container-map-style'
            whenCreated={setMap}
        >
            <TileLayer
                url='https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=WzbI7kOa26WXiwQXx4jQ'
            />
            <Marker
                position={[ userLocation.lat, userLocation.lng ]}
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