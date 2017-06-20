/**
 * Created by Courtland.Parker on 6/11/2017.
 */
import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import MultipleMarkerMap from '../components/MultipleMarkerMap';
import "./pageMultipleMarkerMap.scss";

class PageMultipleMarkerMap extends Component {
    render() {
        return (
            <div className="pageContainer">
                <div className="titleContainer">
                    <label className="title">Multiple Marker Leaflet Map</label>
                </div>

                <MultipleMarkerMap markers={this.props.markers} updateMarkers={this.props.updateMarkers}/>

            </div>
        );
    }
}

PageMultipleMarkerMap.propTypes = {
    markers: PropTypes.array.isRequired,
    updateMarkers: PropTypes.func.isRequired
};

export default PageMultipleMarkerMap;