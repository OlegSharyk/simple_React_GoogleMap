import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polygon } from "react-google-maps";



const MapDefault = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: props.latCoords, lng: props.longCoords }}
        onClick={props.onMapClick}
        
    >
        <Polygon 
            path={props.polygonCoords} 
            options={{
                strokeColor: '#ff1d63',
                fillColor: '#ff1d63',
                strokeOpacity: 0.9,
                strokeWeight: 3,
                fillOpacity: 0.1
            }}
        />
        {props.isMarkerShown && <Marker position={{ lat: props.latCoords, lng: props.longCoords }} onClick={(e) => props.onMarkerClick(e)} />}
    </GoogleMap>
))

// <MyMapComponent isMarkerShown />// Map with a Marker
// <MyMapComponent isMarkerShown={false} />// Just only Map

export default MapDefault