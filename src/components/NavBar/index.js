import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    layout: {
        backgroundColor: '#007cba',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },
    logoContainer: {
        flexGrow: 1,
    },
    logo: {
        width: '30vmin',
        minWidth: 100,
    },
    contentContainer: {
        margin: 'auto',
        maxWidth: 1000,
        width: '90vw',
    },
}));

const NavBar = ({ children }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.logoContainer}>
                        <img
                            src="https://cdn.streamshark.io/wp-content/uploads/2019/03/streamshark-light-horizontal.svg"
                            alt="StreamShark Logo"
                            className={classes.logo}
                        />
                    </div>
                    <Button component={RouterLink} to="/" color="inherit">
                        Back
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.contentContainer}>{children}</div>
        </>
    );
};

export default NavBar;
