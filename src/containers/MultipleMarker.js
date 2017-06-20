/**
 * Created by Courtland.Parker on 6/19/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import PageMultipleMarkerMap from '../pages/PageMultipleMarkerMap';
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
export default connect(mapStateToProps, mapDispatchToProps)(PageMultipleMarkerMap)