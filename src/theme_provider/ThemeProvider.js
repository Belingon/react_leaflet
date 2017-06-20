/**
 * Created by Courtland.Parker on 6/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './theme';

class ThemeProvider extends Component {

    componentDidMount() {
        const typographyCss = document.createElement('link');

        typographyCss.rel = 'stylesheet';
        typographyCss.type = 'text/css';
        typographyCss.href = '//fonts.googleapis.com/css?family=Roboto';
        document.head.appendChild(typographyCss);

        // Set defaults
        document.body.style.fontFamily = theme.fontFamily;
        document.body.style.color = theme.palette.textColor;
        document.body.style.margin = 0;
        document.body.style.padding = 0;
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={ getMuiTheme(theme) }>
                { this.props.children }
            </MuiThemeProvider>
        );
    }
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default ThemeProvider;