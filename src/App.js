/**
 * Created by Courtland.Parker on 6/11/2017.
 */
import React, {Component} from "react";
import {connect} from "react-redux";

class App extends Component {

    render() {
        return (
            <div className="reactLeaflet">
                Hello, this is my react leaflet project
                {this.props.children}
            </div>
        )
    }
}
export default connect()(App);