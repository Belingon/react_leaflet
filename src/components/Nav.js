/**
 * Created by Courtland.Parker on 6/16/2017.
 */
import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import RightIcon from 'material-ui/svg-icons/navigation/chevron-right';
import LeftIcon from 'material-ui/svg-icons/navigation/chevron-left';
import IconButton from 'material-ui/IconButton';
import icon from '../../public/logo.ico';
import './nav.scss';

const NAVIGATION_SLIDER_ICON_STYLE = {
    zIndex: 2,
    paddingTop: '15px'
};

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    };

    getContainerWidth(){
        if(this.state.open){
            return 'bigNavBar';
        } else {
            return 'smallNavBar';
        }
    };

    render() {
        return (
            <div>
                <Drawer open={this.state.open} width={250}>
                    <div className="navHeader">
                        <span style={{display: "flex"}}>
                            <img src={icon} height="50px" width="50px"/>
                            <h3> React Project</h3>
                        </span>
                        <IconButton onTouchTap={this.handleToggle} style={NAVIGATION_SLIDER_ICON_STYLE}>
                            <LeftIcon/>
                        </IconButton>
                    </div>
                    <MenuItem>Item 1</MenuItem>
                </Drawer>

                <Drawer open={!this.state.open} width={100}>
                    <div className="navHeader">
                        <span><img src={icon} height="50px" width="50px"/></span>
                        <IconButton onTouchTap={this.handleToggle} style={NAVIGATION_SLIDER_ICON_STYLE}>
                            <RightIcon/>
                        </IconButton>
                    </div>
                    <MenuItem>Item 2</MenuItem>
                </Drawer>
                <div className={this.getContainerWidth()}>
                    {this.props.children}
                </div>
            </div>

        )

    }
}
export default Nav;