/**
 * Created by Courtland.Parker on 6/11/2017.
 */
import React, {Component}  from 'react'
import {render} from 'react-dom'
import LondonMap from '../components/LondonMap';
import "./pageLeafletMap.scss";

class PageLeafletMap extends Component {
    render() {
        return (
            <div className="pageContainer">
                <div className="titleContainer">
                    <label className="title">Leaflet Maps</label>
                </div>

                <LondonMap/>

            </div>
        );
    }
}

export default PageLeafletMap;