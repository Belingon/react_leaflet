/**
 * Created by Courtland.Parker on 6/16/2017.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RightIcon from 'material-ui/svg-icons/navigation/chevron-right';
import LeftIcon from 'material-ui/svg-icons/navigation/chevron-left';
import IconButton from 'material-ui/IconButton';
import icon from '../../public/logo.ico';
import leafletIcon from '../../public/leaflet.ico';
import choroplethIcon from '../../public/choropleth.ico';
import './nav.scss';

const NAVIGATION_SLIDER_ICON_STYLE = {
    zIndex: 2,
    paddingTop: '15px'
};

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    };

    getContainerWidth() {
        if (this.state.open) {
            return 'bigNavBar';
        } else {
            return 'smallNavBar';
        }
    };

    render() {
        return (
            <div>
                <div className="nav">
                    <Drawer open={this.state.open} width={250}>
                        <div className="navHeader">
                        <span className="displayFlex">
                            <img src={icon} height="50px" width="50px"/>
                            <h3>React Project</h3>
                        </span>
                            <IconButton onTouchTap={this.handleToggle} style={NAVIGATION_SLIDER_ICON_STYLE}>
                                <LeftIcon/>
                            </IconButton>
                        </div>
                        <MenuItem>
                            <Link to="/multipleMarkerMap" className="navLink" activeClassName="activeLink">
                                <span className="displayFlex">
                                    <img src={leafletIcon} height="50px" width="50px"/>
                                    <label className="nav_label">Multiple Marker Example</label>
                                </span>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/choroplethMap" className="navLink" activeClassName="activeLink">
                                <span className="displayFlex">
                                    <img src={choroplethIcon} height="50px" width="50px"/>
                                    <label className="nav_label">Choropleth Example</label>
                                </span>
                            </Link>
                        </MenuItem>
                    </Drawer>

                    <Drawer open={!this.state.open} width={100}>
                        <div className="navHeader">
                            <span>
                                <img src={icon} height="50px" width="50px"/>
                            </span>
                            <IconButton onTouchTap={this.handleToggle} style={NAVIGATION_SLIDER_ICON_STYLE}>
                                <RightIcon/>
                            </IconButton>
                        </div>
                        <MenuItem>
                            <Link to="/multipleMarkerMap" className="navLink" activeClassName="activeLink">
                                <img className="paddingTop" src={leafletIcon} height="50px" width="50px"/>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/choroplethMap" className="navLink" activeClassName="activeLink">
                                <img className="paddingTop" src={choroplethIcon} height="50px" width="50px"/>
                            </Link>
                        </MenuItem>
                    </Drawer>
                </div>
                <div className={this.getContainerWidth()}>
                    {this.props.children}
                </div>
            </div>

        )

    }
}
export default Nav;