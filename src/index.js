/**
 * Created by Courtland.Parker on 6/10/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore.js';
import routes from './routes';
import 'babel-polyfill';

injectTapEventPlugin();

const store = configureStore();
console.log("IM HERE");
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);