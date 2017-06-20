/**
 * Created by Courtland.Parker on 6/19/2017.
 */
import React, {Component} from "react";
import {Map, TileLayer} from "react-leaflet";
import './choroplethMap.scss';

class ChoroplethMap extends Component {

    constructor(props){
        super(props);
        this.state = {
            latlng: {
                lat: 42.386,
                lng: -71.119
            },
            zoom: 13
        }
    }

    render(){
        return(
            <div>
                <Map id="choroplethMap" className="leaflet-choropleth-container" ref="choroplethMap" center={this.state.latlng} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>
                        contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
                        Imagery © <a href="http://mapbox.com">Mapbox</a>'
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />
                </Map>
            </div>

        )
    }
}
export default ChoroplethMap;