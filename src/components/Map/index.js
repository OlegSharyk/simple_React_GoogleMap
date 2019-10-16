import React, { useState} from 'react';
import MapDefault from './MapDefault'

const Map = () => {
    const [isMarkerShown, setMarkerVisibility] = useState(true);
    const [polygon, addPointToPolygon] = useState([]);

    const handleMarkerClick = () => {
        setMarkerVisibility(!isMarkerShown)
        // delayedShowMarker()
    }

    const handleMapClick = (event) => {
        var lat = event.latLng.lat(), lng = event.latLng.lng()
        console.log('click on map');
        console.log('latCoords~~~~', lat);
        console.log('longCoords~~~~',lng);

        addPointToPolygon([...polygon, { lat, lng}]);
    }

    // const delayedShowMarker = () => {
    //     alert(1)
    //     setTimeout(() => {
    //         setMarkerVisibility(!isMarkerShown)
    //     }, 3000)
    // }

    console.log(polygon)
    
    return (
        <MapDefault
            latCoords={32.7839865}
            longCoords={34.9658573}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
            isMarkerShown={isMarkerShown}
            onMarkerClick={handleMarkerClick}
            onMapClick={handleMapClick}
            polygonCoords={polygon}
        />
    )
}

export default Map;