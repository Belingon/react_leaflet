/**
 * Created by Courtland.Parker on 6/18/2017.
 */
import spacing from 'material-ui/styles/spacing';
import {white} from 'material-ui/styles/colors';

const primaryColor = '#333E48';
const primaryColorLight = '#189ED8';
const primaryColorDark = '#1A1F24';


const accentColor = '#03A9F4';
const primaryTextColorLight = '#eeeeee';
const textColor = '#000000';

export default {
    spacing,
    fontFamily: 'Roboto',
    grayThemeColor: primaryColor,
    palette: {
        primary1Color: primaryColor,
        primary2Color: primaryColorLight,
        primary3Color: primaryColorDark,
        accent1Color: accentColor,
        textColor,
        textColorLight: primaryTextColorLight,
        alternateTextColor: white
    }
};
