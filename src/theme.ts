import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#608280',
            main: '#555555',
            dark: '#333333',
        },
        secondary: {
            main: '#ffd867',
        },
        background: {
            default: '#eee',
        },
    },
    typography: {
        h1: {
            fontSize: '2.6em',
            fontWeight: 'bold',
        },
        h2: {
            fontSize: '2em',
            fontWeight: 'bold',
        },
        h3: {
            fontSize: '1.8em',
            fontWeight: 'bold',
        },
        h4: {
            fontSize: '1.6em',
            fontWeight: 'bold',
        },
        h5: {
            fontSize: '1.2em',
            fontWeight: 'bold',
        },
    },
});

export default theme;
