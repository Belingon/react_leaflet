/**
 * Created by Courtland.Parker on 6/18/2017.
 */
import React, {Component} from 'react';
import {
    Map,
    Circle,
    CircleMarker,
    TileLayer,
    Marker,
    Popup,
    Polygon,
    Polyline,
    Rectangle
} from 'react-leaflet'
import './londonMap.scss';

class LondonMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLocation: false,
            latlng: {
                lat: 51.505,
                lng: -0.09
            },
            markerLatLng: {
                lat: 51.505,
                lng: -0.09
            },
            zoom: 13
        }
    }

    handleClick = (e) => {
        let {lat, lng} = e.latlng;
        this.setState({markerLatLng: {lat, lng}});
    };


    render() {
        return (


            <div>
                <div className="titleContainer">
                    <label className="subTitle">London Map</label>
                </div>
                <Map center={this.state.latlng} zoom={this.state.zoom} length={4} onClick={this.handleClick} ref="map">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker
                        position={this.state.markerLatLng}
                        ref="marker">
                        <Popup minWidth={90}>
                             <span>
                                 You are here <br/>
                                 {this.state.markerLatLng.lat} <br/>
                                 {this.state.markerLatLng.lng} <br/>
                             </span>
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}
export default LondonMap;