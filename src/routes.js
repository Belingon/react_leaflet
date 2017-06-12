/**
 * Created by Courtland.Parker on 6/11/2017.
 */
import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import App from './App';
import PageLeafletMap from './pages/PageLeafletMap';

export default(
    <Route path="/" component={App}>
        <IndexRedirect to="leafletMap"/>
        <Route path="leafletMap" component={PageLeafletMap}/>
    </Route>
)