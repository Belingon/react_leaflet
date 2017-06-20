/**
 * Created by Courtland.Parker on 6/11/2017.
 */
import React, {Component}  from 'react'
import ChoroplethMap from '../components/ChoroplethMap';

class PageChoroplethMap extends Component {
    render() {
        return (
            <div className="pageContainer">
                <div className="titleContainer">
                    <label className="title">Choropleth Map</label>
                </div>

                <ChoroplethMap/>
            </div>
        );
    }
}
export default PageChoroplethMap;