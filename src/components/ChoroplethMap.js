/**
 * Created by Courtland.Parker on 6/19/2017.
 */
import React, {Component} from "react";
import {Map, TileLayer, GeoJSON} from "react-leaflet";
import {STATE_DATA} from "./usStates";
import "./choroplethMap.scss";


class ChoroplethMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latlng: {
                lat: 39.977,
                lng: -98.876
            },
            zoom: 5
        }
    }

    getFillColor = (density) => {
        return density > 1000 ? '#800026' :
            density > 500 ? '#BD0026' :
                density > 200 ? '#E31A1C' :
                    density > 100 ? '#FC4E2A' :
                        density > 50 ? '#FD8D3C' :
                            density > 20 ? '#FEB24C' :
                                density > 10 ? '#FED976' :
                                    '#FFEDA0';
    };

    getStyle = (feature, layer) => {
        return {
            fillColor: this.getFillColor(feature.properties.density),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.5
        }
    };

    onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight.bind(this)
        });
    };

    render() {
        return (
            <div>
                <div className="titleContainer">
                    <label className="subTitle">Choropleth US States Map</label>
                </div>
                <p>This map uses census data to create a choropleth map based on population density</p>
                <Map id="choroplethMap" className="leaflet-choropleth-container" ref="choroplethMap"
                     center={this.state.latlng} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>
                        contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
                        Imagery © <a href="http://mapbox.com">Mapbox</a>'
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />
                    <GeoJSON ref="geojson" data={STATE_DATA} style={this.getStyle} onEachFeature={this.onEachFeature.bind(this)}/>
                </Map>
            </div>

        )
    }
}
export default ChoroplethMap;

function highlightFeature(e) {
    let layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
}

function resetHighlight(e) {
    this.refs.geojson.leafletElement.resetStyle(e.target);
};