import { createTheme} from '@mui/material';
import { LinkBehavior } from './override/LinkBehavior';

export default createTheme({
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            },
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
    },
    palette: {
        type: 'dark',
        primary: {
            main: 'rgba(15, 164, 127, 1)',
            dark: 'rgba(0, 137, 123, 1)',
            light: 'rgba(141, 205, 184, 1)',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: 'rgba(52, 53, 65, 1)',
            paper: 'rgba(32, 33, 35, 1)',
            window: 'rgba(68, 70, 84, 1)'
        },
        text: {
            primary: 'rgba(255, 255, 255, 1)',
            secondary: 'rgba(236, 236, 241, 1)',
        },
    },
    typography: {
        fontFamily: 'Inter',
        h1: {
            fontWeight: 700,
            fontSize: '1.9rem',
            lineHeight: 1.7,
        },
        subtitle1: {
            fontSize: '0.9rem',
            fontWeight: 500,
            lineHeight: 1.68,
        },
        subtitle2: {
            fontSize: '0.8rem',
            lineHeight: 1.68,
            fontWeight: 500,
        },
    },
});