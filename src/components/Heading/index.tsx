import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heading: {
        color: theme.palette.primary.dark,
    },
}));

const Heading: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <Typography variant="h5" component="h1" gutterBottom className={classes.heading}>
            {children}
        </Typography>
    );
};

export default Heading;
