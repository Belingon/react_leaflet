/**
 * Created by Courtland.Parker on 6/18/2017.
 */
import React, {Component} from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {Table, TableHeader, TableBody, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import Delete from "material-ui/svg-icons/action/delete";
import "./multipleMarkerMap.scss";

const INITIAL_MARKER = {
    lat: 51.505, lng: -0.09, popUpOpen: true
};

class MultipleMarkerMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latlng: {
                lat: 51.505,
                lng: -0.09
            },
            markerToDelete: null,
            markers: [INITIAL_MARKER],
            zoom: 13
        }
    }

    handleMapClick = (e) => {
        let position = {
            lat: e.latlng.lat,
            lng: e.latlng.lng,
            popUpOpen: true
        };
        let newMarkers = Object.assign([], this.state.markers);
        newMarkers.push(position);
        this.setState({markers: newMarkers});
    };

    handleRowSelection = (e) => {
        let reference = "marker" + e[0];
        this.refs[reference].leafletElement.openPopup();
    };

    handleRemoveMarker = () => {
        if (this.state.markerToDelete !== null) {
            if (!isNaN(this.state.markerToDelete) && !(this.state.markerToDelete > this.state.markers.length)) {
                let newMarkers = Object.assign([], this.state.markers);
                newMarkers.splice(this.state.markerToDelete, 1);
                this.setState({markers: newMarkers, markerToDelete: null});
            }
        }
    };

    handleTextFieldChange = (event) => {
        this.setState({markerToDelete: event.target.value});
    };

    getMarkers = () => {
        return this.state.markers.map((marker, index) => {
            let ref = "marker" + index;
            return <Marker position={[marker.lat, marker.lng]} ref={ref}>
                <Popup minWidth={90} autoClose={marker.popUpOpen} closeOnClick={marker.popUpOpen}
                       closeButton={marker.popUpOpen}>
                     <span>
                         You are here <br/>
                         Lat: {marker.lat} <br/>
                         Lng: {marker.lng} <br/>
                     </span>
                </Popup>
            </Marker>
        });
    };

    getRows = () => {
        return this.state.markers.map((marker, index) => {
            return (
                <TableRow>
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{marker.lat}</TableRowColumn>
                    <TableRowColumn>{marker.lng}</TableRowColumn>
                </TableRow>
            )
        });
    };

    render() {
        return (
            <div>
                <div className="titleContainer">
                    <label className="subTitle">Multiple Marker Map</label>
                </div>
                <p>This map uses mouse events to create new markers and output the latitude and longitude values<br/>
                    Click anywhere to add more markers!</p>
                <Map id="multipleMarkerMap" className="leaflet-multiple-container" ref="map" center={this.state.latlng} zoom={this.state.zoom}
                     onClick={this.handleMapClick}>
                    <TileLayer
                        attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> 
                        contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, 
                        Imagery © <a href="http://mapbox.com">Mapbox</a>'
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />
                    {this.getMarkers()}
                </Map>

                <Table style={{width: '50%'}} onRowSelection={this.handleRowSelection}>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Index</TableHeaderColumn>
                            <TableHeaderColumn>Latitude</TableHeaderColumn>
                            <TableHeaderColumn>Longitude</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.getRows()}
                    </TableBody>
                </Table>
                <div>
                    <TextField hintText="Index of Marker to Remove"
                               value={(this.state.markerToDelete ?  this.state.markerToDelete : '')}
                               onChange={this.handleTextFieldChange}/>
                    <RaisedButton icon={<Delete/>} label="Remove Selected Marker" onTouchTap={this.handleRemoveMarker}/>
                </div>
            </div>
        )
    }
}
export default MultipleMarkerMap;