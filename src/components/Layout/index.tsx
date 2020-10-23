import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
    mainLayout: {
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        color: 'white',
    },
    content: {
        margin: 'auto',
        maxWidth: 1000,
        [theme.breakpoints.down('xs')]: {
            maxWidth: '95vw',
        },
    },
}));

const MainLayout: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.mainLayout}>
            <NavBar />
            <div className={classes.content}>{children}</div>
        </div>
    );
};

export default MainLayout;
