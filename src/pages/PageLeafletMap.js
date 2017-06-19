/**
 * Created by Courtland.Parker on 6/11/2017.
 */
import React, {Component}  from 'react'
import {render} from 'react-dom'
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
import "./pageLeafletMap.scss";

class PageLeafletMap extends Component {
    constructor() {
        super();
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13
        }
    }

    handleClick = () => {
        this.refs.map.leafletElement.locate()
    };

    render() {
        const position = [this.state.lat, this.state.lng];

        const polyline = [[51.505, -0.09], [51.51, -0.1], [51.51, -0.12]]
        const multiPolyline = [
            [[51.5, -0.1], [51.5, -0.12], [51.52, -0.12]],
            [[51.5, -0.05], [51.5, -0.06], [51.52, -0.06]],
        ]
        const polygon = [[51.515, -0.09], [51.52, -0.1], [51.52, -0.12]]
        const multiPolygon = [
            [[51.51, -0.12], [51.51, -0.13], [51.53, -0.13]],
            [[51.51, -0.05], [51.51, -0.07], [51.53, -0.07]],
        ]
        const rectangle = [[51.49, -0.08], [51.5, -0.06]]

        return (
            <div>
                <Map center={position} zoom={this.state.zoom} length={4} onClick={this.handleClick}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Circle center={position} fillColor="blue" radius={200}/>
                    <CircleMarker center={[51.51,-0.12]} color="red" radius={20}>
                        <Popup>
                            <span>Another PopUp</span>
                        </Popup>
                    </CircleMarker>
                    <Marker position={position}>
                        <Popup>
                            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                        </Popup>
                    </Marker>
                    <Polyline color="lime" positions={polyline}/>
                    <Polyline color="blue" positions={multiPolyline}/>
                    <Polygon color="purple" positions={polygon}/>
                    <Polygon color="red" positions={multiPolygon}/>
                    <Rectangle bounds={rectangle} color="black"/>
                </Map>
            </div>
        );
    }
}

export default PageLeafletMap;