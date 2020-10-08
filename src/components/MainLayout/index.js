import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainLayout: {
        backgroundColor: '#007cba',
        minHeight: '100vh',
        color: 'white',
    },
}));

const MainLayout = ({ children }) => {
    const classes = useStyles();

    return <div className={classes.mainLayout}>{children}</div>;
};

export default MainLayout;
