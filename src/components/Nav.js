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
import {connect} from "react-redux";

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div >
                <RaisedButton label="Toggle" onTouchTap={this.handleToggle}/>

                <Drawer open={!this.state.open}>
                    <h3> React Project</h3>
                    <IconButton onTouchTap={this.handleToggle} style={{float: 'right', zIndex: 2}}>
                        <LeftIcon/>
                    </IconButton>
                    <MenuItem>Item 1</MenuItem>

                </Drawer>

                <Drawer open={this.state.open}
                        width = {200}>
                    <IconButton onTouchTap={this.handleToggle}>
                        <RightIcon/>
                    </IconButton>
                    <MenuItem>Item 2</MenuItem>
                </Drawer>
                {this.props.children}
            </div>

        )

    }
}
export default Nav;