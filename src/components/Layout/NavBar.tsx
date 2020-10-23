import React from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    navBar: {
        backgroundColor: theme.palette.primary.main,
        marginBottom: theme.spacing(2),
    },
    layout: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    logoContainer: {
        flexGrow: 1,
    },
    logo: {
        color: theme.palette.secondary.main,
        fontSize: 'calc(10px + 2.5vmin)',
        textTransform: 'uppercase',
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
        },
    },
    buttons: {
        backgroundColor: 'white',
        [theme.breakpoints.down('xs')]: {
            marginBottom: theme.spacing(2),
        },
    },
}));

const NavBar: React.FC = ({ children }) => {
    const classes = useStyles();
    const { pathname } = useLocation();

    const links = [
        {
            id: 'create',
            link: '/',
            title: 'Create Order',
        },
        {
            id: 'history',
            link: '/order-history',
            title: 'Order History',
        },
    ];

    return (
        <AppBar position="static" className={classes.navBar}>
            <Toolbar className={classes.layout}>
                <div className={classes.logoContainer}>
                    <Typography variant="h3" component="h1" className={classes.logo}>
                        Joey's Hamburger Barn
                    </Typography>
                </div>
                <ToggleButtonGroup
                    aria-label="outlined primary button group"
                    value={pathname}
                    size="small"
                    exclusive
                    className={classes.buttons}
                >
                    {links.map(({ id, link, title }) => (
                        <ToggleButton component={RouterLink} to={link} value={link} key={id}>
                            {title}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
