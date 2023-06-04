import React from 'react'
import Title from './Title'
import Map from './FleetMap'
import FleetRight from './FleetRight'

const FleetView= ()=> {
    const key='your key';
    return (
        <>
            <Title/>
            <div className="map" style={{display:'flex', flexDirection: 'column'}}>
              
                <Map 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <FleetRight/>
            </div>
        </>
    )
}
export default FleetView
