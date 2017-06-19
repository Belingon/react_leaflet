/**
 * Created by Courtland.Parker on 6/19/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import PageLeafletMap from '../pages/PageLeafletMap';
import {updateMarkers} from '../actions/multipleMarkers';

const mapStateToProps = (state) => {
    return {
        markers: state.multipleMarkers.markers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMarkers:(markers) => {
            dispatch(updateMarkers(markers));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PageLeafletMap)