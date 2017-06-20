/**
 * Created by Courtland.Parker on 6/19/2017.
 */
import {UPDATE_MARKERS} from '../actions/multipleMarkers';

const INITIAL_MARKER = {
    lat: 51.505, lng: -0.09
};

const INITIAL_STATE = {
  markers: [INITIAL_MARKER]
};

export default function (state = INITIAL_STATE, action) {
    let newPayload;

    switch (action.type){
        case UPDATE_MARKERS:
            newPayload = Object.assign({}, state, action.payload);
            return newPayload;
        default:
            return state;
    }
}