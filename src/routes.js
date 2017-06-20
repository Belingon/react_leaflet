/**
 * Created by Courtland.Parker on 6/11/2017.
 */
import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import App from './App';
import Nav from '../src/components/Nav';
import MultipleMarker from './containers/MultipleMarker';
import PageChoropleth from './pages/PageChoroplethMap';

export default(
    <Route path="/" component={App}>
        <IndexRedirect to="multipleMarkerMap"/>
        <Route component={Nav}>
            <Route path="/multipleMarkerMap" component={MultipleMarker}/>
            <Route path="/choroplethMap" component={PageChoropleth}/>
        </Route>
    </Route>
);