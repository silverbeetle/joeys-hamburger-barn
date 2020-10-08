import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    home: {
        backgroundColor: '#007cba',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },
    logo: {
        width: '50vmin',
        margin: 'auto',
        display: 'block',
        marginBottom: theme.spacing(2),
    },
    buttons: {
        justifyContent: 'center',
        '& a': {
            margin: theme.spacing(1),
        },
    },
    error: {
        maxWidth: '70vw',
        margin: 'auto',
        textAlign: 'center',
    },
}));

const Home = () => {
    const classes = useStyles();
    const hasAccessToken = Boolean(process.env.REACT_APP_ACCESS_TOKEN);

    return (
        <div className={classes.home}>
            <div>
                <img
                    src="https://cdn.streamshark.io/wp-content/uploads/2019/03/streamshark-light-horizontal.svg"
                    alt="StreamShark Logo"
                    className={classes.logo}
                />
                {!hasAccessToken && (
                    <div className={classes.error}>Access token is missing, please refer to the read me for setup instructions.</div>
                )}
                {hasAccessToken && (
                    <Box display="flex" className={classes.buttons}>
                        <Button component={RouterLink} to="/stream" variant="contained">
                            Create a stream
                        </Button>
                        <Button component={RouterLink} to="/feed" variant="contained">
                            View feed
                        </Button>
                    </Box>
                )}
            </div>
        </div>
    );
};

export default Home;
