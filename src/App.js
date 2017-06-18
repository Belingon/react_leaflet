/**
 * Created by Courtland.Parker on 6/11/2017.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import ThemeProvider from "./theme_provider/ThemeProvider";

class App extends Component {

    render() {

        return (
            <ThemeProvider>
                <div className="reactLeaflet">
                    Hello, this is my react leaflet project
                    {this.props.children}
                </div>
            </ThemeProvider>
        )
    }
}
export default connect()(App);