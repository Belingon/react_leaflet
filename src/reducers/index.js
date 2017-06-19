/**
 * Created by Courtland.Parker on 6/11/2017.
 */
import {combineReducers} from 'redux';
import MultipleMarkersReducer from './multipleMarkers_reducer';

const rootReducer = combineReducers({
    multipleMarkers: MultipleMarkersReducer
});

export default rootReducer;